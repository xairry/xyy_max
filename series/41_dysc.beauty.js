function(_0x245ac0, _0x42b71e, _0xbc2fd6) {
  var _0x3e9458 = a1_0x4b7c;
  Object["defineProperty"](_0x42b71e, '__esModule', {
    'value': !![]
  }), _0x42b71e["dysc"] = _0x5794e5;
  var _0x56290a = _0xbc2fd6(M02_app_registry),
    _0x42728c = _0xbc2fd6(M00_utils_ui_helpers),
    _0xa639ad = _0xbc2fd6(M07_ad_close),
    _0x2b58a4 = _0xbc2fd6(M04_push_report),
    _0x5c7728 = _0xbc2fd6(M08_check_task),
    _0x18446d = _0xbc2fd6(M01_config_global),
    _0x2ea519 = _0xbc2fd6(M03_ocr_engine),
    _0xfe7d9f = _0xbc2fd6(M05_hid_control),
    _0x39e5cc = _0xbc2fd6(M10_activity_consts),
    _0x7d3e96, _0x405628, _0x32bd13 = /我的金币|折合现金|收金币|做任务赚金币|翻卡片领金币|看视频赚金币/,
    _0x22839e = {
      'dysc_qiandao': _0x2a2bdb,
      'dysc_kanguanggao': _0x3d4600,
      'dysc_fanka': _0x2395b4,
      'dysc_choujinbi': _0x483c4e
    };

  function _0x5794e5() {
    var _0xb26ea6 = _0x3e9458;
    try {
      _0x405628 = _0x56290a["dyscapp"], _0x10253a(), (0x0, _0x42728c['execFuncs'])(_0x22839e, _0x18446d["dysc_rw_list"]), _0x1891fd(), _0x5a1f13();
    } catch (_0x53f625) {
      (0x0, _0x42728c["handleAppError"])(_0x53f625);
    }
  }

  function _0x5a1f13() {
    var _0x379561 = _0x3e9458;
    _0x1ac6d2(), (0x0, _0x42728c["hlog"])("计算收益");
    var _0x210d5a = 0x0,
      _0x5e1658 = 0x0,
      _0x1c26b8 = (0x0, _0x2ea519["doCaptureScreen"])(),
      _0x11ebd5 = (0x0, _0x2ea519["OCRFindNextByResult"])(_0x1c26b8, /折合现金/, /\d+\.\d+/, 0x5);
    _0x11ebd5 && (_0x5e1658 = _0x11ebd5["text"]), (0x0, _0x2b58a4['setGold'])(_0x56290a["dyscapp"], _0x210d5a, _0x5e1658);
  }

  function _0x30d8e3() {
    var _0x13885c = _0x3e9458;
    return (0x0, _0xa639ad["dx_ok"])(_0x56290a["dyscapp"], _0x32bd13);
  }

  function _0x10253a() {
    var _0x2eefca = _0x3e9458;
    _0x2a9e6c(), (0x0, _0x42728c["execFirstRw"])(_0x405628, _0x1ac6d2, function() {
      _0x36e2f7(M02_app_registry), _0x2a2bdb(!![]);
    });
  }

  function _0x2a9e6c() {
    var _0x4f5ddc = _0x3e9458;
    (0x0, _0xfe7d9f["HBack"])(), _0x370f00();
  }

  function _0x370f00() {
    var _0x30f6a9 = _0x3e9458;
    (0x0, _0x2ea519["OCRClickSimilarImageBottom"])(_0x39e5cc["DYSC"], 0.6);
  }

  function _0x36e2f7(_0x50d85f) {
    var _0x1bc4fd = _0x3e9458;
    sleep(0x1388);
    var _0x424522 = (0x0, _0x2ea519["doCaptureScreen"])();
    if ((0x0, _0x2ea519["OCRMatchClick"])(_0x424522, /(赚钱|赚金币)$/)) return !![];
    else {
      if ((0x0, _0x2ea519["OCRClickMenu"])(0x2, /首页/, /视频/, /赚钱/, /消息/, /^我$/)) return !![];
    }
    if (!_0x18446d["hidMode"]) {
      _0x7d3e96 = id('root_view')["findOnce"]();
      if (_0x7d3e96 && _0x7d3e96["childCount"]() > _0x50d85f) {
        var _0x42140b = _0x7d3e96['child'](_0x50d85f);
        return (0x0, _0x42728c['cClick'])(_0x42140b);
      }
    }
  }

  function _0x1ac6d2(_0x30c4da) {
    var _0x3e637f = _0x3e9458;
    sleep(0x1388);
    var _0x3ced84 = (0x0, _0x2ea519["doCaptureScreen"])();
    if ((0x0, _0x2ea519['OCRMatchClick'])(_0x3ced84, /以后再说/)) {}
    if ((0x0, _0x2ea519["OCRMatch"])(_0x3ced84, _0x32bd13)) return _0x370f00(), (0x0, _0x42728c["hlog"])('继续执行下一个任务'), !![];
    if (_0x36e2f7(M02_app_registry)) {
      _0x3ced84 = (0x0, _0x2ea519["doCaptureScreen"])(), (0x0, _0x2ea519['OCRMatchClick'])(_0x3ced84, /收下金币|暂不参与/);
      if ((0x0, _0x2ea519["OCRMatch"])(_0x3ced84, _0x32bd13)) return _0x370f00(), (0x0, _0x42728c["hlog"])('进入任务页,任务识别中'), !![];
    }!_0x30c4da && (0x0, _0x42728c["findRw"])(_0x1ac6d2, _0x2a9e6c, _0x405628);
  }

  function _0x2a2bdb(_0x566537) {
    var _0x1e4223 = _0x3e9458;
    !_0x566537 && (_0x1ac6d2(), (0x0, _0x42728c["hlog"])("任务开始：签到领金币"), (0x0, _0x2ea519["OCRClick"])(/去签到/));
    var _0xb18e7a = (0x0, _0x2ea519["doCaptureScreen"])();
    if ((0x0, _0x2ea519["OCRMatch"])(_0xb18e7a, /已签到/)) return !![];
    else(0x0, _0x2ea519["OCRMatchClick"])(_0xb18e7a, /立即签到/) && _0x229b37();
    _0xb18e7a = (0x0, _0x2ea519["doCaptureScreen"])(), (0x0, _0x2ea519["OCRMatchClick"])(_0xb18e7a, /立即抽奖/) && _0x229b37();
  }

  function _0x229b37() {
    var _0x65c39a = _0x3e9458,
      _0x46de59 = (0x0, _0x2ea519['doCaptureScreen'])();
    if ((0x0, _0x2ea519["OCRMatchClick"])(_0x46de59, /看广告视频再得|继续看视频得/)) {}
    _0x30d8e3();
  }

  function _0x3d4600() {
    var _0x329a06 = _0x3e9458;
    _0x1ac6d2(), (0x0, _0x42728c["hlog"])('任务开始：看广告');
    var _0xa4d2ad = (0x0, _0x2ea519["doCaptureScreen"])(),
      _0x7cc9b8 = (0x0, _0x2ea519["OCRMatch"])(_0xa4d2ad, /.*金币今日最高.*次/);
    if (_0x7cc9b8 && (0x0, _0x5c7728["compareValues"])(_0x7cc9b8["text"])) return (0x0, _0x42728c["hlog"])("看广告已完成"), !![];
    var _0x3a933d = /看广告视频/;
    (0x0, _0x2ea519['OCRMatchClick'])(_0xa4d2ad, _0x3a933d) && _0x30d8e3();
  }

  function _0x2395b4() {
    var _0xcb1837 = _0x3e9458;
    _0x1ac6d2(), (0x0, _0x42728c["hlog"])("任务开始：翻卡");
    for (var _0x586ae1 = 0x0; _0x586ae1 < 0xa; _0x586ae1++) {
      var _0x50435d = (0x0, _0x2ea519["doCaptureScreen"])();
      if ((0x0, _0x2ea519["OCRMatchClick"])(_0x50435d, /翻卡片领金币|翻金币/)) sleep(0xbb8), (0x0, _0x2ea519['OCRClick'])(/看广告翻开/) && _0x30d8e3();
      else {
        if ((0x0, _0x2ea519["OCRMatchClick"])(_0x50435d, /看广告翻/)) _0x30d8e3();
        else break;
      }
    }
  }

  function _0x483c4e() {
    var _0x4dfd63 = _0x3e9458;
    _0x1ac6d2(), (0x0, _0x42728c["hlog"])("任务开始：抽金币");
    var _0x2c8619 = (0x0, _0x2ea519["doCaptureScreen"])();
    if ((0x0, _0x2ea519["OCRMatchClick"])(_0x2c8619, /抽[^取]*币/)) {
      _0x2c8619 = (0x0, _0x2ea519["doCaptureScreen"])();
      if ((0x0, _0x2ea519["OCRMatchClick"])(_0x2c8619, /一键领奖/)) sleep(0x1388), (0x0, _0x2ea519['OCRClick'])(/立即抽奖/);
      else {
        if ((0x0, _0x2ea519["OCRMatchClick"])(_0x2c8619, /立即抽奖/)) {}
      }
      _0x229b37();
    }
  }

  function _0x1891fd() {
    var _0x570748 = _0x3e9458;
    _0x1ac6d2(), (0x0, _0x42728c['hlog'])("任务开始：收金币"), (0x0, _0x2ea519["OCRClick"])(/收金币/) && _0x229b37();
  }
}