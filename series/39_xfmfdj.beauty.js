function(_0x34d561, _0x271326, _0x4ee16b) {
  var _0x29b65c = a1_0x4b7c;
  Object['defineProperty'](_0x271326, "__esModule", {
    'value': !![]
  }), _0x271326['xfmfdj'] = _0x47972d;
  var _0x16e034 = _0x4ee16b(M02_app_registry),
    _0xbb595d = _0x4ee16b(M00_utils_ui_helpers),
    _0x2fa6a8 = _0x4ee16b(M04_push_report),
    _0x51e5e3 = _0x4ee16b(M01_config_global),
    _0x7eb2a2 = _0x4ee16b(M07_ad_close),
    _0x7935e = _0x4ee16b(M03_ocr_engine),
    _0x259e42 = _0x4ee16b(M09_video_book_common),
    _0x20b458 = _0x4ee16b(M06_storage_card),
    _0x5cf09b = _0x4ee16b(M05_hid_control),
    _0x50dd36, _0xaaff72, _0x4b078e = /去提现|我的金币|金币.*自动兑.*|明日签到|逛街领金币|看短剧领金币|日常任务|开启签到提醒|阅读小说领金币|天天抽奖赚金币/,
    _0x795248 = {
      'xfmfdj_qiandao': _0x893eab,
      'xfmfdj_kaibaoxiang': _0x4c146e,
      'xfmfdj_kanguanggao': _0x21ba6c,
      'xfmfdj_kanduanju': _0xd1b8bc
    };

  function _0x47972d() {
    var _0x44ce05 = _0x29b65c;
    try {
      _0xaaff72 = _0x16e034["xfmfdjapp"], _0xb6cdd7(), (0x0, _0xbb595d['execFuncs'])(_0x795248, _0x51e5e3["xfmfdj_rw_list"]), _0x4b4700(), _0x3147e2();
    } catch (_0x2bce0e) {
      (0x0, _0xbb595d["handleAppError"])(_0x2bce0e);
    }
  }

  function _0xb6cdd7() {
    var _0x486b5a = _0x29b65c;
    _0x1b9c1c(), (0x0, _0xbb595d["execFirstRw"])(_0xaaff72, _0x5ae6c6, function() {
      _0x893eab(!![]);
    });
  }

  function _0x3147e2() {
    var _0x3c3359 = _0x29b65c;
    _0x5ae6c6(), (0x0, _0xbb595d["hlog"])("计算收益");
    var _0x375e29 = 0x0,
      _0x26f3f0 = 0x0,
      _0x1035a2 = (0x0, _0x7935e["OCRResult"])(/我的现金/),
      _0x1cd2d7 = (0x0, _0x7935e['OCRFindNextByResult'])(_0x1035a2, /我的现金/, /^[1-9]\d*$/);
    _0x1cd2d7 && (_0x375e29 = _0x1cd2d7["text"]);
    var _0x14a1c0 = (0x0, _0x7935e['OCRFindNextByResult'])(_0x1035a2, /我的现金/, /\d+\.\d+/);
    _0x14a1c0 && (_0x26f3f0 = _0x14a1c0["text"]);
    var _0x14a1c0 = (0x0, _0xbb595d["ksTixian"])(function() {
      var _0x12d81b = _0x3c3359;
      return (0x0, _0x7935e["OCRMatchClick"])(_0x1035a2, /领现金/);
    }, _0xaaff72, _0x26f3f0);
    _0x14a1c0 && ((0x0, _0xbb595d["hlog"])("提现成功"), (0x0, _0x20b458["setTiXian"])(_0xaaff72, _0x14a1c0), _0x26f3f0 = _0x26f3f0 - _0x14a1c0), (0x0, _0x2fa6a8["setGold"])(_0x16e034['xfmfdjapp'], parseInt(_0x375e29), parseFloat(_0x26f3f0));
  }

  function _0x1b9c1c() {
    _0x46bff7(M01_config_global);
  }

  function _0x46bff7(_0x4f35da) {
    var _0x64effd = _0x29b65c;
    return (0x0, _0x7935e["OCRClickMenu"])(_0x4f35da, /^首页$/, /^福利$/, /^小说$/, null, /^我的$/);
  }

  function _0x14a6cd() {
    (0x0, _0x7eb2a2['ks_ok'])(_0xaaff72, _0x4b078e);
  }

  function _0x5ae6c6(_0x1d3948) {
    var _0x51e18d = _0x29b65c;
    sleep(0x1388);
    var _0x24a5da = (0x0, _0x7935e['doCaptureScreen'])();
    if ((0x0, _0x7935e["OCRMatch"])(_0x24a5da, /开启签到提醒/))(0x0, _0x5cf09b["HBack"])();
    else {
      if ((0x0, _0xbb595d['textClick'])(/看视频立即领取/)) _0x14a6cd();
      else(0x0, _0xbb595d["textClick"])(/去看剧领更多金币/) && _0x46bff7(M01_config_global);
    }
    if ((0x0, _0x7935e["OCRMatch"])(_0x24a5da, _0x4b078e)) return (0x0, _0xbb595d['hlog'])("继续执行下一个任务"), !![];
    if (_0x46bff7(M01_config_global)) {
      _0x50dd36 = (0x0, _0x5cf09b["HFind"])(_0x4b078e);
      if (_0x50dd36) return (0x0, _0xbb595d["hlog"])("进入任务页,任务识别中"), !![];
    }!_0x1d3948 && (0x0, _0xbb595d["findRw"])(_0x5ae6c6, _0x1b9c1c, _0xaaff72);
  }

  function _0x893eab(_0x4680cd) {
    var _0x3da5e0 = _0x29b65c;
    if (!_0x4680cd) {
      _0x5ae6c6(), (0x0, _0xbb595d['hlog'])("任务开始:签到");
      if (_0x51e5e3["hidMode"]) {
        var _0x5b5e37 = (0x0, _0x7935e["OCRResult"])(/签到|去签到/);
        if ((0x0, _0x7935e["OCRMatchClick"])(_0x5b5e37, /去签到/)) {} else {
          if ((0x0, _0x7935e['OCRMatch'])(_0x5b5e37, /明日签到/)) return (0x0, _0x2fa6a8["setQiandaoStatus"])(_0xaaff72), !![];
        }
      } else {
        _0x50dd36 = textStartsWith("明日签到")['findOnce']();
        if (_0x50dd36) return (0x0, _0x2fa6a8["setQiandaoStatus"])(_0xaaff72), !![];
        (0x0, _0xbb595d["textClick"])(/去签到/);
      }
    }
    if ((0x0, _0xbb595d["textClick"])(/立即签到领.*/) || (0x0, _0xbb595d["textClick"])(/立即签到.*/)) {
      if ((0x0, _0x7935e['OCRClick'])(/看视频.*金币/)) return _0x14a6cd(), (0x0, _0x2fa6a8["setQiandaoStatus"])(_0xaaff72), (0x0, _0xbb595d["textClick"])(/去看剧领更多金币/), !![];
    }
  }

  function _0x4c146e() {
    var _0x3a51b8 = _0x29b65c;
    _0x5ae6c6(), (0x0, _0xbb595d['hlog'])("任务开始:开宝箱"), (0x0, _0xbb595d["textClick"])(/^领\d+金币/) && ((0x0, _0x7935e["OCRClick"])(/看视频开宝箱|看视频.*\d+金币/) && _0x14a6cd());
  }

  function _0x21ba6c() {
    var _0x3426be = _0x29b65c;
    _0x5ae6c6(), (0x0, _0xbb595d['hlog'])("任务开始:看广告");
    var _0x281c8b = /看视频.*金币|看广告/,
      _0x58a99c = (0x0, _0x7935e["OCRResult"])(_0x281c8b);
    for (var _0x3b7d31 = 0x0; _0x3b7d31 < 0x2; _0x3b7d31++) {
      if ((0x0, _0x7935e["OCRMatch"])(_0x58a99c, /今日已获得所有奖励/)) return !![];
      if ((0x0, _0x7935e["OCRMatch"])(_0x58a99c, /后可继续看视频赚钱/)) return;
      (0x0, _0x7935e["OCRMatchClick"])(_0x58a99c, _0x281c8b) && _0x14a6cd();
    }
  }

  function _0xd1b8bc() {
    var _0x3899e9 = _0x29b65c;
    _0x5ae6c6(), (0x0, _0xbb595d["hlog"])('任务开始：看短剧领金币');
    if (_0x46bff7(M00_utils_ui_helpers)) {
      (0x0, _0x7935e['OCRClick'])(/.*\d+集|.*\d+万/);
      var _0x32ec8b = (0x0, _0x7935e["doCaptureScreen"])();
      (0x0, _0x7935e["OCRMatchClick"])(_0x32ec8b, /追剧/), (0x0, _0x7935e["OCRMatchClick"])(_0x32ec8b, /^\d+\.\d+万$/), (0x0, _0x259e42['xs_kanshipin2'])(_0x51e5e3["xfmfdj_kanduanju_min"], null, function() {
        sleep(0x2 * 0x3c * 0x3e8), (0x0, _0xbb595d['scroll_up_quick_cnt'])(0x1);
      });
    }
    for (var _0x23513d = 0x0; _0x23513d < 0x3; _0x23513d++) {
      if (_0x46bff7(M01_config_global)) break;
      else(0x0, _0x5cf09b["HBack"])(), (0x0, _0xbb595d["textClick"])(/^(下次再说|直接退出|不再追剧)$/);
    }
    _0x4b34cb();
  }

  function _0x4b34cb() {
    var _0x32732e = _0x29b65c;
    _0x5ae6c6(), (0x0, _0xbb595d["hlog"])("领取短剧奖励"), (0x0, _0x7935e['OCRResult'])(/看短剧领金币/);
    for (var _0x3de859 = 0x0; _0x3de859 < 0x5; _0x3de859++) {
      var _0x146cd4 = (0x0, _0x7935e["doCaptureScreen"])();
      if ((0x0, _0x7935e["OCRMatchClick"])(_0x146cd4, /^(翻倍领|看视频翻倍.*领\d+|看视频翻倍)$/)) _0x14a6cd(), (0x0, _0x7935e["OCRClick"])(/^(开心收下)$/);
      else {
        if ((0x0, _0x7935e["OCRMatchClick"])(_0x146cd4, /^(领金币|可领取|直接领\d+|直接领)$/))(0x0, _0x7935e["OCRClick"])(/看视频.*金币/) && _0x14a6cd(), (0x0, _0x7935e["OCRClick"])(/^(开心收下)$/);
        else {
          if ((0x0, _0x7935e["OCRClickNextByResult"])(_0x146cd4, /看短剧额外领金币/, /看视频领取/, 0x6)) _0x14a6cd(), (0x0, _0x7935e["OCRClick"])(/^(开心收下)$/);
          else break;
        }
      }
    }
  }

  function _0x4b4700() {
    var _0x1a4128 = _0x29b65c;
    _0x5ae6c6(), (0x0, _0xbb595d["scroll_down_quick_cnt"])(0x1), (0x0, _0x5cf09b["HFind"])(/七天见面礼/) && ((0x0, _0xbb595d["textClick"])(/^去领取/) && (0x0, _0x5cf09b["HBack"])()), _0x4b34cb();
  }
}