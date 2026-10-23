function(_0x16e2bf, _0x3550cc, _0x62ebc8) {
  var _0x58573d = a1_0x4b7c;
  Object["defineProperty"](_0x3550cc, "__esModule", {
    'value': !![]
  }), _0x3550cc["hmjc"] = _0x1684ce;
  var _0x125eeb = _0x62ebc8(M02_app_registry),
    _0x2dbfb2 = _0x62ebc8(M00_utils_ui_helpers),
    _0x1b2d84 = _0x62ebc8(M04_push_report),
    _0x1f8817 = _0x62ebc8(M01_config_global),
    _0x4a8f9b = _0x62ebc8(M07_ad_close),
    _0x475b10 = _0x62ebc8(M03_ocr_engine),
    _0x1195f6 = /金币余额|现金余额|去提现|金币红包雨|签到|预约领金币|逛街领金币|立即签到.*金币/,
    _0x5474e1 = {
      'hmjc_qiandao': _0x47e4c1,
      'hmjc_kaibaoxiang': _0x11fcd6,
      'hmjc_kanguanggao': _0x3c292b,
      'hmjc_fanka': _0x313c60,
      'hmjc_yuyue': _0x16ce5d,
      'hmjc_hongbaoyu': _0x4b1f82,
      'hmjc_kanduanju': _0x1938d1
    },
    _0xede84f = {
      'hmjc_kaibaoxiang': _0x11fcd6,
      'hmjc_kanguanggao': _0x3c292b,
      'hmjc_hongbaoyu': _0x4b1f82,
      'hmjc_fanka': _0x313c60
    },
    _0x5a3119, _0x12dc7d;

  function _0x1684ce() {
    var _0x469f39 = _0x58573d;
    try {
      _0x12dc7d = _0x125eeb["hmjcapp"], _0xe949a1(), (0x0, _0x2dbfb2["execFuncs"])(_0x5474e1, _0x1f8817['hmjc_rw_list']), (0x0, _0x2dbfb2["execFuncs"])(_0xede84f, _0x1f8817["hmjc_rw_list"]), _0x1e7cd4(), _0x4580db();
    } catch (_0x266d0a) {
      (0x0, _0x2dbfb2["handleAppError"])(_0x266d0a);
    }
  }

  function _0xe949a1() {
    var _0x428af0 = _0x58573d;
    _0x132fa1(), (0x0, _0x2dbfb2["execFirstRw"])(_0x12dc7d, _0x2d93c8, function() {
      _0x47e4c1(!![]);
    });
  }

  function _0x132fa1() {
    _0x38e60(M02_app_registry);
  }

  function _0x4580db() {
    var _0xcdbc5a = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("计算收益"), (0x0, _0x2dbfb2["scroll_down_quick_cnt"])(0x3);
    var _0x5f149e, _0x4004e4, _0x3de11e = (0x0, _0x475b10["doCaptureScreen"])();
    _0x5a3119 = (0x0, _0x475b10["OCRFindNextByResult"])(_0x3de11e, /现金余额.*/, /\d+/, 0x5), _0x5a3119 && (_0x5f149e = parseInt(_0x5a3119["text"])), _0x5a3119 = (0x0, _0x475b10["OCRFindNextByResult"])(_0x3de11e, /现金余额.*/, /\d+\.\d+/, 0x7), _0x5a3119 && (_0x4004e4 = parseFloat(_0x5a3119["text"])), (0x0, _0x1b2d84['setGold'])(_0x125eeb["hmjcapp"], _0x5f149e, _0x4004e4);
  }

  function _0x38e60(_0x3c3485) {
    var _0x2f114d = _0x58573d;
    sleep(0xbb8);
    if (_0x3c3485 == 0x0) _0x5a3119 = textMatches(/首页/)["findOnce"]();
    else {
      if (_0x3c3485 == 0x1) _0x5a3119 = textMatches(/剧场/)["findOnce"]();
      else {
        if (_0x3c3485 == 0x2) _0x5a3119 = textMatches(/福利/)["findOnce"]();
        else {
          if (_0x3c3485 == 0x4) _0x5a3119 = textMatches(/追剧/)['findOnce']();
          else _0x3c3485 == 0x5 && (_0x5a3119 = textMatches(/我的/)["findOnce"]());
        }
      }
    }
    if (_0x5a3119 && _0x5a3119['parent']()) {
      if ((0x0, _0x2dbfb2["cClick"])(_0x5a3119["parent"]())) return !![];
    }
    if (_0x3c3485 == 0x2) {
      if ((0x0, _0x2dbfb2['idClick'])("lv_welfare_bottom")) return !![];
    }
  }

  function _0x2d93c8(_0xa75e0) {
    var _0x1caa00 = _0x58573d;
    sleep(0x1388), _0xbf884c();
    if ((0x0, _0x475b10["OCRText"])(_0x1195f6)) return (0x0, _0x2dbfb2["hlog"])("继续执行下一个任务"), !![];
    if (_0x38e60(M02_app_registry)) {
      if ((0x0, _0x475b10["OCRText"])(_0x1195f6)) return (0x0, _0x2dbfb2["hlog"])("进入任务页,任务识别中"), sleep(0x1388), !![];
    }!_0xa75e0 && (0x0, _0x2dbfb2["findRw"])(_0x2d93c8, _0x132fa1, _0x12dc7d);
  }

  function _0x1e7cd4() {
    _0x2d93c8(), _0x1d0c52(/新人签到领金币.*|惊喜签到额外领.*/, /领取|去领取/, 0x4) && _0xbf884c(), _0x1d0c52(/新人看剧送现金.*/, /领取/, 0x4), _0x1d0c52(/见面领现金.*/, /领取/, 0x4), _0x207b39();
  }

  function _0x47e4c1(_0x4ccf61) {
    var _0x54f85c = _0x58573d;
    if (!_0x4ccf61) {
      _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("任务开始:签到"), _0x5a3119 = (0x0, _0x2dbfb2['findTextInParent'])(/签到.*/, /已完成/, 0x4);
      if (_0x5a3119 || textMatches(/明日签到.*/)["findOnce"]()) return (0x0, _0x1b2d84["setQiandaoStatus"])(_0x12dc7d), !![];
      _0x1d0c52(/今日签到.*|签到.*/, /去签到/, 0x4);
    }
    if ((0x0, _0x2dbfb2["textClick"])(/立即签到.*|直接领取/)) return _0xbf884c(), (0x0, _0x2dbfb2['textClick'])(/.*close/), (0x0, _0x2dbfb2["textClick"])(/明日再来.*金币/), (0x0, _0x1b2d84['setQiandaoStatus'])(_0x12dc7d), !![];
  }

  function _0xbf884c() {
    var _0x180b10 = _0x58573d;
    (0x0, _0x2dbfb2["textClick"])(/看.*视频最高再领\d+金币/) && (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d);
    (0x0, _0x2dbfb2["textClick"])(/双倍领取/) && (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d);
    textMatches(/仅领取基础奖励/)["findOnce"]() && (0x0, _0x2dbfb2["textClick"])(/领取/) && (0x0, _0x4a8f9b['closeAd'])(_0x12dc7d, _0x1195f6);
    for (var _0x1e3579 = 0x0; _0x1e3579 < 0x3; _0x1e3579++) {
      if (textMatches(/再看一个视频最高可获得/)["findOnce"]())(0x0, _0x2dbfb2["idClick"])('iv_button') && (0x0, _0x4a8f9b['closeAd'])(_0x12dc7d);
      else break;
    }
    _0x525e5d();
  }

  function _0x11fcd6() {
    var _0x1c9efd = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["textClick"])(/开宝箱|点击领\d+金币/) && (_0xbf884c(), (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d, _0x1195f6));
  }

  function _0x3c292b() {
    var _0x136c4a = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("任务开始：看广告");
    if (textMatches(/距离下次可领金币.*/)['findOnce']()) {
      (0x0, _0x2dbfb2['hlog'])("看广告未到时间");
      return;
    }
    _0x1d0c52(/看小视频领金币.*/, /去观看/, 0x8) && (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d, _0x1195f6);
  }

  function _0x313c60() {
    var _0x52d71a = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("任务开始：翻卡");
    if (textMatches(/距下次翻卡/)["findOnce"]()) {
      (0x0, _0x2dbfb2["hlog"])('翻卡未到时间');
      return;
    }(0x0, _0x2dbfb2['textClick'])(/翻个位/), _0x525e5d(), (0x0, _0x2dbfb2["textClick"])(/翻十位/), _0x525e5d(), (0x0, _0x2dbfb2["textClick"])(/翻百位/), _0x525e5d(), (0x0, _0x2dbfb2["textClick"])(/翻千位/), _0x525e5d(), (0x0, _0x2dbfb2["textClick"])(/领取奖励/), _0x2d93c8(), _0x1d0c52(/翻卡领金币.*/, /领金币/, 0x8) && (0x0, _0x2dbfb2["textClick"])(/领取奖励/);
  }

  function _0x525e5d() {
    var _0x544705 = _0x58573d;
    for (var _0x1224ab = 0x0; _0x1224ab < 0x3; _0x1224ab++) {
      _0x5a3119 = textMatches(/领取奖励/)["className"]('android.widget.Button')['findOnce'](), (0x0, _0x2dbfb2["cClick"])(_0x5a3119), _0x1d0c52(/翻卡领金币.*/, /领金币/, 0x8) && (_0x5a3119 = textMatches(/领取奖励/)['className']('android.widget.Button')['findOnce'](), (0x0, _0x2dbfb2["cClick"])(_0x5a3119)), (0x0, _0x2dbfb2["textClick"])(/.*看视频翻.*位/) && (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d, _0x1195f6);
    }
  }

  function _0x16ce5d() {
    var _0x46a9f8 = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2['hlog'])("任务开始：预约");
    if (textMatches(/已预约.*明日.*/)["findOnce"]()) return !![];
    if (_0x1d0c52(/预约领金币.*/, /去预约/, 0x8))(0x0, _0x2dbfb2["textClick"])(/立即预约|继续预约|预约明日奖励/), back();
    else _0x1d0c52(/预约领金币.*/, /去领取/, 0x8) && ((0x0, _0x2dbfb2['textClick'])(/立即领取/) && (_0xbf884c(), (0x0, _0x2dbfb2["textClick"])(/继续预约/)), back());
  }

  function _0x4b1f82() {
    var _0x1e5152 = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("任务开始：红包雨"), _0x1d0c52(/金币红包雨.*/, /去参加/, 0x5) && ((0x0, _0x2dbfb2['randomTap'])(0x7), sleep(0x1388), _0xbf884c(), (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d, _0x1195f6));
  }

  function _0x1938d1() {
    var _0x3b1b9a = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("任务开始：看短剧");
    if (_0x38e60(M00_utils_ui_helpers)) {
      var _0x542084 = 0x0;
      while (!![]) {
        sleep(0x3e8 * 0x3c);
        textMatches(/上滑继续观看短剧/)['findOnce']() && (0x0, _0x2dbfb2["scroll_up_quick_cnt"])(0x2);
        _0x542084 = _0x542084 + 0x1;
        if (_0x542084 >= _0x1f8817["hmjc_kanduanju_min"]) break;
      }
      for (var _0x43e321 = 0x0; _0x43e321 < 0x5; _0x43e321++) {
        back();
        if (_0x38e60(M02_app_registry)) break;
      }
    }
    _0x207b39();
  }

  function _0x207b39() {
    var _0x36f34a = _0x58573d;
    _0x2d93c8(), (0x0, _0x2dbfb2["hlog"])("检测视频奖励是否可以领取");
    for (var _0x581b01 = 0x0; _0x581b01 < 0x5; _0x581b01++) {
      (0x0, _0x2dbfb2["hlog"])("看剧领金币");
      if (_0x1d0c52(/看剧领金币.*/, /去领取/, 0x6)) _0xbf884c(), (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d, _0x1195f6);
      else {
        (0x0, _0x2dbfb2["hlog"])("看剧领金币已领取完");
        break;
      }
    }
    _0x1d0c52(/看短剧额外存金币.*/, /去领取/, 0x5) && (_0xbf884c(), (0x0, _0x4a8f9b["closeAd"])(_0x12dc7d, _0x1195f6));
  }

  function _0x1d0c52(_0x1d35df, _0x36b0cd, _0xed99a1) {
    var _0x45f55f = _0x58573d;
    _0x5a3119 = (0x0, _0x2dbfb2['findTextInParent'])(_0x1d35df, _0x36b0cd, _0xed99a1);
    if (_0x5a3119 && _0x5a3119["clickable"]()) return (0x0, _0x2dbfb2["cClick"])(_0x5a3119, !![]);
  }
}