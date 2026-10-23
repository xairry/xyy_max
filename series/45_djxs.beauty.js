function(_0x595481, _0x30695b, _0x98a40a) {
  var _0x1d499a = a1_0x4b7c;
  Object['defineProperty'](_0x30695b, "__esModule", {
    'value': !![]
  }), _0x30695b['djxs'] = _0x35fee1;
  var _0x33bd6e = _0x98a40a(M02_app_registry),
    _0x1b975d = _0x98a40a(M00_utils_ui_helpers),
    _0x14ac6e = _0x98a40a(M04_push_report),
    _0x566014 = _0x98a40a(M09_video_book_common),
    _0x5a0e80 = _0x98a40a(M08_check_task),
    _0x5074c6 = _0x98a40a(M01_config_global),
    _0x19beb3 = _0x98a40a(M07_ad_close),
    _0x19b2a1 = _0x98a40a(M03_ocr_engine),
    _0x2f8b3b = _0x98a40a(M19_novel_group_b),
    _0x126a7c = {
      'djxs_qiandao': _0x386f92,
      'djxs_kaibaoxiang': _0xa6947c,
      'djxs_kanguanggao': _0x21ddf4,
      'djxs_lingfanbu': _0x3b5ca4,
      'djxs_guangjie': _0x2ec60d,
      'djxs_hongbaoyu': _0x3f0b19,
      'djxs_xiaoshuo': _0x469346
    },
    _0xf7155a = {
      'djxs_kaibaoxiang': _0xa6947c,
      'djxs_kanguanggao': _0x21ddf4
    },
    _0x255f6f, _0x504a07;

  function _0x35fee1() {
    var _0x1d913b = _0x1d499a;
    try {
      _0x504a07 = _0x33bd6e["djxsapp"];
      _0x5074c6['djxs_rw_list'] && (_0x5074c6["djxs_rw_list"]["push"]("djxs_guangjie"), _0x5074c6["djxs_rw_list"]["push"]("djxs_hongbaoyu"));
      _0x501df7(), _0x3a197b();
      if (text("今日金币收益")["findOnce"]()) {
        (0x0, _0x1b975d["hlog"])("新版本"), (0x0, _0x2f8b3b['djxsnew'])();
        return;
      }(0x0, _0x1b975d["sendEvent"])(_0x504a07), (0x0, _0x1b975d["execFuncs"])(_0x126a7c, _0x5074c6["djxs_rw_list"]), (0x0, _0x1b975d["execFuncs"])(_0xf7155a, _0x5074c6["djxs_rw_list"]), _0x456f89(), _0x552e54();
    } catch (_0x5e2f3e) {
      (0x0, _0x1b975d["handleAppError"])(_0x5e2f3e);
    }
  }

  function _0x501df7() {
    var _0x5d0f4d = _0x1d499a;
    _0xb17b90(), (0x0, _0x1b975d["execFirstRw"])(_0x504a07, _0x3a197b, function() {
      var _0x1fdd64 = _0x5d0f4d;
      _0x255f6f = textMatches(/看.*马上得.*金币/)["findOnce"](), _0x255f6f && (0x0, _0x1b975d['cClick'])(_0x255f6f['parent']()["child"](_0x255f6f["parent"]()["childCount"]() - 0x1));
    });
  }

  function _0x3542b5() {
    var _0x46a86e = _0x1d499a;
    _0x255f6f = text("立即领取")['find'](), (0x0, _0x1b975d['clickMidBottomBtn'])(_0x255f6f, _0x5074c6["deviceWidth"] - 0x64, 0x12c);
  }

  function _0xb17b90() {
    var _0x4eabd3 = _0x1d499a;
    currentActivity() != "com.zhangyue.iReader.bookshelf.ui.ActivityBookShelf" && back();
  }

  function _0x552e54() {
    var _0x41d5ea = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])("计算收益");
    if (_0x1d3c97(M02_app_registry)) {
      var _0x26336e, _0xa3f196;
      _0x255f6f = text("金币收益")["findOnce"](), _0x255f6f && (_0x26336e = (0x0, _0x5a0e80["getTextNumber"])(_0x255f6f['parent']()["child"](0x1)["text"]())), _0x255f6f = text("现金收益")["findOnce"](), _0x255f6f && (_0xa3f196 = (0x0, _0x5a0e80["getTextFloat"])(_0x255f6f["parent"]()["child"](0x1)["text"]())), (0x0, _0x14ac6e["setGold"])(_0x33bd6e['djxsapp'], _0x26336e, _0xa3f196);
    }
  }

  function _0x1d3c97(_0x315a68) {
    var _0x53227a = _0x1d499a;
    sleep(0xbb8);
    if (_0x315a68 == 0x0) return (0x0, _0x1b975d["descClick"])("bookshelf_button", !![]);
    if (_0x315a68 == 0x1) return (0x0, _0x1b975d["descClick"])("bookstore_button", !![]);
    if (_0x315a68 == 0x2) return (0x0, _0x1b975d["descClick"])("discovery_button", !![]);
  }

  function _0x3a197b(_0x5d0ae4) {
    var _0x1568d9 = _0x1d499a;
    sleep(0x1388);
    var _0x1b801e = /金币收益|现金收益|.*连续签到.*|立即提现|去提现|今日金币收益|立即签到.*/;
    _0x255f6f = textMatches(_0x1b801e)["findOnce"]();
    if (_0x255f6f) return _0x5139c9(/看视频再领.*/), (0x0, _0x1b975d["hlog"])('继续执行下一个任务'), !![];
    if (_0x1d3c97(M02_app_registry)) {
      _0x255f6f = textMatches(_0x1b801e)["findOne"](0x2710);
      if (_0x255f6f) return _0x5139c9(/看视频再领.*/), (0x0, _0x1b975d["hlog"])("进入任务页,任务识别中"), !![];
    }!_0x5d0ae4 && (0x0, _0x1b975d['findRw'])(_0x3a197b, _0xb17b90, _0x504a07);
  }

  function _0x386f92() {
    var _0x3a3277 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d['hlog'])("任务开始:签到"), _0x3542b5(), _0x255f6f = textMatches(/明日签到.*/)["findOnce"]();
    if (_0x255f6f) {
      (0x0, _0x14ac6e["setQiandaoStatus"])(_0x33bd6e["djxsapp"], !![]);
      return;
    }(0x0, _0x1b975d['textClick'])(/签到|点击签到.*|点击领取.*连签.*/) && _0x5139c9(/观看视频额外领.*/);
  }

  function _0xa6947c() {
    var _0x40a105 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])('任务开始：开宝箱'), (0x0, _0x1b975d["textClick"])(/开宝箱得金币/) ? _0x5139c9(/看视频再领\d+金币/) : (0x0, _0x1b975d["hlog"])("开宝箱未到时间");
  }

  function _0x5139c9(_0x4db159) {
    var _0x543c41 = _0x1d499a;
    for (var _0x49578b = 0x0; _0x49578b < 0x3; _0x49578b++) {
      if ((0x0, _0x1b975d["textClick"])(_0x4db159)) {
        if (!textMatches(_0x4db159)["findOnce"]()) return (0x0, _0x19beb3["closeAd"])(_0x504a07), (0x0, _0x1b975d["textClick"])(/知道了|我知道了/), !![];
        else(0x0, _0x1b975d['hlog'])('广告无法加载,等10s后重试'), sleep(0x2710);
      }
    }
  }

  function _0x21ddf4() {
    var _0x8091c5 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])("任务开始：看广告"), _0x5139c9(/去观看/);
    if ((0x0, _0x1b975d["textClick"])(/参与活动赚金币/)) {
      _0x255f6f = textMatches("看.*个视频赚.*")["findOnce"]();
      if (!_0x255f6f || (0x0, _0x5a0e80["compareValues"])(_0x255f6f["text"]())) {
        back(), sleep(0xbb8);
        return;
      }
      for (var _0x1c88cd = 0x0; _0x1c88cd < 0x6; _0x1c88cd++) {
        (0x0, _0x1b975d['hlog'])('看第' + (_0x1c88cd + 0x1) + "个广告"), !_0x5139c9(/看视频赚金币|看视频继续赚金币/) && ((0x0, _0x1b975d["hlog"])("等待10s看下一个"), sleep(0x2710));
      }
      back(), sleep(0xbb8), back(), sleep(0xbb8);
    }
  }

  function _0x3b5ca4() {
    var _0x51a02d = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])("任务开始：领饭补"), _0x1d3c97(M02_app_registry);
    if (_0x23322c('早餐福利')) return;
    if (_0x23322c("午餐福利")) return;
    if (_0x23322c("晚餐福利")) return;
    if (_0x23322c('睡前福利')) return;
    if (_0x54a9d5("早餐福利")) return;
    if (_0x54a9d5("午餐福利")) return;
    if (_0x54a9d5("晚餐福利")) return;
    if (_0x54a9d5("睡前福利")) return;
  }

  function _0x23322c(_0x4b66f9) {
    var _0x431faf = _0x1d499a;
    _0x255f6f = text(_0x4b66f9)["findOnce"]();
    if (_0x255f6f && _0x255f6f["parent"]() && _0x255f6f["parent"]()["parent"]() && _0x255f6f["parent"]()["parent"]()["parent"]()) {
      var _0x3efe8d = _0x255f6f["parent"]()["parent"]()['parent']()["child"](0x1);
      if ((0x0, _0x1b975d["cClick"])(_0x3efe8d)) return _0x5139c9(/看视频再领\d+金币/), !![];
    }
  }

  function _0x54a9d5(_0x477ad7) {
    var _0x26ef38 = _0x1d499a;
    _0x255f6f = text(_0x477ad7)["findOnce"]();
    if (_0x255f6f && _0x255f6f["parent"]() && _0x255f6f['parent']()["child"](0x1)["text"]() === "点击领取") {
      if ((0x0, _0x1b975d['cClick'])(_0x255f6f['parent']()['child'](0x1))) return _0x5139c9(/看视频再领\d+金币/), !![];
    }
  }

  function _0x2ec60d() {
    var _0x224909 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])('任务开始：逛街'), (0x0, _0x1b975d['textClick'])(/去逛逛/) && ((0x0, _0x19beb3['closeAd'])(_0x504a07), _0x5139c9(/看视频再领\d+金币/));
  }

  function _0x3f0b19() {
    var _0x561c23 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d['hlog'])("任务开始：红包雨"), (0x0, _0x1b975d["textClick"])(/领红包/) && ((0x0, _0x1b975d["randomTap"])(0x8), sleep(0x2710), (0x0, _0x1b975d["textClick"])(/看视频翻倍领取/) && (0x0, _0x19beb3['closeAd'])(_0x504a07));
  }

  function _0x469346(_0x397ad0) {
    var _0x2da2a7 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])('任务开始：看小说');
    var _0x575a84 = (0x0, _0x5a0e80["getObjectNumber"])(/今日已读\d+分钟/);
    if (!_0x397ad0 && _0x575a84 >= 0xb4) return (0x0, _0x1b975d['hlog'])('今日听读已完成'), !![];
    if (_0x1d3c97(M01_config_global)) {
      sleep(0x1388);
      for (var _0x1f8a33 = 0x0; _0x1f8a33 < 0x3; _0x1f8a33++) {
        _0x255f6f = text(random(0x1, 0x4))['findOnce']();
        if (!_0x255f6f) {
          _0x255f6f = id("iv_book")["findOnce"]();
          if (!_0x255f6f) {
            _0x255f6f = textMatches(/.*(万字|万人在读|\d+.\d+).*/)["findOnce"]();
            if (!_0x255f6f) {
              _0x255f6f = text('分')["findOnce"]();
              if (!_0x255f6f) {
                if ((0x0, _0x1b975d["textClickXY"])(/^(男生|女生)$/)) continue;
              }
            }
          }
        }
        if ((0x0, _0x1b975d["pClick"])(_0x255f6f)) break;
        else(0x0, _0x1b975d["scroll_left_once"])(), sleep(0x1388);
      }
      for (var _0x1257da = 0x0; _0x1257da < 0x3; _0x1257da++) {
        (0x0, _0x1b975d["scroll_left_once"])(), sleep(0x3e8), (0x0, _0x1b975d["clickCenter"])();
        if ((0x0, _0x19b2a1["OCRClick"])(/听书/) || (0x0, _0x1b975d["textClick"])(/听书/)) break;
      }
      if (_0x255f6f) {
        (0x0, _0x1b975d["textClick"])(/看广告加时长|看视频解锁.*|看视频再加.*分钟/) && (!textMatches(/看广告加时长|看视频解锁.*|看视频再加.*分钟/)['findOnce']() && (0x0, _0x19beb3['closeAd'])(_0x504a07));
        !_0x397ad0 && (_0x397ad0 = _0x5074c6["djxs_kanxiaoshu_min"]);
        if ((0x0, _0x1b975d["textClick"])(/阅读电子书|边听边读/)) {
          var _0x3b7683 = threads['start'](function() {
            var _0x3522a1 = _0x2da2a7;
            (0x0, _0x566014["xs_tingshu"])(_0x397ad0, function() {
              var _0x2ef54d = _0x3522a1;
              (0x0, _0x566014["check_activity"])(_0x3b7683, ['com.zhangyue.iReader.read.ui.Activity_BookBrowser_TXT']);
            }, _0x4b6f44, !![]);
          });
          _0x3b7683['join']();
        }
      }(0x0, _0x566014['xs_after'])(_0x3a197b), _0x456f89();
    }
  }

  function _0x456f89() {
    var _0x2776c7 = _0x1d499a;
    _0x3a197b(), (0x0, _0x1b975d["hlog"])("任务开始：收取奖励");
    for (var _0x314b68 = 0x0; _0x314b68 < 0x6; _0x314b68++) {
      _0x255f6f = text("每日阅读福利")['findOnce']();
      if (_0x255f6f && _0x255f6f["parent"]() && _0x255f6f["parent"]()['parent']() && _0x255f6f["parent"]()["parent"]()["parent"]() && _0x255f6f["parent"]()["parent"]()["parent"]()["child"](0x1) && _0x255f6f["parent"]()['parent']()["parent"]()["child"](0x1)["child"](0x0)) _0x255f6f = _0x255f6f["parent"]()["parent"]()["parent"]()['child'](0x1)['child'](0x0), _0x255f6f["text"]() && _0x255f6f["text"]() === '领取' && (0x0, _0x1b975d['cClick'])(_0x255f6f) && (!_0x5139c9(/看视频再领.*/) && (0x0, _0x1b975d['textClick'])(/知道了/));
      else break;
    }
  }

  function _0x4b6f44() {
    var _0x285c9d = _0x1d499a;
    (0x0, _0x1b975d['idClick'])("iv_close", !![]), (0x0, _0x1b975d["idClick"])("Id_withdraw_close_btn", !![]), (0x0, _0x1b975d['textClick'])(/看广告加时长|看视频解锁.*|看视频再加.*分钟/) && (0x0, _0x19beb3["closeAd"])(_0x504a07), textMatches(/无广告阅读时长已用完/)["findOnce"]() && (0x0, _0x1b975d["clickCenter"])();
  }
}