function(_0x3fa7aa, _0x1c3499, _0x3bfce8) {
  var _0x1f289f = a1_0x4b7c;
  Object["defineProperty"](_0x1c3499, "__esModule", {
    'value': !![]
  }), _0x1c3499["qsyy"] = _0x1b9b10;
  var _0x24f6da = _0x3bfce8(M02_app_registry),
    _0x7b01de = _0x3bfce8(M00_utils_ui_helpers),
    _0x4ed8f8 = _0x3bfce8(M07_ad_close),
    _0x1ee823 = _0x3bfce8(M04_push_report),
    _0x3f6ad2 = _0x3bfce8(M01_config_global),
    _0x25967a = _0x3bfce8(M06_storage_card),
    _0x1a67e0 = _0x3bfce8(M03_ocr_engine),
    _0x522e29 = _0x3bfce8(M05_hid_control),
    _0x4853e1 = _0x3bfce8(M10_activity_consts),
    _0x4bfc7c, _0x351d27, _0x507c0d = /玩法任务|金币中心|福利中心|开宝箱|看广告|金币收益|现金收益|打开签到提醒|立即签到领.*金币/,
    _0x112107 = {
      'qsyy_qiandao': _0x15aea2,
      'qsyy_kaibaoxiang': _0x1c5b19,
      'qsyy_kanguanggao': _0x590236,
      'qsyy_hongbaoyu': _0x5e2dd6,
      'qsyy_fanka': _0x14a32b
    };

  function _0x1b9b10() {
    var _0x469415 = _0x1f289f;
    try {
      _0x351d27 = _0x24f6da["qsyyapp"], _0x38fe8c(), (0x0, _0x7b01de["execFuncs"])(_0x112107, _0x3f6ad2["qsyy_rw_list"]), _0x3c22a6(), _0x343d7f();
    } catch (_0x2ba730) {
      (0x0, _0x7b01de["handleAppError"])(_0x2ba730);
    }
  }

  function _0x343d7f() {
    var _0x47c02b = _0x1f289f;
    _0x57e645(), (0x0, _0x7b01de['hlog'])("计算收益");
    var _0x3b6bbc = 0x0,
      _0x59881b = 0x0,
      _0x35a700 = (0x0, _0x1a67e0["OCRResult"])(/金币收益/),
      _0x39e305 = (0x0, _0x1a67e0["OCRFindNextByResult"])(_0x35a700, /金币收益/, /\d+/, 0x4);
    _0x39e305 && (_0x3b6bbc = _0x39e305["text"]);
    var _0x14b8e5 = (0x0, _0x1a67e0["OCRFindNextByResult"])(_0x35a700, /金币收益/, /\d+\.\d+/, 0x5);
    _0x14b8e5 && (_0x59881b = _0x14b8e5["text"]);
    var _0x14b8e5 = (0x0, _0x7b01de["dxClickGold"])(function() {
      if ((0x0, _0x1a67e0['OCRMatchClick'])(_0x35a700, /提现/)) return !![];
    }, _0x351d27, _0x59881b);
    _0x14b8e5 && ((0x0, _0x7b01de["hlog"])("提现成功"), (0x0, _0x25967a["setTiXian"])(_0x351d27, _0x14b8e5), _0x59881b = _0x59881b - _0x14b8e5), (0x0, _0x1ee823["setGold"])(_0x24f6da["qsyyapp"], _0x3b6bbc, _0x59881b);
  }

  function _0x3c20e2() {
    var _0x6ee705 = _0x1f289f;
    (0x0, _0x4ed8f8["dx_ok"])(_0x24f6da["qsyyapp"], _0x507c0d), (0x0, _0x7b01de["backApp"])(_0x351d27);
  }

  function _0x38fe8c() {
    var _0x2c05fd = _0x1f289f;
    _0x1a1460(), (0x0, _0x7b01de["execFirstRw"])(_0x351d27, _0x57e645, function() {
      _0x15aea2(!![]), _0x47cd22();
    });
  }

  function _0x1a1460() {
    var _0x2369cf = _0x1f289f;
    (0x0, _0x1a67e0['OCRText'])(/提醒我.*|.*会员.*/) && (0x0, _0x522e29['HBack'])(), (0x0, _0x7b01de["backApp"])(_0x351d27), _0x47cd22();
  }

  function _0x47cd22() {
    var _0x5578f6 = _0x1f289f;
    return sleep(0x1388), (0x0, _0x7b01de["textClick"])(/^(金币|领金币|福利)$/) ? !![] : (0x0, _0x1a67e0["OCRClickMenu"])(0x3, /^(发现)$/, /^(听抖音)$/, null, /^(金币|领金币|福利)$/, /^(我的)$/);
  }

  function _0x57e645(_0xe1d587) {
    var _0x21c5ef = _0x1f289f;
    sleep(0x1388);
    if ((0x0, _0x1a67e0["OCRText"])(_0x507c0d)) return (0x0, _0x1a67e0["OCRClickSimilarImageBottom"])(_0x4853e1["DX_CLOSE_X"], 0.7), (0x0, _0x7b01de['hlog'])("继续执行下一个任务"), !![];
    if (_0x47cd22()) {
      if ((0x0, _0x1a67e0["OCRText"])(_0x507c0d)) return (0x0, _0x7b01de['hlog'])("进入任务页,任务识别中"), !![];
    }!_0xe1d587 && (0x0, _0x7b01de["findRw"])(_0x57e645, _0x1a1460, _0x351d27);
  }

  function _0x15aea2(_0x4a578a) {
    var _0x3a8d8a = _0x1f289f;
    if (!_0x4a578a) {
      _0x57e645(), (0x0, _0x7b01de["hlog"])("任务开始：签到领金币");
      var _0xa8c26a = (0x0, _0x1a67e0["OCRResult"])(/签到得金币|立即.*领.*金币/);
      if ((0x0, _0x1a67e0['OCRMatch'])(_0xa8c26a, /明天继续签到|已连签/)) return (0x0, _0x1ee823["setQiandaoStatus"])(_0x24f6da['qsyyapp']), !![];
      else {
        if ((0x0, _0x1a67e0["OCRMatchClick"])(_0xa8c26a, /签到得金币|^去签到/)) {}
      }
    }
    var _0xa8c26a = (0x0, _0x1a67e0['doCaptureScreen'])();
    if ((0x0, _0x1a67e0['OCRMatchClick'])(_0xa8c26a, /看广告膨胀.*/)) _0x3c20e2();
    else(0x0, _0x1a67e0["OCRMatchClick"])(_0xa8c26a, /立即.*领.*金币/) && (0x0, _0x1a67e0["OCRClickSimilarImageBottom"])(_0x4853e1["DX_CLOSE_X"]);
  }

  function _0x1c5b19() {
    var _0x3eeab6 = _0x1f289f;
    _0x57e645(), (0x0, _0x7b01de['hlog'])("任务开始：开宝箱"), (0x0, _0x1a67e0["OCRClick"])(/开宝箱得金币|点击立领\d+/) ? (0x0, _0x7b01de["textClickXY"])(/看广告.*赚.*\d+.*金币|看广告膨胀.*金币/) && _0x3c20e2() : (0x0, _0x7b01de["hlog"])("开宝箱未到时间");
  }

  function _0x590236() {
    var _0xc463a9 = _0x1f289f;
    _0x57e645(), (0x0, _0x7b01de["hlog"])('任务开始：看广告');
    var _0x55f125 = /看广告赚金币/,
      _0x441295 = (0x0, _0x1a67e0["OCRResult"])(_0x55f125);
    if ((0x0, _0x1a67e0["OCRFindNextByResult"])(_0x441295, _0x55f125, /去完成/))(0x0, _0x1a67e0['OCRMatchClick'])(_0x441295, _0x55f125) && _0x3c20e2();
    else {
      if ((0x0, _0x1a67e0["OCRFindNextByResult"])(_0x441295, _0x55f125, /^(已完成|明天再来)$/)) return !![];
      else(0x0, _0x7b01de["hlog"])("看广告未到时间");
    }
  }

  function _0x5e2dd6() {
    var _0x39b9ca = _0x1f289f;
    _0x57e645(), (0x0, _0x7b01de["hlog"])("任务开始：红包雨");
    var _0x34abed = /红包雨/,
      _0x9f2d5a = (0x0, _0x1a67e0["OCRResult"])(_0x34abed);
    if ((0x0, _0x1a67e0["OCRFindNextByResult"])(_0x9f2d5a, _0x34abed, /去领取/)) {
      if ((0x0, _0x1a67e0["OCRMatchClick"])(_0x9f2d5a, _0x34abed)) {
        (0x0, _0x7b01de['randomTap'])(0xa), sleep(0x1f40);
        var _0x9f2d5a = (0x0, _0x1a67e0['doCaptureScreen'])();
        if ((0x0, _0x1a67e0['OCRMatchClick'])(_0x9f2d5a, /看广告.*领.*金币/)) {
          _0x3c20e2();
          return;
        } else(0x0, _0x1a67e0["OCRMatchClick"])(_0x9f2d5a, /^(下次再来|开心收下)$/);
      }
    } else {
      if ((0x0, _0x1a67e0["OCRFindNextByResult"])(_0x9f2d5a, _0x34abed, /^(已完成|明天再来)$/)) return !![];
      else(0x0, _0x7b01de['hlog'])("红包雨未到时间");
    }
  }

  function _0x14a32b() {
    var _0x188fb3 = _0x1f289f;
    _0x57e645(), (0x0, _0x7b01de['hlog'])('任务开始：翻卡');
    var _0x3b02bc = /翻卡.*金币/,
      _0x4e8138 = (0x0, _0x1a67e0["OCRResult"])(_0x3b02bc);
    if ((0x0, _0x1a67e0["OCRMatchClick"])(_0x4e8138, _0x3b02bc)) {
      sleep(0x1388), _0x3c20e2();
      for (var _0x194ee7 = 0x0; _0x194ee7 < 0x3; _0x194ee7++) {
        _0x4e8138 = (0x0, _0x1a67e0['doCaptureScreen'])();
        if ((0x0, _0x1a67e0["OCRMatchClick"])(_0x4e8138, /看.*广告.*位.*|继续观看/)) _0x3c20e2(), sleep(0x1388);
        else break;
      }(0x0, _0x7b01de["textClickXY"])(/直接领取/);
    } else return !![];
  }

  function _0x3c22a6() {
    var _0x81b96 = _0x1f289f;
    _0x57e645(), (0x0, _0x7b01de["hlog"])('任务开始：领取奖励');
    var _0xdbe847 = /听歌赚.*金币/,
      _0x254fd3 = (0x0, _0x1a67e0["OCRResult"])(_0xdbe847);
    for (var _0xf8fe0 = 0x0; _0xf8fe0 < 0x3; _0xf8fe0++) {
      if ((0x0, _0x1a67e0["OCRMatchClick"])(_0x254fd3, _0xdbe847)) {
        if ((0x0, _0x7b01de["textClickXY"])(/看广告.*赚.*\d+.*金币|看广告膨胀.*金币/)) _0x3c20e2(), _0x254fd3 = (0x0, _0x1a67e0["doCaptureScreen"])();
        else break;
      } else break;
    }
  }
}