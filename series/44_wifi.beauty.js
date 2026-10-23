function(_0x4d0bd9, _0x1424e0, _0x381e75) {
  var _0x17d569 = a1_0x4b7c;
  Object["defineProperty"](_0x1424e0, "__esModule", {
    'value': !![]
  }), _0x1424e0["wifi"] = _0x528dcb;
  var _0x2188f1 = _0x381e75(M02_app_registry),
    _0x27eca5 = _0x381e75(M00_utils_ui_helpers),
    _0x42532b = _0x381e75(M04_push_report),
    _0x4f87fb = _0x381e75(M01_config_global),
    _0x5dd81b = _0x381e75(M07_ad_close),
    _0x27c832 = _0x381e75(M08_check_task),
    _0x220bdf = _0x381e75(M05_hid_control),
    _0xfeef58 = /新人福利|日常福利|金币收益|现金收益|立即签到|签到并领.*金币|领取.*元现金/,
    _0x5e7cd1 = {
      'wifi_qiandao': _0x38ff6d,
      'wifi_kaibaoxiang': _0x57d788,
      'wifi_kanguanggao': _0x248684
    },
    _0x5ada96, _0x3f9ce4;

  function _0x528dcb() {
    var _0x19ca85 = _0x17d569;
    try {
      _0x3f9ce4 = _0x2188f1['wifiapp'], _0xa39264(), (0x0, _0x27eca5["execFuncs"])(_0x5e7cd1, _0x4f87fb["wifi_rw_list"]), _0x4aeafd(), _0x4fb41f();
    } catch (_0x38314f) {
      (0x0, _0x27eca5["handleAppError"])(_0x38314f);
    }
  }

  function _0xa39264() {
    var _0x41b515 = _0x17d569;
    _0x16adb8(), (0x0, _0x27eca5["execFirstRw"])(_0x3f9ce4, _0x5150e3, function() {
      _0x38ff6d(!![]);
    });
  }

  function _0x16adb8() {
    _0x2daa00(M03_ocr_engine);
  }

  function _0x4fb41f() {
    var _0x1e7b75 = _0x17d569;
    _0x5150e3(), (0x0, _0x27eca5["hlog"])('计算收益');
    var _0x4d5739 = 0x0,
      _0x5a65c3 = 0x0;
    _0x5ada96 = (0x0, _0x27eca5["findTextInParent"])(/现金收益/, /\d+/, 0x2), _0x5ada96 && (_0x4d5739 = parseInt(_0x5ada96["text"]())), _0x5ada96 = (0x0, _0x27eca5["findTextInParent"])(/现金收益/, /\d+\.\d+/, 0x5), _0x5ada96 && (_0x5a65c3 = parseFloat(_0x5ada96['text']())), (0x0, _0x42532b["setGold"])(_0x2188f1["wifiapp"], _0x4d5739, _0x5a65c3);
  }

  function _0x2daa00(_0x52d4f6) {
    var _0x13a09e = _0x17d569;
    sleep(0xbb8);
    if (_0x52d4f6 == 0x3) return _0x5ada96 = id("tab_text")["text"]('赚钱')["findOnce"](), (0x0, _0x27eca5["cClick"])(_0x5ada96);
    return _0x5ada96 = id("tab_layout")["findOnce"](), _0x5ada96 && _0x5ada96["childCount"]() > _0x52d4f6 && (_0x5ada96 = _0x5ada96["child"](_0x52d4f6)), (0x0, _0x27eca5["cClick"])(_0x5ada96);
  }

  function _0x5150e3(_0x85193a) {
    var _0x1be394 = _0x17d569;
    sleep(0x1388), _0x34c1ff();
    if (textMatches(_0xfeef58)["findOnce"]()) return (0x0, _0x27eca5["hlog"])("继续执行下一个任务"), !![];
    if (_0x2daa00(M03_ocr_engine)) {
      if (textMatches(_0xfeef58)["findOnce"]()) return (0x0, _0x27eca5["hlog"])("进入任务页,任务识别中"), sleep(0x1388), !![];
    }!_0x85193a && (0x0, _0x27eca5["findRw"])(_0x5150e3, _0x16adb8, _0x3f9ce4);
  }

  function _0x4aeafd() {}

  function _0x38ff6d(_0x38fadb) {
    var _0x3afe13 = _0x17d569;
    !_0x38fadb && (_0x5150e3(), (0x0, _0x27eca5["hlog"])("任务开始:签到"), (0x0, _0x27eca5['textClick'])(/去签到/));
    _0x5ada96 = (0x0, _0x27eca5["findTextInParent"])(/7天签到领现金/, /立即领取/, 0x6), (0x0, _0x27eca5["cClick"])(_0x5ada96);
    (0x0, _0x27eca5["textClick"])(/领取.*元现金/) && (0x0, _0x220bdf["HBack"])();
    if ((0x0, _0x27eca5["textClick"])(/签到并领.*金币/)) return (0x0, _0x5dd81b["closeAd"])(_0x3f9ce4), !![];
    else(0x0, _0x27eca5["textClick"])(/立即签到/) && _0x34c1ff();
  }

  function _0x34c1ff() {
    var _0x67170 = _0x17d569;
    while (!![]) {
      if ((0x0, _0x27eca5["textClick"])(/再看一个视频领.*金币|看视频再领.*金币/))(0x0, _0x5dd81b["closeAd"])(_0x3f9ce4), (0x0, _0x27eca5["textClick"])(/开心收下/);
      else break;
    }
  }

  function _0x57d788() {
    var _0x19602d = _0x17d569;
    _0x5150e3(), (0x0, _0x27eca5["hlog"])("任务开始：开宝箱"), (0x0, _0x27eca5["textClick"])(/点击开宝箱/) && _0x34c1ff();
  }

  function _0x248684() {
    var _0x15fed3 = _0x17d569;
    _0x5150e3(), (0x0, _0x27eca5["hlog"])('任务开始：看广告');
    for (var _0x11bb5c = 0x0; _0x11bb5c < 0xa; _0x11bb5c++) {
      _0x5ada96 = textMatches(/本次得\d+金币.*已完成.*/)["findOnce"]();
      if (_0x5ada96 && (0x0, _0x27c832["compareValues"])(_0x5ada96["text"]())) return !![];
      (0x0, _0x27eca5["textClick"])(/看广告赚金币/) && ((0x0, _0x5dd81b["closeAd"])(_0x3f9ce4), _0x34c1ff());
    }
    _0x5150e3();
    var _0x3c6273 = 0x0;
    while (!![]) {
      _0x5ada96 = idContains("tvDiamondTitle")["textMatches"](/看\d+秒领金币/)["findOnce"]();
      if ((0x0, _0x27eca5['cClick'])(_0x5ada96)) {
        var _0x455da6 = idContains("tvDiamondTitle")['textMatches'](/看\d+秒领金币/)["findOnce"]();
        if (_0x455da6) break;
        var _0x437b75 = (0x0, _0x27c832["getTextNumber"])(_0x5ada96["text"]());
        sleep(_0x437b75 * 0x3e8 + random(0x3e8, 0x7d0)), _0x3c6273 = 0x0;
      } else(0x0, _0x27eca5['backApp'])(_0x3f9ce4), (0x0, _0x220bdf["HBack"])(), _0x2daa00(M03_ocr_engine), _0x3c6273++;
      if (_0x3c6273 > 0x3) break;
    }
  }
}