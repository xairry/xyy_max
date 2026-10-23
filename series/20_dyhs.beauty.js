function(_0x5d635b, _0x3da3f0, _0x1ed78d) {
  var _0x5e9fe8 = a1_0x4b7c;
  Object['defineProperty'](_0x3da3f0, '__esModule', {
    'value': !![]
  }), _0x3da3f0["dyhs"] = _0x36a8f1;
  var _0x9dec33 = _0x1ed78d(M02_app_registry),
    _0x395d52 = _0x1ed78d(M00_utils_ui_helpers),
    _0x4317dd = _0x1ed78d(M07_ad_close),
    _0x6f1dd5 = _0x1ed78d(M04_push_report),
    _0xcc49f5 = _0x1ed78d(M08_check_task),
    _0x496276 = _0x1ed78d(M09_video_book_common),
    _0x20cbfa = _0x1ed78d(M01_config_global),
    _0x90cf3c = _0x1ed78d(M03_ocr_engine),
    _0x310346 = _0x1ed78d(M06_storage_card),
    _0x3b4964 = _0x1ed78d(M05_hid_control),
    _0x57ff7 = _0x1ed78d(M10_activity_consts),
    _0x2fe320, _0x480a8a, _0x26e62e = /当前火苗|限时福利|更多任务|日常任务|我的火苗|开宝箱得火苗|发现通讯录好友|看直播领火苗/,
    _0x11ca86 = {
      'dyhs_qiandao': _0x3dad2e,
      'dyhs_kaibaoxiang': _0x513cf8,
      'dyhs_kanguanggao': _0x626ee2,
      'dyhs_kanshipin': _0xb3fe7e
    };

  function _0x36a8f1() {
    var _0x33cc9d = _0x5e9fe8;
    try {
      _0x480a8a = _0x9dec33["dyhsapp"], _0x29966b(), (0x0, _0x395d52["execFuncs"])(_0x11ca86, _0x20cbfa["dyhs_rw_list"]), _0x141785();
    } catch (_0x589fb8) {
      (0x0, _0x395d52["handleAppError"])(_0x589fb8);
    }
  }

  function _0x141785() {
    var _0x3482d2 = _0x5e9fe8;
    _0x78fa70(), (0x0, _0x395d52["hlog"])("计算收益"), (0x0, _0x395d52['scroll_down_quick_cnt'])(0x3);
    var _0x139331, _0x443085, _0x1a0168 = (0x0, _0x90cf3c["doCaptureScreen"])(),
      _0x1880ea = (0x0, _0x90cf3c["OCRMatch"])(_0x1a0168, /今日领取火苗.*/);
    _0x1880ea && (_0x139331 = (0x0, _0xcc49f5["getTextNumber"])(_0x1880ea["text"]));
    (0x0, _0x90cf3c["OCRMatchClick"])(_0x1a0168, /去提现/) && (_0x443085 = (0x0, _0xcc49f5["getObjectFloat"])(/\d+\.\d+/));
    var _0x5eb8c7 = (0x0, _0x395d52['dxClickGold'])(function() {
      return !![];
    }, _0x480a8a, _0x443085);
    _0x5eb8c7 && ((0x0, _0x395d52["hlog"])("提现成功"), (0x0, _0x310346["setTiXian"])(_0x480a8a, _0x5eb8c7), _0x443085 = _0x443085 - _0x5eb8c7), (0x0, _0x6f1dd5["setGold"])(_0x9dec33["dyhsapp"], _0x139331, _0x443085);
  }

  function _0x29966b() {
    var _0x58fe8d = _0x5e9fe8;
    _0x5d932a(), (0x0, _0x395d52["execFirstRw"])(_0x480a8a, _0x78fa70, function() {
      _0x3dad2e(!![]), (0x0, _0x3b4964['HBack'])(), _0x2ce520();
    });
  }

  function _0x5d932a() {
    var _0x22c29d = _0x5e9fe8;
    (0x0, _0x3b4964["HBack"])(), (0x0, _0x90cf3c['OCRClickSimilarImage'])(_0x57ff7["DX_CLOSE_X"], 0.65), _0x2ce520();
  }

  function _0x19bd6f() {
    var _0x47ea51 = _0x5e9fe8;
    return (0x0, _0x4317dd["dx_ok"])(_0x9dec33["dyhsapp"]);
  }

  function _0x2ce520() {
    var _0x2b0271 = _0x5e9fe8;
    if (_0x20cbfa["hidMode"])
      for (var _0x581fbd = 0x0; _0x581fbd < 0x3; _0x581fbd++) {
        if ((0x0, _0x90cf3c["OCRClickSimilarImageTop"])(_0x57ff7["DYHS_HOME"], 0.5)) return !![];
        (0x0, _0x3b4964["HBack"])(), (0x0, _0x395d52["scroll_down_quick_cnt"])(0x1), sleep(0x7d0);
      } else {
        if ((0x0, _0x395d52["descClickXY"])(/领火苗.*/)) return !![];
        else {
          if ((0x0, _0x395d52["descClickXY"])(/侧边栏.*/)) {} else console["hide"](), sleep(0x3e8), swipe(0x32, 0x64, _0x20cbfa["deviceWidth"] - 0xc8, 0x64, 0x3e8), sleep(0x3e8), (0x0, _0x395d52["safeConsoleShow"])(), sleep(0x3e8);
          return (0x0, _0x395d52["textClick"])(/火苗/);
        }
      }
  }

  function _0x78fa70(_0x1b73ff) {
    var _0x5527d1 = _0x5e9fe8;
    sleep(0x1388);
    if ((0x0, _0x90cf3c["OCRText"])(_0x26e62e)) return (0x0, _0x395d52["hlog"])('继续执行下一个任务'), !![];
    if (_0x2ce520()) {
      sleep(0x1388);
      if ((0x0, _0x90cf3c['OCRText'])(_0x26e62e)) return (0x0, _0x395d52["hlog"])("进入任务页,任务识别中"), !![];
    }!_0x1b73ff && (0x0, _0x395d52["findRw"])(_0x78fa70, _0x5d932a, _0x480a8a);
  }

  function _0x3dad2e(_0x26f61d) {
    var _0x48ae9a = _0x5e9fe8;
    if (!_0x26f61d) {
      _0x78fa70(), (0x0, _0x395d52["hlog"])("任务开始：签到领金币");
      var _0x5bdd69 = (0x0, _0x90cf3c["OCRResult"])(/签到/);
      (0x0, _0x90cf3c["OCRClickNextByResult"])(_0x5bdd69, /签到/, /去领取|去签到/);
    }
    var _0x540c39 = (0x0, _0x90cf3c["doCaptureScreen"])();
    if ((0x0, _0x90cf3c["OCRMatchClick"])(_0x540c39, /点击领取|立即签到.*火苗/)) {
      if ((0x0, _0x90cf3c["OCRClick"])(/看视频再赚.*|看视频签到.*/)) return _0x19bd6f(), (0x0, _0x6f1dd5['setQiandaoStatus'])(_0x9dec33["dyhsapp"]), !![];
    } else {
      if ((0x0, _0x90cf3c['OCRMatchClick'])(_0x540c39, /看视频再赚.*|看视频签到.*/)) return _0x19bd6f(), (0x0, _0x6f1dd5["setQiandaoStatus"])(_0x9dec33["dyhsapp"]), !![];
      else {
        if ((0x0, _0x90cf3c["OCRMatch"])(_0x540c39, /明日签到/)) return (0x0, _0x6f1dd5["setQiandaoStatus"])(_0x9dec33["dyhsapp"]), !![];
      }
    }(0x0, _0x3b4964['HBack'])();
  }

  function _0x513cf8() {
    var _0x55b4e9 = _0x5e9fe8;
    _0x78fa70(), (0x0, _0x395d52['hlog'])("任务开始：开宝箱"), (0x0, _0x90cf3c["OCRClick"])(/宝箱|宝.*得/) ? (0x0, _0x90cf3c["OCRClick"])(/看广告视频再赚.*/) ? _0x19bd6f() : (0x0, _0x3b4964["HBack"])() : (0x0, _0x395d52["hlog"])("开宝箱未到时间");
  }

  function _0x626ee2() {
    var _0x5edd22 = _0x5e9fe8;
    _0x78fa70(), (0x0, _0x395d52["hlog"])("任务开始：看广告"), (0x0, _0x90cf3c["OCRClickNext"])(/限时任务赚火苗.*/, /去领取/) ? (0x0, _0x90cf3c['OCRText'])(/限时任务赚火苗.*/) ? (0x0, _0x395d52["hlog"])("看广告未到时间") : _0x19bd6f() : (0x0, _0x395d52["hlog"])("看广告未到时间");
  }

  function _0xb3fe7e() {
    var _0x1fc45e = _0x5e9fe8;
    _0x78fa70(), (0x0, _0x395d52['hlog'])("任务开始：刷视频"), (0x0, _0x3b4964["HBack"])(), (0x0, _0x3b4964["HBack"])(), (0x0, _0x496276["xs_kanshipin"])(_0x20cbfa["dyhs_kanshiping_min"], function() {
      var _0x1cff5f = _0x1fc45e;
      while (!![]) {
        sleep(0xea60), (0x0, _0x3b4964["HBack"])(), (0x0, _0x395d52["backApp"])(_0x480a8a);
      }
    });
  }
}