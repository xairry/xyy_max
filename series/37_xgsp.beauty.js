function(_0x5e3253, _0x2694d0, _0x37d057) {
  var _0x5b5838 = a1_0x4b7c;
  Object["defineProperty"](_0x2694d0, '__esModule', {
    'value': !![]
  }), _0x2694d0["xgsp"] = _0x29cc5a;
  var _0x354335 = _0x37d057(M02_app_registry),
    _0x4f302e = _0x37d057(M00_utils_ui_helpers),
    _0x542400 = _0x37d057(M07_ad_close),
    _0x59c099 = _0x37d057(M04_push_report),
    _0x3e2e6b = _0x37d057(M09_video_book_common),
    _0x2e5b2c = _0x37d057(M08_check_task),
    _0x43c2c8 = _0x37d057(M01_config_global),
    _0x4145ba = _0x37d057(M06_storage_card),
    _0x3d3657 = _0x37d057(M03_ocr_engine),
    _0x1bac1c = _0x37d057(M05_hid_control),
    _0x85c057 = _0x37d057(M10_activity_consts),
    _0x4cb124, _0x3039ab, _0xd66f5a = /每日任务|看广告赚金币.*|吃饭打卡赚金币|日常任务|金币收益|现金收益|开宝箱得金币|逛街赚金币|看直播赚金币|赚钱任务/,
    _0x2d70f8 = {
      'xgsp_qiandao': _0x49f1b5,
      'xgsp_kaibaoxiang': _0x1ff68b,
      'xgsp_kanguanggao': _0x27d875,
      'xgsp_guangjie': _0x1c52be,
      'xgsp_lingfanbu': _0x3263de,
      'xgsp_yuyue': _0x222fc1,
      'xgsp_kanshipin': _0x3b8a52
    };

  function _0x29cc5a() {
    var _0x578803 = _0x5b5838;
    try {
      _0x3039ab = _0x354335["xgspapp"], _0x5e6069(), (0x0, _0x4f302e["execFuncs"])(_0x2d70f8, _0x43c2c8["xgsp_rw_list"]), _0x157696(), _0x1ffef0();
    } catch (_0x4e7e98) {
      (0x0, _0x4f302e['handleAppError'])(_0x4e7e98);
    }
  }

  function _0x5e6069() {
    var _0x19f6aa = _0x5b5838;
    _0x241e47(), !_0x43c2c8["hidMode"] && (0x0, _0x4f302e['descClick'])(/关闭/), (0x0, _0x4f302e["execFirstRw"])(_0x3039ab, _0x41d5b3, function() {
      _0x49f1b5(!![]);
    });
  }

  function _0x241e47() {
    (0x0, _0x1bac1c['HBack'])();
  }

  function _0x1ffef0() {
    var _0x517ffc = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e["hlog"])("计算收益"), (0x0, _0x4f302e["scroll_down_quick_cnt"])(0x5);
    var _0x5db02f = 0x0,
      _0xbc93d0 = 0x0,
      _0x4fa9f5 = (0x0, _0x3d3657["OCRResult"])(/现金收益/, !![]),
      _0x4b2ea8 = (0x0, _0x3d3657["OCRFindNextByResult"])(_0x4fa9f5, /现金收益/, /\d+/);
    _0x4b2ea8 && (_0x5db02f = (0x0, _0x2e5b2c["getTextNumber"])(_0x4b2ea8["text"]));
    var _0x58bab8 = (0x0, _0x3d3657["OCRFindNextByResult"])(_0x4fa9f5, /现金收益/, /\d+\.\d+/);
    _0x58bab8 && (_0xbc93d0 = (0x0, _0x2e5b2c["getTextFloat"])(_0x58bab8["text"]));
    var _0x58bab8 = (0x0, _0x4f302e["dxClickGold"])(function() {
      if ((0x0, _0x3d3657['OCRMatchClick'])(_0x4fa9f5, /去提现/)) return !![];
    }, _0x3039ab, _0xbc93d0);
    _0x58bab8 && ((0x0, _0x4f302e["hlog"])('提现成功'), (0x0, _0x4145ba['setTiXian'])(_0x3039ab, _0x58bab8), _0xbc93d0 = _0xbc93d0 - _0x58bab8), (0x0, _0x59c099['setGold'])(_0x354335['xgspapp'], parseInt(_0x5db02f), parseFloat(_0xbc93d0));
  }

  function _0x2b475a() {
    var _0x395f14 = _0x5b5838;
    return (0x0, _0x542400["dx_ok"])(_0x354335['xgspapp'], _0xd66f5a);
  }

  function _0x41d5b3(_0x1e9a62) {
    var _0x2df8de = _0x5b5838;
    sleep(0x1388), _0x4cb124 = (0x0, _0x3d3657["OCRText"])(_0xd66f5a);
    if (_0x4cb124) return (0x0, _0x4f302e["hlog"])("继续执行下一个任务"), !![];
    if (_0x2cbf1(M02_app_registry)) {
      _0x4cb124 = (0x0, _0x3d3657["OCRText"])(_0xd66f5a);
      if (_0x4cb124) return (0x0, _0x4f302e['hlog'])("进入任务页,任务识别中"), !![];
    }!_0x1e9a62 && (0x0, _0x4f302e["findRw"])(_0x41d5b3, _0x241e47, _0x3039ab);
  }

  function _0x2cbf1(_0x23682f) {
    var _0x177c5b = _0x5b5838;
    sleep(0x1388);
    if (_0x43c2c8['hidMode']) {
      if ((0x0, _0x3d3657["OCRClick"])(/^赚钱$|^贝兼钱$/)) return !![];
      else {
        if ((0x0, _0x3d3657["OCRClickSimilarImageTop"])(_0x85c057["XGSP_HOME"], 0.6)) return !![];
        else {
          if ((0x0, _0x4f302e["textClick"])(/我的/) && (0x0, _0x4f302e["textClick"])(/看视频领现金|去赚现金|点我领钱|点我赚钱/)) return !![];
          else {
            if ((0x0, _0x3d3657['OCRClickMenu'])(_0x23682f, /^首页$/, /^放映厅$/, /^(赚钱|贝兼钱)$/, /^商城$/, /^我的$/)) return !![];
          }
        }
      }
    } else {
      if (_0x23682f == 0x0) {
        if ((0x0, _0x4f302e['textClick'])(/首页/) || (0x0, _0x4f302e["descClick"])(/首页 标签/)) return !![];
      }
      if (_0x23682f == 0x2) {
        if ((0x0, _0x3d3657["OCRClick"])(/^赚钱$|^贝兼钱$/)) return !![];
        else {
          if ((0x0, _0x4f302e['textClick'])(/我的/) || (0x0, _0x4f302e["descClick"])(/我的 标签/)) {
            if ((0x0, _0x4f302e["textClick"])(/看视频领现金|去赚现金|点我领钱|点我赚钱|赚现金/)) return !![];
          }
        }
      }
    }
    return ![];
  }

  function _0x49f1b5(_0x41497a) {
    var _0x42b776 = _0x5b5838;
    if (!_0x41497a) {
      _0x41d5b3(), (0x0, _0x4f302e["hlog"])("任务开始：签到领金币");
      var _0x8ab59d = (0x0, _0x3d3657["OCRResult"])(/^签到|^新人.*签到.*|^去签到/);
      if ((0x0, _0x3d3657["OCRMatch"])(_0x8ab59d, /已连签|明天继续签到/)) return (0x0, _0x59c099['setQiandaoStatus'])(_0x3039ab), !![];
      (0x0, _0x3d3657['OCRMatchClick'])(_0x8ab59d, /^签到|^新人签到.*|^去签到/);
    }(0x0, _0x3d3657['OCRClick'])(/^(立即|点我|评价并)签到.*/);
    if ((0x0, _0x3d3657["OCRClick"])(/看广告视频再.*|看视频签到.*|额外再领/)) return _0x2b475a(), (0x0, _0x59c099['setQiandaoStatus'])(_0x3039ab), !![];
    else(0x0, _0x1bac1c["HBack"])();
  }

  function _0x1ff68b() {
    var _0x3c5765 = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e["hlog"])("任务开始：开宝箱"), sleep(0x1388);
    var _0x16935a = (0x0, _0x3d3657['doCaptureScreen'])();
    if ((0x0, _0x3d3657["OCRMatchClick"])(_0x16935a, /点我得金币|点击领金币|点我必得现金|开宝箱得金币|点击领\d+/) || (0x0, _0x3d3657["OCRMatchClick"])(_0x16935a, /^领\d+$/)) {
      var _0x16935a = (0x0, _0x3d3657['doCaptureScreen'])();
      if ((0x0, _0x3d3657["OCRMatchClick"])(_0x16935a, /看广告视频.*|.*看广告再赚.*/)) _0x2b475a();
      else {
        if ((0x0, _0x3d3657["OCRMatchClick"])(_0x16935a, /开心收下/)) {}
      }
    } else(0x0, _0x4f302e["hlog"])("开宝箱未到时间");
  }

  function _0x27d875() {
    var _0x13297b = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e['hlog'])("任务开始：看广告");
    var _0x2f327e = /赚(更多|海量).*金币.*|^看视频赚/,
      _0x260eb8 = (0x0, _0x3d3657["OCRResult"])(_0x2f327e);
    if ((0x0, _0x3d3657["OCRFindNextByResult"])(_0x260eb8, _0x2f327e, /明日再来/)) return !![];
    (0x0, _0x3d3657["OCRMatchClick"])(_0x260eb8, _0x2f327e) && _0x2b475a();
  }

  function _0x1c52be() {
    var _0x33d6fe = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e["hlog"])('任务开始：逛街');
    var _0x446949 = /逛街/,
      _0xb722c7 = (0x0, _0x3d3657["OCRResult"])(_0x446949);
    if (!_0xb722c7) {
      (0x0, _0x4f302e["hlog"])("没有逛街任务");
      return;
    }
    if ((0x0, _0x3d3657["OCRFindNextByResult"])(_0xb722c7, _0x446949, /.*后浏览.*/)) {
      (0x0, _0x4f302e["hlog"])("逛街未到时间");
      return;
    } else {
      if ((0x0, _0x3d3657['OCRFindNextByResult'])(_0xb722c7, _0x446949, /.*明日浏览.*/)) return !![];
      else {
        if ((0x0, _0x3d3657["OCRMatchClick"])(_0xb722c7, _0x446949)) {
          (0x0, _0x1bac1c["HFindClickXY"])(/立即使用|知道了|我知道了/, 0x2710), (0x0, _0x4f302e["textClickXY"])(/立即使用|知道了|我知道了/);
          if ((0x0, _0x1bac1c['HFind'])(/明日浏览可领取奖励/)) return _0x46499f(), !![];
          var _0x3a2617 = (0x0, _0x2e5b2c["getObjectNumber"])(/\d+秒/);
          _0x3a2617 ? (0x0, _0x542400['scroll_close'])(/\d+秒/) : ((0x0, _0x4f302e["scroll_up_quick"])(0x28), (0x0, _0x4f302e['scroll_down_quick'])(0x28), (0x0, _0x4f302e["scroll_up_quick"])(0x28));
          (0x0, _0x1bac1c['HFindClickXY'])(/继续观看/) && ((0x0, _0x4f302e["scroll_down_quick"])(0x5), (0x0, _0x4f302e["scroll_up_quick"])(0x5));
          var _0x461b40 = (0x0, _0x1bac1c["HFind"])(/发放失败/);
          return _0x46499f(), (0x0, _0x4f302e['textClickXY'])(/坚持退出|执意退出/), _0x461b40 && (0x0, _0x4f302e["hlog"])("逛街任务黑了,今日不做了"), _0x461b40;
        }
      }
    }
  }

  function _0x46499f() {
    var _0x34c7b0 = _0x5b5838;
    for (var _0x58bdc1 = 0x0; _0x58bdc1 < 0x5; _0x58bdc1++) {
      if ((0x0, _0x3d3657["OCRText"])(_0xd66f5a)) break;
      else(0x0, _0x1bac1c["HBack"])();
    }
  }

  function _0x3263de() {
    var _0x42a383 = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e["hlog"])('任务开始：领饭补');
    if ((0x0, _0x3d3657["OCRSwipeClick"])(/吃饭打卡赚金币.*/)) {
      (0x0, _0x4f302e["textClickXY"])(/开心收下/);
      for (var _0x2d1fe3 = 0x0; _0x2d1fe3 < 0x3; _0x2d1fe3++) {
        var _0x11362a = (0x0, _0x3d3657["doCaptureScreen"])();
        if ((0x0, _0x3d3657["OCRMatchClick"])(_0x11362a, /领取.*补贴.*金币/)) {
          if ((0x0, _0x4f302e["textClickXY"])(/看视频再领.*/)) {
            _0x2b475a(), (0x0, _0x1bac1c["HBack"])();
            continue;
          }(0x0, _0x4f302e["textClickXY"])(/开心收下/);
        } else {
          if ((0x0, _0x3d3657["OCRMatchClick"])(_0x11362a, /^看广告/)) {
            _0x2b475a(), (0x0, _0x1bac1c["HBack"])();
            continue;
          } else {
            if ((0x0, _0x3d3657["OCRMatchClick"])(_0x11362a, /点击补卡/)) {
              if ((0x0, _0x4f302e["textClickXY"])(/去补卡/)) {
                _0x2b475a(), (0x0, _0x1bac1c["HBack"])();
                continue;
              }
            } else {
              if ((0x0, _0x3d3657["OCRMatchClick"])(_0x11362a, /去补卡/)) {
                _0x2b475a(), (0x0, _0x1bac1c['HBack'])();
                continue;
              }
            }
          }
        }
      }(0x0, _0x1bac1c["HBack"])();
    }
  }

  function _0x222fc1() {
    var _0x11eea7 = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e["hlog"])('预约领金币');
    var _0x3728f1 = (0x0, _0x3d3657["OCRResult"])(/^预约领金币|^一键领金币|后可一键领取$/);
    if ((0x0, _0x3d3657["OCRMatch"])(_0x3728f1, /后可一键领取$/)) return;
    else {
      if ((0x0, _0x3d3657['OCRMatchClick'])(_0x3728f1, /^预约领金币|^一键领金币/)) {
        if ((0x0, _0x3d3657["OCRClick"])(/立即预约/)) return (0x0, _0x4f302e["textClickXY"])(/不用提醒我也能来/), (0x0, _0x1bac1c["HBack"])(), !![];
        else {
          if ((0x0, _0x3d3657["OCRClick"])(/一键领金币|一键领取/)) {
            (0x0, _0x4f302e["textClickXY"])(/开心收下/), (0x0, _0x1bac1c["HBack"])();
            (0x0, _0x3d3657["OCRClick"])(/^预约领金币/) && ((0x0, _0x3d3657["OCRClick"])(/立即预约/) && ((0x0, _0x4f302e["textClickXY"])(/不用提醒我也能来/), (0x0, _0x3d3657["OCRClick"])(/^领取奖励$/) && _0x2b475a(), (0x0, _0x1bac1c["HBack"])(), _0x46499f()));
            return;
          }
        }
      }
    }
  }

  function _0x3b8a52() {
    var _0xa77480 = _0x5b5838;
    _0x41d5b3(), (0x0, _0x4f302e['hlog'])("任务开始：刷视频"), (0x0, _0x1bac1c["HBack"])(), _0x2cbf1(M00_utils_ui_helpers) && ((0x0, _0x3e2e6b['xs_kanshipin'])(_0x43c2c8["xgsp_kanshiping_min"], function() {
      while (!![]) {
        sleep(0x1 * 0x3c * 0x3e8), (0x0, _0x1bac1c['HBack'])();
      }
    }), _0x2cbf1(M02_app_registry)), _0x157696();
  }

  function _0x157696() {
    var _0x599ed3 = _0x5b5838;
    _0x41d5b3();
    var _0x17cccf = (0x0, _0x3d3657["doCaptureScreen"])();
    if ((0x0, _0x3d3657['OCRMatchClick'])(_0x17cccf, /.*看广告再赚.*/)) _0x2b475a();
    else {
      if ((0x0, _0x3d3657["OCRMatchClick"])(_0x17cccf, /开心收下/)) {}
    }
    var _0x17cccf = (0x0, _0x3d3657["OCRResult"])(/看视频存金币|新人看视频/);
    for (var _0x4eec65 = 0x0; _0x4eec65 < 0x3; _0x4eec65++) {
      if ((0x0, _0x3d3657["OCRClickNextByResult"])(_0x17cccf, /看视频存金币|新人看视频/, /待领取/)) {
        var _0x17cccf = (0x0, _0x3d3657["doCaptureScreen"])();
        if ((0x0, _0x3d3657["OCRMatchClick"])(_0x17cccf, /.*看广告再赚.*/)) _0x2b475a();
        else {
          if ((0x0, _0x3d3657["OCRMatchClick"])(_0x17cccf, /开心收下/)) {}
        }
      } else break;
    }
  }
}