function(_0x53f3a1, _0x543bf1, _0x18422f) {
  var _0x4d9b44 = a1_0x4b7c;
  Object["defineProperty"](_0x543bf1, "__esModule", {
    'value': !![]
  }), _0x543bf1["sqxs"] = _0x2a96d7;
  var _0x33504e = _0x18422f(M02_app_registry),
    _0x147ea6 = _0x18422f(M00_utils_ui_helpers),
    _0x28e191 = _0x18422f(M04_push_report),
    _0x24be47 = _0x18422f(M09_video_book_common),
    _0xc71398 = _0x18422f(M01_config_global),
    _0x422a77 = _0x18422f(M07_ad_close),
    _0x22c33f = _0x18422f(M08_check_task),
    _0x5a91a3 = _0x18422f(M03_ocr_engine),
    _0x1b65c0 = _0x18422f(M05_hid_control),
    _0x4afe73 = {
      'sqxs_qiandao': _0x36a660,
      'sqxs_kaibaoxiang': _0x5b8564,
      'sqxs_choujiang': _0x2bedd4,
      'sqxs_kanguanggao': _0x2af72c,
      'sqxs_guangshangcheng': _0x41d381,
      'sqxs_lingfanbu': _0x7d52da,
      'sqxs_yuyue': _0x1817e9,
      'sqxs_xiaoshuo': _0x498a8a
    },
    _0x3f2121 = {
      'sqxs_kanguanggao': _0x2af72c,
      'sqxs_choujiang': _0x2bedd4,
      'sqxs_guangshangcheng': _0x41d381
    },
    _0x50e409, _0x24fe51;

  function _0x2a96d7() {
    var _0x1e6c35 = _0x4d9b44;
    try {
      _0x24fe51 = _0x33504e["sqxsapp"], _0xc71398["sqxs_rw_list"] && (_0xc71398["sqxs_rw_list"]['push']("sqxs_kaibaoxiang"), _0xc71398["sqxs_rw_list"]['push']('sqxs_lingfanbu'), _0xc71398["sqxs_rw_list"]['push']('sqxs_yuyue')), _0x5429f4(), (0x0, _0x147ea6["execFuncs"])(_0x4afe73, _0xc71398["sqxs_rw_list"]), (0x0, _0x147ea6["execFuncs"])(_0x3f2121, _0xc71398["sqxs_rw_list"]), _0x4a1108(), _0x20aa44();
    } catch (_0x2d0e79) {
      (0x0, _0x147ea6["handleAppError"])(_0x2d0e79);
    }
  }

  function _0x5429f4() {
    var _0x1782d7 = _0x4d9b44;
    _0x18ab73(), (0x0, _0x147ea6["execFirstRw"])(_0x24fe51, _0x16d418, function() {
      _0x36a660(!![]), _0x47ac4c();
    });
  }

  function _0x18ab73() {
    var _0x5af1a6 = _0x4d9b44;
    (0x0, _0x147ea6["idClick"])("tv_ignore", !![]), (0x0, _0x147ea6["idClick"])("bottomCloseImg", !![]), (0x0, _0x147ea6["textClick"])(/同意并继续/), _0x3f5e90(M01_config_global), _0x47ac4c();
  }

  function _0x20aa44() {
    var _0x3163c1 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["hlog"])("计算收益");
    if (_0x3f5e90(M04_push_report)) {
      var _0x29709c, _0x40fc2d;
      _0x50e409 = id("account_worth_money")['findOnce']();
      _0x50e409 && _0x50e409["text"]() && (_0x29709c = parseInt(_0x50e409["text"]()));
      _0x40fc2d = (0x0, _0x22c33f["getObjectFloat"])(/.*\d+.\d+元/);
      if (_0x40fc2d && _0x40fc2d > 0x1e) {
        if (_0x3f5e90(M02_app_registry)) {
          if ((0x0, _0x147ea6['textClick'])(/约.*提现.*/) || (0x0, _0x5a91a3["OCRClick"])(/提现/)) {
            if (textMatches(/阅读.*分钟可提现/)["findOnce"]()) {
              (0x0, _0x28e191["setGold"])(_0x33504e["sqxsapp"], _0x29709c, _0x40fc2d, !![]);
              return;
            }
          }
        }
      }(0x0, _0x28e191["setGold"])(_0x33504e["sqxsapp"], _0x29709c, _0x40fc2d);
    }
  }

  function _0x3f5e90(_0xc5239a) {
    var _0x468853 = _0x4d9b44;
    sleep(0xbb8), _0x50e409 = className("android.widget.TabWidget")["findOnce"]();
    if (_0x50e409) {
      var _0x461d69 = _0x50e409["child"](_0xc5239a)["click"]();
      return sleep(0x1388), _0x461d69;
    }
    if (_0xc5239a == 0x2) return (0x0, _0x147ea6["textClick"])(/福利/);
  }

  function _0x16d418(_0x3b8cc2) {
    var _0x15a08c = _0x4d9b44;
    sleep(0x1388);
    var _0x2ba066 = /做任务.*赚金币|金币乐园|每日阅读任务|每日听读任务/;
    _0x50e409 = textMatches(_0x2ba066)['findOnce']();
    if (_0x50e409) return (0x0, _0x147ea6["textClick"])(/看小视频获得额外奖励/) && (0x0, _0x422a77["closeAd"])(_0x24fe51), (0x0, _0x147ea6["hlog"])("继续执行下一个任务"), !![];
    if (_0x3f5e90(M02_app_registry)) {
      _0x50e409 = textMatches(_0x2ba066)["findOnce"]();
      if (_0x50e409) return (0x0, _0x147ea6['textClick'])(/看小视频获得额外奖励/) && (0x0, _0x422a77["closeAd"])(_0x24fe51), (0x0, _0x147ea6["hlog"])('进入任务页,任务识别中'), sleep(0x1388), !![];
    }!_0x3b8cc2 && (0x0, _0x147ea6['findRw'])(_0x16d418, _0x18ab73, _0x24fe51);
  }

  function _0x4a1108() {
    var _0x21e1c8 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["textClick"])(/去打卡/), (0x0, _0x147ea6["textClick"])(/立即打卡/), _0x47ac4c(), _0x520619(), ((0x0, _0x147ea6["textClick"])(/一键收取|加倍收取|做任务赚金币|一键收金币/) || (0x0, _0x422a77['closeClickable'])()) && ((0x0, _0x147ea6["textClick"])(/观看视频再得\d+金币/) && ((0x0, _0x422a77["closeAd"])(_0x24fe51), (0x0, _0x147ea6['textClick'])(/领取加倍奖励/) && ((0x0, _0x147ea6["textClick"])(/观看视频再得\d+金币/) && (0x0, _0x422a77["closeAd"])(_0x24fe51))), (0x0, _0x147ea6["textClick"])(/放弃机会.*/), _0x47ac4c(), (0x0, _0x147ea6["textClick"])(/我知道了/));
  }

  function _0x47ac4c() {
    var _0x480e6a = _0x4d9b44,
      _0x19c99c = className("android.widget.Image")["clickable"]()['find']();
    (0x0, _0x147ea6["clickMidBottomBtn"])(_0x19c99c), _0x19c99c = textMatches(/7天内不再提示/)["findOnce"]();
    if ((0x0, _0x147ea6["cClick"])(_0x19c99c)) {
      _0x19c99c = className("android.widget.Image")["find"]();
      for (var _0x1de395 = 0x0; _0x1de395 < _0x19c99c['length']; _0x1de395++) {
        var _0x35ff3f = _0x19c99c[_0x1de395];
        if (_0x35ff3f && _0x35ff3f["isClickable"]()) {
          (0x0, _0x147ea6["cClick"])(_0x35ff3f);
          break;
        }
      }
    }
  }

  function _0x36a660(_0x4014eb) {
    var _0x112e35 = _0x4d9b44;
    if (!_0x4014eb) {
      _0x16d418(), (0x0, _0x147ea6["hlog"])('任务开始:签到');
      if (!(0x0, _0x147ea6["textClick"])(/去签到/)) return (0x0, _0x28e191["setQiandaoStatus"])(_0x24fe51, !![]), !![];
    }
    if ((0x0, _0x147ea6['textClick'])(/立即签到/)) return (0x0, _0x147ea6["textClick"])(/看视频领取.*/) && (0x0, _0x422a77["closeAd"])(_0x24fe51), _0x47ac4c(), (0x0, _0x28e191["setQiandaoStatus"])(_0x24fe51, !![]), !![];
    if (textMatches(/今天已签到/)["findOnce"]()) return (0x0, _0x28e191['setQiandaoStatus'])(_0x24fe51, !![]), !![];
  }

  function _0x5b8564() {
    var _0xd5f244 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6['textClick'])(/开宝箱得金币/) && ((0x0, _0x147ea6["textClick"])(/看小视频获得额外奖励/) && (0x0, _0x422a77["closeAd"])(_0x24fe51));
  }

  function _0x2af72c() {
    var _0x42ff31 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6['hlog'])("任务开始：看广告");
    for (var _0x48cdae = 0x0; _0x48cdae < 0xf; _0x48cdae++) {
      _0x50e409 = textMatches(/.*每次得.*可重复.*/)["findOnce"]();
      if (!_0x50e409) break;
      if (!(0x0, _0x22c33f["compareValues"])(_0x50e409["text"]()) && (0x0, _0x147ea6['textClick'])(/去观看/))(0x0, _0x147ea6['hlog'])('看第' + (_0x48cdae + 0x1) + "个广告进行中"), (0x0, _0x422a77["closeAd"])(_0x24fe51);
      else break;
    }
  }

  function _0x2bedd4() {
    var _0x530a6c = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6['hlog'])('任务开始：抽奖'), _0x50e409 = text("福利转转转")["findOnce"]();
    if ((0x0, _0x147ea6["cClick"])(_0x50e409)) {
      for (var _0x302531 = 0x0; _0x302531 < 0xa; _0x302531++) {
        _0x50e409 = text("今日次数已用完")["findOne"](0x1388);
        if (_0x50e409) return back(), !![];
        if ((0x0, _0x147ea6["textClick"])(/视频抽奖/))(0x0, _0x422a77['closeAd'])(_0x24fe51), _0x50e409 = textMatches(/收下奖励|再抽一次/)["findOne"](0x1f40), (0x0, _0x147ea6['cClick'])(_0x50e409);
        else break;
      }
      back();
    }
  }

  function _0x41d381() {
    var _0x1e29e3 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["hlog"])("任务开始：逛商城");
    if ((0x0, _0x147ea6['textClick'])(/逛商城赚金币|福利商城/)) {
      (0x0, _0x147ea6["textClick"])(/签到|立即签到/), (0x0, _0x147ea6["idClick"])("red_packet_sign"), (0x0, _0x147ea6['textClick'])(/明日再来/);
      for (var _0x41a723 = 0x0; _0x41a723 < 0xa; _0x41a723++) {
        _0x50e409 = textMatches(/\d+\/10/)["findOnce"]();
        if (!_0x50e409) {
          _0x50e409 = id("pager_tabbar_text")["text"]("福利中心")["findOnce"]();
          !(0x0, _0x147ea6["pClick"])(_0x50e409) && (0x0, _0x5a91a3['OCRClick'])(/^福利中心$/, -0x1e);
          return;
        }
        if ((0x0, _0x22c33f['compareValues'])(_0x50e409["text"]())) return _0x50e409 = id('pager_tabbar_text')["text"]("福利中心")["findOnce"](), !(0x0, _0x147ea6["pClick"])(_0x50e409) && (0x0, _0x5a91a3["OCRClick"])(/^福利中心$/, -0x1e), !![];
        (0x0, _0x147ea6['hlog'])("逛商城第" + (_0x41a723 + 0x1) + '次');
        for (var _0x37603f = 0x0; _0x37603f < 0x4; _0x37603f++) {
          (0x0, _0x147ea6["scroll_up_quick"])(0xf);
        }
        if ((0x0, _0x147ea6["textClick"])(/领取/)) {}
      }
      _0x50e409 = id("pager_tabbar_text")["text"]("福利中心")["findOnce"](), !(0x0, _0x147ea6["pClick"])(_0x50e409) && (0x0, _0x5a91a3['OCRClick'])(/^福利中心$/, -0x1e);
    }
  }

  function _0x7d52da() {
    var _0x355171 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["hlog"])("任务开始：领饭补");
    if ((0x0, _0x147ea6["textClick"])(/吃饭领补贴/)) {
      if (textMatches(/.*后可领取早饭补贴/)['findOnce']()) return;
      for (var _0x66ed4c = 0x0; _0x66ed4c < 0x4; _0x66ed4c++) {
        (0x0, _0x147ea6["textClick"])(/领取.*补贴.*金币/) && ((0x0, _0x147ea6["textClick"])(/看.*视频再领.*\d+.*金币/) && (0x0, _0x422a77["closeAd"])(_0x24fe51));
        if ((0x0, _0x147ea6['textClick'])(/.*看视频补领|.*补领吃饭补贴/))(0x0, _0x422a77["closeAd"])(_0x24fe51), (0x0, _0x147ea6["textClick"])(/看.*视频再领.*\d+.*金币/) && (0x0, _0x422a77["closeAd"])(_0x24fe51);
        else break;
      }(0x0, _0x1b65c0["HBack"])();
    }
  }

  function _0x1817e9() {
    var _0x84d396 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["hlog"])("任务开始：预约");
    if ((0x0, _0x147ea6["textClick"])(/预约领金币.*|去预约/)) {
      (0x0, _0x147ea6["textClick"])(/一键领取/);
      if ((0x0, _0x147ea6['textClick'])(/预约明日领取/)) return (0x0, _0x1b65c0['HBack'])(), !![];
      (0x0, _0x1b65c0["HBack"])();
    }
  }

  function _0x498a8a() {
    var _0x182199 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["hlog"])("任务开始：看小说");
    if (_0x3f5e90(M01_config_global)) {
      sleep(0x7d0), _0x50e409 = id("tpl_imageview")["findOnce"](random(0x0, 0x3));
      !_0x50e409 && (_0x50e409 = id('cover_wiew_id')["findOnce"](random(0x0, 0x3)), !_0x50e409 && (_0x50e409 = id("corner_index_text")['findOnce'](random(0x0, 0x3))));
      if (_0x50e409 && _0x50e409['parent']() && (0x0, _0x147ea6["cClick"])(_0x50e409["parent"]())) {
        var _0x434b41 = threads['start'](function() {
          var _0x3ec99d = _0x182199;
          (0x0, _0x24be47["xs_kanshu"])(_0xc71398['sqxs_kanxiaoshu_min'], function() {
            (0x0, _0x24be47['check_activity'])(_0x434b41, ['com.shuqi.reader.ShuqiReaderActivity']);
          }, function() {
            var _0x47b6e3 = _0x3ec99d;
            _0x50e409 = textMatches(/免广告阅读.*分钟/)['findOnce'](), _0x50e409 && (0x0, _0x147ea6["textClick"])(/不再提示/), _0x50e409 = textMatches(/看视频得.*\d+.*金币/)['findOnce'](), _0x50e409 && _0x50e409['parent']() && ((0x0, _0x147ea6["cClick"])(_0x50e409["parent"]()) && (0x0, _0x422a77["closeAd"])(_0x24fe51));
          });
        });
        _0x434b41["join"](), (0x0, _0x24be47['xs_after'])(_0x16d418);
      }
    }
    _0x520619();
  }

  function _0x520619() {
    var _0x49ff67 = _0x4d9b44;
    _0x16d418(), (0x0, _0x147ea6["hlog"])("领取听书奖励"), _0x50e409 = textMatches(/阅读圆环闭合.*天.*/)["findOnce"](), (0x0, _0x147ea6['dlog'])('阅读圆环闭合识别结果:' + (_0x50e409 ? "已找到" : "未找到"));
    _0x50e409 && _0x50e409["parent"]() && ((0x0, _0x147ea6['dlog'])('点击阅读圆环闭合'), (0x0, _0x147ea6["cClick"])(_0x50e409["parent"]()["child"](_0x50e409["parent"]()["childCount"]() - 0x1)));
    _0x50e409 = (0x0, _0x147ea6["findTextInParent"])(/阅读圆环闭合.*天.*/, /立即领取/);
    if ((0x0, _0x147ea6['cClick'])(_0x50e409)) {}
  }
}