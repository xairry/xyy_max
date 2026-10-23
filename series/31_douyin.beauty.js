function(_0x1aa7f7, _0xe54f21, _0x54ec0e) {
  var _0x4e7cff = a1_0x4b7c;
  Object["defineProperty"](_0xe54f21, "__esModule", {
    'value': !![]
  }), _0xe54f21['dy'] = _0x13aa04, _0xe54f21['dyjs'] = _0xcaa580;
  var _0x53175f = _0x54ec0e(M02_app_registry),
    _0x5e8529 = _0x54ec0e(M00_utils_ui_helpers),
    _0x3a2e21 = _0x54ec0e(M07_ad_close),
    _0x32a9de = _0x54ec0e(M04_push_report),
    _0x4e4104 = _0x54ec0e(M08_check_task),
    _0x69544e = _0x54ec0e(M09_video_book_common),
    _0x444108 = _0x54ec0e(M01_config_global),
    _0x3a25b7 = _0x54ec0e(M12_date_utils),
    _0x309f84 = _0x54ec0e(M03_ocr_engine),
    _0x2c9cd5 = _0x54ec0e(M06_storage_card),
    _0x4e7fd6 = _0x54ec0e(M05_hid_control),
    _0xd6f682 = _0x54ec0e(M10_activity_consts),
    _0x34ac68, _0x41b9c7, _0x4a2656 = /日常任务|赚钱任务|开宝箱得金币|看广告赚金币|逛街赚钱|明日签到|任务中心|天天赚金币/,
    _0x34d8c2 = {
      'dyjs_qiandao': _0x30970d,
      'dyjs_kaibaoxiang': _0x63af48,
      'dyjs_kanguanggao': _0x456c92,
      'dyjs_guangjie': _0x4fe17,
      'dyjs_kanzhibo': _0x25c914,
      'dyjs_lingfanbu': _0xf26031,
      'dyjs_yuyue': _0x5632eb,
      'dyjs_kanshipin': _0x5047ac
    },
    _0xab2a25 = {
      'dy_qiandao': _0x30970d,
      'dy_kaibaoxiang': _0x63af48,
      'dy_kanguanggao': _0x456c92,
      'dy_guangjie': _0x4fe17,
      'dy_hongbaoyu': _0x3a56c2,
      'dy_yuyue': _0x5632eb,
      'dy_kanshipin': _0x5047ac
    };

  function _0xcaa580() {
    var _0x2e2f13 = _0x4e7cff;
    try {
      _0x41b9c7 = _0x53175f['dyjsapp'], _0x386fa3(), (0x0, _0x5e8529["execFuncs"])(_0x34d8c2, _0x444108["dyjs_rw_list"]), _0x3e066b();
    } catch (_0x2a636) {
      (0x0, _0x5e8529["handleAppError"])(_0x2a636);
    }
  }

  function _0x13aa04() {
    var _0x313435 = _0x4e7cff;
    try {
      _0x41b9c7 = _0x53175f["dyapp"], _0x386fa3(), (0x0, _0x5e8529["execFuncs"])(_0xab2a25, _0x444108['dy_rw_list']), _0x3e066b();
    } catch (_0x4d6741) {
      (0x0, _0x5e8529["handleAppError"])(_0x4d6741);
    }
  }

  function _0x3e066b() {
    var _0x354f5e = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])("计算收益"), (0x0, _0x5e8529["scroll_down_quick_cnt"])(0x8);
    var _0x450722 = (0x0, _0x309f84["doCaptureScreen"])(),
      _0x588d24 = (0x0, _0x309f84["OCRFindNextByResult"])(_0x450722, /现金收益/, /\d+/, 0x2) || {},
      _0x3e2a57 = (0x0, _0x309f84["OCRFindNextByResult"])(_0x450722, /现金收益/, /\d+\.\d+/, 0x3) || {},
      _0x301a9e = (0x0, _0x4e4104["getTextNumber"])(_0x588d24['text']),
      _0x31e2cc = (0x0, _0x4e4104['getTextFloat'])(_0x3e2a57['text']),
      _0x248ee9 = (0x0, _0x5e8529['dxClickGold'])(function() {
        var _0x508bc1 = _0x354f5e;
        return (0x0, _0x309f84["OCRMatchClick"])(_0x450722, /去提现/);
      }, _0x41b9c7, _0x31e2cc);
    _0x248ee9 && ((0x0, _0x5e8529["hlog"])("提现成功"), (0x0, _0x2c9cd5['setTiXian'])(_0x41b9c7, _0x248ee9), _0x31e2cc = _0x31e2cc - _0x248ee9), (0x0, _0x32a9de["setGold"])(_0x41b9c7, _0x301a9e, _0x31e2cc);
  }

  function _0x581e00() {
    var _0x5cbb2d = _0x4e7cff;
    return (0x0, _0x3a2e21["dx_ok"])(_0x41b9c7, _0x4a2656);
  }

  function _0x386fa3() {
    var _0x1339d5 = _0x4e7cff;
    _0x4e461e(), (0x0, _0x5e8529["execFirstRw"])(_0x41b9c7, _0x4e68ef, function() {
      var _0x3b89df = _0x1339d5;
      _0x30970d(!![]), (0x0, _0x4e7fd6["HBack"])(), _0xb6e241();
    });
  }

  function _0x4e461e() {
    var _0x1e8e8c = _0x4e7cff;
    (0x0, _0x4e7fd6["HBack"])(), _0xb6e241();
  }

  function _0xb6e241() {
    var _0x468627 = _0x4e7cff;
    if (_0x41b9c7 == _0x53175f["dyapp"] && !_0x444108["hidMode"])
      for (var _0x1034f5 = 0x0; _0x1034f5 < 0x3; _0x1034f5++) {
        if ((0x0, _0x5e8529['idClick'])("progress_view")) return !![];
        else(0x0, _0x5e8529["scroll_up_quick_cnt"])(0x1);
      } else {
        if (_0x41b9c7 == _0x53175f['dyjsapp']) {
          if ((0x0, _0x309f84["OCRClick"])(/^赚钱$|^贝兼钱$/)) return !![];
        }
      }
    return (0x0, _0x309f84["OCRClickSimilarImageTop"])([_0xd6f682["DXJS_HOME"], _0xd6f682["DY_HOME"], _0xd6f682['DY_HOME2']], 0.6);
  }

  function _0x4e68ef(_0x36b6ed) {
    var _0x1dd0da = _0x4e7cff;
    sleep(0x1388);
    var _0x1703f4 = (0x0, _0x309f84["doCaptureScreen"])();
    (0x0, _0x309f84["OCRMatch"])(_0x1703f4, /^(去选一个免费拿|立即预约领金币)$/) && (0x0, _0x4e7fd6["HBack"])();
    if ((0x0, _0x309f84['OCRMatchClick'])(_0x1703f4, /评价并收下金币|^我知道了$/) || (0x0, _0x309f84["OCRMatch"])(_0x1703f4, _0x4a2656)) return (0x0, _0x5e8529["hlog"])('继续执行下一个任务'), !![];
    if (_0xb6e241()) {
      sleep(0x1f40);
      if ((0x0, _0x309f84["OCRText"])(_0x4a2656)) return (0x0, _0x5e8529["hlog"])("进入任务页,任务识别中"), !![];
    }!_0x36b6ed && (0x0, _0x5e8529["findRw"])(_0x4e68ef, _0x4e461e, _0x41b9c7);
  }

  function _0x30970d(_0x419818) {
    var _0x456b1b = _0x4e7cff,
      _0x29864e;
    if (!_0x419818) {
      _0x4e68ef(), (0x0, _0x5e8529['hlog'])("任务开始：签到领金币"), _0x29864e = (0x0, _0x309f84['OCRResult'])(/^(?!.*每叠)(签到.*\d+|新人.*签到.*|去签到)|明日签到/);
      if ((0x0, _0x309f84["OCRMatch"])(_0x29864e, /明日签到/)) return (0x0, _0x32a9de["setQiandaoStatus"])(_0x41b9c7), !![];
      else(0x0, _0x309f84["OCRMatchClick"])(_0x29864e, /^(?!.*每叠)(签到.*\d+|新人.*签到.*|去签到)/) && (_0x29864e = (0x0, _0x309f84["doCaptureScreen"])());
    }!_0x29864e && (_0x29864e = (0x0, _0x309f84['doCaptureScreen'])());
    if ((0x0, _0x309f84["OCRMatchClick"])(_0x29864e, /立即签到.*|签到奖励已翻倍.*|立即领取.*元.*金币|^签到领.*\d+/))(0x0, _0x309f84["OCRClick"])(/看(广告|指定视频).*再赚.*|看(视频|广告)签到.*|看(视频|广告)领.*/) && _0x581e00();
    else {
      if ((0x0, _0x309f84["OCRMatchClick"])(_0x29864e, /签到.*额外.*元/))(0x0, _0x309f84["OCRClick"])(/立即领取.*元.*金币/), (0x0, _0x309f84["OCRClick"])(/看广告.*再赚.*|看视频签到.*|看视频领.*/) && _0x581e00();
      else(0x0, _0x309f84["OCRMatchClick"])(_0x29864e, /看广告视频再赚.*|看(视频|广告)签到.*|看(视频|广告)领.*|^签到领.*\d+/) && ((0x0, _0x309f84["OCRClick"])(/看广告.*再赚.*|看视频签到.*|看视频领.*/), _0x581e00(), (0x0, _0x4e7fd6["HBack"])());
    }
    _0x29864e = (0x0, _0x309f84["doCaptureScreen"])();
    var _0x235076 = (0x0, _0x309f84['OCRMatch'])(_0x29864e, /打开签到提醒|签到提醒/);
    if (_0x235076) !(0x0, _0x309f84['OCRClickSimilarImageBottom'])(_0xd6f682["DX_CLOSE_X"], 0.65) && (0x0, _0x4e7fd6["HBack"])();
    else {
      if ((0x0, _0x309f84["OCRMatch"])(_0x29864e, /^明日签到.*/)) return (0x0, _0x32a9de["setQiandaoStatus"])(_0x41b9c7), !![];
      else {
        if ((0x0, _0x309f84["OCRMatchClick"])(_0x29864e, /^好的$/)) {}
      }
    }
  }

  function _0x63af48() {
    var _0x43a45f = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])('任务开始：开宝箱');
    var _0x5dfb55 = (0x0, _0x309f84["doCaptureScreen"])();
    if ((0x0, _0x309f84["OCRMatch"])(_0x5dfb55, /\d+分\d+秒/)) {
      (0x0, _0x5e8529['hlog'])("开宝箱未到时间");
      return;
    }
    var _0x25c9bc = /^(?!.*(直播|宝箱最高)).*?(开宝箱|宝箱得金|点击领\d+金币|点击立得\d+|点击领\d+|点击领金币|马上点击|^领\d+金币|开启神秘宝箱)/,
      _0x4ab3ab = /^(?!.*(直播|宝箱最高)).*?(^领\d+金币)/;
    if ((0x0, _0x309f84["OCRMatchClick"])(_0x5dfb55, _0x25c9bc) || (0x0, _0x309f84["OCRMatchClick"])(_0x5dfb55, _0x4ab3ab)) {
      _0x30bee4();
      return;
    }
    _0x5dfb55 = (0x0, _0x309f84["OCRResult"])(_0x25c9bc);
    if ((0x0, _0x309f84['OCRMatch'])(_0x5dfb55, /\d+\:\d+/))(0x0, _0x5e8529["hlog"])("开宝箱未到时间");
    else(0x0, _0x309f84["OCRMatchClick"])(_0x5dfb55, _0x25c9bc) || (0x0, _0x309f84['OCRMatchClick'])(_0x5dfb55, _0x4ab3ab) ? _0x30bee4() : (0x0, _0x5e8529['hlog'])("开宝箱未到时间");
  }

  function _0x30bee4() {
    var _0x3ac192 = _0x4e7cff,
      _0x65e33e = (0x0, _0x309f84["doCaptureScreen"])(),
      _0x380581 = (0x0, _0x309f84["OCRMatch"])(_0x65e33e, /看广告视频.*\d+|看.*视频.*开宝箱|^看广告再赚.*|^看.*视频再赚.*\d+$/);
    if (_0x380581 && _0x380581["text"] && (0x0, _0x4e4104["checkMinGoldStr"])(_0x41b9c7, _0x380581["text"])) {
      (0x0, _0x4e7fd6["HBack"])();
      return;
    } else {
      if ((0x0, _0x309f84["OCRMatchClick"])(_0x65e33e, /提现.*元.*金币/))(0x0, _0x4e7fd6['HBack'])(), (0x0, _0x4e7fd6["HBack"])(), (0x0, _0x309f84['OCRClick'])(/领取奖励/) && ((0x0, _0x4e7fd6["HBack"])(), (0x0, _0x4e7fd6["HBack"])(), (0x0, _0x4e7fd6["HBack"])());
      else {
        if ((0x0, _0x309f84["clickOnObj"])(_0x380581)) {
          _0x581e00();
          return;
        } else {
          if ((0x0, _0x309f84["OCRMatchClick"])(_0x65e33e, /我知道了|开心收下/)) {} else(0x0, _0x4e7fd6["HBack"])();
        }
      }
    }
  }

  function _0x456c92() {
    var _0x3e17e8 = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])('任务开始：看广告');
    var _0x121a34 = /^(?!.*(中奖)).*?(看广告|限时任务赚金币)/,
      _0x3d0b7f = (0x0, _0x309f84['OCRResult'])(_0x121a34);
    if ((0x0, _0x309f84['OCRFindNextByResult'])(_0x3d0b7f, /明日再来/, 0x2)) return !![];
    else {
      if ((0x0, _0x309f84["OCRFindNextByResult"])(_0x3d0b7f, _0x121a34, /\d+\:\d+/)) {
        (0x0, _0x5e8529["hlog"])("看广告未到时间");
        return;
      }
    }(0x0, _0x309f84["OCRMatchClick"])(_0x3d0b7f, _0x121a34) && _0x581e00();
  }

  function _0x3a56c2() {
    var _0x1dbf1d = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])("任务开始：红包雨");
    var _0x438c8c = /金币红包雨.*/,
      _0x5dcb07 = (0x0, _0x309f84["OCRResult"])(_0x438c8c);
    if ((0x0, _0x309f84['OCRFindNextByResult'])(_0x5dcb07, _0x438c8c, /\d+\:\d+|待开启/)) {
      (0x0, _0x5e8529['hlog'])('红包雨未到时间');
      return;
    }
    if ((0x0, _0x309f84["OCRMatchClick"])(_0x5dcb07, _0x438c8c)) {
      (0x0, _0x5e8529["randomTap"])(0xf), sleep(0x1388);
      var _0x2c8646 = (0x0, _0x309f84["doCaptureScreen"])();
      (0x0, _0x309f84["OCRMatchClick"])(_0x2c8646, /看广告再得.*\d+/) && _0x581e00(), (0x0, _0x4e7fd6["HBack"])();
    }
  }

  function _0x4fe17() {
    var _0x1fe171 = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])("任务开始：逛街");
    var _0x51ab3e = /逛街/,
      _0x5507 = (0x0, _0x309f84["OCRResult"])(_0x51ab3e);
    if (!_0x5507) {
      (0x0, _0x5e8529['hlog'])("没有逛街任务");
      return;
    }
    if ((0x0, _0x309f84['OCRFindNextByResult'])(_0x5507, _0x51ab3e, /.*后浏览.*/)) {
      (0x0, _0x5e8529["hlog"])("逛街未到时间");
      return;
    } else {
      if ((0x0, _0x309f84["OCRFindNextByResult"])(_0x5507, _0x51ab3e, /.*明日浏览.*/)) return !![];
      else {
        if ((0x0, _0x309f84["OCRMatchClick"])(_0x5507, _0x51ab3e)) {
          (0x0, _0x4e7fd6["HFindClickXY"])(/立即使用|知道了|我知道了/, 0x2710), (0x0, _0x5e8529['textClickXY'])(/立即使用|知道了|我知道了/);
          if ((0x0, _0x4e7fd6["HFind"])(/明日浏览可领取奖励/)) return _0x1710e2(), !![];
          var _0x5a7971 = (0x0, _0x4e4104["getObjectNumber"])(/\d+秒/);
          _0x5a7971 ? (0x0, _0x3a2e21["scroll_close"])(/\d+秒/) : ((0x0, _0x5e8529["scroll_up_quick"])(0x28), (0x0, _0x5e8529["scroll_down_quick"])(0x28), (0x0, _0x5e8529["scroll_up_quick"])(0x28));
          (0x0, _0x4e7fd6['HFindClickXY'])(/继续观看/) && ((0x0, _0x5e8529["scroll_down_quick"])(0x5), (0x0, _0x5e8529['scroll_up_quick'])(0x5));
          var _0x53b3bb = (0x0, _0x4e7fd6["HFind"])(/发放失败/);
          return _0x1710e2(), (0x0, _0x5e8529["textClickXY"])(/坚持退出|执意退出/), _0x53b3bb && (0x0, _0x5e8529['hlog'])('逛街任务黑了,今日不做了'), _0x53b3bb;
        }
      }
    }
  }

  function _0xf26031() {
    var _0x333e07 = _0x4e7cff;
    if ((0x0, _0x3a25b7["getCurrentDateHour"])() >= 0x5 && (0x0, _0x3a25b7["getCurrentDateHour"])() <= 0x9 || (0x0, _0x3a25b7["getCurrentDateHour"])() >= 0xb && (0x0, _0x3a25b7['getCurrentDateHour'])() <= 0xe || (0x0, _0x3a25b7["getCurrentDateHour"])() >= 0x11 && (0x0, _0x3a25b7["getCurrentDateHour"])() <= 0x14 || (0x0, _0x3a25b7['getCurrentDateHour'])() >= 0x15 && (0x0, _0x3a25b7['getCurrentDateHour'])() <= 0x18) {
      _0x4e68ef(), (0x0, _0x5e8529["hlog"])("任务开始：领饭补");
      if ((0x0, _0x309f84['OCRSwipeClick'])(/吃饭打卡赚金币.*/)) {
        if ((0x0, _0x4e7fd6["HFindClickXY"])(/领取.*补贴.*金币/, 0x2710)) {
          if ((0x0, _0x5e8529['textClickXY'])(/看视频再领.*/)) {
            _0x581e00(), (0x0, _0x4e7fd6["HBack"])();
            return;
          }(0x0, _0x5e8529["textClickXY"])(/开心收下/);
        } else {
          if ((0x0, _0x5e8529['textClickXY'])(/点击补领|看.*视频领.*补贴/)) {
            _0x581e00(), (0x0, _0x4e7fd6['HBack'])();
            return;
          } else(0x0, _0x4e7fd6["HBack"])();
        }
      } else {
        (0x0, _0x5e8529["hlog"])('吃饭打卡赚金币未到时间');
        return;
      }
    }
  }

  function _0x1710e2() {
    var _0x2469ef = _0x4e7cff;
    for (var _0x30f092 = 0x0; _0x30f092 < 0x5; _0x30f092++) {
      if (_0x444108["hidMode"]) {
        if ((0x0, _0x309f84["OCRText"])(_0x4a2656)) break;
        else(0x0, _0x4e7fd6["HBack"])();
      } else {
        if (currentActivity() != "com.ss.android.ugc.aweme.main.MainActivity")(0x0, _0x4e7fd6["HBack"])();
        else break;
      }
    }
  }

  function _0x25c914() {
    var _0xce11c0 = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529['hlog'])("任务开始：看直播");
    var _0x844af9 = /看直播开宝箱.*|.*个宝箱.*|.*个大宝箱.*|点击领.*\d+/;
    if ((0x0, _0x309f84['OCRSwipeClick'])(_0x844af9)) {
      sleep(0x2710);
      if ((0x0, _0x309f84["OCRText"])(_0x844af9)) return !![];
      (0x0, _0x4e7fd6["HFindClick"])(/开宝箱/, 0x4e20) && (0x0, _0x4e7fd6["HBack"])();
      (0x0, _0x5e8529["hlog"])("看直播等待约180s"), sleep(0x2bf20), (0x0, _0x5e8529['textClick'])(/还可做任务.*|领金币/), (0x0, _0x309f84["OCRClick"])(/开宝箱|立即打开/), _0x1710e2(), (0x0, _0x5e8529['textClickXY'])(/^换钻石并送出$/), (0x0, _0x5e8529["textClickXY"])(/开心收下/);
      return;
    }
  }

  function _0x5047ac() {
    var _0x448225 = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])("任务开始：刷视频"), (0x0, _0x4e7fd6['HBack'])(), (0x0, _0x4e7fd6["HBack"])();
    var _0x304ff9 = 0x0;
    if (_0x41b9c7 == _0x53175f["dyapp"]) _0x304ff9 = _0x444108['dy_kanshiping_min'];
    else _0x41b9c7 == _0x53175f['dyjsapp'] && (_0x304ff9 = _0x444108['dyjs_kanshiping_min']);
    (0x0, _0x69544e["xs_kanshipin"])(_0x304ff9, function() {
      var _0x8ff185 = _0x448225;
      while (!![]) {
        sleep(0x1 * 0x3c * 0x3e8), (0x0, _0x4e7fd6["HBack"])(), (0x0, _0x5e8529["backApp"])(_0x41b9c7);
      }
    }), _0xb6e241();
    var _0x52b5d6 = (0x0, _0x309f84["doCaptureScreen"])();
    if ((0x0, _0x309f84["OCRMatchClick"])(_0x52b5d6, /我知道了/)) {} else {
      if ((0x0, _0x309f84["OCRMatch"])(_0x52b5d6, /老用户专享福利/))(0x0, _0x309f84["OCRMatchClick"])(_0x52b5d6, /看视频赚.*元/), (0x0, _0x4e7fd6["HBack"])(), _0xb6e241();
      else {
        if ((0x0, _0x309f84["OCRClickNextByResult"])(_0x52b5d6, /看视频赚超多钱|连续看视频/, /立即领取/, 0x3))(0x0, _0x309f84["OCRClick"])(/看广告再赚.*\d+/) ? _0x581e00() : (0x0, _0x309f84["OCRClick"])(/开心收下/);
        else(0x0, _0x309f84["OCRClickNextByResult"])(_0x52b5d6, /看视频领额外大奖/, /待领取/, 0x3) && ((0x0, _0x309f84["OCRClick"])(/看广告再赚.*\d+/) ? _0x581e00() : (0x0, _0x309f84['OCRClick'])(/开心收下/));
      }
    }
  }

  function _0x5632eb() {
    var _0x60a219 = _0x4e7cff;
    _0x4e68ef(), (0x0, _0x5e8529["hlog"])("预约领金币");
    var _0x5e87af = (0x0, _0x309f84["OCRResult"])(/^预约领金币|^一键领金币|后可一键领取$/);
    if ((0x0, _0x309f84["OCRMatch"])(_0x5e87af, /后可一键领取$/)) return;
    else {
      if ((0x0, _0x309f84["OCRMatchClick"])(_0x5e87af, /^预约领金币|^一键领金币/)) {
        if ((0x0, _0x309f84["OCRClick"])(/立即预约/)) return (0x0, _0x5e8529['textClickXY'])(/不用提醒我也能来/), (0x0, _0x4e7fd6["HBack"])(), _0x1710e2(), !![];
        else {
          if ((0x0, _0x309f84['OCRClick'])(/一键领金币|一键领取/)) {
            (0x0, _0x5e8529["textClickXY"])(/开心收下/), (0x0, _0x4e7fd6["HBack"])();
            (0x0, _0x309f84['OCRClick'])(/^预约领金币/) && ((0x0, _0x309f84["OCRClick"])(/立即预约/) && ((0x0, _0x5e8529["textClickXY"])(/不用提醒我也能来/), (0x0, _0x309f84["OCRClick"])(/^领取奖励$/) && _0x581e00(), (0x0, _0x4e7fd6['HBack'])(), _0x1710e2()));
            return;
          }
        }
      }
    }
  }
}