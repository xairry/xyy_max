function(_0x3278d1, _0x237cd4, _0x326f17) {
  var _0x17a7f3 = a1_0x4b7c;
  Object["defineProperty"](_0x237cd4, "__esModule", {
    'value': !![]
  }), _0x237cd4["mibrowser"] = _0x462fe0, _0x237cd4["micontent"] = _0x3fa4f7, _0x237cd4["mimovie"] = _0x1208f3, _0x237cd4['tixian'] = _0x3fab27;
  var _0x394401 = _0x326f17(M02_app_registry),
    _0x2142e2 = _0x326f17(M00_utils_ui_helpers),
    _0x1bdbed = _0x326f17(M04_push_report),
    _0x9e7874 = _0x326f17(M01_config_global),
    _0xf3212d = _0x326f17(M05_hid_control),
    _0x517e42 = _0x326f17(M08_check_task),
    _0x451a0e = _0x326f17(M06_storage_card),
    _0x485b3f = _0x326f17(M03_ocr_engine),
    _0x34d7b7 = /任务中心/,
    _0x534f0b = {
      'mimovie_qiandao': _0x4cd8c1,
      'mimovie_kaibaoxiang': _0x543750,
      'mimovie_yuyue': _0x545590,
      'mimovie_fanka': _0x32114c,
      'mimovie_anzhuang': _0x420bb6,
      'mimovie_tiyan': _0xf12d35,
      'mimovie_kanduanju': _0x1e8ae4
    },
    _0x1541a7 = {
      'mibrowser_qiandao': _0x4cd8c1,
      'mibrowser_kaibaoxiang': _0x543750,
      'mibrowser_anzhuang': _0x420bb6,
      'mibrowser_tiyan': _0xf12d35,
      'mibrowser_kanduanju': _0x1e8ae4
    },
    _0x572527 = {
      'micontent_qiandao': _0x4cd8c1,
      'micontent_kaibaoxiang': _0x543750,
      'micontent_yuyue': _0x545590,
      'micontent_fanka': _0x32114c,
      'micontent_anzhuang': _0x420bb6,
      'micontent_tiyan': _0xf12d35
    },
    _0x42530a, _0xd78a27, _0x7c4b44, _0x4eb6e4 = /看.*视频得更多.*金豆|看视频再.*金豆|一键领取|立即签到.*/,
    _0x17415c;

  function _0x1208f3() {
    var _0x5cda1b = _0x17a7f3;
    try {
      _0xd78a27 = _0x394401["mimovieapp"], _0x7c4b44 = _0x9e7874["mimovie_kanduanju_min"], _0x54b3ec(), (0x0, _0x2142e2["execFuncs"])(_0x534f0b, _0x9e7874["mimovie_rw_list"]), _0x5dbbe4(), _0xbcc27e();
    } catch (_0x291846) {
      (0x0, _0x2142e2["handleAppError"])(_0x291846);
    }
  }

  function _0x462fe0() {
    var _0x1c2dd1 = _0x17a7f3;
    try {
      _0xd78a27 = _0x394401["mibrowserapp"], _0x7c4b44 = _0x9e7874["mibrowser_kanduanju_min"], _0x54b3ec(), (0x0, _0x2142e2['execFuncs'])(_0x1541a7, _0x9e7874["mibrowser_rw_list"]), _0x5dbbe4(), _0xbcc27e();
    } catch (_0x368849) {
      (0x0, _0x2142e2["handleAppError"])(_0x368849);
    }
  }

  function _0x3fa4f7() {
    var _0x4376cc = _0x17a7f3;
    try {
      _0xd78a27 = _0x394401["micontentapp"], _0x54b3ec(), (0x0, _0x2142e2["execFuncs"])(_0x572527, _0x9e7874["micontent_rw_list"] || []), _0x5dbbe4(), _0xbcc27e();
    } catch (_0x12b3eb) {
      (0x0, _0x2142e2["handleAppError"])(_0x12b3eb);
    }
  }

  function _0x54b3ec() {
    var _0x18b689 = _0x17a7f3;
    _0x17415c = (0x0, _0x2142e2["getNonSystemPackages"])(), _0x1dab43(), (0x0, _0x2142e2["execFirstRw"])(_0xd78a27, _0x3f5994, function() {
      _0x4cd8c1(!![]);
    });
  }

  function _0x1dab43() {
    var _0x2d1cc4 = _0x17a7f3;
    (0x0, _0x2142e2["idClick"])("close"), (0x0, _0x2142e2['descClick'])(/关闭/), (0x0, _0x2142e2["textClick"])(/取消/);
    if (_0x36c802(M02_app_registry)) {
      var _0x2b7fa3 = /.*添加.*桌面.*/;
      if ((0x0, _0x2142e2["textClick"])(/去添加/))(0x0, _0x2142e2["textClick"])(/添加.*桌面/), _0x236b04(_0x2b7fa3, /去领取/), (0x0, _0x2142e2["textClick"])(/我知道了/);
      else _0x236b04(_0x2b7fa3, /去领取/) && (0x0, _0x2142e2['textClick'])(/我知道了/);
    }
  }

  function _0xbcc27e() {
    var _0x2a6082 = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2["hlog"])("计算收益");
    var _0x11db14 = 0x0,
      _0x14ae44 = 0x0;
    _0x11db14 = _0x95b425("金币收益"), _0x14ae44 = _0x95b425("现金收益"), (0x0, _0x2142e2["hlog"])('获取收益:\x20金币=' + _0x11db14 + ',\x20现金=' + _0x14ae44);
    var _0x577d51 = _0x3fab27(function() {
      var _0xb630d6 = _0x2a6082;
      return (0x0, _0x2142e2["textClick"])(/去提现/);
    }, _0xd78a27, _0x14ae44);
    _0x577d51 && ((0x0, _0x2142e2["hlog"])('提现成功:\x20' + _0x577d51), (0x0, _0x451a0e["setTiXian"])(_0xd78a27, _0x577d51), _0x14ae44 = _0x14ae44 - _0x577d51), (0x0, _0x1bdbed["setGold"])(_0xd78a27, _0x11db14, _0x14ae44), (0x0, _0x2142e2["uninstallNewPkgs"])(_0x17415c, _0xd78a27);
  }

  function _0x95b425(_0x254395) {
    var _0x5b9fe8 = _0x17a7f3,
      _0x4b8eb7 = text(_0x254395)['findOnce']();
    if (!_0x4b8eb7 || !_0x4b8eb7['parent']() || !_0x4b8eb7["parent"]()["parent"]()) return 0x0;
    var _0x211fb6 = _0x4b8eb7["parent"]()["parent"](),
      _0x28fb01 = '',
      _0x596ba8 = '';
    for (var _0x380d5e = 0x1; _0x380d5e < _0x211fb6["childCount"](); _0x380d5e++) {
      var _0x500bff = _0x211fb6["child"](_0x380d5e);
      if (!_0x500bff) continue;
      var _0x2a657b = _0x500bff["className"]() == "android.widget.TextView" ? _0x500bff : _0x500bff["findOne"](className('android.widget.TextView'));
      if (!_0x2a657b) continue;
      var _0x3c67c0 = _0x2a657b['text']() || '';
      if (/^\d$/ ["test"](_0x3c67c0) || _0x3c67c0 == '.' || /^[wW万]$/ ["test"](_0x3c67c0)) _0x28fb01 += _0x3c67c0;
      else _0x3c67c0["length"] > 0x1 && /^\d+(\.\d+)?[wW万]?$/ ["test"](_0x3c67c0) && (_0x596ba8 = _0x3c67c0);
    }
    if (!/[wW万]/ ['test'](_0x28fb01) && _0x211fb6['childCount']() > 0x1) {
      var _0x1d4aa4 = _0x211fb6["child"](_0x211fb6['childCount']() - 0x1);
      if (_0x1d4aa4) {
        var _0x17f249 = _0x1d4aa4["findOne"](textMatches(/^[wW万]$/));
        _0x17f249 && (_0x28fb01 += _0x17f249['text']());
      }
    }
    if (!_0x28fb01) return _0x5249b8(_0x596ba8);
    return _0x5249b8(_0x28fb01);
  }

  function _0x5249b8(_0x29092e) {
    var _0x58b839 = _0x17a7f3;
    if (!_0x29092e) return 0x0;
    var _0x112bf6 = /[wW万]/ ["test"](_0x29092e),
      _0x74cd72 = parseFloat(_0x29092e["replace"](/[wW万]/g, ''));
    if (isNaN(_0x74cd72)) return 0x0;
    return _0x112bf6 && (_0x74cd72 = _0x74cd72 * 0x2710), Math["round"](_0x74cd72 * 0x64) / 0x64;
  }

  function _0x3fab27(_0x3a30e7, _0x5ce474, _0x15bfec) {
    var _0x26415f = _0x17a7f3;
    !_0x15bfec ? _0x15bfec = 0x0 : _0x15bfec = parseFloat(_0x15bfec);
    (0x0, _0x2142e2["dlog"])('tixian:' + _0x15bfec), (0x0, _0x2142e2["dlog"])((0x0, _0x451a0e["getTiXian"])(_0x5ce474)), (0x0, _0x2142e2["dlog"])((0x0, _0x517e42["checkAppRwList"])(_0x5ce474, 'tixian'));
    if (!(0x0, _0x451a0e['getTiXian'])(_0x5ce474) && (0x0, _0x517e42['checkAppRwList'])(_0x5ce474, "tixian")) {
      if (_0x3a30e7()) {
        var _0x307a2d = 0x0;
        if ((0x0, _0x2142e2["textClick"])(/30元/)) _0x307a2d = 0x1e;
        else {
          if ((0x0, _0x2142e2['textClick'])(/3元/)) _0x307a2d = 0x3;
          else(0x0, _0x2142e2["textClick"])(/1元/) && (_0x307a2d = 0x1);
        }
        if ((0x0, _0x2142e2["idClick"])("red_packet_draw_btn")) return _0x307a2d;
      }
    }
  }

  function _0x36c802(_0x5be28c) {
    var _0x150e2e = _0x17a7f3;
    sleep(0xbb8);
    var _0x296ae0 = textMatches(/我的/)["findOnce"]();
    if (_0xd78a27 == _0x394401["mimovieapp"] || _0xd78a27 == _0x394401["micontentapp"]) {
      if (_0x296ae0 && _0x296ae0["parent"]() && _0x296ae0["parent"]()["parent"]()) return (0x0, _0x2142e2['cClick'])(_0x296ae0["parent"]()['parent']()["child"](_0x5be28c));
    }
    if (_0xd78a27 == _0x394401["mibrowserapp"] || _0xd78a27 == _0x394401['micontentapp']) {
      if ((0x0, _0x2142e2["cClick"])(_0x296ae0)) return (0x0, _0x2142e2['textClick'])(/去赚钱/);
    }
  }

  function _0x3f5994(_0x2cc4a0) {
    var _0x304cf8 = _0x17a7f3;
    sleep(0x1388);
    if (textMatches(_0x34d7b7)["findOnce"]()) return (0x0, _0x2142e2['hlog'])('继续执行下一个任务'), _0x445a25(_0x4eb6e4), !![];
    if (_0x36c802(M02_app_registry)) {
      if (textMatches(_0x34d7b7)['findOnce']()) return (0x0, _0x2142e2["hlog"])("进入任务页,任务识别中"), sleep(0x1388), !![];
    }!_0x2cc4a0 && (0x0, _0x2142e2["findRw"])(_0x3f5994, _0x1dab43, _0xd78a27);
  }

  function _0x5dbbe4() {
    _0x3f5994();
  }

  function _0x4cd8c1(_0x29d87f) {
    var _0x3cb1c7 = _0x17a7f3;
    if (!_0x29d87f) {
      _0x3f5994(), (0x0, _0x2142e2["hlog"])("任务开始:签到");
      if (textMatches(/已签到/)['findOnce']()) return !![];
      (0x0, _0x2142e2["textClick"])(/去签到/);
    }
    if ((0x0, _0x2142e2['textClick'])(/.*翻倍签到.*/)) return (0x0, _0x2142e2['backApp'])(_0xd78a27), _0x162cb5(), (0x0, _0x1bdbed["setQiandaoStatus"])(_0xd78a27), _0x445a25(), !![];
    else(0x0, _0x2142e2["textClick"])(/直接领取/) && (_0x162cb5(), _0x445a25());
  }

  function _0x543750() {
    var _0x11c34e = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2['hlog'])("任务开始:开宝箱"), (0x0, _0x2142e2["textClick"])(/点击领\d+金币/) && _0x162cb5();
  }

  function _0x445a25() {
    var _0x5c834a = _0x17a7f3,
      _0x4d5545 = textMatches(/恭喜获得金币奖励|今日任务全部完成|连续打卡拿现金/)["findOnce"]();
    if (_0x4d5545 && _0x4d5545["parent"]() && _0x4d5545['parent']()["parent"]())
      for (var _0xd0bacf = 0x0; _0xd0bacf < _0x4d5545["parent"]()["parent"]()["childCount"](); _0xd0bacf++) {
        var _0x444f85 = _0x4d5545["parent"]()['parent']()['child'](_0xd0bacf);
        if (_0x444f85["text"]() == '' && _0x444f85['className']() == "android.widget.Image" && _0x444f85["clickable"]()) {
          (0x0, _0x2142e2["cClick"])(_0x444f85);
          break;
        }
      }
  }

  function _0x545590() {
    var _0x5c7c39 = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2['hlog'])("任务开始：预约");
    if (textMatches(/已预约/)["findOnce"]()) return !![];
    var _0x2af431 = /.*预约.*金币/;
    _0x236b04(_0x2af431, /去领取/) && (_0x162cb5(), (0x0, _0xf3212d["HBack"])()), _0x236b04(_0x2af431, /去预约|点击立即预约/) && ((0x0, _0x2142e2['textClick'])(/我知道了/), _0x162cb5(), (0x0, _0xf3212d["HBack"])());
  }

  function _0x236b04(_0x3acb0c, _0x2470b0) {
    var _0x8612a6 = _0x17a7f3,
      _0x152792 = (0x0, _0x2142e2["findTextInParent"])(_0x3acb0c, _0x2470b0) || (0x0, _0x2142e2["findTextInGrandparent"])(_0x3acb0c, _0x2470b0);
    if ((0x0, _0x2142e2["cClick"])(_0x152792)) return !![];
    return (0x0, _0x2142e2["dlog"])("clickrw: 未找到任务节点, rwstr=" + _0x3acb0c + ", clickstr=" + _0x2470b0), ![];
  }

  function _0x1a5b61(_0x9bcfab, _0xde6895) {
    var _0x176842 = _0x17a7f3,
      _0x20a856 = (0x0, _0x2142e2["findTextInParent"])(_0x9bcfab, _0xde6895) || (0x0, _0x2142e2["findTextInGrandparent"])(_0x9bcfab, _0xde6895);
    if (_0x20a856) return _0x20a856;
    return null;
  }

  function _0x32114c() {
    var _0x26f5da = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2["hlog"])('任务开始：翻卡');
    var _0x3fef17 = /好运翻翻翻.*/;
    if (_0x1a5b61(_0x3fef17, /已完成/)) return !![];
    (0x0, _0x2142e2["textClick"])(/翻个位/) && _0x162cb5(), _0x162cb5(), (0x0, _0x2142e2["textClick"])(/翻十位/) && _0x162cb5(), _0x162cb5(), (0x0, _0x2142e2['textClick'])(/翻百位/) && _0x162cb5(), _0x162cb5(), (0x0, _0x2142e2["textClick"])(/翻千位/) && _0x162cb5(), _0x236b04(_0x3fef17, /去领取/), (0x0, _0x2142e2['textClick'])(/立即领取/);
  }

  function _0x420bb6(_0x225343) {
    var _0x5f11ec = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2['hlog'])("任务开始：安装");
    !_0x225343 && (_0x225343 = /.*(下载并|连续两日体验|浏览应用).*/);
    var _0xe54cb9 = /^(打开领取|去体验|待打开|领取)$/,
      _0x1af496 = _0x236b04(_0x225343, /^(下载|去下载)$/);
    if (_0x1af496) {
      var _0x1704eb = Number(_0x9e7874['xiazai_wait_time']);
      (!_0x1704eb || _0x1704eb <= 0x1e) && (_0x1704eb = 0xb4);
      for (var _0x1873ef = 0x0; _0x1873ef < _0x1704eb / 0x6; _0x1873ef++) {
        sleep(0x1770), _0x42530a = textMatches(/安装中|\d+%/)["findOnce"]();
        if (_0x42530a) {
          (0x0, _0x2142e2["hlog"])("安装进度:" + _0x42530a["text"]());
          continue;
        }
        if (textMatches(_0xe54cb9)["findOnce"]()) break;
      }
      if (_0x236b04(_0x225343, _0xe54cb9)) {
        if (_0x1b9f88()) return;
      }
    } else {
      if (_0x236b04(_0x225343, _0xe54cb9)) {
        if (_0x1b9f88()) return;
      }
    }
    if (!_0x1af496) {
      (0x0, _0x2142e2['dlog'])("本次未下载安装,跳过卸载清理");
      return;
    }(0x0, _0x2142e2['uninstallNewPkgs'])(_0x17415c, _0xd78a27);
  }

  function _0xf12d35() {
    var _0x411cec = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2['hlog'])("任务开始：体验");
    (0x0, _0x2142e2['textClick'])(/体验应用.*/) && _0x1b9f88();
    (0x0, _0x2142e2["textClick"])(/去浏览/) && _0x1b9f88();
    (0x0, _0x2142e2["textClick"])(/去体验/) && _0x1b9f88();
    var _0xb9f5c1 = /.*(连续\d+天体验).*/,
      _0x2669f6 = /.*(体验\d+秒).*/;
    if (_0x236b04(_0xb9f5c1, /立即开启/)) {
      var _0x1a3daf = (0x0, _0x485b3f['doCaptureScreen'])();
      if ((0x0, _0x485b3f["OCRClickNextByResult"])(_0x1a3daf, /惊喜活动/, /立即开启/, 0xa))
        for (var _0x9a636e = 0x0; _0x9a636e < 0x2; _0x9a636e++) {
          _0x420bb6(_0x2669f6);
        }
    } else {
      if (_0x236b04(_0xb9f5c1, /去赚钱/))
        for (var _0x9a636e = 0x0; _0x9a636e < 0x2; _0x9a636e++) {
          _0x420bb6(_0x2669f6);
        }
    }(0x0, _0x2142e2["textClick"])(/待领取/) && (0x0, _0x2142e2["textClick"])(/太棒了/);
  }

  function _0x1b9f88() {
    var _0x430793 = _0x17a7f3;
    sleep(0x2710), (0x0, _0x2142e2["textClick"])(/^同意.*/);
    var _0x330d48 = currentPackage();
    return sleep(0x1388), (0x0, _0x2142e2['scroll_up_quick_cnt'])(0x2), (0x0, _0x2142e2["clickCenter"])(), sleep(0x1388), (0x0, _0x2142e2["scroll_down_quick_cnt"])(0x2), (0x0, _0x2142e2["clickCenter"])(), back(), (0x0, _0x2142e2["backApp"])(_0xd78a27), sleep(0x1388), _0x445a25(), (0x0, _0x2142e2["textClick"])(/领取/), (0x0, _0x2142e2['textClick'])(/我知道了|知道了/), (0x0, _0x2142e2["uninstallNewApp"])(_0x330d48, _0x17415c, _0xd78a27);
  }

  function _0x1e8ae4() {
    var _0x9658dd = _0x17a7f3;
    _0x3f5994(), (0x0, _0x2142e2["hlog"])("任务开始：看短剧"), _0x2a3aea(/看短剧.*/), _0x2a3aea(/看(小|短)视频.*/), _0x2a3aea(/看影视剧.*/, 0x3);
  }

  function _0x2a3aea(_0x415ebd, _0x43cae4) {
    var _0x3a11ef = _0x17a7f3;
    _0x3f5994();
    if (_0x236b04(_0x415ebd, /去观看/)) {
      var _0x5d9457 = 0x0;
      if (_0x43cae4 == 0x3) {
        (0x0, _0xf3212d["HBack"])();
        if (!(0x0, _0x2142e2["textClick"])(/.*(看|至)\d+集/)) {
          (0x0, _0xf3212d["HBack"])();
          return;
        }
      }(0x0, _0x2142e2["hlog"])('看' + _0x7c4b44 + '分钟');
      while (!![]) {
        sleep(0x3e8 * 0x1e), _0x5d9457 = _0x5d9457 + 0.5;
        for (var _0x44d0ae = 0x0; _0x44d0ae < 0x5; _0x44d0ae++) {
          if (textMatches(/点击任意位置了解详情/)["findOnce"]())(0x0, _0x2142e2['scroll_up_quick_cnt'])(0x1), sleep(0x7d0);
          else break;
        }
        if (_0x5d9457 >= _0x7c4b44) break;
      }
      for (var _0x44d0ae = 0x0; _0x44d0ae < 0x5; _0x44d0ae++) {
        (0x0, _0xf3212d["HBack"])(), (0x0, _0xf3212d["HBack"])();
        if (_0x3f5994()) break;
      }
    }
    _0x21d926(_0x415ebd);
  }

  function _0x21d926(_0x460578) {
    var _0x115586 = _0x17a7f3;
    for (var _0xe9801 = 0x0; _0xe9801 < 0xa; _0xe9801++) {
      var _0x4395c1 = (0x0, _0x2142e2['findTextInParent'])(_0x460578, /去领取/) || (0x0, _0x2142e2["findTextInGrandparent"])(_0x460578, /去领取/);
      if ((0x0, _0x2142e2["cClick"])(_0x4395c1)) _0x162cb5();
      else {
        if ((0x0, _0x2142e2["textClick"])(/可翻倍/))(0x0, _0x2142e2['textClick'])(/立即翻倍/) ? (back(), (0x0, _0x2142e2["backApp"])(_0xd78a27)) : _0x162cb5();
        else {
          (0x0, _0x2142e2["textClick"])(/一键领取/);
          break;
        }
      }
    }
  }

  function _0x162cb5() {
    var _0x34abe4 = _0x17a7f3,
      _0x11b386 = /.*看\d+s领更多金币|.*浏览\d+秒.*金币|.*再看\d+s.*金币|.*看\d+s领更多金币|浏览.*位.*|浏览.*翻倍.*/;
    _0x42530a = textMatches(_0x11b386)["findOnce"]();
    if ((0x0, _0x2142e2["cClick"])(_0x42530a)) {
      var _0x1a700a = (0x0, _0x517e42['getTextNumber'])(_0x42530a["text"]());
      sleep(_0x1a700a * 0x3e8 + 0x1388), back(), (0x0, _0x2142e2["backApp"])(_0xd78a27);
    }
    _0x445a25();
  }
}