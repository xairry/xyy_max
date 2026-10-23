function(_0x19ea8d, _0x5c8853, _0x552a8b) {
  var _0x3afe17 = a1_0x4b7c;
  Object["defineProperty"](_0x5c8853, "__esModule", {
    'value': !![]
  }), _0x5c8853["ucjs"] = _0x52aae9;
  var _0x5b253d = _0x552a8b(M02_app_registry),
    _0x3c8e22 = _0x552a8b(M00_utils_ui_helpers),
    _0x49296a = _0x552a8b(M04_push_report),
    _0x23a5ca = _0x552a8b(M01_config_global),
    _0x5d8706 = _0x552a8b(M07_ad_close),
    _0x43179 = _0x552a8b(M08_check_task),
    _0x33290a = _0x552a8b(M03_ocr_engine),
    _0x1cd876 = {
      'ucjs_qiandao': _0x2748f9,
      'ucjs_kaibaoxiang': _0x3d9431,
      'ucjs_kanguanggao': _0x3fca09
    },
    _0x3da376, _0x23f9f9, _0x59ea4e = /现金余额¥\d+.*|新人专属福利|新人签到\d+.*|去农场施肥|今日任务|看视频领元宝|吃饭补贴|使用UC极速版领元宝|看视频.*赚元宝.*|开宝箱得元宝|看视频.*赚元宝.*/;

  function _0x52aae9() {
    var _0x2dbc68 = _0x3afe17;
    try {
      _0x23f9f9 = _0x5b253d["ucjsapp"], _0xc83a76(), (0x0, _0x3c8e22["execFuncs"])(_0x1cd876, _0x23a5ca["ucjs_rw_list"]), _0x178e45(), _0x8e21da();
    } catch (_0x4dba06) {
      (0x0, _0x3c8e22["handleAppError"])(_0x4dba06);
    }
  }

  function _0xc83a76() {
    var _0x46b8f5 = _0x3afe17;
    _0x569b54(), (0x0, _0x3c8e22["execFirstRw"])(_0x23f9f9, _0x20ce2f, function() {
      _0x2748f9(!![]);
    });
  }

  function _0x569b54() {}

  function _0x8e21da() {
    var _0x1076ad = _0x3afe17;
    _0x20ce2f(), (0x0, _0x3c8e22["hlog"])('计算收益');
    var _0x47ebb0 = (0x0, _0x43179["getObjectNumber"])(/我的元宝.*\d+/),
      _0x3e0b29 = (0x0, _0x43179['getObjectFloat'])(/¥\d+\.\d+/);
    (0x0, _0x49296a["setGold"])(_0x5b253d["ucjsapp"], _0x47ebb0, _0x3e0b29);
  }

  function _0x48c402(_0x25462f) {
    var _0x4ac832 = _0x3afe17;
    sleep(0xbb8);
    if (_0x25462f == 0x0) {
      _0x3da376 = textMatches(/首页/)["findOnce"]();
      if (_0x3da376 && _0x3da376["parent"]() && (0x0, _0x3c8e22["cClick"])(_0x3da376['parent']())) return !![];
    }
    if (_0x25462f == 0x1) {
      _0x3da376 = textMatches(/小说/)["findOnce"]();
      if (_0x3da376 && _0x3da376["parent"]() && (0x0, _0x3c8e22["cClick"])(_0x3da376["parent"]())) return !![];
    }
    if (_0x25462f == 0x2) {
      _0x3da376 = textMatches(/菜单/)['findOnce']();
      if (_0x3da376 && _0x3da376["parent"]() && (0x0, _0x3c8e22["cClick"])(_0x3da376["parent"]())) return !![];
    }
    if (_0x25462f == 0x3) {
      _0x3da376 = textMatches(/网盘/)["findOnce"]();
      if (_0x3da376 && _0x3da376['parent']() && (0x0, _0x3c8e22["cClick"])(_0x3da376['parent']())) return !![];
    }
    if (_0x25462f == 0x4) {
      _0x3da376 = textMatches(/任 务|我的|任务/)["findOnce"]();
      if (_0x3da376 && _0x3da376['parent']() && (0x0, _0x3c8e22["cClick"])(_0x3da376['parent']())) return !![];
      if ((0x0, _0x3c8e22['idClick'])("id_welfare_box_toolbar")) return !![];
    }
  }

  function _0x20ce2f(_0x3ffdd8) {
    var _0x36823d = _0x3afe17;
    sleep(0xbb8);
    if (textMatches(_0x59ea4e)["findOnce"]()) return (0x0, _0x3c8e22["hlog"])("继续执行下一个任务"), _0x1449ba(), !![];
    if (_0x48c402(M04_push_report)) {
      if (textMatches(_0x59ea4e)["findOne"](0x1388)) return (0x0, _0x3c8e22['hlog'])("进入任务页,任务识别中"), sleep(0x1388), _0x1449ba(), !![];
    }!_0x3ffdd8 && (0x0, _0x3c8e22['findRw'])(_0x20ce2f, _0x569b54, _0x23f9f9);
  }

  function _0x178e45() {}

  function _0x2748f9(_0x29ff5c) {
    var _0x5f219b = _0x3afe17;
    if (!_0x29ff5c) {
      _0x20ce2f(), (0x0, _0x3c8e22['hlog'])("任务开始:签到");
      if (textMatches(/明天签到.*|.*已签到.*/)["findOnce"]()) return (0x0, _0x49296a["setQiandaoStatus"])(_0x23f9f9), !![];
    }(0x0, _0x3c8e22["textClick"])(/领取/), (0x0, _0x33290a["OCRClick"])(/翻倍领\d+元宝/) && (0x0, _0x5d8706["closeAd"])(_0x23f9f9, _0x59ea4e), _0x1449ba();
  }

  function _0x1449ba() {
    var _0x1b6865 = _0x3afe17;
    for (var _0x401418 = 0x0; _0x401418 < 0xa; _0x401418++) {
      (0x0, _0x3c8e22["textClick"])(/看.*视频再.*\d+元宝/) && (0x0, _0x5d8706['closeAd'])(_0x23f9f9, _0x59ea4e), (0x0, _0x3c8e22["textClick"])(/去.*再得\d+元宝/) && ((0x0, _0x3c8e22["textClick"])(/始终允许/), sleep(0x1388), (0x0, _0x3c8e22['backApp'])(_0x23f9f9)), (0x0, _0x3c8e22["textClick"])(/好的/);
    }
  }

  function _0x3d9431() {
    var _0x421aca = _0x3afe17;
    _0x20ce2f(), (0x0, _0x3c8e22["hlog"])("任务开始：开宝箱"), (0x0, _0x33290a["OCRClick"])(/开宝箱得.*元宝/) && ((0x0, _0x3c8e22["textClick"])(/直接领/), _0x1449ba());
  }

  function _0x3fca09() {
    var _0xdbf111 = _0x3afe17;
    (0x0, _0x3c8e22["hlog"])("任务开始：看广告");
    for (var _0x1d9513 = 0x0; _0x1d9513 < 0x5; _0x1d9513++) {
      _0x20ce2f(), _0x3da376 = textMatches(/看视频.*赚元宝.*/)['findOnce']();
      if (!_0x3da376) break;
      if ((0x0, _0x43179["compareValues"])(_0x3da376['text']())) break;
      var _0x46f299 = (0x0, _0x33290a['doCaptureScreen'])();
      if ((0x0, _0x33290a["OCRClickNextByResult"])(_0x46f299, /看视频.*赚元宝.*/, /去完成/, 0x5))(0x0, _0x5d8706["closeAd"])(_0x23f9f9, _0x59ea4e), _0x1449ba();
      else {
        if ((0x0, _0x33290a["OCRMatchClick"])(_0x46f299, /看视频.*赚元宝.*/))(0x0, _0x5d8706["closeAd"])(_0x23f9f9, _0x59ea4e), _0x1449ba();
        else {
          var _0x59d1ca = _0x3da376["parent"]();
          if (_0x59d1ca) {
            var _0x898379 = _0x59d1ca["find"](text("去完成"));
            _0x898379 && _0x898379["length"] > 0x0 && (((0x0, _0x3c8e22["cClick"])(_0x898379[0x0]) || (0x0, _0x3c8e22["pClick"])(_0x898379[0x0])) && ((0x0, _0x5d8706["closeAd"])(_0x23f9f9, _0x59ea4e), _0x1449ba()));
          }
        }
      }
    }
  }
}