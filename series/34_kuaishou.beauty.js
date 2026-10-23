function(_0xf8bc27, _0xcce11a, _0x5574e2) {
  var _0x35dcb8 = a1_0x4b7c;
  Object["defineProperty"](_0xcce11a, "__esModule", {
    'value': !![]
  }), _0xcce11a["ksjs"] = _0x4c24c1, _0xcce11a["kspt"] = _0x558f21;
  var _0x8e0cdc = _0x5574e2(M02_app_registry),
    _0x553b14 = _0x5574e2(M00_utils_ui_helpers),
    _0x2b42da = _0x5574e2(M07_ad_close),
    _0x2ce2e0 = _0x5574e2(M04_push_report),
    _0x4137e3 = _0x5574e2(M08_check_task),
    _0x311aca = _0x5574e2(M09_video_book_common),
    _0x53ed13 = _0x5574e2(M01_config_global),
    _0x16ea38 = _0x5574e2(M12_date_utils),
    _0x3a0fe7 = _0x5574e2(M03_ocr_engine),
    _0x3dcca1 = _0x5574e2(M06_storage_card),
    _0x2a263c = _0x5574e2(M05_hid_control),
    _0x18ff66 = _0x5574e2(M10_activity_consts),
    _0x4bad48, _0x57a605, _0x5993c2 = /^(任务中心|瓜分百亿|新手任务|日常任务|每日挑战|我的金币|我的现金|我的抵用金|现金收益.*|金币暴涨|看广告.*金币|逛街.*金币)/,
    _0x41fd26 = {
      'ksjs_qiandao': _0x2ee964,
      'ksjs_sousuo': _0xfe25de,
      'ksjs_kaibaoxiang': _0x3486a2,
      'ksjs_kanguanggao': _0x121b25,
      'ksjs_guangjie': _0x3b5b77,
      'ksjs_lingfanbu': _0x4be5d9,
      'ksjs_kanzhibo': _0x52a894,
      'ksjs_yuyue': _0x32af49,
      'ksjs_weiya': _0x482a2d,
      'ksjs_kanshipin': _0x15a4cc
    },
    _0x2a45c2 = {
      'kspt_qiandao': _0x2ee964,
      'kspt_sousuo': _0xfe25de,
      'kspt_kaibaoxiang': _0x3486a2,
      'kspt_kanguanggao': _0x121b25,
      'kspt_guangjie': _0x3b5b77,
      'kspt_lingfanbu': _0x4be5d9,
      'kspt_kanzhibo': _0x52a894,
      'kspt_yuyue': _0x32af49,
      'kspt_weiya': _0x482a2d,
      'kspt_kanshipin': _0x15a4cc
    };

  function _0x4c24c1() {
    var _0xb787e1 = _0x35dcb8;
    try {
      _0x57a605 = _0x8e0cdc['ksjsapp'], _0x471ab4(), (0x0, _0x553b14["execFuncs"])(_0x41fd26, _0x53ed13['ksjs_rw_list']), _0x256fe4(), _0x1800d3();
    } catch (_0x39c876) {
      (0x0, _0x553b14["handleAppError"])(_0x39c876);
    }
  }

  function _0x558f21() {
    var _0x5c486d = _0x35dcb8;
    try {
      _0x57a605 = _0x8e0cdc['ksptapp'], _0x471ab4(), (0x0, _0x553b14["execFuncs"])(_0x2a45c2, _0x53ed13["kspt_rw_list"]), _0x256fe4(), _0x1800d3();
    } catch (_0x3b5f9c) {
      (0x0, _0x553b14["handleAppError"])(_0x3b5f9c);
    }
  }

  function _0x471ab4() {
    _0x5d0dcd(), (0x0, _0x553b14['execFirstRw'])(_0x57a605, _0x2eec34, function() {
      _0x2ee964(!![]);
    });
  }

  function _0x5d0dcd() {
    var _0xb1f795 = _0x35dcb8;
    _0x53ed13["hidMode"] ? ((0x0, _0x2a263c["HBack"])(), (0x0, _0x3a0fe7['OCRClickSimilarImageTop'])(_0x18ff66["KS_CLOSE_X"], 0.7)) : ((0x0, _0x553b14["idClick"])('close_btn', !![]), (0x0, _0x553b14["idClick"])("iv_close"), _0x4bad48 = className("android.widget.ImageView")["clickable"]()["find"](), (0x0, _0x553b14["clickMidBottomBtn"])(_0x4bad48), back(), (0x0, _0x3a0fe7['OCRClickSimilarImageTop'])(_0x18ff66["KS_CLOSE_X"], 0.7));
  }

  function _0x2ee230() {
    var _0x33610e = _0x35dcb8;
    return (0x0, _0x2b42da["ks_ok"])(_0x57a605, _0x5993c2);
  }

  function _0x256fe4() {
    var _0x27d0bc = _0x35dcb8;
    _0x2eec34();
    var _0x125510 = (0x0, _0x3a0fe7["doCaptureScreen"])();
    if ((0x0, _0x3a0fe7["OCRMatch"])(_0x125510, /惊喜福利/))
      for (var _0xc8745c = 0x0; _0xc8745c < 0x3; _0xc8745c++) {
        if ((0x0, _0x3a0fe7["OCRMatchClick"])(_0x125510, /^待领$/))(0x0, _0x3a0fe7["OCRClick"])(/看视频立得/) ? _0x2ee230() : (0x0, _0x3a0fe7["OCRClickSimilarImageTop"])(_0x18ff66["KS_CLOSE_X"], 0.7);
        else break;
      }
    for (var _0xc8745c = 0x0; _0xc8745c < 0x3; _0xc8745c++) {
      if (!(0x0, _0x553b14["textClick"])(/点击领取/)) break;
    }(0x0, _0x553b14['textClick'])(/领取奖励|.*立即领取|领金币/) && (0x0, _0x553b14["textClick"])(/继续赚钱|知道了/);
  }

  function _0x19f771(_0x426989) {
    var _0x4565ae = _0x35dcb8;
    sleep(0x1388);
    if (_0x53ed13["hidMode"]) {
      if (_0x426989 == 0x1)
        for (var _0x1174d6 = 0x0; _0x1174d6 < 0x3; _0x1174d6++) {
          if (_0x57a605 == _0x8e0cdc["ksjsapp"]) {
            if ((0x0, _0x3a0fe7["OCRClick"])(/^去赚钱|^去赚/)) return !![];
            else {
              if ((0x0, _0x3a0fe7["OCRClickSimilarImageTop"])(_0x18ff66["KS_HOME"], 0.6)) return !![];
              else(0x0, _0x553b14["scroll_up_quick_cnt"])(0x1), sleep(0xbb8);
            }
          } else {
            if ((0x0, _0x3a0fe7["OCRClickSimilarImageTop"])([_0x18ff66['KSPT_HOME'], _0x18ff66['KS_HOME'], _0x18ff66["KSPT_HOME2"]], 0.6)) return !![];
            else(0x0, _0x553b14["scroll_up_quick_cnt"])(0x1), sleep(0xbb8);
          }
        }
      if (_0x426989 == 0x2)
        for (var _0x1174d6 = 0x0; _0x1174d6 < 0x3; _0x1174d6++) {
          if (_0x57a605 == _0x8e0cdc["ksjsapp"]) {
            if ((0x0, _0x3a0fe7["OCRClick"])(/^首页$/)) return !![];
            else(0x0, _0x2a263c['HBack'])();
          } else {
            if ((0x0, _0x3a0fe7["OCRClick"])(/^精选$/)) return !![];
            else(0x0, _0x2a263c["HBack"])();
          }
        }
    } else {
      if (_0x426989 == 0x1) {
        if (_0x57a605 == _0x8e0cdc["ksjsapp"]) {
          if ((0x0, _0x553b14["descClick"])(/去赚钱.*/, !![])) return !![];
          else return (0x0, _0x553b14["idClick"])("left_btn") && (0x0, _0x553b14['textClick'])(/去赚钱/) ? !![] : (_0x4bad48 = className("androidx.appcompat.app.ActionBar$c")["clickable"]()["findOnce"](0x2), (0x0, _0x553b14['cClick'])(_0x4bad48));
        } else {
          if (_0x57a605 == _0x8e0cdc['ksptapp']) {
            (0x0, _0x553b14['descClick'])(/精选/, !![]);
            for (var _0x1174d6 = 0x0; _0x1174d6 < 0x5; _0x1174d6++) {
              sleep(0x1388);
              if ((0x0, _0x553b14["idClick"])("kem_new_absorb_pendant") || (0x0, _0x553b14["idClick"])("pendant_container") || (0x0, _0x553b14["idClick"])('kem_task_pendant_new') || (0x0, _0x553b14["idClick"])("pendant_red_packet_link") || (0x0, _0x553b14["idClick"])("pendant_bg") || (0x0, _0x553b14["idClick"])("pendant_mask_bg") || (0x0, _0x553b14["idClick"])("progress_bar")) return !![];
              else {
                if ((0x0, _0x553b14["idClick"])("featured_left_hamburger") || (0x0, _0x553b14["idClick"])("left_btn")) {
                  if ((0x0, _0x553b14['textClick'])(/任务中心/)) return !![];
                } else {
                  if ((0x0, _0x553b14["textClick"])(/任务中心/)) return !![];
                  else(0x0, _0x553b14["scroll_up_quick_cnt"])(0x1);
                }
              }
            }
          }
        }
        return ![];
      }
      if (_0x426989 == 0x2) {
        if (_0x57a605 == _0x8e0cdc['ksjsapp']) {
          if ((0x0, _0x553b14["descClick"])(/首页/, !![])) return (0x0, _0x553b14['descClick'])(/发现/), !![];
        } else {
          if (_0x57a605 == _0x8e0cdc["ksptapp"]) return (0x0, _0x553b14['descClick'])(/精选/, !![]);
        }
      }
    }
  }

  function _0x2eec34(_0x2579fc) {
    var _0x30bd0b = _0x35dcb8;
    sleep(0x7d0);
    if (_0x57a605 == _0x8e0cdc["ksptapp"] || _0x53ed13["hidMode"]) {
      _0x4bad48 = (0x0, _0x2a263c['HFind'])(_0x5993c2);
      if (_0x4bad48) return (0x0, _0x3a0fe7["OCRClickSimilarImageTop"])(_0x18ff66["KS_CLOSE_X"], 0.7), _0x53ed13["hidMode"] && (0x0, _0x553b14["scroll_down_quick_cnt"])(0x8), (0x0, _0x553b14["hlog"])('继续执行下一个任务'), !![];
    }
    if (_0x19f771(M01_config_global)) {
      _0x53ed13["hidMode"] ? ((0x0, _0x3a0fe7["OCRClickSimilarImageTop"])(_0x18ff66["KS_CLOSE_X"], 0.7), _0x4bad48 = (0x0, _0x2a263c['HFind'])(_0x5993c2, 0x1f40)) : _0x4bad48 = textMatches(_0x5993c2)["findOne"](0x61a8);
      if (_0x4bad48) return _0x53ed13["hidMode"] && ((0x0, _0x3a0fe7["OCRClickSimilarImageTop"])(_0x18ff66["KS_CLOSE_X"], 0.7), (0x0, _0x553b14["scroll_down_quick_cnt"])(0x8)), _0x332cb0(), !_0x53ed13['hidMode'] && (0x0, _0x553b14["scroll_up_quick_cnt"])(0x1), (0x0, _0x553b14["hlog"])("进入任务页,任务识别中"), !![];
    }!_0x2579fc && (0x0, _0x553b14["findRw"])(_0x2eec34, _0x5d0dcd, _0x57a605);
  }

  function _0x4c30ef(_0x5d5a68) {
    var _0x5e3db8 = _0x35dcb8;
    for (var _0x438adb = 0x0; _0x438adb < _0x5d5a68; _0x438adb++) {
      (0x0, _0x2a263c["HBack"])();
      if ((0x0, _0x553b14["textClick"])(/放弃奖励|残忍离开|退出.*|放弃/)) break;
    }
  }

  function _0x2ee964(_0x40bb86) {
    var _0x4b8708 = _0x35dcb8;
    if (!_0x40bb86) {
      _0x2eec34(), (0x0, _0x553b14["hlog"])("任务开始：签到领金币");
      if (_0x53ed13['hidMode']) {
        var _0x2d3e1e = (0x0, _0x3a0fe7["OCRResult"])(/去签到|连续签到|立即签到|14天签到得.*元/, ![], null, 0xb);
        if ((0x0, _0x3a0fe7["OCRMatch"])(_0x2d3e1e, /明天签到.*|明日签到.*|提醒我.*天来领|已连续签到.*明天可领.*|已签到.*天/)) return !![];
        else(0x0, _0x3a0fe7["OCRMatchClick"])(_0x2d3e1e, /看广告领取今天|^去签到|^立即签到/) && _0x2ee230();
      } else(0x0, _0x553b14["textClick"])(/去签到/), (0x0, _0x553b14["textClick"])(/看广告领取今天奖励/) && _0x2ee230();
    }(0x0, _0x553b14["textClick"])(/^立即签到|^立即领取/), _0x4bad48 = (0x0, _0x2a263c["HFind"])(/明天签到.*|明日签到.*|提醒我.*天来领|已连续签到.*明天可领.*|已签到.*天/);
    if (_0x4bad48) return (0x0, _0x2ce2e0["setQiandaoStatus"])(_0x57a605), !![];
    ((0x0, _0x553b14["textClick"])(/^(去赚更多|赚更多)/) || (0x0, _0x553b14['textClick'])(/^(看广告最高领.*|看视频赚\d+金币|看内容最高可得.*金币.*|看广告签到)/)) && _0x2ee230(), (0x0, _0x2a263c["HBack"])();
  }

  function _0xfe25de() {
    var _0xed7c07 = _0x35dcb8;
    if (_0x53ed13['hidMode']) return;
    _0x2eec34(), (0x0, _0x553b14["hlog"])('任务开始：搜索');
    _0x57a605 == _0x8e0cdc["ksptapp"] && back();
    _0x19f771(M02_app_registry) && back();
    sleep(0x7d0);
    if ((0x0, _0x553b14['idClick'])('thanos_home_top_search') || (0x0, _0x553b14["idClick"])("nasa_featured_default_search_view") || (0x0, _0x553b14['descClick'])(/查找/)) {
      _0x4bad48 = id("editor")["findOnce"]();
      !_0x4bad48 && (_0x4bad48 = className("android.widget.EditText")["findOnce"]());
      if (_0x4bad48)
        for (var _0x3c983b = 0x0; _0x3c983b < 0x3; _0x3c983b++) {
          var _0x2e9755 = (0x0, _0x553b14["getRandomValue"])();
          _0x2e9755 && _0x4bad48["setText"](_0x2e9755), sleep(0x7d0), (0x0, _0x553b14["textClick"])(/搜索/) && ((0x0, _0x553b14["scroll_up_quick"])(0xa), back(), sleep(0xbb8));
        }
      back(), sleep(0xbb8);
    }
    return _0x19f771(M01_config_global), !![];
  }

  function _0x3486a2() {
    var _0x3e3e9d = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14['hlog'])("任务开始：开宝箱");
    if ((0x0, _0x553b14["textClick"])(/开宝箱得金币|立刻领\d+金币|点.*领.*金币/)) _0x332cb0();
    else {
      (0x0, _0x553b14['hlog'])("开宝箱得金币未到时间");
      return;
    }
  }

  function _0x332cb0() {
    var _0x1b701f = _0x35dcb8;
    if ((0x0, _0x553b14["textClick"])(/观看广告最高可得.*|看内容最高可得.*金币.*|.*去看广告赚更多|.*去看广告得最高.*|看1个广告就能领|^(去看内容|去看广告得金币)$/)) _0x2ee230();
    else(0x0, _0x553b14["textClick"])(/先去看精彩视频/) && _0x19f771(M01_config_global);
  }

  function _0x121b25() {
    var _0x496630 = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14["hlog"])('任务开始：看广告');
    var _0xa6226;
    _0x57a605 == _0x8e0cdc['ksjsapp'] ? _0xa6226 = _0x53ed13["ksjs_ad_time"] : _0xa6226 = _0x53ed13['kspt_ad_time'];
    (!_0xa6226 || _0xa6226 < 0x1) && (_0xa6226 = 0x1);
    var _0x17822b = /看广告.*金币|看视频得.*金币.*|最高金币.*悬赏.*/;
    for (var _0x635055 = 0x0; _0x635055 < _0xa6226; _0x635055++) {
      _0x2eec34();
      if (_0x53ed13['hidMode']) {
        var _0xf9f725;
        _0x635055 == 0x0 ? _0xf9f725 = (0x0, _0x3a0fe7["OCRResult"])(_0x17822b) : _0xf9f725 = (0x0, _0x3a0fe7["OCRResult"])(_0x17822b, ![]);
        if ((0x0, _0x3a0fe7["OCRFindNextByResult"])(_0xf9f725, _0x17822b, /明天再来|已完成/)) return !![];
        else {
          if ((0x0, _0x3a0fe7['OCRFindNextByResult'])(_0xf9f725, _0x17822b, /冷却中/)) {
            (0x0, _0x553b14["hlog"])("看广告冷却中");
            return;
          } else {
            if ((0x0, _0x3a0fe7["OCRMatchClick"])(_0xf9f725, _0x17822b)) _0x2ee230();
            else break;
          }
        }
      } else {
        _0x4bad48 = textMatches(_0x17822b)["findOnce"]();
        if (_0x4bad48) {
          var _0x102b80 = (0x0, _0x553b14["findTextInGrandNode"])(_0x4bad48, /\d\+:\d+|冷却中/);
          if (_0x102b80) {
            (0x0, _0x553b14["hlog"])("看广告需要冷却");
            break;
          }
          var _0x27976d = (0x0, _0x553b14["findTextInGrandNode"])(_0x4bad48, /已完成|明天再来|已领取/);
          if (_0x27976d) return !![];
          (0x0, _0x553b14["hlog"])('看第' + (_0x635055 + 0x1) + "个广告进行中"), (0x0, _0x553b14["cClick"])(_0x4bad48) && _0x2ee230();
        } else break;
      }
    }
  }

  function _0x3b5b77() {
    var _0x2ca65e = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14["hlog"])('任务开始：逛街');
    var _0x30d2dd = /逛街领.*金币/;
    if (_0x53ed13["hidMode"]) {
      var _0x5e0760 = (0x0, _0x3a0fe7['OCRResult'])(_0x30d2dd);
      if ((0x0, _0x3a0fe7["OCRFindNextByResult"])(_0x5e0760, _0x30d2dd, /^(已完成|明天再来|已领取)$/)) return !![];
      else(0x0, _0x3a0fe7["OCRMatchClick"])(_0x5e0760, _0x30d2dd) && ((0x0, _0x2b42da["scroll_close"])(/浏览\d+秒可领\d+金币|\d+秒/), _0x4c30ef(M01_config_global));
      return;
    } else {
      _0x4bad48 = textMatches(_0x30d2dd)["findOnce"]();
      if (_0x4bad48) {
        if ((0x0, _0x4137e3["checkMinGoldStr"])(_0x57a605, _0x4bad48["text"]())) return;
        var _0x2fa938 = (0x0, _0x553b14['findTextInGrandNode'])(_0x4bad48, /已完成|明天再来|已领取/);
        if (_0x2fa938) return !![];
        if ((0x0, _0x553b14["cClick"])(_0x4bad48)) {
          if ((0x0, _0x2a263c['HFind'])(/服务器开小差了.*/)) {
            _0x4c30ef(M01_config_global);
            return;
          }(0x0, _0x2b42da["scroll_close"])(/浏览\d+秒可领\d+金币|\d+秒/), _0x4c30ef(M01_config_global);
        }
      }
    }
  }

  function _0x4be5d9() {
    var _0x2ba879 = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14["hlog"])('任务开始：领饭补');
    var _0x1f1b09 = /到饭点领饭补/,
      _0x5e82e5;
    if (_0x53ed13["hidMode"]) {
      var _0x472590 = (0x0, _0x3a0fe7['OCRResult'])(_0x1f1b09);
      if ((0x0, _0x3a0fe7['OCRFindNextByResult'])(_0x472590, _0x1f1b09, /^(已完成|明天再来|已领取)$/)) return !![];
      else(0x0, _0x3a0fe7["OCRMatchClick"])(_0x472590, _0x1f1b09) && (_0x5e82e5 = !![]);
    } else {
      _0x4bad48 = text("明天继续领饭补")['findOnce']();
      if (_0x4bad48) return !![];
      _0x5e82e5 = (0x0, _0x553b14["textClick"])(/到饭点领饭补/);
    }
    if (_0x5e82e5) {
      sleep(0x1388);
      for (var _0x1ab776 = 0x0; _0x1ab776 < 0x3; _0x1ab776++) {
        if ((0x0, _0x553b14['textClick'])(/.*饭待补签$|^补签/)) _0x2ee230();
        else break;
      }(0x0, _0x553b14['textClick'])(/看广告/) && _0x2ee230(), _0x4c30ef(M01_config_global);
    }
  }

  function _0x52a894() {
    var _0x4e2185 = _0x35dcb8;
    if (_0x53ed13['hidMode']) return;
    _0x2eec34(), (0x0, _0x553b14['hlog'])('任务开始：看直播');
    if ((0x0, _0x553b14["textClick"])(/看.*直播.*/)) {
      _0x4bad48 = textMatches(/已完成\d+.*/)["findOnce"]();
      if (_0x4bad48 && (0x0, _0x4137e3["compareValues"])(_0x4bad48["text"]())) return back(), !![];
      _0x4bad48 = className("android.widget.FrameLayout")["clickable"]()['findOnce'](random(0x0, 0x3));
      if ((0x0, _0x553b14["cClick"])(_0x4bad48)) {
        sleep(0x2710);
        var _0x217080 = textMatches(/\d+\:\d+/)['id']('neo_count_down_text')['findOnce']();
        if (_0x217080) {
          var _0xdf90a7 = (0x0, _0x4137e3['timetoSecond'])(_0x217080["text"]());
          sleep(_0xdf90a7 * 0x3e8 + 0x1388);
        }
        _0x4bad48 = text("赚金币")['id']("neo_count_down_text")["findOnce"](), (0x0, _0x553b14["cClick"])(_0x4bad48), _0x4c30ef(M03_ocr_engine);
      }
      back(), sleep(0x1388), (0x0, _0x553b14["textClick"])(/仍要退出/);
    }
  }

  function _0x15a4cc() {
    var _0x46f7dc = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14["hlog"])('任务开始：刷视频');
    _0x57a605 == _0x8e0cdc['ksptapp'] && (0x0, _0x2a263c['HBack'])();
    if (_0x19f771(M02_app_registry)) {
      (0x0, _0x2a263c["HBack"])();
      var _0x469d86 = 0x0;
      _0x57a605 == _0x8e0cdc["ksjsapp"] ? _0x469d86 = _0x53ed13["ksjs_kanshiping_min"] : _0x469d86 = _0x53ed13["kspt_kanshiping_min"], (0x0, _0x311aca['xs_kanshipin'])(_0x469d86, function() {
        var _0x6fe086 = _0x46f7dc;
        while (!![]) {
          !_0x53ed13["hidMode"] && (0x0, _0x553b14["idClick"])("close_btn", !![]), (0x0, _0x553b14["idClick"])('double_feeds_switch_btn_weak'), sleep(0x1 * 0x3c * 0x3e8), (0x0, _0x2a263c["HBack"])(), (0x0, _0x553b14['backApp'])(_0x57a605);
        }
      });
    }
    _0x19f771(M01_config_global), _0x2eec34(), (0x0, _0x553b14["textClick"])(/继续看视频赚更多|领取奖励|待领.*金币.*立即领取/) && (0x0, _0x2a263c["HBack"])();
  }

  function _0x482a2d() {
    var _0x13525f = _0x35dcb8;
    if (_0x53ed13["hidMode"]) return;
    _0x2eec34(), (0x0, _0x553b14["hlog"])("任务开始：喂鸭");
    if ((0x0, _0x553b14["textClick"])(/喂鸭集.*|喂鸭.*|.*集鸭蛋.*/)) {
      (0x0, _0x553b14["hlog"])('等待喂鸭页面加载'), sleep(0x2710), (0x0, _0x553b14['textClick'])(/下次一定来|愉快收下|去签到|下次努力|去喂鸭/);
      ((0x0, _0x16ea38["getCurrentDateHour"])() >= 0x14 || (0x0, _0x16ea38["getCurrentDateHour"])() <= 0x16) && (sleep(0x2710), (0x0, _0x553b14["textClick"])(/下次努力|愉快收下/));
      (0x0, _0x553b14["textClick"])(/签到并喂鸭/);
      (0x0, _0x553b14["textClick"])(/立即签到/) && (back(), sleep(0xbb8));
      _0x4bad48 = textMatches(/明日签到.*|明天提醒.*/)["findOnce"]();
      _0x4bad48 && back();
      sleep(0xbb8);
      for (var _0xc40315 = 0x0; _0xc40315 < 0x3; _0xc40315++) {
        (0x0, _0x553b14['hlog'])("喂鸭:和鸭子互动"), click(_0x53ed13['deviceWidth'] / 0x2, _0x53ed13["deviceHeight"] / 0x2), sleep(0x1f40);
      }(0x0, _0x553b14["hlog"])("喂鸭:领取奖励"), (0x0, _0x553b14["textClick"])(/可领取/) && (sleep(0x1388), (0x0, _0x553b14["textClick"])(/继续喂养|继续喂鸭/, !![])), _0x440392(), (0x0, _0x553b14["hlog"])("喂鸭:赚饲料"), (0x0, _0x553b14['textClick'])(/赚饲料/) && ((0x0, _0x553b14['textClick'])(/去签到/) && ((0x0, _0x553b14["textClick"])(/立即签到/) && back())), (0x0, _0x553b14["scroll_up_quick_cnt"])(0x1), (0x0, _0x553b14['textClick'])(/领奖励/), (0x0, _0x3a0fe7['OCRClick'])(/领奖励/), _0x4c30ef(M02_app_registry);
    }
  }

  function _0x440392() {
    var _0x84c797 = _0x35dcb8,
      _0xa1c45e = 0x5;
    if (textMatches(/心情值.*100\/100/)["findOnce"]()) {
      var _0x1075c0 = (0x0, _0x3a0fe7["OCRText"])(/^\d+粒/);
      if (_0x1075c0) {
        (0x0, _0x553b14["dlog"])(_0x1075c0 + '粒');
        var _0x45e066 = parseInt((0x0, _0x4137e3['getTextNumber'])(_0x1075c0) / 0x64);
        _0xa1c45e = _0x45e066 > 0x14 ? 0x14 : _0x45e066;
      }
    }(0x0, _0x553b14['hlog'])('喂鸭' + _0xa1c45e + '次');
    for (var _0x511fd5 = 0x0; _0x511fd5 < _0xa1c45e; _0x511fd5++) {
      _0x4bad48 = className('android.view.View')['clickable']()["find"]();
      if (_0x4bad48)
        for (var _0x474a35 = 0x0; _0x474a35 < _0x4bad48['length']; _0x474a35++) {
          var _0xfa9857 = _0x4bad48[_0x474a35],
            _0x302895 = _0xfa9857['bounds']();
          if (_0x302895 && _0x302895["centerX"]() === _0x53ed13["deviceWidth"] / 0x2 && _0x302895["centerY"]() > _0x53ed13['deviceHeight'] / 0x2 && _0x302895["centerY"]() < _0x53ed13['deviceHeight'] * 0.9 && _0x302895["width"]() < 0x1f4 && _0x302895['height']() < 0x1f4) {
            if (_0xfa9857['clickable']()) {
              if ((0x0, _0x553b14['cClick'])(_0xfa9857))(0x0, _0x553b14["hlog"])("喂鸭:喂饲料第" + (_0x511fd5 + 0x1) + '次'), sleep(0x2710), (0x0, _0x553b14['textClick'])(/继续喂养|继续喂鸭/, !![]);
              else break;
            }
          }
        }
    }
  }

  function _0x1800d3() {
    var _0x29fa53 = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14["scroll_down_quick_cnt"])(0x5), (0x0, _0x553b14['hlog'])('计算收益');
    if ((0x0, _0x553b14["textClick"])(/金币收益|现金收益.*|我的金币/)) {
      sleep(0x1388);
      var _0x26346f, _0x73f8ba;
      if (_0x53ed13['hidMode']) {
        var _0x437e5d = (0x0, _0x3a0fe7['doCaptureScreen'])(),
          _0x466a9b = (0x0, _0x3a0fe7["OCRFindNextByResult"])(_0x437e5d, /我的现金/, /\d+/);
        _0x466a9b && (_0x26346f = _0x466a9b["text"]);
        var _0x2ffb37 = (0x0, _0x3a0fe7["OCRFindNextByResult"])(_0x437e5d, /我的金币/, /\d+\.\d+/);
        _0x2ffb37 && (_0x73f8ba = _0x2ffb37["text"]);
      } else {
        _0x4bad48 = textMatches(/我的金币/)["findOne"](0x3a98);
        _0x4bad48 && _0x4bad48["parent"]() && _0x4bad48['parent']()["child"](0x1) && (_0x26346f = _0x4bad48['parent']()["child"](0x1)["text"]());
        _0x4bad48 = textMatches(/我的现金/)['findOnce']();
        if (_0x4bad48 && _0x4bad48["parent"]()) {
          var _0xc94e21 = _0x4bad48["parent"]()["child"](0x2)["text"]();
          _0xc94e21 && (_0x73f8ba = _0xc94e21['replace'](/0123456789/g, ''));
        }
      }
      var _0x2ffb37 = (0x0, _0x553b14["ksTixian"])(function() {
        var _0x405416 = _0x29fa53;
        return (0x0, _0x553b14["textClick"])(/领现金/);
      }, _0x57a605, _0x73f8ba);
      _0x2ffb37 && ((0x0, _0x553b14["hlog"])("提现成功"), (0x0, _0x3dcca1["setTiXian"])(_0x57a605, _0x2ffb37), _0x73f8ba = _0x73f8ba - _0x2ffb37), (0x0, _0x2ce2e0["setGold"])(_0x57a605, _0x26346f, _0x73f8ba);
    }
  }

  function _0x32af49() {
    var _0x56492e = _0x35dcb8;
    _0x2eec34(), (0x0, _0x553b14['hlog'])("任务开始：预约领金币");
    var _0x4ffee8 = /预约领金币|一键领取.*必得/;
    if (_0x53ed13["hidMode"]) {
      var _0x2183f6 = (0x0, _0x3a0fe7['OCRResult'])(_0x4ffee8);
      if ((0x0, _0x3a0fe7['OCRMatch'])(_0x2183f6, /已预约/)) return !![];
      else {
        if ((0x0, _0x3a0fe7['OCRMatchClick'])(_0x2183f6, _0x4ffee8)) {
          var _0x2183f6 = (0x0, _0x3a0fe7["doCaptureScreen"])();
          if ((0x0, _0x3a0fe7['OCRMatchClick'])(_0x2183f6, /一键领取/))(0x0, _0x2a263c["HBack"])();
          else(0x0, _0x3a0fe7["OCRMatchClick"])(_0x2183f6, /立即预约/) && ((0x0, _0x553b14["textClick"])(/不开提醒.*/) && (0x0, _0x2a263c["HBack"])());
        }
      }
    } else {
      (0x0, _0x553b14["textClick"])(/一键领取.*必得/) && ((0x0, _0x3a0fe7["OCRClick"])(/一键领取/) && (0x0, _0x2a263c['HBack'])());
      if (textMatches(/明日0点一键领金币/)["findOnce"]()) return !![];
      (0x0, _0x553b14["textClick"])(/预约领金币/) && (sleep(0xbb8), (0x0, _0x3a0fe7["OCRClick"])(/立即预约/) && ((0x0, _0x553b14["textClick"])(/不开提醒.*/) && (0x0, _0x2a263c["HBack"])()));
    }
  }
}