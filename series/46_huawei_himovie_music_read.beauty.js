function(_0x45cf18, _0x3f3ce9, _0x18b493) {
  var _0xd7fba = a1_0x4b7c;
  Object["defineProperty"](_0x3f3ce9, "__esModule", {
    'value': !![]
  }), _0x3f3ce9["himovie"] = _0x47e914, _0x3f3ce9['hwmusic'] = _0x38d451, _0x3f3ce9['hwread'] = _0x2ca4f3, _0x3f3ce9["tixian"] = _0x2d5268;
  var _0x38c2 = _0x18b493(M02_app_registry),
    _0x4b23dc = _0x18b493(M00_utils_ui_helpers),
    _0x188f33 = _0x18b493(M04_push_report),
    _0x9366b9 = _0x18b493(M01_config_global),
    _0x10125e = _0x18b493(M07_ad_close),
    _0xc8a53b = _0x18b493(M03_ocr_engine),
    _0x2f8c74 = _0x18b493(M09_video_book_common),
    _0x3d0c0d = _0x18b493(M05_hid_control),
    _0x32aae5 = _0x18b493(M08_check_task),
    _0x5d16c8 = _0x18b493(M06_storage_card),
    _0x44ecc9 = /每日签到|每日福利|金豆收益|现金收益|看.*视频得更多.*金豆|看视频再得.*金豆|看视频赚金豆|恭喜你获得/,
    _0x59cca6 = {
      'himovie_qiandao': _0x1b5a6d,
      'himovie_kanguanggao': _0x4e0c15,
      'himovie_yuyue': _0x1e2c12,
      'himovie_anzhuang': _0x1643b1,
      'himovie_kanduanju': _0x2818d3
    },
    _0x6c4aa5 = {
      'hwmusic_qiandao': _0x1b5a6d,
      'hwmusic_kanguanggao': _0x4e0c15,
      'hwmusic_yuyue': _0x1e2c12,
      'hwmusic_anzhuang': _0x1643b1,
      'hwmusic_tingge': _0x2fae9e
    },
    _0x516b1f = {
      'hwread_qiandao': _0x1b5a6d,
      'hwread_kanguanggao': _0x4e0c15,
      'hwread_yuyue': _0x1e2c12,
      'hwread_anzhuang': _0x1643b1,
      'hwread_dushu': _0x12118f
    },
    _0x1bb460, _0x54855a, _0x4e5153 = /看.*视频得更多.*金豆|看视频再.*金豆|一键领取|明日领取|立即签到.*|打开签到提醒|恭喜你获得.*/,
    _0x56e3c8;

  function _0x47e914() {
    var _0x554012 = _0xd7fba;
    try {
      _0x54855a = _0x38c2["himovieapp"], _0x46c2c9(), (0x0, _0x4b23dc["execFuncs"])(_0x59cca6, _0x9366b9["himovie_rw_list"]), _0x2444d2(), _0xf3d0d2();
    } catch (_0x1cfe93) {
      (0x0, _0x4b23dc["handleAppError"])(_0x1cfe93);
    }
  }

  function _0x38d451() {
    var _0x386dde = _0xd7fba;
    try {
      _0x54855a = _0x38c2["hwmusicapp"], _0x46c2c9(), (0x0, _0x4b23dc["execFuncs"])(_0x6c4aa5, _0x9366b9["hwmusic_rw_list"]), _0x2444d2(), _0xf3d0d2();
    } catch (_0x5aa823) {
      (0x0, _0x4b23dc["handleAppError"])(_0x5aa823);
    }
  }

  function _0x2ca4f3() {
    var _0x18a065 = _0xd7fba;
    try {
      _0x54855a = _0x38c2["hwreadapp"], _0x46c2c9(), (0x0, _0x4b23dc["execFuncs"])(_0x516b1f, _0x9366b9["hwread_rw_list"]), _0x2444d2(), _0xf3d0d2();
    } catch (_0x4899eb) {
      (0x0, _0x4b23dc['handleAppError'])(_0x4899eb);
    }
  }

  function _0x46c2c9() {
    var _0x468f6f = _0xd7fba;
    _0x56e3c8 = (0x0, _0x4b23dc["getNonSystemPackages"])(), _0x2849dd(), (0x0, _0x4b23dc['execFirstRw'])(_0x54855a, _0x28e511, function() {
      _0x1b5a6d(!![]);
    });
  }

  function _0x2849dd() {
    var _0x3bf403 = _0xd7fba;
    (0x0, _0x4b23dc["idClick"])("close"), (0x0, _0x4b23dc["descClick"])(/关闭/), _0x36360f(M02_app_registry), _0x3d44e1();
  }

  function _0xf3d0d2() {
    var _0x35d47f = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc["hlog"])("计算收益");
    var _0x12d801 = 0x0,
      _0xd132b0 = 0x0;
    (0x0, _0x4b23dc["scroll_down_quick_cnt"])(0x3);
    var _0x207ed5 = (0x0, _0xc8a53b["doCaptureScreen"])(),
      _0x1b422d = (0x0, _0xc8a53b["OCRFindNextByResult"])(_0x207ed5, /现金收益/, /\d+/, 0x3);
    _0x1b422d && (_0x12d801 = (0x0, _0x32aae5["getTextNumber"])(_0x1b422d["text"]));
    var _0x4166cf = (0x0, _0xc8a53b["OCRFindNextByResult"])(_0x207ed5, /金豆.*/, /\d+\.\d+/, 0x6);
    _0x4166cf && (_0xd132b0 = (0x0, _0x32aae5["getTextFloat"])(_0x4166cf["text"]), _0x12d801 == _0xd132b0 && (_0xd132b0 = 0x0));
    var _0x3ad7ed = _0x2d5268(function() {
      var _0x4e0bee = _0x35d47f;
      return (0x0, _0xc8a53b["OCRClick"])(/去提现|元/);
    }, _0x54855a, _0xd132b0);
    _0x3ad7ed && ((0x0, _0x4b23dc["hlog"])("提现成功"), (0x0, _0x5d16c8["setTiXian"])(_0x54855a, _0x3ad7ed), _0xd132b0 = _0xd132b0 - _0x3ad7ed), (0x0, _0x188f33["setGold"])(_0x54855a, _0x12d801, _0xd132b0), (0x0, _0x4b23dc["uninstallNewPkgs"])(_0x56e3c8, _0x54855a);
  }

  function _0x2d5268(_0x5b27c2, _0x1e9d47, _0xc3051f) {
    var _0x29f1e9 = _0xd7fba;
    !_0xc3051f ? _0xc3051f = 0x0 : _0xc3051f = parseFloat(_0xc3051f);
    (0x0, _0x4b23dc["dlog"])("tixian:" + _0xc3051f), (0x0, _0x4b23dc["dlog"])((0x0, _0x5d16c8["getTiXian"])(_0x1e9d47)), (0x0, _0x4b23dc["dlog"])((0x0, _0x32aae5['checkAppRwList'])(_0x1e9d47, 'tixian'));
    if (!(0x0, _0x5d16c8["getTiXian"])(_0x1e9d47) && (0x0, _0x32aae5["checkAppRwList"])(_0x1e9d47, "tixian")) {
      if (_0x5b27c2()) {
        var _0x476ec7 = 0x0;
        if ((0x0, _0x4b23dc["textClick"])(/20元/)) _0x476ec7 = 0x14;
        else {
          if ((0x0, _0x4b23dc["textClick"])(/3元/)) _0x476ec7 = 0x3;
          else(0x0, _0x4b23dc["textClick"])(/1元/) && (_0x476ec7 = 0x1);
        }
        if ((0x0, _0x4b23dc["idClick"])("red_packet_draw_btn")) return _0x476ec7;
      }
    }
  }

  function _0x36360f(_0x3d8a61) {
    var _0x5d2e5a = _0xd7fba;
    sleep(0xbb8);
    if (_0x3d8a61 == 0x2) {
      if (_0x54855a == _0x38c2["himovieapp"]) {
        _0x1bb460 = descMatches(/我的/)['id']("tabLayout")["findOnce"]();
        if ((0x0, _0x4b23dc['cClick'])(_0x1bb460) || (0x0, _0xc8a53b["OCRClick"])(/^我的$/)) {
          (0x0, _0x4b23dc["idClick"])('close'), (0x0, _0x4b23dc["scroll_up_quick_cnt"])(0x2);
          if ((0x0, _0x4b23dc["textClick"])(/天天赚现金/)) return !![];
        }
        _0x1bb460 = descMatches(/赚钱/)['id']("tabLayout")['findOnce']();
        if ((0x0, _0x4b23dc['cClick'])(_0x1bb460)) return !![];
      } else {
        if (_0x54855a == _0x38c2["hwmusicapp"]) {
          _0x1bb460 = descMatches(/我的/)['id']("content")['findOnce']();
          if ((0x0, _0x4b23dc['cClick'])(_0x1bb460) || (0x0, _0xc8a53b["OCRClick"])(/^我的$/)) {
            (0x0, _0x4b23dc["idClick"])("close"), (0x0, _0x4b23dc["scroll_up_center"])(0x1);
            if ((0x0, _0x4b23dc["idClick"])("task_center")) return !![];
            if ((0x0, _0x4b23dc['textClickXY'])(/福利中心/)) return !![];
          }
          if ((0x0, _0xc8a53b["OCRClick"])(/^我的$/)) {
            (0x0, _0x4b23dc["idClick"])("close"), (0x0, _0x4b23dc["scroll_up_center"])(0x1);
            if ((0x0, _0xc8a53b["OCRClick"])(/福利中心/)) return !![];
          }
        } else {
          if (_0x54855a == _0x38c2["hwreadapp"]) {
            _0x1bb460 = textMatches(/我的/)["idContains"]("tab")["findOnce"]();
            if ((0x0, _0x4b23dc["cClick"])(_0x1bb460) || (0x0, _0xc8a53b['OCRClick'])(/^我的$/)) {
              (0x0, _0x4b23dc['idClick'])('close');
              if ((0x0, _0x4b23dc["textClick"])(/福利中心.*/) || (0x0, _0x4b23dc["textClickXY"])(/每天领取金豆.*/)) return !![];
            }
            if ((0x0, _0x4b23dc['idClick'])("content_common_tab_h5tab_id")) return !![];
          }
        }
      }
    }
  }

  function _0x28e511(_0x5e2cf8) {
    var _0xa821af = _0xd7fba;
    sleep(0x1388);
    if (textMatches(_0x44ecc9)["findOnce"]()) return (0x0, _0x4b23dc["hlog"])("继续执行下一个任务"), _0x283d71(), !![];
    if (_0x36360f(M02_app_registry)) {
      if (textMatches(_0x44ecc9)["findOnce"]()) return (0x0, _0x4b23dc["hlog"])("进入任务页,任务识别中"), sleep(0x1388), !![];
    }!_0x5e2cf8 && (0x0, _0x4b23dc["findRw"])(_0x28e511, _0x2849dd, _0x54855a);
  }

  function _0x2444d2() {
    _0x28e511();
  }

  function _0x1b5a6d(_0x39468b) {
    var _0x5e1010 = _0xd7fba;
    if (!_0x39468b) {
      _0x28e511(), (0x0, _0x4b23dc["hlog"])("任务开始:签到");
      var _0x752342 = (0x0, _0xc8a53b['doCaptureScreen'])();
      if ((0x0, _0xc8a53b['OCRFindNextByResult'])(_0x752342, /每日签到/, /已完成/, 0x2)) return !![];
      else {
        if ((0x0, _0xc8a53b["OCRClickNextByResult"])(_0x752342, /每日签到/, /去签到/, 0x2)) {} else {
          if ((0x0, _0xc8a53b["OCRMatchClick"])(/去签到/)) {}
        }
      }
    }
    if ((0x0, _0x4b23dc["textClick"])(/立即签到.*/)) return _0x21063f(/打开签到提醒.*|立即签到.*/), _0x283d71(), (0x0, _0xc8a53b['OCRClick'])(/看.*视频得更多.*金豆|看视频再.*金豆/) && (0x0, _0x10125e["closeAd"])(_0x54855a, _0x44ecc9), (0x0, _0x188f33["setQiandaoStatus"])(_0x54855a), !![];
  }

  function _0x21063f(_0x4fbcdb) {
    var _0x5605d2 = _0xd7fba;
    _0x1bb460 = _0x4fbcdb ? textMatches(_0x4fbcdb)['findOnce']() : null;
    if (!_0x1bb460 || !_0x1bb460['parent']()) {
      (0x0, _0x4b23dc['dlog'])("closeX 未找到锚点:" + _0x4fbcdb);
      return;
    }
    var _0x2ebe30 = [];
    _0x2bab69(_0x1bb460["parent"](), _0x2ebe30), _0x2bab69(_0x1bb460['parent']()["parent"](), _0x2ebe30), _0x515009(_0x2ebe30);
  }

  function _0x2bab69(_0x5afd0f, _0x51ec53) {
    var _0x5d5d9b = _0xd7fba;
    if (!_0x5afd0f) return;
    for (var _0x237ece = 0x0; _0x237ece < _0x5afd0f["childCount"](); _0x237ece++) {
      _0x3f5c0a(_0x5afd0f['child'](_0x237ece), _0x51ec53);
    }
  }

  function _0x3f5c0a(_0x10a572, _0x5da021) {
    var _0x58b5ed = _0xd7fba;
    if (!_0x10a572 || _0x10a572['text']() != '' || _0x10a572["className"]() != "android.widget.TextView" || !_0x10a572['clickable']()) return;
    var _0x258a2e = _0x10a572["bounds"]();
    if (!_0x258a2e || _0x258a2e["width"]() <= 0x0 || _0x258a2e["height"]() <= 0x0) return;
    var _0x4b8b55 = _0x9366b9["deviceWidth"] || device["width"],
      _0xe9037c = _0x9366b9['deviceHeight'] || device["height"];
    if (_0x258a2e["width"]() > _0x4b8b55 / 0x2 || _0x258a2e['height']() > _0xe9037c / 0x4) return;
    for (var _0x11deee = 0x0; _0x11deee < _0x5da021['length']; _0x11deee++) {
      var _0x721d5e = _0x5da021[_0x11deee]["bounds"]();
      if (_0x721d5e && _0x721d5e['left'] == _0x258a2e["left"] && _0x721d5e["top"] == _0x258a2e["top"] && _0x721d5e["right"] == _0x258a2e['right'] && _0x721d5e['bottom'] == _0x258a2e["bottom"]) return;
    }
    _0x5da021['push'](_0x10a572);
  }

  function _0x515009(_0x3ce2a0) {
    var _0x156d63 = _0xd7fba;
    if (!_0x3ce2a0 || !_0x3ce2a0["length"]) return ![];
    var _0x16b750 = (_0x9366b9['deviceWidth'] || device['width']) / 0x2,
      _0x2b032d = null,
      _0x56d116 = -0x1;
    for (var _0xff24 = 0x0; _0xff24 < _0x3ce2a0['length']; _0xff24++) {
      var _0x23787d = _0x3ce2a0[_0xff24]["bounds"]();
      if (!_0x23787d) continue;
      var _0x551f1f = Math["abs"](_0x23787d["centerX"]() - _0x16b750);
      (_0x56d116 < 0x0 || _0x551f1f < _0x56d116) && (_0x56d116 = _0x551f1f, _0x2b032d = _0x3ce2a0[_0xff24]);
    }
    if (!_0x2b032d || _0x56d116 > _0x16b750 * 0.2) return ![];
    return !!((0x0, _0x4b23dc['cClick'])(_0x2b032d) || (0x0, _0x4b23dc['pClick'])(_0x2b032d));
  }

  function _0x4e0c15() {
    var _0x499661 = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc["hlog"])("任务开始：看广告");
    var _0x37d9f5 = /看视频赚金豆/,
      _0x5f3643 = (0x0, _0xc8a53b["OCRResult"])(_0x37d9f5);
    if ((0x0, _0xc8a53b["OCRFindNextByResult"])(_0x5f3643, _0x37d9f5, /已完成/, 0x3)) return !![];
    (0x0, _0xc8a53b['OCRClickNextByResult'])(_0x5f3643, _0x37d9f5, /去观看/, 0x3) && (0x0, _0x10125e["closeAd"])(_0x54855a, _0x44ecc9);
  }

  function _0x1e2c12() {
    var _0x14e491 = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc['hlog'])("任务开始：预约");
    var _0x549a53 = /预约领金豆/,
      _0x476f3d = (0x0, _0xc8a53b["OCRResult"])(_0x549a53);
    if ((0x0, _0xc8a53b["OCRMatch"])(_0x476f3d, /已预约/)) return !![];
    if ((0x0, _0xc8a53b['OCRMatchClick'])(_0x476f3d, /去预约/)) return (0x0, _0x4b23dc["textClick"])(/立即预约领取/), _0x283d71(), _0x21063f(_0x4e5153), !![];
    else(0x0, _0xc8a53b["OCRMatchClick"])(_0x476f3d, /去领取/) && _0x3d44e1();
  }

  function _0x3d44e1() {
    var _0x1079f9 = _0xd7fba;
    if ((0x0, _0x4b23dc["textClick"])(/一键领取/)) return _0x283d71(), (0x0, _0xc8a53b["OCRClick"])(/看视频再.*金豆/) && (0x0, _0x10125e['closeAd'])(_0x54855a, _0x44ecc9), (0x0, _0x4b23dc["textClick"])(/立即预约领取/), _0x21063f(_0x4e5153), !![];
  }

  function _0x1643b1() {
    var _0x8ea87c = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc["hlog"])("任务开始：安装");
    var _0x215518 = /安装/,
      _0x452560 = (0x0, _0xc8a53b['OCRResult'])(_0x215518),
      _0x4385cc = (0x0, _0xc8a53b['OCRMatchClick'])(_0x452560, /去安装/);
    if (_0x4385cc) {
      var _0x36a550 = Number(_0x9366b9['xiazai_wait_time']);
      (!_0x36a550 || _0x36a550 <= 0x1e) && (_0x36a550 = 0xb4);
      for (var _0x1238fa = 0x0; _0x1238fa < _0x36a550 / 0x6; _0x1238fa++) {
        sleep(0x1770), _0x1bb460 = textMatches(/安装中|\d+%/)["findOnce"]();
        if (_0x1bb460) {
          (0x0, _0x4b23dc["hlog"])("安装进度:" + _0x1bb460['text']());
          continue;
        }
        if ((0x0, _0xc8a53b["OCRText"])(/^打开$/)) break;
      }
      if ((0x0, _0xc8a53b["OCRClick"])(/^打开$/)) {
        if (_0x43eaa3()) return;
      }
    } else {
      if ((0x0, _0xc8a53b['OCRMatchClick'])(_0x452560, /^打开$/)) {
        if (_0x43eaa3()) return;
      }
    }
    if (!_0x4385cc) {
      (0x0, _0x4b23dc['dlog'])("本次未下载安装,跳过卸载清理");
      return;
    }(0x0, _0x4b23dc['uninstallNewPkgs'])(_0x56e3c8, _0x54855a);
  }

  function _0x43eaa3() {
    var _0x23c26e = _0xd7fba;
    sleep(0x2710), (0x0, _0x4b23dc["textClick"])(/^同意.*/);
    var _0x5aa812 = currentPackage();
    return sleep(0x1388), (0x0, _0x4b23dc["scroll_up_quick_cnt"])(0x2), (0x0, _0x4b23dc['clickCenter'])(), sleep(0x1388), (0x0, _0x4b23dc["scroll_down_quick_cnt"])(0x2), (0x0, _0x4b23dc["clickCenter"])(), (0x0, _0x4b23dc["backApp"])(_0x54855a), sleep(0x1388), (0x0, _0x4b23dc["uninstallNewApp"])(_0x5aa812, _0x56e3c8, _0x54855a);
  }

  function _0x2818d3() {
    var _0x3a9bbe = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc["hlog"])("任务开始：看短剧");
    var _0x93a739 = /看短剧.*金豆/,
      _0x7927c8 = (0x0, _0xc8a53b["OCRResult"])(_0x93a739);
    if ((0x0, _0xc8a53b["OCRClickNextByResult"])(_0x7927c8, _0x93a739, /去观看/, 0x4)) {
      var _0x4f7121 = 0x0;
      while (!![]) {
        sleep(0x3e8 * 0x1e), _0x4f7121 = _0x4f7121 + 0.5;
        var _0x58ccfe = currentPackage();
        (0x0, _0x10125e['closeAd33'])(_0x58ccfe, _0x54855a);
        if (_0x4f7121 >= _0x9366b9["himovie_kanduanju_min"]) break;
      }
      for (var _0x151c55 = 0x0; _0x151c55 < 0x5; _0x151c55++) {
        (0x0, _0x3d0c0d["HBack"])();
        if (_0x28e511()) break;
      }
    }
    _0x5be9be(_0x93a739), _0x28e511(), (0x0, _0x4b23dc["hlog"])("任务开始：看热播");
    var _0x93a739 = /看热播.*金豆/,
      _0x7927c8 = (0x0, _0xc8a53b["OCRResult"])(_0x93a739);
    if ((0x0, _0xc8a53b['OCRClickNextByResult'])(_0x7927c8, _0x93a739, /去观看/, 0x4)) {
      (0x0, _0x4b23dc['descClickXY'])(/.*\d+.*集.*/);
      var _0x4f7121 = 0x0;
      while (!![]) {
        if (textMatches(/立即购买|影视会员/)["findOnce"]()) {
          (0x0, _0x3d0c0d['HBack'])(), _0x1bb460 = descMatches(/第.*集/)["textMatches"](/^[3-5]$/)["findOnce"]();
          if ((0x0, _0x4b23dc["cClick"])(_0x1bb460)) {}
        }
        sleep(0x3e8 * 0x1e), _0x4f7121 = _0x4f7121 + 0.5;
        var _0x58ccfe = currentPackage();
        (0x0, _0x10125e["closeAd33"])(_0x58ccfe, _0x54855a);
        if (_0x4f7121 >= _0x9366b9['himovie_kanduanju_min']) break;
      }
      for (var _0x151c55 = 0x0; _0x151c55 < 0x5; _0x151c55++) {
        (0x0, _0x3d0c0d["HBack"])(), (0x0, _0x3d0c0d["HBack"])();
        if (_0x28e511()) break;
      }
    }
    _0x5be9be(_0x93a739);
  }

  function _0x2fae9e() {
    var _0x78d846 = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc['hlog'])("任务开始：听歌");
    var _0x31e3aa = /听歌.*金豆/,
      _0x5c5229 = (0x0, _0xc8a53b['OCRResult'])(_0x31e3aa);
    if ((0x0, _0xc8a53b['OCRMatchClick'])(_0x5c5229, /去听歌/)) {
      var _0x9ba0cc = 0x0;
      while (!![]) {
        (0x0, _0x4b23dc['idClick'])("iv_play"), (0x0, _0x4b23dc["textClick"])(/知道了/);
        textMatches(/立即开通/)["findOnce"]() && (0x0, _0x3d0c0d["HBack"])();
        sleep(0x3e8 * 0x3c), _0x9ba0cc = _0x9ba0cc + 0x1;
        if (_0x9ba0cc >= _0x9366b9['hwmusic_tingge_min']) break;
      }
      for (var _0x8bb857 = 0x0; _0x8bb857 < 0x5; _0x8bb857++) {
        back();
        if (_0x28e511()) break;
      }
    }
    _0x5be9be(_0x31e3aa);
  }

  function _0x12118f() {
    var _0x1ebdbb = _0xd7fba;
    _0x28e511(), (0x0, _0x4b23dc['hlog'])('任务开始：读书');
    var _0x197652 = /读书.*金豆/,
      _0x22736a = (0x0, _0xc8a53b["OCRResult"])(_0x197652);
    if ((0x0, _0xc8a53b["OCRClickNextByResult"])(_0x22736a, _0x197652, /去阅读/, 0x4)) {
      _0x1bb460 = idContains("tv_ranking")["findOnce"](random(0x1, 0x8));
      !(0x0, _0x4b23dc["pClick"])(_0x1bb460) && (_0x1bb460 = idContains("bookCover")['findOnce'](random(0x1, 0x8)), (0x0, _0x4b23dc["pClick"])(_0x1bb460));
      (0x0, _0x4b23dc["textClick"])(/知道了/);
      var _0xce1ce9 = threads['start'](function() {
        var _0x1de559 = _0x1ebdbb;
        (0x0, _0x2f8c74['xs_kanshu'])(_0x9366b9["hwread_dushu_min"], function() {
          var _0x5c18ab = _0x1de559;
          (0x0, _0x2f8c74["check_activity"])(_0xce1ce9, ['com.huawei.reader.read.activity.BookBrowserActivity'], 0x14);
        });
      });
      _0xce1ce9["join"](), (0x0, _0x2f8c74["xs_after"])(_0x28e511);
    }
    _0x5be9be(_0x197652);
  }

  function _0x5be9be(_0x50d34e) {
    var _0x199ebc = _0xd7fba,
      _0x2a6095 = (0x0, _0xc8a53b["OCRResult"])(_0x50d34e);
    for (var _0x570c5b = 0x0; _0x570c5b < 0xa; _0x570c5b++) {
      if ((0x0, _0xc8a53b["OCRClickNextByResult"])(_0x2a6095, _0x50d34e, /去领取/, 0x4)) _0x283d71(), _0x2a6095 = (0x0, _0xc8a53b["doCaptureScreen"])();
      else break;
    }
  }

  function _0x283d71() {
    var _0x401a65 = _0xd7fba;
    (0x0, _0x4b23dc["textClick"])(_0x4e5153) && (0x0, _0x10125e['closeAd'])(_0x54855a, _0x44ecc9), _0x21063f(_0x4e5153);
  }
}