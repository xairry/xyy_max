# xyy_max

一组针对国内"看广告赚金币"类 App 的自动化脚本（AutoJS / Hamibot 语法），用于学习移动端 UI 自动化、OCR 找字点击、广告页识别与任务流程编排。

> 本仓库仅用于技术学习与交流。原作者脚本依赖远端下发与卡密登录，本仓库已移除该链路，只保留本地执行逻辑。

## 快速开始

1. 安装 [AutoJS Pro](https://github.com/SuperMonster003/AutoJs6) 或 Hamibot，并开启无障碍、悬浮窗、截图权限。
2. 把 `xyy_max.js` 放进手机脚本目录，在 AutoJS 中打开并运行。
3. 界面里填写要跑的系列 key（逗号分隔），或留空按默认顺序跑全部已安装 App。
4. 点「开始运行」，脚本会依次启动各 App 并执行对应任务。

`xyy_max.js` 是由 `build.py` 从 `infra/`、`series/`、`babel/` 下的模块拼出来的单文件产物。改完模块后重新执行：

```bash
python3 build.py
```

## 目录结构

```
xyy_max/
├── xyy_max.js          # 构建产物，可直接运行
├── build.py            # 模块打包脚本
├── build/runtime.js    # webpack 运行时头
├── index.json          # 模块元数据（行数/导出/依赖）
├── 系列清单.md          # 系列 → 模块 → 包名对照表
├── series/             # 19 个 App 系列模块（业务代码）
├── infra/              # 14 个公共基础设施模块
└── babel/              # 15 个 Babel 编译期辅助模块
```

## 系列模块

| 文件 | 系列 key | 目标 App |
|---|---|---|
| `31_douyin.beauty.js` | dy, dyjs | 抖音、抖音极速版 |
| `20_dyhs.beauty.js` | dyhs | 抖音火山版 |
| `41_dysc.beauty.js` | dysc | 抖音火山极速 |
| `34_kuaishou.beauty.js` | ksjs, kspt | 快手极速版、快手 |
| `39_xfmfdj.beauty.js` | xfmfdj | 喜番免费短剧 |
| `33_jinritoutiao.beauty.js` | ttjs, jrtt | 今日头条、今日头条极速版 |
| `37_xgsp.beauty.js` | xgsp | 西瓜视频 |
| `36_wkllq.beauty.js` | wkllq | 悟空浏览器 |
| `32_tomato_fanqie.beauty.js` | fqxs, fqct, fqctyyb, hgdj, mymfdj, xnmfdj, dhmfxs | 番茄系、红果、木叶、常读、蛋花 |
| `38_qimao_zhangyue.beauty.js` | qmxs, qzxs, xkxs, xmxs | 七猫、茄子、星空、熊猫脑洞 |
| `35_sqxs.beauty.js` | sqxs | 书旗小说 |
| `45_djxs.beauty.js` | djxs | 得间免费小说 |
| `19_novel_group_b.beauty.js` | sd, sdmfxs, hkmfxs, hymfxs, dsdddsp | 盛读、速读、浩看、浩阅、袋鼠点点 |
| `42_hmjc.beauty.js` | hmjc | 河马剧场 |
| `43_ucjs.beauty.js` | ucjs | UC 浏览器极速版 |
| `44_wifi.beauty.js` | wifi | WIFI 万能钥匙 |
| `46_huawei_himovie_music_read.beauty.js` | himovie, hwmusic, hwread | 华为视频、音乐、阅读 |
| `47_xiaomi_browser_content_video.beauty.js` | mimovie, mibrowser, micontent | 小米视频、浏览器、内容中心 |
| `40_qsyy.beauty.js` | qsyy | 汽水音乐 |

## 基础设施模块

| 文件 | 作用 |
|---|---|
| `00_utils_ui_helpers.beauty.js` | 工具/UI 操作封装（点击、滑动、返回、清理） |
| `01_config_global.beauty.js` | 全局配置：运行时长、阅读/听书分钟数 |
| `02_app_registry.beauty.js` | App 注册表：包名、启动配置、任务函数表 |
| `03_ocr_engine.beauty.js` | OCR 引擎封装（找字、找图、相似图匹配） |
| `04_push_report.beauty.js` | 微信推送 / 本地收益统计 |
| `05_hid_control.beauty.js` | HID 硬件点击封装 |
| `06_storage_card.beauty.js` | 本地存储与运行状态 |
| `07_ad_close.beauty.js` | 广告关闭规则与多 SDK 适配 |
| `08_check_task.beauty.js` | 任务检查 / 金币比较 |
| `09_video_book_common.beauty.js` | 看视频 / 看书 / 听书通用流程 |
| `10_activity_consts.beauty.js` | Activity 常量表 |
| `12_date_utils.beauty.js` | 日期工具 |
| `15_hid_ble.beauty.js` | HID BLE 蓝牙通信 |
| `48_main_ui.beauty.js` | 主界面与运行入口 |

## 代码说明

- 所有字符串字面量已还原，变量名仍是构建工具生成的短名。
- 模块间依赖已标注为 `M02_app_registry` 这样的可读名字，`build.py` 打包时会转回数字索引。
- 每个系列模块的 `funcs` 表里是具体任务函数，例如快手极速版签到：

```js
function _0x2ee964(_0x40bb86) {
  if (!_0x40bb86) {
    hlog("任务开始：签到领金币");
    if (_0x53ed13['hidMode']) {
      var r = OCRResult(/去签到|连续签到|立即签到|14天签到得.*元/, ![], null, 0xb);
      if (OCRMatch(r, /明天签到.*|明日签到.*|已签到.*天/)) return true;
      else OCRMatchClick(r, /看广告领取今天|^去签到/) && _0x2ee230();
    } else textClick(/去签到/), textClick(/看广告领取今天奖励/) && _0x2ee230();
  }
  ...
}
```

## 已移除的部分

- 卡密登录、设备绑定、心跳保活
- 远端脚本下发与远程配置拉取
- 设备统计数据上传
