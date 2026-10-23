function(_0x179234, _0x2c0661, _0x1df461) {
  var _0x163380 = a1_0x4b7c,
    _0x24e458 = _0x1df461(M11_babel_interop);
  Object["defineProperty"](_0x2c0661, "__esModule", {
    'value': !![]
  }), _0x2c0661["closeAd"] = _0x51b177, _0x2c0661['closeAd33'] = _0x52e6f5, _0x2c0661['closeClickable'] = _0x3071e8, _0x2c0661["closeImage"] = _0x144c54, _0x2c0661['closeImageBottomRight'] = _0x3095cc, _0x2c0661["closeLeftClickable"] = _0x57d876, _0x2c0661["closeLeftImage"] = _0x1afff9, _0x2c0661["dx_ok"] = _0x254bd8, _0x2c0661["fq_ok"] = _0x4c7b44, _0x2c0661["isAdPage"] = _0x4897a4, _0x2c0661["isYangHao"] = _0x2ff237, _0x2c0661["ks_ok"] = _0x40de3c, _0x2c0661['scroll_close'] = _0x5df582, _0x2c0661["wait_close"] = _0x26d6af, _0x2c0661["wait_close_by_text"] = _0xd210e8, _0x2c0661["wkllq_ok"] = _0x3d3aaf;
  var _0x13d454 = _0x1df461(M02_app_registry),
    _0x5054b6 = _0x1df461(M00_utils_ui_helpers),
    _0x3f790d = _0x1df461(M08_check_task),
    _0x34063d = _0x1df461(M01_config_global),
    _0x3ad07e = _0x1df461(M03_ocr_engine),
    _0x301a39 = _0x1df461(M05_hid_control),
    _0x2986c0 = _0x1df461(M10_activity_consts),
    _0x4eb6f5 = _0x24e458(_0x1df461(M15_hid_ble)),
    _0x1fcce2 = _0x1df461(M06_storage_card),
    _0x4e12f2 = typeof hid !== "undefined",
    _0x5bac08 = ["666~", '漂亮', "看着不错", "支持主播", "给主播点赞", '点赞', "主播奈斯", '很好', "来了来了", "主播大气", "主播霸气", '给主播点个关注', '太棒了！'],
    _0x8fa002;

  function _0x2ff237(_0x2400a0) {
    var _0x484e94 = _0x163380;
    return (0x0, _0x3f790d["checkAppRwList"])(_0x2400a0, "yanghao");
  }

  function _0x4af9be(_0x316175) {
    var _0x7506a6 = _0x163380;
    if ((0x0, _0x3f790d["checkAppRwList"])(_0x316175, "xiazai")) {
      var _0x39091d = (0x0, _0x1fcce2['getXiazaiCount'])();
      (0x0, _0x5054b6["dlog"])("xiazai_count:" + _0x34063d["xiazai_count"]);
      if (!_0x34063d['xiazai_count'] || _0x34063d['xiazai_count'] == -0x1) return !![];
      if (_0x39091d && _0x39091d < _0x34063d["xiazai_count"]) return !![];
    }
    return ![];
  }

  function _0x254bd8(_0x26ffb1, _0x25b855) {
    var _0x3e4259 = _0x163380;
    for (var _0x441aa3 = 0x0; _0x441aa3 < 0x14; _0x441aa3++) {
      (0x0, _0x5054b6["hlog"])('看第' + (_0x441aa3 + 0x1) + "个广告"), sleep(0x7d0);
      var _0x35a7ed, _0x402875 = /拒绝|不允许|禁止|取消/,
        _0x3e0e7a = /^(?!.*直播).*(\d+s|\d+秒后|金币倒计时\d+s后).*/,
        _0x3912a8 = /\d+秒/;
      _0x35a7ed = (0x0, _0x3ad07e['doCaptureScreen'])();
      if ((0x0, _0x3ad07e["OCRMatch"])(_0x35a7ed, _0x25b855)) return;
      if (_0x34063d["hidMode"]) {
        (0x0, _0x3ad07e["OCRMatchClick"])(_0x35a7ed, _0x402875) && (_0x35a7ed = (0x0, _0x3ad07e['doCaptureScreen'])());
        var _0x59a71e = (0x0, _0x3ad07e['OCRMatch'])(_0x35a7ed, _0x3e0e7a);
        _0x59a71e ? _0x26d6af(_0x3e0e7a, _0x59a71e["text"]) : sleep(0xc350);
      } else {
        sleep(0xbb8), (0x0, _0x5054b6["textClickXY"])(_0x402875, ![], !![]), (0x0, _0x5054b6["dlog"])(currentActivity());
        if ((0x0, _0x301a39["HFind"])(_0x3e0e7a)) _0x26d6af(_0x3e0e7a);
        else {
          if (_0x26ffb1 === _0x13d454["dyjsapp"] && (0x0, _0x301a39["HFind"])(_0x3912a8)) {
            (0x0, _0x5054b6["dlog"])("等待25s"), sleep(0x61a8);
            for (var _0x5aaffc = 0x0; _0x5aaffc < 0x5; _0x5aaffc++) {
              var _0x54e309 = (0x0, _0x3f790d["getObjectNumber"])(_0x3912a8);
              if (_0x54e309) _0x5aaffc > 0x3 ? ((0x0, _0x5054b6["scroll_down_quick_cnt"])(0x1), sleep(_0x54e309 * 0x3e8)) : ((0x0, _0x5054b6['scroll_up_quick_cnt'])(0x1), sleep(_0x54e309 * 0x3e8));
              else {
                (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClickXY"])(/坚持退出/), sleep(0x1388), (0x0, _0x301a39['HBack'])();
                return;
              }
            }
          } else sleep(0xc350);
        }
      }!_0x453e7e(_0x26ffb1) && _0x5e31b5(_0x26ffb1);
      for (var _0x5aaffc = 0x0; _0x5aaffc < 0x5; _0x5aaffc++) {
        if (_0x34063d['hidMode']) {
          _0x35a7ed = (0x0, _0x3ad07e["doCaptureScreen"])();
          if (_0x26ffb1 == _0x13d454["qsyyapp"] && (0x0, _0x3ad07e['OCRMatch'])(_0x35a7ed, /继续观看|获得奖励/)) {
            (0x0, _0x5054b6['dlog'])("领取成功返回"), (0x0, _0x301a39["HBack"])();
            break;
          } else {
            if ((0x0, _0x3ad07e["OCRMatch"])(_0x35a7ed, /(领取成功|关闭|关闭 按钮|领取成功.*关闭.*|取成功|^领取奖励$|恭喜已获得|坚持退出)/)) {
              (0x0, _0x5054b6["dlog"])("领取成功返回"), (0x0, _0x301a39['HBack'])();
              break;
            } else {
              if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x35a7ed, /评价并.*|^开心收下$/)) return !![];
              else {
                if ((0x0, _0x3ad07e['OCRMatch'])(_0x35a7ed, _0x25b855)) return;
              }
            }
          }
        } else {
          _0x26ffb1 == _0x13d454["qsyyapp"] ? _0x8fa002 = (0x0, _0x301a39["HFind"])(/继续观看|继续观看.*按钮.*|获得奖励/) : _0x8fa002 = (0x0, _0x301a39["HFind"])(/领取成功|关闭|关闭 按钮|领取成功.*关闭.*|取成功|^领取奖励$/);
          if (_0x8fa002) {
            (0x0, _0x5054b6["dlog"])("领取成功返回"), (0x0, _0x301a39["HBack"])();
            break;
          }
          if ((0x0, _0x301a39["HFindClickXY"])(/评价并.*|^开心收下$/)) return !![];
        }(0x0, _0x5054b6["dlog"])('尝试返回第' + (_0x5aaffc + 0x1) + '次'), (0x0, _0x5054b6["backApp"])(_0x26ffb1), (0x0, _0x301a39["HBack"])();
      }
      var _0x1daaf9 = /^(领取奖励|看视频再得\d+金币|再看一个获得\d+金币|再看一个领\d+金币.*|再看一个获取最高\d+个金币|^继续观看$|^继续领奖励$)/;
      _0x26ffb1 == _0x13d454["qsyyapp"] && (_0x1daaf9 = /^(领取奖励|看视频再得\d+金币|再看一个获得\d+金币|再看一个领\d+金币.*|再看一个获取最高\d+个金币)/);
      _0x35a7ed = (0x0, _0x3ad07e["doCaptureScreen"])();
      if ((0x0, _0x3ad07e["OCRMatch"])(_0x35a7ed, /当前无新视频/)) return;
      var _0x59a71e = (0x0, _0x3ad07e["OCRMatch"])(_0x35a7ed, _0x1daaf9),
        _0x3daba8 = (0x0, _0x3ad07e["OCRMatch"])(_0x35a7ed, /^\+\d+/);
      if (_0x59a71e && (0x0, _0x3f790d['checkMinGoldStr'])(_0x26ffb1, _0x59a71e["text"]) || _0x3daba8 && (0x0, _0x3f790d["checkMinGoldStr"])(_0x26ffb1, _0x3daba8["text"])) {
        if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x35a7ed, /坚持退出/)) {
          (0x0, _0x3ad07e["OCRClick"])(/评价并.*|^开心收下$/);
          return;
        }
      }
      if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x35a7ed, _0x1daaf9)) continue;
      else {
        if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x35a7ed, /坚持退出/)) return;
        else {
          if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x35a7ed, /评价并.*|^开心收下$/)) return !![];
          else {
            if ((0x0, _0x3ad07e["OCRMatch"])(_0x35a7ed, _0x25b855)) return;
            else(_0x26ffb1 == _0x13d454["dyapp"] || _0x26ffb1 == _0x13d454["dyjsapp"] || _0x26ffb1 == _0x13d454["dyhsapp"] || _0x26ffb1 == _0x13d454['ttjsapp'] || _0x26ffb1 === _0x13d454["xgspapp"]) && (sleep(0x1388), (0x0, _0x301a39["HBack"])());
          }
        }
      }
      return !![];
    }
  }

  function _0x40de3c(_0x59f34b, _0x1ab674) {
    var _0xa17898 = _0x163380,
      _0x667a6d;
    for (var _0xedbdd0 = 0x0; _0xedbdd0 < 0x14; _0xedbdd0++) {
      var _0xed0602 = /\d+s后可领取.*|\d+s后.*|\d+秒后可领取.*金币/;
      if (_0x34063d["hidMode"]) {
        var _0x33a93b = (0x0, _0x3ad07e["doCaptureScreen"])();
        if ((0x0, _0x3ad07e["OCRMatch"])(_0x33a93b, _0x1ab674)) return !![];
        else(0x0, _0x3ad07e["OCRMatch"])(_0x33a93b, _0xed0602) ? _0x26d6af(_0xed0602) : ((0x0, _0x5054b6['dlog'])("等待50s"), sleep(0xc350));
      } else {
        for (var _0x79202f = 0x0; _0x79202f < 0xa; _0x79202f++) {
          sleep(0x1388), _0x667a6d = currentActivity();
          if (_0x667a6d && (_0x667a6d['includes']('AwardVideoPlayActivity') || _0x667a6d["includes"]("PhotoDetailActivity") || _0x667a6d['includes']("RewardAdVideoActivity"))) break;
          else {
            (0x0, _0x5054b6["dlog"])("未进入到广告,等待5s"), (0x0, _0x5054b6["dlog"])(_0x667a6d);
            if (_0x79202f >= 0x3 && (_0x667a6d['includes']("HomeActivity") || (0x0, _0x301a39["HFind"])(_0x1ab674))) return;
          }
        }
        if (textMatches(_0xed0602)['findOnce']()) _0x26d6af(_0xed0602), !_0x453e7e(_0x59f34b) && _0x5e31b5(_0x59f34b);
        else {
          if (_0x667a6d["includes"]("PhotoDetailActivity")) {
            var _0x180bd4 = textMatches(/\d+\:\d+/)['id']("neo_count_down_text")["findOnce"]();
            if (_0x180bd4) {
              var _0x9ef7a2 = (0x0, _0x3f790d["timetoSecond"])(_0x180bd4['text']());
              _0x9ef7a2 < 0x5 && (_0x9ef7a2 = 0x1e), (0x0, _0x5054b6["hlog"])("看直播" + _0x9ef7a2 + 's'), sleep(_0x9ef7a2 * 0x3e8 + 0x1388);
            } else sleep(0x7530);
            _0x8fa002 = text('赚金币')['id']("neo_count_down_text")['findOnce'](), (0x0, _0x5054b6["cClick"])(_0x8fa002), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClick"])(/退出直播间/);
          }
        }
      }
      var _0x20a258 = /^已成功领取.*|^已领取|^最高领\d+金币|^放弃奖励|^(领取奖励|放弃机会|换一个广告)$/;
      for (var _0x49c498 = 0x0; _0x49c498 < 0x4; _0x49c498++) {
        if (_0x34063d["hidMode"]) {
          var _0x33a93b = (0x0, _0x3ad07e["doCaptureScreen"])();
          if ((0x0, _0x3ad07e["OCRMatch"])(_0x33a93b, _0x1ab674)) return !![];
          _0x8fa002 = (0x0, _0x3ad07e["OCRMatch"])(_0x33a93b, _0x20a258);
        } else {
          if ((0x0, _0x301a39['HFind'])(_0x1ab674)) return !![];
          _0x8fa002 = (0x0, _0x301a39['HFind'])(_0x20a258);
        }
        if (_0x8fa002) {
          (0x0, _0x301a39["HBack"])();
          break;
        }(0x0, _0x5054b6["backApp"])(_0x59f34b), (0x0, _0x301a39['HBack'])();
      }
      var _0x1916c8 = /^(领取奖励|再看一个|再看一个最高得\d+金币|去完成任务|领取额外金币)$/,
        _0x20b528 = /^(立即领金币|点击咨询|立即下载|立即打开|安全下载|立即关注|立即参与)$/,
        _0x27e521 = /^(去完成任务|放弃奖励|放弃机会)$/,
        _0x33a93b = (0x0, _0x3ad07e["doCaptureScreen"])();
      if (_0x34063d["hidMode"]) {
        if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, _0x1916c8)) continue;
        else {
          if ((0x0, _0x3ad07e["OCRMatch"])(_0x33a93b, _0x1ab674)) return !![];
          else {
            if ((0x0, _0x3ad07e['OCRMatch'])(_0x33a93b, _0x27e521)) {
              if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, /^立即领取$/)) continue;
              else {
                if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, _0x20b528)) {
                  sleep(0x3a98), (0x0, _0x5054b6['backApp'])(_0x59f34b), _0x33a93b = (0x0, _0x3ad07e['doCaptureScreen'])();
                  if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, /^看视频翻倍$/)) continue;
                }
              }(0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, _0x27e521);
              continue;
            } else(0x0, _0x3ad07e['OCRMatchClick'])(_0x33a93b, /^继续观看$/) && sleep(0xc350);
          }
        }
      } else {
        _0x8fa002 = textMatches(_0x1916c8)["findOnce"]();
        if ((0x0, _0x5054b6["cClick"])(_0x8fa002) || (0x0, _0x5054b6["pClick"])(_0x8fa002)) continue;
        else {
          if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, _0x1916c8)) continue;
          else {
            if ((0x0, _0x301a39["HFind"])(_0x1ab674)) return !![];
            else {
              if (textMatches(_0x27e521)["findOnce"]()) {
                if ((0x0, _0x5054b6['textClick'])(/立即领取/)) continue;
                else {
                  if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x33a93b, _0x20b528)) {
                    sleep(0x3a98), (0x0, _0x5054b6["backApp"])(_0x59f34b), (0x0, _0x5054b6["textClick"])(/看视频翻倍/);
                    continue;
                  }
                }(0x0, _0x5054b6["textClick"])(_0x27e521);
                continue;
              }
            }
          }
        }
      }
      return (0x0, _0x5054b6["textClick"])(/退出直播间|坚持退出|退出|放弃奖励|放弃机会/), !![];
    }
    return ![];
  }

  function _0x4c7b44(_0x5a24c2, _0x49e8fb) {
    var _0x3ea7c3 = _0x163380;
    for (var _0x631f1e = 0x0; _0x631f1e < 0xa; _0x631f1e++) {
      (0x0, _0x5054b6['hlog'])('看第' + (_0x631f1e + 0x1) + "个广告"), sleep(0x7d0);
      var _0x51e88b, _0x5d1260 = /\d+.*后可领.*奖励|看.*秒.*领取.*金币.*|\d+金币.*\d+秒后可领.*|再看\d+秒后得\d+金币/,
        _0xf6c726 = /拒绝|不允许|禁止|取消/;
      if (_0x34063d["hidMode"]) {
        _0x51e88b = (0x0, _0x3ad07e['doCaptureScreen'])();
        if ((0x0, _0x3ad07e["OCRMatch"])(_0x51e88b, _0x49e8fb)) return;
        var _0x4d62e0 = (0x0, _0x3ad07e["OCRMatch"])(_0x51e88b, _0x5d1260);
        _0x4d62e0 ? (_0x26d6af(_0x5d1260, _0x4d62e0['text']), !_0x453e7e(_0x5a24c2) && _0x5e31b5(_0x5a24c2)) : ((0x0, _0x5054b6["hlog"])("等待约40s"), sleep(0x9c40), (0x0, _0x5054b6['textClickXY'])(/跳过.*/));
      } else {
        sleep(0xbb8), (0x0, _0x5054b6["textClickXY"])(_0xf6c726, ![], !![]);
        var _0x2654e4 = currentActivity();
        (0x0, _0x5054b6["dlog"])(_0x2654e4);
        if (_0x2654e4["includes"]("MainFragmentActivity")) return;
        if (_0x265320(_0x2654e4)) _0x5e31b5(_0x5a24c2);
        else {
          if (_0x5aafdd(_0x2654e4)) {
            if ((0x0, _0x5054b6["textClickXY"])(/再看一个获取最高\d+个金币/)) continue;
            (0x0, _0x5054b6["textClickXY"])(/坚持退出|放弃奖励退出/);
            return;
          } else textMatches(_0x5d1260)['findOnce']() ? _0x26d6af(_0x5d1260) : ((0x0, _0x5054b6["hlog"])("等待约40s"), sleep(0x9c40), _0x144c54(), (0x0, _0x5054b6['textClickXY'])(/跳过.*/));
        }
      }
      for (var _0x4b5079 = 0x0; _0x4b5079 < 0x5; _0x4b5079++) {
        if (_0x34063d["hidMode"]) {
          _0x51e88b = (0x0, _0x3ad07e["doCaptureScreen"])();
          if ((0x0, _0x3ad07e["OCRMatch"])(_0x51e88b, /领取成功.*|任务已完成|^(领取奖励|继续观看)$/)) {
            (0x0, _0x301a39['HBack'])();
            break;
          } else {
            if ((0x0, _0x3ad07e["OCRMatch"])(_0x51e88b, _0x49e8fb)) return;
          }
        } else {
          if ((0x0, _0x301a39["HFind"])(/领取成功.*|任务已完成|^(领取奖励|继续观看)$/)) {
            (0x0, _0x301a39["HBack"])();
            break;
          } else {
            if ((0x0, _0x301a39["HFind"])(_0x49e8fb)) return;
          }
        }(0x0, _0x5054b6['backApp'])(_0x5a24c2), (0x0, _0x301a39["HBack"])();
      }
      var _0x34d74b = /^(领取奖励|我也要领|再看一个继续领取|去再看一个领取金币|继续观看)$/;
      _0x51e88b = (0x0, _0x3ad07e['doCaptureScreen'])();
      var _0x3a5788 = (0x0, _0x3ad07e['OCRMatch'])(_0x51e88b, _0x34d74b),
        _0x36f9dc = (0x0, _0x3ad07e['OCRFindNextByResult'])(_0x51e88b, /再看一个/, /^\d+/);
      if (_0x3a5788 && (0x0, _0x3f790d["checkMinGoldStr"])(_0x5a24c2, _0x3a5788["text"]) || _0x36f9dc && (0x0, _0x3f790d['checkMinGoldStr'])(_0x5a24c2, _0x36f9dc["text"])) {
        if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x51e88b, /坚持退出|放弃奖励|直接退出/)) {
          (0x0, _0x3ad07e['OCRClick'])(/坚持退出|放弃奖励退出|退出|开心收下/);
          return;
        }
      }
      if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x51e88b, _0x34d74b)) continue;
      else {
        if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x51e88b, /坚持退出|放弃奖励退出|退出|开心收下/)) return;
      }
      return (0x0, _0x5054b6['dlog'])('没有再看一次'), !![];
    }
    return ![];
  }

  function _0x3d3aaf(_0xc3b213, _0x4c90e5) {
    var _0x50fc04 = _0x163380;
    for (var _0x5535c6 = 0x0; _0x5535c6 < 0xa; _0x5535c6++) {
      if (_0x34063d['hidMode']) {
        sleep(0x7d0);
        var _0x4ed674, _0x1a68d6 = /^(拒绝|不允许|禁止)$/,
          _0x900698 = /^(?!.*直播).*(\d+(s|秒)后.*|\d+s|\d+秒).*/;
        _0x4ed674 = (0x0, _0x3ad07e["doCaptureScreen"])();
        if ((0x0, _0x3ad07e['OCRMatch'])(_0x4ed674, _0x4c90e5)) return;
        (0x0, _0x3ad07e['OCRMatchClick'])(_0x4ed674, _0x1a68d6) && (_0x4ed674 = (0x0, _0x3ad07e["doCaptureScreen"])());
        if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x4ed674, /点击.*拿奖励|进入微信|点击跳转微信|去微信看短剧|点击立即领取|立即点击领取|去微信小店/))(0x0, _0x301a39['HBack'])(), sleep(0x3a98), (0x0, _0x5054b6['backApp'])(_0xc3b213);
        else {
          var _0x2fee65 = (0x0, _0x3ad07e['OCRMatch'])(_0x4ed674, _0x900698);
          _0x2fee65 ? (_0x26d6af(_0x900698, _0x2fee65["text"]), sleep(0x1388)) : sleep(0xc350);
        }
      } else {
        sleep(0x1388), (0x0, _0x5054b6["textClickXY"])(/拒绝|不允许|禁止|取消/, ![], !![]);
        var _0x3459a5 = currentActivity();
        (0x0, _0x5054b6["dlog"])(_0x3459a5), _0x265320(_0x3459a5) ? _0x5e31b5(_0xc3b213) : (_0x51b177(_0xc3b213), sleep(0x1388));
      }
      for (var _0x17b326 = 0x0; _0x17b326 < 0x6; _0x17b326++) {
        var _0x3d8d13 = /领取成功|关闭|关闭 按钮|看视频再得\d+金币|再看一条领.*/;
        if (_0x34063d["hidMode"]) {
          (0x0, _0x3ad07e["OCRClickSimilarImageTop"])([_0x2986c0["CLOSE1"], _0x2986c0["CLOSE2"], _0x2986c0["CLOSE3"]], 0.7) && sleep(0xbb8);
          var _0x4ed674 = (0x0, _0x3ad07e["doCaptureScreen"])();
          if ((0x0, _0x3ad07e["OCRMatch"])(_0x4ed674, _0x4c90e5)) break;
          else {
            if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x4ed674, /领取成功.*跳过$/, 0x64)) {
              (0x0, _0x5054b6["backApp"])(_0xc3b213);
              continue;
            } else {
              if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x4ed674, /^关闭$|跳过$/)) break;
              else {
                if ((0x0, _0x3ad07e['OCRMatch'])(_0x4ed674, _0x3d8d13)) _0x8fa002 = !![];
                else(0x0, _0x3ad07e['OCRMatchClick'])(_0x4ed674, /跳过$|坚决退出|放弃奖励离开/) && (_0x8fa002 = !![]);
              }
            }
          }
        } else {
          if ((0x0, _0x301a39['HFind'])(_0x4c90e5)) break;
          else _0x8fa002 = (0x0, _0x301a39['HFind'])(_0x3d8d13);
        }
        if (_0x8fa002) {
          (0x0, _0x301a39["HBack"])();
          break;
        }(0x0, _0x5054b6["backApp"])(_0xc3b213), (0x0, _0x301a39["HBack"])();
      }(0x0, _0x5054b6['dlog'])('没有再看一次');
      var _0x4ed674 = (0x0, _0x3ad07e["doCaptureScreen"])();
      if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x4ed674, /看视频再得.*金币|再看一条领.*|^继续观看$/)) continue;
      else {
        if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x4ed674, /^(坚持退出|开心收下|关闭广告|残忍离开)$/)) return !![];
        else {
          if ((0x0, _0x3ad07e['OCRMatch'])(_0x4ed674, _0x4c90e5)) return !![];
        }
      }
      return !![];
    }
    return ![];
  }

  function _0x5e31b5(_0x20e917) {
    var _0x3e1abf = _0x163380;
    if (_0x2ff237(_0x20e917)) {
      var _0x2f2ce2 = (0x0, _0x5054b6["matchYanghaoLabel"])();
      if (_0x2f2ce2) {
        (0x0, _0x5054b6['closeLocationAuth'])();
        if (!_0x34063d["hidMode"]) {
          (0x0, _0x5054b6["dlog"])(currentActivity());
          if (currentActivity() == "com.ss.android.ugc.aweme.live.LivePlayActivity" || currentActivity()["includes"]('LiveSlideActivity') || currentActivity()["includes"]("PhotoDetailActivity")) {
            if (random(0x0, 0x1) == 0x1) {
              (0x0, _0x5054b6['hlog'])("进入到直播间"), (0x0, _0x5054b6['hlog'])('随机给主播点赞');
              _0x20e917 == _0x13d454["ksjsapp"] || _0x20e917 == _0x13d454["ksptapp"] ? (0x0, _0x5054b6['randomMutiClick'])(0.3, 0.75) : (0x0, _0x5054b6["randomMutiClick"])();
              sleep(0x1388);
              currentActivity() != "com.ss.android.ugc.aweme.live.LivePlayActivity" && !currentActivity()["includes"]("LiveSlideActivity") && !currentActivity()["includes"]("PhotoDetailActivity") && (0x0, _0x301a39['HBack'])();
              var _0x452232 = classNameMatches(/android.widget.EditText|android.widget.TextSwitcher/)["findOne"](0x2710);
              if ((0x0, _0x5054b6["cClick"])(_0x452232)) {
                _0x452232 = className("android.widget.EditText")["findOne"](0x2710);
                if (_0x452232) {
                  (0x0, _0x5054b6["hlog"])('随机给主播评论');
                  var _0x54bf95 = Math["floor"](Math["random"]() * _0x5bac08["length"]),
                    _0x2a9844 = _0x5bac08[_0x54bf95]["trim"]();
                  (0x0, _0x5054b6["hlog"])(_0x2a9844), _0x452232["setText"](_0x2a9844), (0x0, _0x5054b6["textClick"])(/发送/);
                }
              }
            }
          }
        }
        _0x2bc143(_0x20e917), (0x0, _0x5054b6["dlog"])('养号结束');
      }
    }
  }

  function _0x2bc143(_0x286b19) {
    var _0x2d1d05 = _0x163380,
      _0x55da4c;
    try {
      _0x55da4c = (0x0, _0x5054b6['handleOpenAppPop'])(_0x286b19, ''), _0x34063d["yh_time"] && _0x34063d["yh_time"] > 0x0 ? ((0x0, _0x5054b6['hlog'])('养号停留点击滑动跳转约' + _0x34063d["yh_time"] + '秒'), sleep(_0x34063d["yh_time"] * 0x1f4), (0x0, _0x5054b6["scroll_up_quick"])(_0x34063d["yh_time"] / 0x2)) : (sleep(0x4e20), (0x0, _0x5054b6["scroll_up_quick"])(0x14)), (0x0, _0x5054b6["backApp"])(_0x286b19);
    } catch (_0x10ccb2) {} finally {
      _0x55da4c && _0x55da4c['interrupt']();
    }
  }

  function _0x453e7e(_0x5cb5f3) {
    var _0x469cc0 = _0x163380;
    if (_0x4af9be(_0x5cb5f3)) {
      var _0x1111cd = ![],
        _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
      if ((0x0, _0x3ad07e["OCRMatch"])(_0x158e5d, /.*(西瓜万能拍|wifi|WIFI|清扫|清理|天气|步步生金|充电卫士).*/)) {
        (0x0, _0x5054b6["hlog"])('匹配到不下载的垃圾软件,跳过');
        return;
      }
      for (var _0x227b1f = 0x0; _0x227b1f < 0x5; _0x227b1f++) {
        if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x158e5d, /立即下载|免费下载|官方下载|直接下载|直接安装|软件商店安装|极速下载|速来下载|下载$/)) {
          _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
          for (var _0x125e4f = 0x0; _0x125e4f < 0x3; _0x125e4f++) {
            if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x158e5d, /知道了|好的|允许/)) _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
            else break;
          }
        } else {
          if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x158e5d, /安装.*MB.*/)) {
            _0x1111cd = !![], (0x0, _0x5054b6["dlog"])('商店里下载'), _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
            for (var _0x125e4f = 0x0; _0x125e4f < 0x3; _0x125e4f++) {
              if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x158e5d, /知道了|好的|允许/)) _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
              else break;
            }
          } else {
            if (_0x227b1f == 0x0) return;
            else {
              (0x0, _0x5054b6["hlog"])("检测到下载");
              break;
            }
          }
        }
      }
      for (var _0x227b1f = 0x0; _0x227b1f < 0x3; _0x227b1f++) {
        if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x158e5d, /以后都允许|允许本次安装|知道了|好的|允许|不再提示|商店安装/)) _0x158e5d = (0x0, _0x3ad07e['doCaptureScreen'])();
        else {
          (0x0, _0x5054b6["dlog"])("没有弹窗确认");
          break;
        }
      }(0x0, _0x5054b6["hlog"])("等待下载...");
      if (!_0x1111cd) {
        for (var _0x227b1f = 0x0; _0x227b1f < 0x6; _0x227b1f++) {
          _0x158e5d = (0x0, _0x3ad07e['doCaptureScreen'])();
          var _0x398f9d = (0x0, _0x3ad07e["OCRMatch"])(_0x158e5d, /.*\d+%.*|安装中|下载中|正在安装/);
          if (_0x398f9d)(0x0, _0x5054b6['hlog'])(_0x398f9d['text']), sleep(0x2710);
          else {
            if ((0x0, _0x3ad07e['OCRMatch'])(_0x158e5d, /^(继续安装|安装完成)$/)) {
              (0x0, _0x5054b6["dlog"])('匹配到安装界面');
              break;
            } else(0x0, _0x5054b6["dlog"])('[' + (_0x227b1f + 0x1) + "]等待下载10s"), sleep(0x2710);
          }
        }(0x0, _0x3ad07e["OCRMatchClick"])(_0x158e5d, /已了解/) && (_0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])());
        for (var _0x227b1f = 0x0; _0x227b1f < 0x3; _0x227b1f++) {
          if ((0x0, _0x3ad07e["OCRMatchClick"])(_0x158e5d, /继续安装|无视风险安装|继续安装/)) _0x158e5d = (0x0, _0x3ad07e['doCaptureScreen'])();
          else {
            (0x0, _0x5054b6["dlog"])("继续安装结束");
            break;
          }
        }
        if (!_0x34063d["hidMode"]) {
          var _0x1f6795 = className("android.widget.EditText")["findOnce"]();
          !_0x1f6795 && (_0x1f6795 = textMatches(/密码/)['findOnce']()), _0x1f6795 && (_0x1f6795['setText'](_0x34063d["device_pwd"]), sleep(0xbb8), (0x0, _0x5054b6["textClick"])(/确定/));
        } else(0x0, _0x3ad07e["OCRMatchClick"])(_0x158e5d, /密码/) && (setClip(_0x34063d['device_pwd']), _0x4e12f2 ? hid["paste"]() : _0x4eb6f5["default"]["ctrlV"](), _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])(), (0x0, _0x3ad07e["OCRMatchClick"])(_0x158e5d, /确定/));
      } else sleep(0xea60);
      sleep(0x1388), (0x0, _0x5054b6['backApp'])(_0x5cb5f3), (0x0, _0x5054b6["backApp"])(_0x5cb5f3), _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
      for (var _0x227b1f = 0x0; _0x227b1f < 0x6; _0x227b1f++) {
        if ((0x0, _0x3ad07e['OCRMatchClick'])(_0x158e5d, /打开|^同意$|^同意并继续$|知道了|跳过|禁止|立即下载/)) {
          _0x158e5d = (0x0, _0x3ad07e["doCaptureScreen"])();
          var _0x1930ff = 0.95 * _0x34063d['deviceHeight'];
          for (var _0x125e4f = 0x0; _0x125e4f < 0x5; _0x125e4f++) {
            (0x0, _0x301a39["HClick"])(0x2 / 0x5 * _0x34063d["deviceWidth"], _0x1930ff), _0x1930ff = _0x1930ff - 0x32;
          }
        } else break;
      }
      return _0x34063d['yh_time'] && _0x34063d["yh_time"] > 0x0 ? ((0x0, _0x5054b6['hlog'])('体验' + _0x34063d["yh_time"] + 's左右'), (0x0, _0x5054b6["scroll_up_quick"])(_0x34063d["yh_time"])) : ((0x0, _0x5054b6["hlog"])('体验40s左右'), (0x0, _0x5054b6['scroll_up_quick'])(0x28)), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6['backApp'])(_0x5cb5f3), (0x0, _0x1fcce2["setXiazaiCount"])(), !![];
    }
  }

  function _0x26d6af(_0x11e34, _0x3f44c5) {
    var _0x3e163d = _0x163380,
      _0x447380 = null,
      _0x2af8b8 = null;
    for (var _0x478443 = 0x0; _0x478443 < 0x3; _0x478443++) {
      _0x3f44c5 && _0x478443 == 0x0 ? _0x2af8b8 = (0x0, _0x3f790d["getTextNumber"])(_0x3f44c5) : _0x2af8b8 = (0x0, _0x3f790d["getObjectNumber"])(_0x11e34);
      if (_0x2af8b8 && _0x2af8b8 != 0x0 && _0x2af8b8 < 0xc8) {
        if (_0x2af8b8 > 0x64) return sleep(0x28 * 0x3e8), !![];
        if (_0x447380 !== null && _0x2af8b8 === _0x447380) return (0x0, _0x5054b6['dlog'])("倒计时卡住(" + _0x2af8b8 + 's)，跳过'), !![];
        _0x447380 = _0x2af8b8, (0x0, _0x5054b6['hlog'])('等待约' + _0x2af8b8 + '秒'), _0x34063d['hidMode'] ? _0x2af8b8 >= 0x32 ? sleep(0x32 * 0x3e8) : sleep(_0x2af8b8 * 0x3e8) : sleep(_0x2af8b8 * 0x3e8 + 0xbb8);
      } else return !![];
    }
  }

  function _0xd210e8(_0x2f497f) {
    var _0x466d62 = _0x163380,
      _0x464929 = (0x0, _0x3f790d["getTextNumber"])(_0x2f497f);
    _0x464929 && _0x464929 != 0x0 && _0x464929 < 0xc8 && sleep(_0x464929 * 0x3e8 + 0x1388);
  }

  function _0x5df582(_0x4405fb) {
    var _0x4742c8 = _0x163380;
    for (var _0x55a53b = 0x0; _0x55a53b < 0x3; _0x55a53b++) {
      var _0x3a2429 = (0x0, _0x3f790d["getObjectNumber"])(_0x4405fb);
      if (_0x3a2429 && _0x3a2429 != 0x0 && _0x3a2429 < 0xc8) _0x55a53b == 0x1 ? (0x0, _0x5054b6["scroll_down_quick"])(_0x3a2429 + 0xa) : (0x0, _0x5054b6['scroll_up_quick'])(_0x3a2429 + 0xa);
      else return !![];
    }
  }

  function _0x4897a4(_0x3a8412) {
    var _0xa363d9 = _0x163380;
    !_0x3a8412 && (_0x3a8412 = currentActivity());
    (0x0, _0x5054b6["dlog"])(_0x3a8412);
    if (_0x3a8412 && (_0x3a8412 == "com.ss.android.excitingvideo.ExcitingVideoActivity" || _0x3a8412["includes"]("com.bytedance.sdk.openadsdk") || _0x3a8412["includes"]("com.bytedance.android.openliveplugin") || _0x3a8412["includes"]("com.baidu.mobads.sdk.api") || _0x3a8412['includes']("com.kmxs.mobad.core.ssp.rewardvideo") || _0x3a8412 == "com.qq.e.ads.PortraitADActivity" || _0x3a8412['includes']("com.kwad.sdk.api") || _0x3a8412 == 'com.ximalaya.ting.android.adsdk.ADActivity' || _0x3a8412["includes"]('com.qumeng.advlib') || _0x3a8412["includes"]("com.alimm") || _0x3a8412["includes"]("com.cat.readall") || _0x3a8412["includes"]("com.noah") || _0x3a8412['includes']("com.zhangyue") || _0x3a8412["includes"]("com.taobao.browser") || _0x3a8412["includes"]("com.sigmob.sdk.base") || _0x3a8412["includes"]("cn.vlion.ad") || _0x3a8412["includes"]("com.firefly.yhcadsdk") || _0x3a8412['includes']("com.anythink.basead") || _0x3a8412["includes"]("com.maplehaze.adsdk") || _0x3a8412['includes']("com.vivo.mobilead") || _0x3a8412["includes"]("com.qimao.ad") || _0x3a8412['includes']("com.smartdigimkt.sdk") || _0x3a8412["includes"]("com.octopus.ad") || _0x3a8412["includes"]("com.meishu.sdk") || _0x3a8412['includes']("com.mcto.sspsdk") || _0x3a8412["includes"]("com.link.ida.sdk") || _0x3a8412["includes"]("com.zm.adxsdk.core") || _0x3a8412["includes"]("com.wgkj.ad") || _0x3a8412['includes']("cn.youth.news") || _0x3a8412["includes"]("com.wangmai") || _0x3a8412["includes"]('com.beizi.ad') || _0x3a8412["includes"]('android.app.Dialog') || _0x3a8412["includes"]("com.ptg.ptgapi") || _0x3a8412["includes"]("com.dianzhong.base") || _0x3a8412["includes"]('com.huawei.openalliance.ad') || textMatches(/滑动浏览/)['findOnce']())) return !![];
  }

  function _0x51b177(_0x447802, _0x3c5634) {
    var _0xf400d2 = _0x163380,
      _0x147635;
    try {
      var _0x166d67;
      for (var _0x1eede9 = 0x0; _0x1eede9 < 0xa; _0x1eede9++) {
        sleep(0x1388), _0x166d67 = currentActivity();
        if (_0x4897a4(_0x166d67)) break;
        else {
          (0x0, _0x5054b6["dlog"])("未进入到广告,等待5s"), (0x0, _0x5054b6["dlog"])(_0x166d67);
          if (_0x3c5634) {
            var _0x31fc23 = textMatches(_0x3c5634)['findOnce']();
            if (_0x31fc23) {
              (0x0, _0x5054b6["dlog"])(_0x31fc23);
              return;
            }
          }(0x0, _0x5054b6["backApp"])(_0x447802);
        }
      }
      _0x147635 = threads["start"](function() {
        var _0x4bd11c = _0xf400d2;
        while (!![]) {
          var _0x5db13f = textMatches(/.*(回答正确即可|实际内容以广告为主|万人火爆参与中|拼手速.*赢奖励|是否允许跳转|启动应用|想要打开|继续播放视频内容|继续播放视频|我要加速领奖|获取惊喜福利).*/)["findOnce"]();
          _0x5db13f ? ((0x0, _0x5054b6["textClick"])(/残忍离开|放弃福利|不允许|拒绝|继续播放视频内容|继续播放视频/) || (0x0, _0x5054b6["textClickXY"])(/残忍离开|放弃福利|不允许|拒绝|继续播放视频内容|继续播放视频/) || (0x0, _0x5054b6["textClickXY"])(/svg.*/)) && ((0x0, _0x5054b6["hlog"])("关闭答题"), sleep(0xea60)) : sleep(0xbb8);
        }
      });
      if (_0x5aafdd(_0x166d67, _0x447802) || _0x254424(_0x166d67, _0x447802) || _0x5b47b6(_0x166d67) || _0x4cf66d(_0x166d67, _0x447802) || _0x35b226(_0x166d67, _0x447802) || _0x4e4473(_0x166d67) || _0x1e2588(_0x166d67, _0x447802) || _0x393ff8(_0x166d67) || _0x2ec4c2(_0x166d67) || _0x29bc1c(_0x166d67) || _0x333cda(_0x166d67, _0x447802) || _0x5b273(_0x166d67) || _0x4ebf59(_0x166d67, _0x447802) || _0x4edde7(_0x166d67, _0x447802) || _0xaebbc8(_0x166d67, _0x447802) || _0x2ac1fb(_0x166d67, _0x447802) || _0x3e9008(_0x166d67, _0x447802) || _0x35971a(_0x166d67, _0x447802) || _0x21c13c(_0x166d67, _0x447802) || _0x4f51a6(_0x166d67, _0x447802) || _0x389435(_0x166d67, _0x447802) || _0x27b17f(_0x166d67, _0x447802) || _0x69f9(_0x166d67, _0x447802) || _0xd82bac(_0x166d67, _0x447802) || _0x262163(_0x166d67, _0x447802) || _0x55d7a5(_0x166d67, _0x447802) || _0x33f4bc(_0x166d67, _0x447802) || _0x5d7e7f(_0x166d67, _0x447802) || _0x29b8c2(_0x166d67, _0x447802) || _0x5ad5a7(_0x166d67, _0x447802) || _0x54aabb(_0x166d67, _0x447802) || _0x52e6f5(_0x166d67, _0x447802)) {} else(0x0, _0x5054b6["dlog"])("未匹配到任何广告类型,尝试关闭");
      return _0x1dfb1b(_0x166d67, _0x447802);
    } catch (_0x3b8048) {
      (0x0, _0x5054b6["dlog"])(_0x3b8048);
    } finally {
      _0x147635 && (_0x147635["interrupt"](), (0x0, _0x5054b6["dlog"])("关闭答题监听"));
    }
  }

  function _0x1dfb1b(_0x5e0ffb, _0x3eb154) {
    var _0x47d7b7 = _0x163380;
    (0x0, _0x5054b6["backApp"])(_0x3eb154), sleep(0x1388);
    _0x3eb154 == _0x13d454["wkllqapp"] && _0x1afff9();
    (0x0, _0x5054b6["textClick"])(/残忍离开|坚持退出|关闭广告|关闭|svg.*|放弃更多奖励|.*关闭页面|放弃奖励离开/);
    var _0x534574 = currentActivity();
    if (_0x5e0ffb == _0x534574)(0x0, _0x5054b6['dlog'])("对比第1次,尝试关闭广告"), (0x0, _0x5054b6["textClick"])(/.*跳过.*/), (0x0, _0x5054b6["textClick"])(/坚持退出/), (0x0, _0x5054b6['textClickXY'])(/svg.*/);
    else return (0x0, _0x5054b6['dlog'])('对比第1次,已经关闭广告'), !![];
    var _0x48cfee = currentActivity();
    if (_0x5e0ffb == _0x48cfee)(0x0, _0x5054b6["dlog"])("对比第2次,尝试关闭广告"), _0x144c54();
    else return (0x0, _0x5054b6["dlog"])("对比第2次,已经关闭广告"), !![];
    var _0x401f48 = currentActivity();
    if (_0x5e0ffb == _0x401f48)(0x0, _0x5054b6["dlog"])("对比第3次,尝试关闭广告"), (0x0, _0x301a39['HBack'])(), (0x0, _0x5054b6['textClick'])(/残忍离开|坚持退出|残忍放弃奖励|放弃奖励/);
    else return (0x0, _0x5054b6['dlog'])("对比第3次,已经关闭广告"), !![];
    var _0xf01a98 = currentActivity();
    if (_0x5e0ffb == _0xf01a98)(0x0, _0x5054b6["dlog"])("对比第4次,尝试关闭广告"), (0x0, _0x5054b6["idClick"])("close"), (0x0, _0x5054b6["idClick"])('close_btn'), (0x0, _0x5054b6["idClick"])("iv_close"), (0x0, _0x5054b6["idClick"])("endclose");
    else return (0x0, _0x5054b6["dlog"])("对比第4次,已经关闭广告"), !![];
    var _0x37b246 = currentActivity();
    if (_0x5e0ffb == _0x37b246)(0x0, _0x5054b6['dlog'])("对比第5次,尝试关闭广告"), _0x3071e8();
    else return (0x0, _0x5054b6["dlog"])("对比第5次,已经关闭广告"), !![];
    var _0x3d2257 = currentActivity();
    if (_0x5e0ffb == _0x3d2257)(0x0, _0x5054b6["dlog"])("对比第6次,尝试关闭广告"), (0x0, _0x5054b6["textClick"])(/.*(退出|离开|放弃奖励|关闭).*/);
    else return (0x0, _0x5054b6["dlog"])("对比第6次,已经关闭广告"), !![];
    var _0x168c1c = currentActivity();
    if (_0x5e0ffb == _0x168c1c)(0x0, _0x5054b6["dlog"])("对比第7次,尝试关闭广告"), (0x0, _0x3ad07e['OCRClickSimilarImageTop'])([_0x2986c0['CLOSE1'], _0x2986c0['CLOSE2']], 0.7);
    else return (0x0, _0x5054b6["dlog"])("对比第7次,已经关闭广告"), !![];
    return (0x0, _0x5054b6['dlog'])("未关闭广告"), ![];
  }

  function _0x265320(_0x2d919f) {
    var _0x31d349 = _0x163380;
    if (_0x2d919f == "com.ss.android.excitingvideo.ExcitingVideoActivity" || _0x2d919f['includes']('com.dragon.read.reader')) {
      if (textMatches(/\d+(s|秒)后.*|\d+s|\d+秒/)["findOnce"]()) return _0x26d6af(/\d+(s|秒)后.*|\d+s|\d+秒/), !![];
      else {
        var _0x1297d1 = (0x0, _0x3f790d['getObjectNumber'])(/浏览\d+秒|\d+秒/);
        if (_0x1297d1) {
          sleep(_0x1297d1 * 0x3e8 + 0xbb8);
          for (var _0x4de941 = 0x0; _0x4de941 < 0x3; _0x4de941++) {
            if (textMatches(/上滑浏览赚金币/)['findOnce']())(0x0, _0x5054b6["scroll_up_quick_cnt"])(0x1);
            else break;
            _0x26d6af(/浏览\d+秒|\d+秒/);
          }
          return !![];
        }
      }
    }
  }

  function _0x5aafdd(_0x289809, _0x2b25ce) {
    var _0x50109e = _0x163380;
    if (_0x289809["includes"]("com.bytedance.sdk.openadsdk")) {
      if (textMatches(/\d+s|\d+s后可领.*奖励|点击或继续观看\d+秒领取/)["findOnce"]()) {
        (0x0, _0x5054b6["dlog"])("匹配到广告2-1"), _0x26d6af(/\d+s|\d+s后可领.*奖励|点击或继续观看\d+秒领取/);
        (0x0, _0x5054b6['textClick'])(/我要加速/) && (sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x2b25ce));
        if ((0x0, _0x5054b6['textClickXY'])(/跳过.*|.*关闭.*|\| 跳过/)) return !![];
        return _0x144c54(), !![];
      } else {
        if (textMatches(/\d+秒|\d+秒后得|再逛\d+秒后可领奖/)["findOnce"]()) return (0x0, _0x5054b6['dlog'])("匹配到广告2-2"), _0x5df582(/\d+秒|\d+秒后得|再逛\d+秒后可领奖/), (0x0, _0x301a39["HBack"])(), textMatches(/浏览0秒可领金币/)["findOnce"]() && _0x57d876(), !![];
        else {
          if (idContains('tt_reward_count_down')["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告2-3'), (0x0, _0x5054b6["scroll_up_quick"])(0xa), (0x0, _0x5054b6["scroll_down_quick"])(0xa), (0x0, _0x5054b6["scroll_up_quick"])(0xa), (0x0, _0x301a39["HBack"])(), !![];
          else {
            if (textMatches(/进入直播间/)["findOnce"]() && textMatches(/月销量.*件/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])("匹配到广告2-4"), (0x0, _0x5054b6["scroll_up_quick"])(0x5), (0x0, _0x301a39["HBack"])(), !![];
            else {
              if (textMatches(/去体验\d+秒可立即领奖/)["findOnce"]()) {
                (0x0, _0x5054b6['dlog'])("匹配到广告2-5");
                var _0x28223f = (0x0, _0x3f790d["getObjectNumber"])(/去体验\d+秒可立即领奖/);
                return _0x28223f && ((0x0, _0x5054b6['textClickXY'])(/我要直接拿奖励/), (0x0, _0x5054b6["textClick"])(/get_reward_btn_bg/), sleep(_0x28223f * 0x3e8 + 0x1f40)), (0x0, _0x5054b6['backApp'])(_0x2b25ce), sleep(0x1388), (0x0, _0x301a39["HBack"])(), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClick"])(/.*跳过.*/), (0x0, _0x5054b6['textClickXY'])(/.*跳过.*/), !![];
              } else {
                if (textMatches(/\d+\:\d+/)['findOnce']()) return (0x0, _0x5054b6["dlog"])("匹配到广告2-6"), (0x0, _0x5054b6['scroll_up_quick'])(0xf), (0x0, _0x5054b6["scroll_down_quick"])(0x5), (0x0, _0x5054b6["scroll_up_quick"])(0xf), back(), !![];
                else {
                  if (textMatches(/\d+|\d+.*跳过/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告2-7'), _0x26d6af(/\d+|\d+.*跳过/), _0x5df582(/再逛\d+秒后可领奖/), (0x0, _0x5054b6["textClick"])(/继续观看/) && _0x26d6af(/\d+|\d+.*跳过/), (0x0, _0x5054b6["scroll_up_quick_cnt"])(0x1), sleep(0x7d0), _0x144c54(), (0x0, _0x301a39['HFind'])(/上滑或点击查看/) && _0x3095cc(), !![];
                  else {
                    if (textMatches(/\d+s/)["findOnce"]()) return (0x0, _0x5054b6['dlog'])("匹配到广告2-8"), _0x5df582(/\d+s/), _0x144c54(), !![];
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function _0x254424(_0x5b6f6d, _0x300281) {
    var _0x2b24e7 = _0x163380;
    if (_0x5b6f6d["includes"]('com.baidu.mobads.sdk.api')) {
      if (textMatches(/\d+s后可领取奖励|\d+s/)["findOnce"]()) {
        (0x0, _0x5054b6['dlog'])('匹配到广告3-1');
        (0x0, _0x5054b6["textClick"])(/我要加速领奖/) && ((0x0, _0x5054b6['jumpApp'])(), sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x300281), (0x0, _0x301a39['HBack'])());
        _0x26d6af(/\d+s后可领取奖励|\d+s/), (0x0, _0x5054b6["textClick"])(/跳过.*/), sleep(0xbb8);
        if (_0x300281 == _0x13d454["wkllqapp"] && _0x1afff9()) return !![];
        return _0x3071e8(), !![];
      } else {
        if ((0x0, _0x5054b6["textClick"])(/跳过\d+s/)) {
          (0x0, _0x5054b6['dlog'])('匹配到广告3-2');
          if (_0x300281 == _0x13d454['wkllqapp'] && _0x1afff9()) return !![];
          return _0x144c54(), !![];
        } else {
          (0x0, _0x5054b6["dlog"])("匹配到广告3-3");
          if (_0x300281 == _0x13d454["wkllqapp"] && _0x1afff9()) return !![];
          return (0x0, _0x5054b6['textClick'])(/取消下载/), sleep(0x1388), _0x144c54(!![]), !![];
        }
      }
    }
  }

  function _0x5b47b6(_0x169de9) {
    var _0x56c7d2 = _0x163380;
    if (_0x169de9["includes"]("com.kmxs.mobad.core.ssp.rewardvideo")) {
      if (textMatches(/奖励于\s+\d+\s+秒后发放/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告4'), _0x26d6af(/奖励于\s+\d+\s+秒后发放/), _0x8fa002 = id("small_close")["clickable"]()['findOnce'](), _0x8fa002 && ((0x0, _0x5054b6["dlog"])("small_close"), (0x0, _0x5054b6["pClick"])(_0x8fa002), _0x8fa002 = id("small_close")['clickable']()['findOnce'](), (0x0, _0x5054b6["pClick"])(_0x8fa002) && (0x0, _0x5054b6['dlog'])("small_close2")), !![];
    }
  }

  function _0x4cf66d(_0xc9789b, _0x3e458e) {
    var _0x12d753 = _0x163380;
    if (_0xc9789b == "com.qq.e.ads.PortraitADActivity") {
      _0x8fa002 = textMatches(/秒后发放/)["findOnce"]();
      if (_0x8fa002 && _0x8fa002["parent"]()) {
        (0x0, _0x5054b6["dlog"])("匹配到广告5-1");
        if ((0x0, _0x5054b6["textClick"])(/我要更快拿奖/))(0x0, _0x5054b6['jumpApp'])(), sleep(0x3a98), (0x0, _0x301a39["HBack"])();
        else {
          var _0x3b5d48 = _0x8fa002['parent'](),
            _0x35135c = _0x3b5d48["child"](0x1);
          _0x35135c && _0x35135c["text"]() ? _0xd210e8(_0x35135c['text']()) : sleep(0x88b8);
        }
        return (0x0, _0x5054b6["textClick"])(/放弃福利/) && sleep(0x3a98), _0x8fa002 = text("恭喜获得奖励")['findOnce'](), _0x8fa002 && _0x8fa002["parent"]() && _0x8fa002["parent"]()['parent']() && _0x8fa002["parent"]()["parent"]()["parent"]() && _0x8fa002["parent"]()["parent"]()["parent"]()["childCount"]() > 0x1 && _0x8fa002["parent"]()['parent']()["parent"]()['child'](0x1)["childCount"]() == 0x1 && ((0x0, _0x5054b6["dlog"])('恭喜获得奖励'), (0x0, _0x5054b6["pClick"])(_0x8fa002["parent"]()["parent"]()["parent"]()['child'](0x1)["child"](0x0))), _0x144c54(![], 0.15), (0x0, _0x5054b6['textClick'])(/抓住奖励机会/) && ((0x0, _0x5054b6["textClick"])(/我要更快拿奖/) ? ((0x0, _0x5054b6["textClick"])(/始终打开/), sleep(0x3a98), (0x0, _0x301a39["HBack"])()) : sleep(0x88b8), _0x144c54(![], 0.15)), textMatches(/应用简介/)["findOnce"]() && textMatches(/立即下载/)["findOnce"]() && ((0x0, _0x301a39["HBack"])(), _0x144c54(![], 0.15)), !![];
      } else {
        if (textMatches(/\d+\ss/)['findOnce']()) return (0x0, _0x5054b6["dlog"])("匹配到广告5-2"), _0x26d6af(/\d+\ss/), _0x144c54(![], 0.15), (0x0, _0x5054b6["textClick"])(/抓住奖励机会/) && (sleep(0x88b8), _0x144c54(![], 0.15)), !![];
        else {
          if ((0x0, _0x5054b6["textClick"])(/进入微信小游戏立即玩|我要更快拿奖|点击广告拿奖励|点击跳转微信|去微信看短剧|点击打开.*拿奖励|始终打开|打开第三方应用/)) return (0x0, _0x5054b6["dlog"])('匹配到广告5-3'), (0x0, _0x5054b6["jumpApp"])(), sleep(0x4650), (0x0, _0x5054b6["backApp"])(_0x3e458e), (0x0, _0x301a39["HBack"])(), _0x144c54(![], 0.15), (0x0, _0x5054b6["textClick"])(/立即退出/), !![];
          else {
            (0x0, _0x5054b6["dlog"])("匹配到广告5-4"), sleep(0x88b8);
            (0x0, _0x5054b6["textClick"])(/立即安装/) && ((0x0, _0x5054b6["textClick"])(/安装应用/), sleep(0x3a98), (0x0, _0x5054b6["backApp"])(_0x3e458e));
            _0x144c54(![], 0.15);
            if ((0x0, _0x5054b6["textClick"])(/抓住奖励机会/)) sleep(0x88b8), _0x144c54(![], 0.15);
            else(0x0, _0x5054b6['textClick'])(/打开第三方应用/) && (sleep(0x3a98), (0x0, _0x5054b6["backApp"])(_0x3e458e));
            return (0x0, _0x5054b6["textClickXY"])(/去安装拿奖励/) && ((0x0, _0x5054b6["textClick"])(/立即安装/) && ((0x0, _0x5054b6["textClick"])(/安装应用/), sleep(0x1388), (0x0, _0x5054b6["backApp"])(_0x3e458e))), (0x0, _0x5054b6['textClick'])(/跳过/), !![];
          }
        }
      }
    }
  }

  function _0x35b226(_0x8ccd7b, _0x1bec76) {
    var _0x281b0b = _0x163380;
    if (_0x8ccd7b["includes"]("com.kwad.sdk.api")) {
      if (textMatches(/\d+秒后可领取奖励/)["findOnce"]()) return (0x0, _0x5054b6['dlog'])('匹配到广告6-1'), _0x26d6af(/\d+秒后可领取奖励/), !![];
      else {
        if ((0x0, _0x5054b6['textClickXY'])(/拿奖励|点击跳转拿奖励|点击下载拿奖励/)) return (0x0, _0x5054b6["dlog"])('匹配到广告6-2'), (0x0, _0x5054b6["jumpApp"])(), sleep(0x2710), (0x0, _0x5054b6['backApp'])(_0x1bec76), ((0x0, _0x5054b6['idClick'])('ksad_kwad_web_navi_close') || (0x0, _0x5054b6["idClick"])("ksad_kwad_web_navi_back")) && (0x0, _0x5054b6["textClick"])(/残忍离开|放弃奖励/), _0x26d6af(/看\d+秒可直接拿奖励|\d+秒后可领取奖励/), (0x0, _0x5054b6["textClick"])(/跳过/), !![];
        else {
          (0x0, _0x5054b6["dlog"])("匹配到广告6-3");
          var _0x4bfff7 = _0x13a3ab();
          if (_0x4bfff7) _0xd210e8(_0x4bfff7['text']());
          else id("ksad_video_count_down")["findOnce"]() ? (_0x8fa002 = id("ksad_video_count_down")["findOnce"](), _0x8fa002 && _0x8fa002["text"]() && _0xd210e8(_0x8fa002["text"]())) : ((0x0, _0x5054b6["dlog"])("等待40s"), sleep(0x9c40));
          (0x0, _0x5054b6["descClick"])(/sky-lantern-easy-playable_scene3_closeBtn/) && sleep(0x7530);
          for (var _0x39bc34 = 0x0; _0x39bc34 < 0x3; _0x39bc34++) {
            if ((0x0, _0x5054b6['textClickXY'])(/继续观看|留下看看/)) sleep(0x2710);
            else break;
          }(0x0, _0x5054b6['descClick'])("dialog_close_button");
          (0x0, _0x5054b6['textClickXY'])(/.*要免看本次广告.*/) && (sleep(0x2710), (0x0, _0x5054b6['backApp'])(_0x1bec76), ((0x0, _0x5054b6['idClick'])('ksad_kwad_web_navi_close') || (0x0, _0x5054b6["idClick"])('ksad_kwad_web_navi_back')) && (0x0, _0x5054b6["textClick"])(/残忍离开|放弃奖励/), sleep(0x2710), (0x0, _0x5054b6["descClick"])("dialog_close_button"));
          for (var _0x39bc34 = 0x0; _0x39bc34 < 0x3; _0x39bc34++) {
            if ((0x0, _0x5054b6["textClickXY"])(/继续观看|留下看看/))(0x0, _0x5054b6["descClick"])(/sky-lantern-easy-playable_scene3_closeBtn/) ? sleep(0x7530) : sleep(0x2710);
            else break;
          }
          return ((0x0, _0x5054b6["idClick"])("ksad_kwad_web_navi_back") || (0x0, _0x5054b6["idClick"])("ksad_kwad_web_navi_close")) && (0x0, _0x5054b6["textClick"])(/残忍离开|放弃奖励/), (0x0, _0x5054b6['textClick'])(/残忍离开|放弃奖励/), (0x0, _0x5054b6["textClick"])(/跳过/) && ((0x0, _0x5054b6["textClick"])(/留下看看/) && sleep(0x1388)), !![];
        }
      }
    }
  }

  function _0x13a3ab() {
    var _0x597440 = _0x163380;
    _0x8fa002 = textMatches(/\d+/)["find"]();
    for (var _0x98e72f = 0x0; _0x98e72f < _0x8fa002["length"]; _0x98e72f++) {
      var _0x2f6d25 = _0x8fa002[_0x98e72f],
        _0x81540e = _0x2f6d25["bounds"]();
      if (_0x81540e && _0x81540e["centerX"]() < 0xc8 && _0x81540e["centerY"]() < 0xc8 && _0x2f6d25['text']()) return _0x2f6d25;
    }
  }

  function _0x4e4473(_0x3b950d) {
    var _0x117041 = _0x163380;
    if (_0x3b950d == 'com.ximalaya.ting.android.adsdk.ADActivity') {
      if (textMatches(/\d+s后领取奖励.*/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])("匹配到广告7-1"), _0x26d6af(/\d+s后领取奖励.*/), (0x0, _0x5054b6['textClick'])(/奖励已发放.*/);
      else {
        if (textMatches(/秒后发放/)["findOnce"]()) {
          _0x8fa002 = textMatches(/秒后发放/)["findOnce"]();
          if (_0x8fa002 && _0x8fa002['parent']()) {
            (0x0, _0x5054b6['dlog'])("匹配到广告7-2");
            var _0x17ce49 = _0x8fa002["parent"](),
              _0x23f07b = _0x17ce49["child"](0x1);
            if (_0x23f07b && _0x23f07b["text"]()) return _0xd210e8(_0x23f07b['text']()), _0x8fa002 = text("恭喜获得奖励")["findOnce"](), _0x8fa002 && _0x8fa002["parent"]() && _0x8fa002['parent']()["parent"]() && _0x8fa002['parent']()['parent']()['parent']() && _0x8fa002["parent"]()["parent"]()["parent"]()["childCount"]() > 0x1 && ((0x0, _0x5054b6["dlog"])('恭喜获得奖励'), (0x0, _0x5054b6["pClick"])(_0x8fa002["parent"]()["parent"]()["parent"]()['child'](0x1))), _0x144c54(), !![];
          }
        }
      }
    }
  }

  function _0x1e2588(_0x35a026, _0x2fd768) {
    var _0x26eaf8 = _0x163380;
    if (_0x35a026 == 'com.qumeng.advlib.ui.front.InciteADActivity') {
      (0x0, _0x5054b6["dlog"])('匹配到广告8-1');
      var _0xc553a9 = (0x0, _0x3ad07e['doCaptureScreen'])();
      (0x0, _0x5054b6["dlog"])(_0xc553a9);
      if ((0x0, _0x3ad07e["OCRMatchClick"])(_0xc553a9, /体验拿奖励/)) {
        if ((0x0, _0x5054b6['textClick'])(/去体验拿奖励/)) return (0x0, _0x5054b6["jumpApp"])(), sleep(0x2710), (0x0, _0x5054b6['backApp'])(_0x2fd768), !![];
      } else {
        if ((0x0, _0x3ad07e["OCRMatchClick"])(_0xc553a9, /完成APP下载|完成APP安装/)) return _0x144c54(!![]), (0x0, _0x5054b6["textClick"])(/残忍离开|关闭广告/), !![];
      }
      var _0x35050d = (0x0, _0x3ad07e["OCRMatch"])(_0xc553a9, /\d+秒后可领奖励/);
      if (_0x35050d) {
        var _0x195f8b = (0x0, _0x3f790d["getTextNumber"])(_0x35050d["text"]);
        sleep(_0x195f8b * 0x3e8 + 0xbb8);
      } else(0x0, _0x3ad07e["OCRMatchClick"])(_0xc553a9, /提前拿奖励/) ? (0x0, _0x5054b6["textClick"])(/去体验拿奖励/) && ((0x0, _0x5054b6['jumpApp'])(), sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x2fd768)) : sleep(0x7530);
      for (var _0x47b86b = 0x0; _0x47b86b < 0x5; _0x47b86b++) {
        (0x0, _0x5054b6["backApp"])(_0x2fd768), (0x0, _0x301a39['HBack'])();
        if ((0x0, _0x5054b6["textClick"])(/继续观看|继续阅读/)) {
          (0x0, _0x5054b6["clickCenter"])(), sleep(0x2710);
          _0x47b86b == 0x4 && ((0x0, _0x5054b6["backApp"])(_0x2fd768), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClick"])(/放弃奖励/));
          continue;
        } else break;
      }
      return (0x0, _0x5054b6["textClick"])(/去体验拿奖励/) && ((0x0, _0x5054b6["jumpApp"])(), sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x2fd768)), (0x0, _0x5054b6["textClick"])(/残忍离开|关闭广告/), !![];
    } else {
      if (_0x35a026["includes"]("com.qumeng.advlib.__remote__.ui.incite")) return (0x0, _0x5054b6["dlog"])("匹配到广告8-2"), (0x0, _0x5054b6["textClick"])('关闭', !![]);
      else {
        if (_0x35a026['includes']("com.qumeng.advlib")) {
          (0x0, _0x5054b6["dlog"])("匹配到广告8-3"), sleep(0x7530);
          for (var _0x47b86b = 0x0; _0x47b86b < 0x3; _0x47b86b++) {
            if ((0x0, _0x5054b6['textClick'])('关闭', !![])) {
              if ((0x0, _0x5054b6["textClick"])(/继续阅读/)) {
                (0x0, _0x5054b6["scroll_up_quick_cnt"])(0x2), (0x0, _0x5054b6["scroll_down_quick_cnt"])(0x2);
                continue;
              } else return !![];
            }
          }
          return (0x0, _0x5054b6["textClick"])('关闭', !![]), (0x0, _0x5054b6['textClick'])(/残忍离开/), back(), !![];
        }
      }
    }
  }

  function _0x393ff8(_0x3d738f) {
    var _0x165b29 = _0x163380;
    if (_0x3d738f["includes"]('com.bytedance.android.openliveplugin')) return (0x0, _0x5054b6["dlog"])("匹配到广告9-1"), sleep(0x7530), (0x0, _0x5054b6["idClick"])("close_in_top_container"), (0x0, _0x5054b6['textClick'])(/退出/), !![];
  }

  function _0x2ec4c2(_0x5529b7) {
    var _0x59a294 = _0x163380;
    if (_0x5529b7["includes"]("com.alimm")) {
      if (textMatches(/\d+s后可领取.*/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])("匹配到广告10-1"), _0x26d6af(/\d+s后可领取.*/), _0x3071e8(), !![];
      else {
        if ((0x0, _0x5054b6["idClick"])("btn_force_close")) return (0x0, _0x5054b6['dlog'])("匹配到广告10-2"), !![];
        else {
          if (textMatches(/\d+s/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告10-3'), _0x5df582(/\d+s/), _0x8fa002 = className("android.widget.ImageView")['id']("iv_back")["clickable"]()['findOnce'](), !(0x0, _0x5054b6["cClick"])(_0x8fa002) && (!(0x0, _0x3ad07e["OCRClick"])(/已领取/) && _0x3071e8()), !![];
          else return _0x5529b7["includes"]("com.alimm.tanx.core.ad.ad.template.rendering.reward.RewardVideoPortraitActivity") ? ((0x0, _0x5054b6["dlog"])("匹配到广告10-4"), _0x26d6af(/\d+s后可领取.*/), _0x3071e8(), !![]) : ((0x0, _0x5054b6["dlog"])("匹配到广告10-5"), (0x0, _0x5054b6['scroll_up_quick'])(0x28), _0x8fa002 = className("android.widget.ImageView")['id']("iv_back")['clickable']()['findOnce'](), !(0x0, _0x5054b6["cClick"])(_0x8fa002) && (!(0x0, _0x3ad07e['OCRClick'])(/已领取/) && _0x3071e8()), !![]);
        }
      }
    }
  }

  function _0x29bc1c(_0x4c653a) {
    var _0x2504bc = _0x163380;
    if (_0x4c653a["includes"]("com.cat.readall") && !_0x4c653a["includes"]("com.cat.readall.activity.Browser")) {
      if (textMatches(/\d+s/)['findOnce']()) return (0x0, _0x5054b6["dlog"])("匹配到广告11-1"), _0x26d6af(/\d+s/), (0x0, _0x5054b6['textClick'])(/.*跳过.*/), _0x3071e8();
      else {
        if (textMatches(/\d+秒/)['findOnce']()) return (0x0, _0x5054b6["dlog"])("匹配到广告11-2"), _0x5df582(/\d+秒/), (0x0, _0x301a39['HBack'])(), !![];
      }
    }
  }

  function _0x333cda(_0x437c01, _0x4737cf) {
    var _0x40a72d = _0x163380;
    if (_0x437c01["includes"]("com.noah")) {
      if (textMatches(/奖励将于\d+秒后发放|.*看\d+秒可获得\d+金币/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])("匹配到广告12-1"), _0x26d6af(/奖励将于\d+秒后发放|.*看\d+秒可获得\d+金币/), _0x3071e8(), !![];
      else {
        if ((0x0, _0x5054b6["textClickXY"])(/.*(立即点击领取|点击立即领奖|立即点击领奖).*/)) return (0x0, _0x5054b6["dlog"])("匹配到广告12-2"), (0x0, _0x5054b6["jumpApp"])(), sleep(0x3a98), back(), (0x0, _0x5054b6['backApp'])(_0x4737cf), sleep(0xbb8), _0x3071e8(), !![];
        else {
          if ((0x0, _0x5054b6["textClick"])(/.*点击商品.*/)) return (0x0, _0x5054b6['dlog'])("匹配到广告12-3"), _0x3071e8(), !![];
        }
      }
    }
  }

  function _0x5b273(_0x48fa83) {
    var _0x58c86c = _0x163380;
    if (_0x48fa83["includes"]('com.zhangyue')) return textMatches(/\d+秒后可领取奖励.*/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告13-1"), _0x26d6af(/\d+秒后可领取奖励.*/), (0x0, _0x5054b6["textClick"])(/跳过/), !![]) : ((0x0, _0x5054b6['dlog'])("匹配到广告13-2"), sleep(0x7530), _0x8fa002 = className('android.widget.TextView')["clickable"]()["text"]('')['findOnce'](), (0x0, _0x5054b6['cClick'])(_0x8fa002, !![]), (0x0, _0x5054b6['textClick'])(/关闭|跳过/), (0x0, _0x5054b6["textClick"])(/残忍离开/), (0x0, _0x5054b6["textClick"])(/是/), !![]);
  }

  function _0x4ebf59(_0x1a012d, _0x56b57e) {
    var _0x4cf762 = _0x163380;
    if (_0x1a012d['includes']("com.taobao.browser")) {
      if (textMatches(/\d+秒/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告14-1'), _0x5df582(/\d+秒/), (0x0, _0x5054b6["backApp"])(_0x56b57e), sleep(0x1388), !![];
    }
  }

  function _0x4edde7(_0x4cdfa4, _0x4bd9fe) {
    var _0x4c70ad = _0x163380;
    if (_0x4cdfa4["includes"]("com.sigmob.sdk.base")) {
      if (textMatches(/\d+s后获取奖励/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])("匹配到广告15-1"), _0x26d6af(/\d+s后获取奖励/), (0x0, _0x5054b6["textClick"])(/跳过/), (0x0, _0x5054b6["backApp"])(_0x4bd9fe), _0x8fa002 = className("android.widget.TextView")['clickable']()["depth"](0x1)["text"]('')["findOnce"](), (0x0, _0x5054b6['dlog'])(_0x8fa002), !(0x0, _0x5054b6["cClick"])(_0x8fa002) ? _0x3071e8() : (_0x8fa002 = className("android.widget.TextView")["clickable"]()["depth"](0xc)['text']('')['findOnce'](), (0x0, _0x5054b6['dlog'])(_0x8fa002), !(0x0, _0x5054b6["cClick"])(_0x8fa002) ? _0x3071e8() : (_0x8fa002 = className("android.widget.TextView")["clickable"]()['depth'](0xd)['text']('')["findOnce"](), (0x0, _0x5054b6["dlog"])(_0x8fa002), !(0x0, _0x5054b6['cClick'])(_0x8fa002) && _0x3071e8())), _0x8fa002 = text('反馈')['findOnce'](), _0x8fa002 && _0x8fa002["parent"]() && (0x0, _0x5054b6["cClick"])(_0x8fa002["parent"]()["child"](_0x8fa002["indexInParent"]() + 0x1)), !![];
      else {
        if (textMatches(/浏览\d+秒领取奖励/)['findOnce']()) {
          (0x0, _0x5054b6["dlog"])('匹配到广告15-2');
          var _0x2dbc47 = (0x0, _0x3f790d["getObjectNumber"])(/浏览\d+秒领取奖励/);
          return (0x0, _0x5054b6["textClick"])(/立即前往|点击领取奖励/), _0x2dbc47 ? sleep(_0x2dbc47 * 0x3e8 + 0x1388) : sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x4bd9fe), (0x0, _0x5054b6["textClick"])(/跳过/), (0x0, _0x5054b6["idClick"])("close_btn"), (0x0, _0x3ad07e['OCRClickSimilarImageTop'])([_0x2986c0["CLOSE1"], _0x2986c0["CLOSE2"]], 0.7), !![];
        } else {
          (0x0, _0x5054b6["dlog"])("匹配到广告15-3"), (0x0, _0x5054b6["backApp"])(_0x4bd9fe);
          var _0x1d4b20 = (0x0, _0x3ad07e["OCRText"])(/\d+s后获取奖励/);
          _0xd210e8(_0x1d4b20), (0x0, _0x5054b6["textClick"])(/跳过/);
          (0x0, _0x5054b6['textClick'])(/继续观看/) && sleep(0x2710);
          (0x0, _0x5054b6['textClick'])(/点击领取奖励|立即领取奖励/), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["backApp"])(_0x4bd9fe), (0x0, _0x301a39['HBack'])();
          if ((0x0, _0x3ad07e["OCRText"])(/滑动跳转/)) {
            _0x8fa002 = className("android.widget.TextView")["depth"](0xb)["indexInParent"](0x0)["findOnce"](), (0x0, _0x5054b6["pClick"])(_0x8fa002);
            var _0x1d4b20 = (0x0, _0x3ad07e['OCRText'])(/\d+s后获取奖励/);
            return _0xd210e8(_0x1d4b20), (0x0, _0x5054b6["textClick"])(/跳过/), (0x0, _0x5054b6["idClick"])("close_btn"), !![];
          }
          _0x8fa002 = className("android.widget.TextView")["clickable"]()["depth"](0xd)["indexInParent"](0x3)['findOnce'](), (0x0, _0x5054b6["dlog"])(_0x8fa002);
          if (!(0x0, _0x5054b6["cClick"])(_0x8fa002)) _0x3071e8();
          else {
            _0x8fa002 = textMatches(/跳过/)["findOnce"]();
            if (_0x8fa002 && _0x8fa002['parent']()) {
              if (_0x8fa002["indexInParent"]() < _0x8fa002['parent']()['childCount']() - 0x1) {
                var _0x18f825 = _0x8fa002["parent"]()["child"](_0x8fa002['indexInParent']() + 0x1);
                _0x18f825 && _0x18f825["clickable"]() && (0x0, _0x5054b6["cClick"])(_0x18f825);
              }
            }
          }
          return _0x3071e8(), (0x0, _0x5054b6["idClick"])('close'), (0x0, _0x3ad07e["OCRClickSimilarImageTop"])([_0x2986c0["CLOSE1"], _0x2986c0["CLOSE2"]], 0.7), _0x8fa002 = className("android.widget.TextView")["depth"](0xc)['clickable']()['findOnce'](), (0x0, _0x5054b6["cClick"])(_0x8fa002), !![];
        }
      }
    }
  }

  function _0xaebbc8(_0x3f3977) {
    var _0x29134c = _0x163380;
    _0x3f3977["includes"]("cn.vlion.ad") && (textMatches(/\d+s后可领取奖励/)["findOnce"]() && ((0x0, _0x5054b6["dlog"])("匹配到广告16-1"), _0x26d6af(/\d+s后可领取奖励/)));
  }
  var _0x2d29bb = /去提现|规则|反馈|历史|提现/;

  function _0x144c54(_0xc24bb3, _0x3867ef) {
    var _0x37fc97 = _0x163380,
      _0x1c2cd9 = -Infinity;
    _0x3867ef ? _0x1c2cd9 = _0x34063d['deviceHeight'] * _0x3867ef : _0x1c2cd9 = _0x34063d["deviceHeight"] / 0x2;
    _0xc24bb3 ? _0x8fa002 = className('android.widget.ImageView')["clickable"]()["find"]() : _0x8fa002 = className("android.widget.ImageView")["find"]();
    var _0x27a445 = -Infinity,
      _0x1e5a2c = null;
    for (var _0x17c2b2 = 0x0; _0x17c2b2 < _0x8fa002['length']; _0x17c2b2++) {
      var _0x3a2687 = _0x8fa002[_0x17c2b2];
      if (_0x3a2687["text"]() && _0x3a2687["text"]()["match"](_0x2d29bb)) continue;
      var _0x3f53a7 = _0x3a2687['bounds'](),
        _0x35ea1a = _0x3f53a7["centerY"](),
        _0x309db5 = _0x3f53a7["centerX"]();
      _0x35ea1a < _0x1c2cd9 && _0x35ea1a > 0x5 && _0x309db5 < _0x34063d['deviceWidth'] - 0x5 && _0x309db5 > _0x34063d['deviceWidth'] * 0x3 / 0x4 && (_0x309db5 > _0x27a445 && (_0x27a445 = _0x309db5, _0x1e5a2c = _0x3a2687));
    }
    if ((0x0, _0x5054b6["pClick"])(_0x1e5a2c)) return !![];
  }

  function _0x3095cc(_0x3833d9) {
    var _0x30e3da = _0x163380;
    _0x3833d9 ? _0x8fa002 = className("android.widget.ImageView")["clickable"]()["find"]() : _0x8fa002 = className("android.widget.ImageView")['find']();
    var _0x3f5652 = _0x34063d["deviceWidth"] - 0x64,
      _0x4a5c84 = _0x34063d["deviceHeight"] - 0x64,
      _0x546d2a = null;
    for (var _0x35888f = 0x0; _0x35888f < _0x8fa002["length"]; _0x35888f++) {
      var _0x4f6737 = _0x8fa002[_0x35888f];
      if (_0x4f6737['text']() && _0x4f6737["text"]()["match"](_0x2d29bb)) continue;
      var _0x33915b = _0x4f6737["bounds"](),
        _0x5f449f = _0x33915b["centerY"](),
        _0xf9a646 = _0x33915b["centerX"]();
      _0x5f449f > _0x4a5c84 && _0xf9a646 > _0x3f5652 && (_0x546d2a = _0x4f6737);
    }
    if ((0x0, _0x5054b6["pClick"])(_0x546d2a)) return !![];
  }

  function _0x2ac1fb(_0x42b24f, _0x479e8c) {
    var _0x549381 = _0x163380;
    if (_0x42b24f['includes']('com.firefly.yhcadsdk')) {
      if (textMatches(/\d+秒后获得奖励/)["findOnce"]()) return (0x0, _0x5054b6['dlog'])("匹配到广告17-1"), _0x26d6af(/\d+秒后获得奖励/), back(), !![];
    }
  }

  function _0x3e9008(_0x4cdb12, _0x130478) {
    var _0x601843 = _0x163380;
    if (_0x4cdb12['includes']('com.anythink.basead')) return textMatches(/\d+|剩余.*s/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告18-1"), _0x26d6af(/\d+|剩余.*s/), sleep(0x1388), (0x0, _0x3ad07e['OCRClickSimilarImageTop'])([_0x2986c0["CLOSE1"], _0x2986c0['CLOSE2']], 0.7), sleep(0xbb8), (0x0, _0x5054b6["backApp"])(_0x130478), (0x0, _0x301a39["HBack"])(), _0x144c54(), !![]) : ((0x0, _0x5054b6["dlog"])("匹配到广告18-2"), sleep(0x7530), (0x0, _0x3ad07e["OCRClickSimilarImageTop"])([_0x2986c0["CLOSE1"], _0x2986c0["CLOSE2"]], 0.7), sleep(0xbb8), (0x0, _0x5054b6["backApp"])(_0x130478), (0x0, _0x301a39["HBack"])(), _0x144c54(), !![]);
  }

  function _0x35971a(_0xb56572, _0x375f55) {
    var _0x4936f5 = _0x163380;
    if (_0xb56572["includes"]("com.maplehaze.adsdk")) return textMatches(/\d+S后可领取奖励/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告19-1"), _0x26d6af(/\d+S后可领取奖励/), sleep(0x1388), (0x0, _0x3ad07e["OCRClickSimilarImageTop"])([_0x2986c0['CLOSE1'], _0x2986c0["CLOSE2"]], 0.7) && ((0x0, _0x5054b6["jumpApp"])(), sleep(0xbb8)), (0x0, _0x5054b6["idClick"])("close"), back(), sleep(0x7d0), back(), (0x0, _0x5054b6['backApp'])(_0x375f55), (0x0, _0x3ad07e["OCRClickSimilarImageTop"])([_0x2986c0['CLOSE1'], _0x2986c0["CLOSE2"]], 0.7) && sleep(0xbb8), (0x0, _0x5054b6["idClick"])("mh_sdk_reward_end_close"), (0x0, _0x5054b6["idClick"])("sdk_reward_close"), !![]) : ((0x0, _0x5054b6["dlog"])('匹配到广告19-2'), sleep(0x7530), (0x0, _0x3ad07e['OCRClickSimilarImageTop'])([_0x2986c0['CLOSE1'], _0x2986c0["CLOSE2"]], 0.7) && ((0x0, _0x5054b6['jumpApp'])(), sleep(0xbb8)), (0x0, _0x5054b6["idClick"])("close"), (0x0, _0x5054b6["backApp"])(_0x375f55), (0x0, _0x3ad07e["OCRClickSimilarImageTop"])([_0x2986c0["CLOSE1"], _0x2986c0["CLOSE2"]], 0.7) && sleep(0xbb8), (0x0, _0x5054b6["idClick"])("mh_sdk_reward_end_close"), (0x0, _0x5054b6["idClick"])("sdk_reward_close"), !![]);
  }

  function _0x21c13c(_0x70211e, _0xa275ec) {
    var _0x1b7d5b = _0x163380;
    if (_0x70211e["includes"]("com.vivo.mobilead")) return textMatches(/奖励发放还有\d+秒/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告20-1"), _0x26d6af(/奖励发放还有\d+秒/), (0x0, _0x5054b6["textClick"])(/关闭/), !![]) : (sleep(0x3a98), (0x0, _0x5054b6["textClick"])(/关闭/), !![]);
  }

  function _0x4f51a6(_0x3c39bd, _0x3d83c9) {
    var _0x221078 = _0x163380;
    if (_0x3c39bd["includes"]("com.qimao.ad")) {
      if (textMatches(/奖励将于\d+秒后发放|点击广告提前领取奖励\d+秒/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告21-1'), _0x26d6af(/奖励将于\d+秒后发放|点击广告提前领取奖励\d+秒/), _0x3071e8(), !![];
      else return (0x0, _0x5054b6["textClick"])(/我要直接拿奖励/) ? ((0x0, _0x5054b6["dlog"])('匹配到广告21-2'), (0x0, _0x5054b6["jumpApp"])(), sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x3d83c9), _0x3071e8(), !![]) : ((0x0, _0x5054b6["dlog"])('匹配到广告21-3'), sleep(0x3a98), !![]);
    }
  }

  function _0x389435(_0x33be13, _0x12ef45) {
    var _0x2bb406 = _0x163380;
    if (_0x33be13['includes']("com.smartdigimkt.sdk")) return textMatches(/剩余.*s/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告22-1"), _0x26d6af(/剩余.*s/), _0x3071e8(), !![]) : (sleep(0x3a98), !![]);
  }

  function _0x27b17f(_0x5a5a28, _0x5b790f) {
    var _0x1ee24d = _0x163380;
    if (_0x5a5a28["includes"]("com.octopus.ad")) return textMatches(/奖励将于.*秒后发放/)["findOnce"]() ? ((0x0, _0x5054b6['dlog'])("匹配到广告23-1"), _0x26d6af(/奖励将于.*秒后发放/), (0x0, _0x5054b6["idClick"])("ad_close"), _0x144c54(!![]), !![]) : (sleep(0x3a98), !![]);
  }

  function _0x69f9(_0x4647b2, _0x505b4b) {
    var _0x2ede10 = _0x163380;
    if (_0x4647b2['includes']("com.meishu.sdk")) return (0x0, _0x5054b6["dlog"])("匹配到广告24-1"), sleep(0x4e20), (0x0, _0x5054b6["idClick"])("ms_reward_close_button"), !![];
  }

  function _0xd82bac(_0x448903, _0x47537d) {
    var _0x1486e7 = _0x163380;
    if (_0x448903["includes"]("com.mcto.sspsdk.ssp.activity.QyTrueViewActivity")) {
      if (textMatches(/\d+秒后可领取奖励/)["findOnce"]())(0x0, _0x5054b6["dlog"])("匹配到广告25-1"), _0x26d6af(/\d+秒后可领取奖励/), (0x0, _0x5054b6['textClick'])(/关闭/);
      else {
        if (textMatches(/去体验\d+秒后.*/)["findOnce"]()) {
          (0x0, _0x5054b6["dlog"])("匹配到广告25-2");
          var _0x7d0840 = textMatches(/提前\d+秒拿奖励/)['findOnce']();
          if ((0x0, _0x5054b6["cClick"])(_0x7d0840)) {
            var _0x473435 = (0x0, _0x3f790d["getTextNumber"])(_0x7d0840["text"]());
            _0x473435 && sleep(_0x473435 * 0x3e8);
          }(0x0, _0x5054b6["backApp"])(_0x47537d), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClick"])(/关闭/);
        } else(0x0, _0x5054b6["dlog"])("匹配到广告25-3"), sleep(0x3a98), (0x0, _0x5054b6['textClick'])(/关闭/);
      }
      return !![];
    }
  }

  function _0x262163(_0x2e45a0, _0x23d38f) {
    var _0x525528 = _0x163380;
    if (_0x2e45a0["includes"]("com.link.ida.sdk") || _0x2e45a0["includes"]("com.zm.adxsdk.core")) return textMatches(/\d+s/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告26-1"), _0x26d6af(/\d+s/), textMatches(/打开应用浏览/)["findOnce"]() && ((0x0, _0x5054b6["textClick"])(/立即打开/), sleep(0x1388), (0x0, _0x5054b6['backApp'])(_0x23d38f)), (0x0, _0x5054b6["textClick"])(/跳过/), (0x0, _0x5054b6["textClick"])(/关闭/), (0x0, _0x5054b6["textClick"])(/放弃更多奖励|.*关闭页面/), !![]) : ((0x0, _0x5054b6["dlog"])("匹配到广告26-2"), sleep(0x3a98), (0x0, _0x5054b6["textClick"])(/跳过/), (0x0, _0x5054b6['textClick'])(/关闭/), (0x0, _0x5054b6["textClick"])(/放弃更多奖励|.*关闭页面/), !![]);
  }

  function _0x55d7a5(_0x3e4891, _0x29ce9d) {
    var _0x2e2bcc = _0x163380;
    if (_0x3e4891['includes']("com.wgkj.ad") || _0x3e4891['includes']('cn.youth.news')) {
      if ((0x0, _0x5054b6['textClick'])(/我要免广告/))(0x0, _0x5054b6["dlog"])("匹配到广告27-1"), (0x0, _0x5054b6["textClick"])(/立即下载/), (0x0, _0x5054b6["textClick"])(/安装.*/), (0x0, _0x5054b6["backApp"])(_0x29ce9d), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClick"])(/跳过/);
      else(0x0, _0x5054b6["textClick"])(/我要加速/) && (sleep(0x1388), (0x0, _0x5054b6["backApp"])(_0x29ce9d), (0x0, _0x301a39["HBack"])(), (0x0, _0x5054b6["textClick"])(/跳过/));
    }
  }

  function _0x33f4bc(_0x426866, _0x40f9b8) {
    var _0x3d11e6 = _0x163380;
    if (_0x426866["includes"]("com.wangmai")) {
      if ((0x0, _0x5054b6["textClick"])(/我要直接拿奖励/)) return sleep(0x3a98), (0x0, _0x5054b6['backApp'])(_0x40f9b8), (0x0, _0x301a39["HBack"])(), !![];
      else sleep(0x3a98);
    }
  }

  function _0x5d7e7f(_0x2df1e2, _0x47f705) {
    var _0x24b405 = _0x163380;
    if (_0x2df1e2["includes"]('com.beizi.ad')) {
      if (textMatches(/观看\d+秒广告.*/)["findOnce"]()) return (0x0, _0x5054b6["dlog"])('匹配到广告29-1'), (0x0, _0x5054b6["textClick"])(/提前领奖/), sleep(0x2710), (0x0, _0x5054b6["backApp"])(_0x47f705), (0x0, _0x301a39['HBack'])(), (0x0, _0x5054b6["textClick"])(/关闭广告/), (0x0, _0x5054b6["textClick"])(/.*关闭/), !![];
      else sleep(0x3a98);
    }
  }

  function _0x29b8c2(_0x930d74, _0x2d547) {
    var _0x43345c = _0x163380;
    if (_0x930d74["includes"]("android.app.Dialog")) return (0x0, _0x5054b6['dlog'])("匹配到广告30-1"), (0x0, _0x5054b6["textClick"])(/继续看广告/), sleep(0x7530), (0x0, _0x5054b6["backApp"])(_0x2d547), _0x144c54(), (0x0, _0x5054b6["textClick"])(/关闭广告/), !![];
  }

  function _0x5ad5a7(_0x1441b4, _0x417f79) {
    var _0x106ba6 = _0x163380;
    if (_0x1441b4["includes"]("com.ptg.ptgapi")) return (0x0, _0x5054b6['dlog'])('匹配到广告31-1'), (0x0, _0x5054b6["textClick"])(/我要加速/), sleep(0x2710), (0x0, _0x5054b6['backApp'])(_0x417f79), _0x144c54(), !![];
  }

  function _0x54aabb(_0x2ad554, _0x59e546) {
    var _0xf91103 = _0x163380;
    if (_0x2ad554["includes"]('com.dianzhong.base')) return (0x0, _0x5054b6["dlog"])('匹配到广告32-1'), (0x0, _0x5054b6['idClick'])('jumpToAdBtn'), sleep(0x2710), (0x0, _0x5054b6['backApp'])(_0x59e546), _0x144c54(), !![];
  }

  function _0x52e6f5(_0x2ae9df, _0x4c8e4d) {
    var _0x450b6a = _0x163380;
    if (_0x2ae9df["includes"]("com.huawei.openalliance.ad")) return textMatches(/\d+秒.*后领取奖励/)["findOnce"]() ? ((0x0, _0x5054b6["dlog"])("匹配到广告33-1"), _0x26d6af(/\d+秒.*后领取奖励/), (0x0, _0x5054b6["idClick"])("reward_close_container"), !![]) : ((0x0, _0x5054b6["dlog"])("匹配到广告33-2"), sleep(0x4e20), (0x0, _0x5054b6["idClick"])('reward_close_container'), !![]);
  }

  function _0x1afff9(_0x2d155a, _0x26195e) {
    var _0x25c01d = _0x163380,
      _0x2bd079 = _0x26195e ? _0x34063d['deviceHeight'] * _0x26195e : _0x34063d["deviceHeight"] / 0x3,
      _0x134acf = _0x2d155a ? className("android.widget.ImageView")["clickable"]()["find"]() : className("android.widget.ImageView")["find"](),
      _0x1702ef = null,
      _0x383814 = Infinity,
      _0x1c4899 = Infinity;
    for (var _0x48d8f7 = 0x0; _0x48d8f7 < _0x134acf['length']; _0x48d8f7++) {
      var _0x589ce3 = _0x134acf[_0x48d8f7];
      if (_0x589ce3["text"]() && _0x589ce3["text"]()["match"](_0x2d29bb)) continue;
      var _0x464eea = _0x589ce3["bounds"](),
        _0x327438 = _0x464eea['centerY'](),
        _0x2b8a1d = _0x464eea["centerX"]();
      _0x327438 < _0x2bd079 && _0x327438 > 0x5 && _0x2b8a1d < _0x34063d["deviceWidth"] / 0x3 && _0x2b8a1d > 0x5 && ((_0x2b8a1d < _0x383814 || _0x2b8a1d === _0x383814 && _0x327438 < _0x1c4899) && (_0x383814 = _0x2b8a1d, _0x1c4899 = _0x327438, _0x1702ef = _0x589ce3));
    }
    if ((0x0, _0x5054b6["pClick"])(_0x1702ef)) return !![];
  }

  function _0x3071e8() {
    var _0x9892c2 = _0x163380;
    _0x8fa002 = clickable(!![])["find"]();
    var _0x23ac2a = -Infinity,
      _0x5765c5 = null;
    for (var _0x41a087 = 0x0; _0x41a087 < _0x8fa002['length']; _0x41a087++) {
      var _0x294129 = _0x8fa002[_0x41a087];
      if (_0x294129['text']() && _0x294129["text"]()["match"](_0x2d29bb)) continue;
      var _0x41a0e6 = _0x294129["bounds"](),
        _0x17d89b = _0x41a0e6['centerY'](),
        _0x37321d = _0x41a0e6["centerX"]();
      _0x17d89b < _0x34063d["deviceHeight"] / 0x3 && _0x17d89b > 0x5 && _0x37321d < _0x34063d["deviceWidth"] - 0x5 && _0x37321d > _0x34063d['deviceWidth'] * 0x3 / 0x4 && (_0x37321d > _0x23ac2a && (_0x23ac2a = _0x37321d, _0x5765c5 = _0x294129));
    }
    if ((0x0, _0x5054b6["cClick"])(_0x5765c5)) return !![];
  }

  function _0x57d876(_0x1cf830) {
    var _0x5eae86 = _0x163380,
      _0x21b628 = _0x1cf830 ? _0x34063d['deviceHeight'] * _0x1cf830 : _0x34063d["deviceHeight"] / 0x3,
      _0x2438e1 = clickable()["find"](),
      _0x19afbb = null,
      _0x306ba2 = Infinity,
      _0x1c2895 = Infinity;
    for (var _0x31b537 = 0x0; _0x31b537 < _0x2438e1['length']; _0x31b537++) {
      var _0x459f58 = _0x2438e1[_0x31b537];
      if (_0x459f58["text"]() && _0x459f58["text"]()['match'](_0x2d29bb)) continue;
      var _0x4820a3 = _0x459f58["bounds"](),
        _0x1d5758 = _0x4820a3["centerY"](),
        _0x3d3e0e = _0x4820a3['centerX']();
      _0x1d5758 < _0x21b628 && _0x1d5758 > 0x5 && _0x3d3e0e < _0x34063d["deviceWidth"] / 0x3 && _0x3d3e0e > 0x5 && ((_0x3d3e0e < _0x306ba2 || _0x3d3e0e === _0x306ba2 && _0x1d5758 < _0x1c2895) && (_0x306ba2 = _0x3d3e0e, _0x1c2895 = _0x1d5758, _0x19afbb = _0x459f58));
    }
    if ((0x0, _0x5054b6["pClick"])(_0x19afbb)) return !![];
  }
}