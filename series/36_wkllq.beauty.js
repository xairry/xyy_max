function(_0x5a0a19, _0x18c076, _0x5b2564) {
  var _0x1cf3e9 = a1_0x4b7c;
  Object["defineProperty"](_0x18c076, "__esModule", {
    'value': !![]
  }), _0x18c076["wkllq"] = _0x30291e;
  var _0xfe2f81 = _0x5b2564(M02_app_registry),
    _0x42cd1b = _0x5b2564(M00_utils_ui_helpers),
    _0x436557 = _0x5b2564(M07_ad_close),
    _0x37806e = _0x5b2564(M04_push_report),
    _0x303213 = _0x5b2564(M08_check_task),
    _0x4eb003 = _0x5b2564(M01_config_global),
    _0x43250f = _0x5b2564(M03_ocr_engine),
    _0xe10fe8 = _0x5b2564(M06_storage_card),
    _0x487b54 = _0x5b2564(M05_hid_control),
    _0x107f98, _0x14bb43, _0x1f73cc = /日常任务|今日金币|吃饭赚钱|今日签到.*|已连续签到.*|领取金币|可微信提现|恭喜你获得惊喜奖励/,
    _0x3f2b4a = {
      'wkllq_qiandao': _0x11c743,
      'wkllq_kaibaoxiang': _0xb69a6,
      'wkllq_kanguanggao': _0x3d6e78,
      'wkllq_hongbaoyu': _0x17a669,
      'wkllq_lingfanbu': _0x59a738,
      'wkllq_yuyue': _0x1dd836,
      'wkllq_kanshipin': _0x1f82a3
    };

  function _0x30291e() {
    var _0x106bb3 = _0x1cf3e9;
    try {
      _0x14bb43 = _0xfe2f81['wkllqapp'], _0x5e9720(), (0x0, _0x42cd1b["execFuncs"])(_0x3f2b4a, _0x4eb003["wkllq_rw_list"]), _0x4b97f0(), _0x127b35();
    } catch (_0xab395f) {
      (0x0, _0x42cd1b["handleAppError"])(_0xab395f);
    }
  }

  function _0x127b35() {
    var _0xb3e99c = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("计算收益"), (0x0, _0x42cd1b["scroll_down_quick_cnt"])(0x2);
    var _0x60e45c = 0x0,
      _0x5a542f = 0x0,
      _0x30b158 = (0x0, _0x43250f["doCaptureScreen"])();
    (0x0, _0x43250f["OCRMatchClick"])(_0x30b158, /提现/) && (_0x30b158 = (0x0, _0x43250f["doCaptureScreen"])(), (0x0, _0x43250f["OCRMatchClick"])(_0x30b158, /我的金币/) && (_0x5a542f = (0x0, _0x303213["getObjectFloat"])(/约.*元/), _0x30b158 = (0x0, _0x43250f['doCaptureScreen'])()));
    var _0x31eb40 = (0x0, _0x42cd1b["dxClickGold"])(function() {
      var _0x5d5d6e = _0xb3e99c;
      if ((0x0, _0x43250f["OCRMatchClick"])(_0x30b158, /提现/)) return !![];
    }, _0x14bb43, _0x5a542f);
    _0x31eb40 && ((0x0, _0x42cd1b["hlog"])("提现成功"), (0x0, _0xe10fe8["setTiXian"])(_0x14bb43, _0x31eb40), _0x5a542f = _0x5a542f - _0x31eb40), (0x0, _0x37806e['setGold'])(_0xfe2f81["wkllqapp"], _0x60e45c, _0x5a542f);
  }

  function _0x5e9720() {
    _0x4c155f(), (0x0, _0x42cd1b['execFirstRw'])(_0x14bb43, _0x2b4d8a, function() {
      var _0x5044bb = a1_0x4b7c;
      _0x11c743(!![]), (0x0, _0x487b54["HBack"])();
    });
  }

  function _0x4c155f() {
    var _0xd041f4 = _0x1cf3e9;
    (0x0, _0x487b54["HBack"])(), _0x35556c(M02_app_registry);
  }

  function _0x4b97f0() {
    var _0x40043c = _0x1cf3e9;
    _0x36ea8e(), (0x0, _0x42cd1b['scroll_down_quick_cnt'])(0x2);
    (0x0, _0x42cd1b["textClickXY"])(/^领取金币$/) && _0x23e214();
    for (var _0x56b152 = 0x0; _0x56b152 < 0x3; _0x56b152++) {
      if ((0x0, _0x42cd1b["textClickXY"])(/^领金币$/))(0x0, _0x487b54["HBack"])();
      else break;
    }
  }

  function _0x1d10ef() {
    var _0x346c6a = _0x1cf3e9;
    (0x0, _0x436557["wkllq_ok"])(_0xfe2f81["wkllqapp"], _0x1f73cc);
  }

  function _0x2b4d8a(_0x248d99) {
    var _0x2c6afb = _0x1cf3e9;
    for (var _0x9e96 = 0x0; _0x9e96 < 0x2; _0x9e96++) {
      if (_0x3d0448()) continue;
      if ((0x0, _0x43250f['OCRText'])(_0x1f73cc)) return (0x0, _0x42cd1b["hlog"])("继续执行下一个任务"), !![];
      if (_0x35556c(M02_app_registry)) {
        sleep(0x1388);
        if (_0x3d0448()) continue;
        if ((0x0, _0x43250f['OCRText'])(_0x1f73cc)) return (0x0, _0x42cd1b["hlog"])("进入任务页,任务识别中"), !![];
      }
    }
    return !_0x248d99 && (0x0, _0x42cd1b["findRw"])(_0x2b4d8a, _0x4c155f, _0x14bb43), ![];
  }

  function _0x3d0448() {
    var _0x1b0270 = _0x1cf3e9,
      _0x312838 = (0x0, _0x43250f["doCaptureScreen"])();
    if ((0x0, _0x43250f["OCRMatchClick"])(_0x312838, /^立即搜索领.*/)) return (0x0, _0x42cd1b["scroll_up_quick"])(0xa), (0x0, _0x487b54["HBack"])(), !![];
    else {
      if ((0x0, _0x43250f["OCRMatchClick"])(_0x312838, /^看视频.*领.*|再看一条领.*\d+/)) return _0x1d10ef(), !![];
      else {
        if ((0x0, _0x43250f["OCRMatchClick"])(_0x312838, /^(坚持退出|开心收下|关闭广告|残忍离开)$/)) return !![];
      }
    }
  }

  function _0x35556c(_0x254bb4) {
    var _0x39c13c = _0x1cf3e9;
    sleep(0x1388);
    if (_0x4eb003["hidMode"]) return (0x0, _0x43250f["OCRClickMenu"])(_0x254bb4, /^(首页)$/, /^(视频|发现)$/, /^(金币|我的金币|赚钱)$/, /^继续看$/, /^我的$/);
    else {
      _0x107f98 = className("android.widget.TabWidget")['findOnce']();
      if (_0x107f98)
        for (var _0x51d17d = 0x0; _0x51d17d < _0x107f98["childCount"](); _0x51d17d++) {
          var _0x1ea6f9 = _0x107f98["child"](_0x51d17d);
          if (_0x1ea6f9 && _0x1ea6f9["clickable"]())
            for (var _0x40c5c5 = 0x0; _0x40c5c5 < _0x1ea6f9["childCount"](); _0x40c5c5++) {
              var _0x458034 = _0x1ea6f9["child"](_0x40c5c5);
              if (_0x254bb4 == 0x0) {
                if (_0x458034 && _0x458034['text']() == '首页') return (0x0, _0x42cd1b["cClick"])(_0x1ea6f9);
              }
              if (_0x254bb4 == 0x1) {
                if (_0x458034 && (_0x458034["text"]() == '视频' || _0x458034["text"]() == '发现')) return (0x0, _0x42cd1b["cClick"])(_0x1ea6f9);
              }
              if (_0x254bb4 == 0x2) {
                if (_0x458034 && (_0x458034["text"]() == "我的金币" || _0x458034["text"]() == '金币' || _0x458034["text"]() == '赚钱')) return (0x0, _0x42cd1b["cClick"])(_0x1ea6f9);
              }
            }
        }
    }
  }

  function _0x11c743(_0x2f03aa) {
    var _0x154689 = _0x1cf3e9;
    if (!_0x2f03aa) {
      _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("任务开始：签到领金币");
      var _0x4e79ca = (0x0, _0x43250f["OCRResult"])(/^(今天|签到|明日签到|7天签到)/, !![]);
      if ((0x0, _0x43250f["OCRMatch"])(_0x4e79ca, /明日签到/) || (0x0, _0x43250f["OCRFindNextByResult"])(_0x4e79ca, /7天签到/, /明日再来/, 0x6)) return (0x0, _0x37806e["setQiandaoStatus"])(_0x14bb43), !![];
      else {
        if ((0x0, _0x43250f["OCRMatchClick"])(_0x4e79ca, /^今天|^签到|^去签到/)) {} else {
          if ((0x0, _0x43250f["OCRClickNextByResult"])(_0x4e79ca, /7天签到/, /^待领取$/, 0x14)) return (0x0, _0x43250f["OCRClick"])(/收下红包/), (0x0, _0x37806e["setQiandaoStatus"])(_0x14bb43), !![];
        }
      }
    }
    var _0x4e79ca = (0x0, _0x43250f['doCaptureScreen'])();
    if ((0x0, _0x43250f["OCRMatchClick"])(_0x4e79ca, /^收下红包$/)) {} else {
      if ((0x0, _0x43250f['OCRMatchClick'])(_0x4e79ca, /^额外再领/)) _0x1d10ef();
      else {
        if ((0x0, _0x43250f["OCRMatchClick"])(_0x4e79ca, /^立即领取/)) {}
      }
    }
    _0x23e214();
  }

  function _0xb69a6() {
    var _0xe355d4 = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("任务开始：开宝箱");
    var _0x65a937 = (0x0, _0x43250f["doCaptureScreen"])();
    (0x0, _0x42cd1b["dlog"])(_0x65a937), (0x0, _0x43250f["OCRMatchClick"])(_0x65a937, /开宝箱得金币|开宝活得金币|立领.*\d+/) ? _0x23e214(): (0x0, _0x42cd1b["hlog"])('开宝箱未到时间');
  }

  function _0x3d6e78() {
    var _0x423697 = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("任务开始：看广告");
    var _0x2c05db = /看广告视频.*|看广告.*赚金币/,
      _0x5abbad = (0x0, _0x43250f["OCRResult"])(_0x2c05db);
    if ((0x0, _0x43250f['OCRFindNextByResult'])(_0x5abbad, _0x2c05db, /\d+分\d+秒/))(0x0, _0x42cd1b["hlog"])("看广告赚金币未到时间");
    else(0x0, _0x43250f['OCRMatchClick'])(_0x5abbad, _0x2c05db) && _0x1d10ef();
  }

  function _0x17a669() {
    var _0x30d76a = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("任务开始：红包雨");
    var _0xae84f2 = /^金币红包雨.*/,
      _0x41ac3b = (0x0, _0x43250f['OCRResult'])(_0xae84f2);
    if ((0x0, _0x43250f["OCRFindNextByResult"])(_0x41ac3b, _0xae84f2, /稍后再领|开启下一波红包雨/)) {
      (0x0, _0x42cd1b["hlog"])("红包雨未到时间");
      return;
    } else {
      if ((0x0, _0x43250f["OCRMatchClick"])(_0x41ac3b, _0xae84f2)) {
        (0x0, _0x42cd1b["randomTap"])(0xa), sleep(0x2710), _0x41ac3b = (0x0, _0x43250f["doCaptureScreen"])();
        if ((0x0, _0x43250f["OCRMatchClick"])(_0x41ac3b, /看视频翻倍领取/)) _0x1d10ef();
        else {
          if ((0x0, _0x43250f["OCRMatchClick"])(_0x41ac3b, /直接领取/)) {}
        }
      }
    }
  }

  function _0x59a738() {
    var _0x1d0323 = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("任务开始：领饭补");
    var _0xe3bdf7 = (0x0, _0x43250f['OCRResult'])(/吃饭赚钱.*/);
    if ((0x0, _0x43250f['OCRMatchClick'])(_0xe3bdf7, /吃饭赚钱.*/)) {
      sleep(0x2710);
      if ((0x0, _0x42cd1b['textClickXY'])(/看视频领.*|.*补贴\d+金币/)) {
        var _0xe3bdf7 = (0x0, _0x43250f["doCaptureScreen"])();
        if ((0x0, _0x43250f["OCRMatchClick"])(_0xe3bdf7, /看视频再得.*/)) {
          _0x1d10ef(), (0x0, _0x487b54['HBack'])();
          return;
        } else !(0x0, _0x43250f["OCRMatchClick"])(_0xe3bdf7, /开心收下/) && (_0x1d10ef(), (0x0, _0x487b54["HBack"])());
      } else(0x0, _0x42cd1b['hlog'])("领取饭补未到时间"), (0x0, _0x487b54['HBack'])();
    }
  }

  function _0x1dd836() {
    var _0x180a25 = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])('预约领金币');
    var _0x141838 = /.*(预约领金币|已预约).*/,
      _0x292dbd = (0x0, _0x43250f["OCRResult"])(_0x141838);
    if ((0x0, _0x43250f["OCRMatch"])(_0x292dbd, /已预约.*后可.*/)) return !![];
    if ((0x0, _0x43250f["OCRMatchClick"])(_0x292dbd, _0x141838)) {
      var _0x292dbd = (0x0, _0x43250f["doCaptureScreen"])();
      if ((0x0, _0x43250f["OCRMatchClick"])(_0x292dbd, /立即预约领取/))(0x0, _0x43250f['OCRClick'])(/^好的$/), (0x0, _0x487b54["HBack"])();
      else(0x0, _0x43250f["OCRMatchClick"])(_0x292dbd, /一键领取/) && (_0x23e214(), (0x0, _0x43250f["OCRClick"])(/继续预约/));
    }
  }

  function _0x1f82a3() {
    var _0x41ebd1 = _0x1cf3e9;
    _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])("任务开始：刷视频");
    if (_0x35556c(M01_config_global)) {
      for (var _0xd32f91 = 0x0; _0xd32f91 < 0x3; _0xd32f91++) {
        if ((0x0, _0x43250f["OCRClick"])(/^短剧$/)) break;
        else(0x0, _0x487b54["HBack"])(), _0x35556c(M01_config_global);
      }(0x0, _0x42cd1b["hlog"])("看短剧" + _0x4eb003['wkllq_kanshiping_min'] + '分钟');
      var _0x272f13 = 0x0;
      while (!![]) {
        sleep(0xea60), _0x272f13++, toast("看短剧" + _0x272f13 + '分钟');
        if (_0x272f13 >= _0x4eb003["wkllq_kanshiping_min"]) break;
      }(0x0, _0x487b54["HBack"])(), (0x0, _0x487b54["HBack"])(), _0x36ea8e();
    }
  }

  function _0x36ea8e() {
    var _0x5778ab = _0x1cf3e9;
    (0x0, _0x487b54["HBack"])(), _0x2b4d8a(), (0x0, _0x42cd1b["hlog"])('领取视频奖励');
    var _0x26a164 = (0x0, _0x43250f["OCRResult"])(/看短剧.*赚金币/);
    for (var _0x8c5117 = 0x0; _0x8c5117 < 0x5; _0x8c5117++) {
      if ((0x0, _0x43250f["OCRMatchClick"])(_0x26a164, /立即领奖/)) !_0x23e214() && (0x0, _0x42cd1b["textClickXY"])(/我知道了/), _0x26a164 = (0x0, _0x43250f['doCaptureScreen'])();
      else break;
    }
  }

  function _0x23e214() {
    var _0x1061f7 = _0x1cf3e9;
    if ((0x0, _0x487b54["HFindClickXY"])(/看视频再领.*|看视频额外再领.*|看视频领取.*|看视频.*金币|再看一条视频领.*/)) return _0x1d10ef(), !![];
  }
}