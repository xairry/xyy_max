function(_0x2f2ed9, _0x18d930, _0x226f82) {
  var _0x5bc9ab = a1_0x4b7c;
  Object["defineProperty"](_0x18d930, "__esModule", {
    'value': !![]
  }), _0x18d930["jrtt"] = _0x33215f, _0x18d930["ttjs"] = _0x4eb717;
  var _0x3a1147 = _0x226f82(M02_app_registry),
    _0x388a6d = _0x226f82(M00_utils_ui_helpers),
    _0xdae489 = _0x226f82(M07_ad_close),
    _0x4292da = _0x226f82(M12_date_utils),
    _0x3ca285 = _0x226f82(M04_push_report),
    _0x3c2e03 = _0x226f82(M08_check_task),
    _0x45d97c = _0x226f82(M09_video_book_common),
    _0x175021 = _0x226f82(M01_config_global),
    _0x3bfb91 = _0x226f82(M03_ocr_engine),
    _0x459f63 = _0x226f82(M06_storage_card),
    _0x295792 = _0x226f82(M05_hid_control),
    _0x32c4ca = _0x226f82(M10_activity_consts),
    _0x31084d, _0x4485fc, _0x3f1574 = /日常任务|做任务领金币|专属福利|领取抽卡次数|我的金币|我的现金|现金收益|7天签到必得|开宝箱得金币|看广告赚金币|看文章或视频赚金币|阅读内容或看视频赚金币|今日签到可领.*|额外再领|直接领取|立即签到|展示在首页|任务中心/,
    _0x4a5da3 = {
      'ttjs_qiandao': _0x2bbfbf,
      'ttjs_kaibaoxiang': _0xb9246d,
      'ttjs_kanguanggao': _0x45e82a,
      'ttjs_lingfanbu': _0x54ff5b,
      'ttjs_shuijiao': _0x24dfc5,
      'ttjs_yuyue': _0x35d395,
      'ttjs_kanshipin': _0x4a2922
    },
    _0x5a6f26 = {
      'jrtt_qiandao': _0x2bbfbf,
      'jrtt_kaibaoxiang': _0xb9246d,
      'jrtt_kanguanggao': _0x45e82a,
      'jrtt_lingfanbu': _0x54ff5b,
      'jrtt_shuijiao': _0x24dfc5,
      'jrtt_yuyue': _0x35d395,
      'jrtt_kanshipin': _0x4a2922,
      'jrtt_xinren': _0x5d44ee
    };

  function _0x4eb717() {
    var _0xe0159f = _0x5bc9ab;
    try {
      _0x4485fc = _0x3a1147["ttjsapp"], _0x5e8424(), (0x0, _0x388a6d["execFuncs"])(_0x4a5da3, _0x175021['ttjs_rw_list']), _0x52c711(), _0x3bfa0f();
    } catch (_0x358bf0) {
      (0x0, _0x388a6d["handleAppError"])(_0x358bf0);
    }
  }

  function _0x33215f() {
    var _0x3e0643 = _0x5bc9ab;
    try {
      _0x4485fc = _0x3a1147["jrttapp"], _0x175021['jrtt_rw_list'] && _0x175021["jrtt_rw_list"]["push"]("jrtt_xinren"), _0x5e8424(), (0x0, _0x388a6d["execFuncs"])(_0x5a6f26, _0x175021['jrtt_rw_list']), _0x52c711(), _0x3bfa0f();
    } catch (_0x56f723) {
      (0x0, _0x388a6d["handleAppError"])(_0x56f723);
    }
  }

  function _0x5e8424() {
    _0x3c0a9c(), (0x0, _0x388a6d['execFirstRw'])(_0x4485fc, _0x5c58fa, function() {
      _0x2bbfbf(!![]);
    });
  }

  function _0x3c0a9c() {
    var _0x2aa21d = _0x5bc9ab;
    (0x0, _0x295792["HBack"])(), (0x0, _0x388a6d["textClickXY"])(/不再提示|3天内不再展示/), !_0x175021["hidMode"] && (0x0, _0x388a6d['descClickXY'])(/关闭/, !![]), _0x5dee14(M02_app_registry);
  }

  function _0x3bfa0f() {
    var _0x566f04 = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d["hlog"])('计算收益');
    var _0x41f414, _0xbdee88;
    (0x0, _0x388a6d['scroll_down_quick_cnt'])(0x5), sleep(0x7d0);
    var _0x167fff = (0x0, _0x3bfb91["doCaptureScreen"])();
    if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x167fff, /现金收益/)) {
      var _0x3cafff = (0x0, _0x3bfb91["doCaptureScreen"])(),
        _0x2c64c4 = (0x0, _0x3bfb91["OCRFindNextByResult"])(_0x3cafff, /^现金收益/, /\d+.\d+/);
      _0x2c64c4 && (_0xbdee88 = _0x2c64c4["text"]);
      if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x3cafff, /金币收益/)) {
        var _0x527d21 = (0x0, _0x3bfb91["doCaptureScreen"])(),
          _0x4d5bf9 = (0x0, _0x3bfb91["OCRFindNextByResult"])(_0x527d21, /^金币收益/, /\d+/);
        _0x4d5bf9 && (_0x41f414 = _0x4d5bf9["text"]);
      }
    }
    var _0x5ad1e2 = (0x0, _0x388a6d['dxClickGold'])(function() {
      return _0x167fff = (0x0, _0x3bfb91['doCaptureScreen'])(), (0x0, _0x3bfb91['OCRMatchClick'])(_0x167fff, /去提现/);
    }, _0x4485fc, _0xbdee88);
    _0x5ad1e2 && ((0x0, _0x388a6d['hlog'])('提现成功'), (0x0, _0x459f63["setTiXian"])(_0x4485fc, _0x5ad1e2), _0xbdee88 = _0xbdee88 - _0x5ad1e2), (0x0, _0x3ca285["setGold"])(_0x4485fc, parseInt(_0x41f414), parseFloat(_0xbdee88));
  }

  function _0x3c633f() {
    (0x0, _0xdae489['dx_ok'])(_0x4485fc, _0x3f1574);
  }

  function _0x5c58fa(_0x5ea70d) {
    var _0x17b47d = _0x5bc9ab;
    _0x5dee14(M02_app_registry);
    for (var _0x391fc4 = 0x0; _0x391fc4 < 0x3; _0x391fc4++) {
      if (_0x2b168e()) return (0x0, _0x388a6d['hlog'])("继续执行下一个任务"), !![];
      else(0x0, _0x388a6d["dlog"])('关闭弹窗');
    }
    if (_0x5dee14(M02_app_registry)) {
      sleep(0x1388), _0x31084d = (0x0, _0x3bfb91['OCRText'])(_0x3f1574);
      if (_0x31084d) return _0x2b168e(), (0x0, _0x388a6d["hlog"])('进入任务页,任务识别中'), !![];
    }!_0x5ea70d && (0x0, _0x388a6d["findRw"])(_0x5c58fa, _0x3c0a9c, _0x4485fc);
  }

  function _0x2b168e() {
    var _0x1d7c6b = _0x5bc9ab;
    (0x0, _0x388a6d["dlog"])("检测弹窗");
    var _0x1cc1e3 = (0x0, _0x3bfb91["doCaptureScreen"])();
    if (_0x1cc1e3) {
      if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x1cc1e3, /^收下红包.*去赚更多$|^逛街最多再领\d+金币$|^升级版本/))(0x0, _0x295792["HBack"])();
      else {
        if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x1cc1e3, /^看.*视频.*领.*金币$/)) _0x3c633f();
        else {
          if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x1cc1e3, /^(取消|\d+天内不再展示|开心收下|坚持退出)$/)) {} else {
            if ((0x0, _0x3bfb91["OCRMatch"])(_0x1cc1e3, /^邀请好友/))(0x0, _0x3bfb91["OCRClick"])(/去看看/) && (0x0, _0x295792['HBack'])();
            else {
              if ((0x0, _0x3bfb91['OCRMatch'])(_0x1cc1e3, /^预约奖励可开启|升级版本|^立即添加领金币$|每日答题赚金币/))(0x0, _0x295792["HBack"])();
              else {
                if ((0x0, _0x3bfb91["OCRMatch"])(_0x1cc1e3, /^(恭喜收到现金红包|关联抖音并领取|提醒我每日签到)$|^打开签到提醒|开启日历提醒/))(0x0, _0x3bfb91["OCRClickSimilarImageBottom"])([_0x32c4ca["TT_CLOSE"], _0x32c4ca["DX_CLOSE_X"], _0x32c4ca["CLOSE1"], _0x32c4ca['CLOSE3']], 0.3);
                else {
                  if ((0x0, _0x3bfb91["OCRMatch"])(_0x1cc1e3, _0x3f1574)) return !![];
                  else _0x5dee14(M02_app_registry);
                }
              }
            }
          }
        }
      }
    }
  }

  function _0x5dee14(_0x10c244) {
    var _0x206309 = _0x5bc9ab,
      _0x5baf7a = arguments["length"] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : !![];
    _0x5baf7a && sleep(0x1388);
    if (_0x175021['hidMode']) return (0x0, _0x3bfb91["OCRClickMenu"])(_0x10c244, /^(首页|头条)$/, /^(视频|发现)$/, /^(任务|赚钱)$/, null, /^(我的|我白)$/);
    else {
      _0x31084d = className('android.widget.TabWidget')["findOnce"]();
      if (_0x31084d) {
        for (var _0x186d91 = 0x0; _0x186d91 < _0x31084d["childCount"](); _0x186d91++) {
          var _0x4a27a6 = _0x31084d["child"](_0x186d91);
          if (_0x4a27a6 && _0x4a27a6['clickable']())
            for (var _0xafaa5b = 0x0; _0xafaa5b < _0x4a27a6["childCount"](); _0xafaa5b++) {
              var _0x3c4fa5 = _0x4a27a6["child"](_0xafaa5b);
              if (_0x10c244 == 0x0) {
                if (_0x3c4fa5 && _0x3c4fa5['text']() == '首页') return (0x0, _0x388a6d["cClick"])(_0x4a27a6);
              }
              if (_0x10c244 == 0x1) {
                if (_0x3c4fa5 && (_0x3c4fa5['text']() == '视频' || _0x3c4fa5['text']() == '发现')) return (0x0, _0x388a6d["cClick"])(_0x4a27a6);
              }
              if (_0x10c244 == 0x2) {
                if (_0x3c4fa5 && (_0x3c4fa5['text']() == '任务' || (0x0, _0x3c2e03['macthTimeStr'])(_0x3c4fa5['text']()))) return (0x0, _0x388a6d["cClick"])(_0x4a27a6);
              }
              if (_0x10c244 == 0x4) {
                if (_0x3c4fa5 && _0x3c4fa5["text"]() == '我的') return (0x0, _0x388a6d["cClick"])(_0x4a27a6);
              }
            }
        }
        if (_0x4485fc == _0x3a1147["ttjsapp"] && _0x10c244 == 0x2) {
          if (_0x31084d["childCount"]() > 0x3) return (0x0, _0x388a6d["cClick"])(_0x31084d["child"](0x2));
        }
        if (_0x10c244 == 0x2) return click(_0x175021["deviceWidth"] / 0x2, _0x175021["deviceHeight"] - 0x5a), sleep(0x1388), !![];
      }
    }
  }

  function _0x2bbfbf(_0x418a69) {
    var _0x54eafe = _0x5bc9ab,
      _0x54f10c;
    if (!_0x418a69) {
      _0x5c58fa(), (0x0, _0x388a6d['hlog'])('任务开始：签到领金币'), _0x54f10c = (0x0, _0x3bfb91["OCRResult"])(/^(?!.*(桌面|每天签到|做任务)).*签到/);
      if ((0x0, _0x3bfb91["OCRMatch"])(_0x54f10c, /明日签到|今日已签|明天免费再领.*元/)) return (0x0, _0x3ca285["setQiandaoStatus"])(_0x4485fc), !![];
      else {
        if ((0x0, _0x3bfb91['OCRMatchClick'])(_0x54f10c, /^(?!.*(桌面|每天签到|做任务)).*(^去签到)/)) {} else {
          if ((0x0, _0x3bfb91['OCRMatchClick'])(_0x54f10c, /^(?!.*(桌面|每天签到|做任务)).*(^签到)/)) {}
        }
      }
    }
    _0x54f10c = (0x0, _0x3bfb91["doCaptureScreen"])();
    (0x0, _0x3bfb91["OCRMatchClick"])(_0x54f10c, /立即签到/) ? _0x3c633f(): (0x0, _0x3bfb91["OCRMatchClick"])(_0x54f10c, /签到领金币/);
    (0x0, _0x3bfb91['OCRClick'])(/翻倍领取|额外再领|看视频领|看视频再|口.*领取/) && (_0x3c633f(), (0x0, _0x3bfb91["OCRClick"])(/好的/), (0x0, _0x459f63["finishRw"])(_0x4485fc, 'qiandao'));
    _0x5dee14(M02_app_registry), _0x54f10c = (0x0, _0x3bfb91["doCaptureScreen"])();
    if ((0x0, _0x3bfb91["OCRMatch"])(_0x54f10c, /7天签到.*/)) {
      (0x0, _0x295792['HSwipe'])(_0x175021["deviceWidth"] / 0x2, _0x175021["deviceHeight"] / 0x2, _0x175021['deviceWidth'] / 0x2, _0x175021["deviceHeight"] / 0x2 - 0x12c, _0x175021["hidMode"] ? random(0x2bc, 0x3e8) : 0x1f4), _0x54f10c = (0x0, _0x3bfb91['doCaptureScreen'])();
      if ((0x0, _0x3bfb91['OCRMatchClick'])(_0x54f10c, /^去领取$/)) {
        _0x54f10c = (0x0, _0x3bfb91["doCaptureScreen"])();
        if ((0x0, _0x3bfb91['OCRMatchClick'])(_0x54f10c, /签到最高领.*元/)) {} else {
          if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x54f10c, /签到领红包/)) {} else {
            if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x54f10c, /点击领取/)) {}
          }
        }
      } else {
        if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x54f10c, /^签到领红包$/)) {} else {
          if ((0x0, _0x3bfb91['OCRMatchClick'])(_0x54f10c, /^立即领取$/))(0x0, _0x3bfb91["OCRClick"])(/^签到领红包$/) && ((0x0, _0x3bfb91['OCRClick'])(/看视频.*得.*金币/) && _0x3c633f());
          else {
            if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x54f10c, /^点击领取$/))(0x0, _0x3bfb91["OCRClick"])(/点击领取|签到领红包/);
            else return;
          }
        }
      }
    }(0x0, _0x295792['HBack'])();
  }

  function _0xb9246d() {
    var _0x4e952c = _0x5bc9ab;
    _0x5c58fa(), sleep(0x1388), (0x0, _0x388a6d["hlog"])("任务开始：开宝箱");
    if ((0x0, _0x3bfb91['OCRClick'])(/开宝箱得金币|领取10000金币/)) {
      var _0x336dd9 = (0x0, _0x3bfb91["doCaptureScreen"])();
      if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x336dd9, /看视频领|看完视频立即领取|看视频领\d+金币|看.*视频再领.*/)) _0x3c633f();
      else {
        if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x336dd9, /开心收下/)) {}
      }
    } else {
      (0x0, _0x388a6d['hlog'])('开宝箱得金币未到时间');
      return;
    }
  }

  function _0x45e82a() {
    var _0x49fa4c = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d["hlog"])('任务开始：看广告');
    var _0x4fc10d = (0x0, _0x3bfb91["OCRResult"])(/看广告/, ![], _0x175021["deviceHeight"] - 0x32);
    if ((0x0, _0x3bfb91['OCRFindNextByResult'])(_0x4fc10d, /看广告/, /明日再来/)) return !![];
    (0x0, _0x3bfb91["OCRMatchClick"])(_0x4fc10d, /^(?!.*(吃饭)).*?看广告/) && (_0x3c633f(), _0x4485fc == _0x3a1147["ttjsapp"] && ((0x0, _0x3bfb91["OCRClick"])(/^领取$/) && ((0x0, _0x3bfb91["OCRClick"])(/继续看视频再领.*/) && _0x3c633f())));
  }

  function _0x54ff5b() {
    var _0x285eae = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d["hlog"])("任务开始：领饭补");
    var _0x478b20 = (0x0, _0x3bfb91["OCRResult"])(/吃饭/);
    if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x478b20, /^(?!.*(看广告)).*?吃饭/)) {
      sleep(0x1388);
      var _0x2126ae = (0x0, _0x3bfb91["doCaptureScreen"])();
      if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x2126ae, /看视频领.*|.*补贴\d+金币/)) {
        if ((0x0, _0x388a6d['textClickXY'])(/看视频再领.*/)) {
          _0x3c633f(), (0x0, _0x295792["HBack"])();
          return;
        } else {
          if ((0x0, _0x3bfb91['OCRMatchClick'])(_0x2126ae, /开心收下/)) {} else _0x3c633f();
        }(0x0, _0x295792["HBack"])();
      } else {
        (0x0, _0x388a6d["hlog"])("领取饭补未到时间"), (0x0, _0x295792["HBack"])();
        return;
      }
    }
  }

  function _0x4a2922() {
    var _0x45f0fb = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d["hlog"])("任务开始：刷视频看文章");
    var _0x3f4949 = /看头条赚|看文章.*视频|阅读内容.*看视频|看视频赚金币/,
      _0x205bcc = (0x0, _0x3bfb91['OCRResult'])(_0x3f4949);
    if ((0x0, _0x3bfb91["OCRClickNextByResult"])(_0x205bcc, _0x3f4949, /点击翻倍|去翻倍|翻倍领奖/)) {
      var _0x51b5af = (0x0, _0x3bfb91["doCaptureScreen"])();
      !(0x0, _0x3bfb91['OCRMatchClick'])(_0x51b5af, /不再提示/) && (0x0, _0x3bfb91["OCRMatchClick"])(_0x51b5af, /我知道了/);
    }
    var _0x2b61f5 = 0x0;
    if (_0x4485fc === _0x3a1147["ttjsapp"]) _0x2b61f5 = _0x175021["ttjs_kanshiping_min"];
    else _0x4485fc == _0x3a1147["jrttapp"] && (_0x2b61f5 = _0x175021["jrtt_kanshiping_min"]);
    _0x2b61f5 && (_0x5dee14(M01_config_global) && ((0x0, _0x45d97c["xs_kanshipin"])(_0x2b61f5), (0x0, _0x295792['HBack'])(), (0x0, _0x295792["HBack"])(), _0x5dee14(0x2, ![]), _0x27cc33()));
  }

  function _0x27cc33() {
    var _0x16b09e = _0x5bc9ab;
    (0x0, _0x388a6d["hlog"])("检测视频奖励是否可以领取");
    if (_0x5c58fa()) {
      (0x0, _0x3bfb91["OCRResult"])(/看头条赚|看文章.*视频|阅读内容.*看视频|看视频赚金币/), (0x0, _0x388a6d["scroll_up_once"])(0.8, 0.6);
      for (var _0x957e08 = 0x0; _0x957e08 < 0x5; _0x957e08++) {
        if ((0x0, _0x3bfb91["OCRClick"])(/点击领取|^(领取|开)$|^额外领|^待领取|^一键领取/, -0x28)) {
          var _0x111308 = (0x0, _0x3bfb91["doCaptureScreen"])();
          if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x111308, /开心收下/)) {} else(0x0, _0x3bfb91["OCRMatchClick"])(_0x111308, /看完视频再领.*|看完视频立即领取|看视频再赚.*/) && _0x3c633f();
        } else break;
      }
    }
  }

  function _0x24dfc5() {
    var _0x5ae18a = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d['hlog'])("任务开始：睡觉");
    if ((0x0, _0x3bfb91["OCRSwipeClick"])(/睡觉赚/)) {
      if ((0x0, _0x4292da['getCurrentDateHour'])() <= 0x2 || (0x0, _0x4292da["getCurrentDateHour"])() >= 0x14) {
        (0x0, _0x388a6d["textClickXY"])(/我要睡了/), (0x0, _0x295792["HBack"])();
        return;
      }(0x0, _0x4292da["getCurrentDateHour"])() >= 0x6 && (0x0, _0x4292da['getCurrentDateHour'])() <= 0x14 && ((0x0, _0x388a6d["textClickXY"])(/我睡醒了/), (0x0, _0x388a6d["textClickXY"])(/领取\d+金币/), (0x0, _0x388a6d["textClickXY"])(/看视频.*/) && _0x3c633f()), (0x0, _0x295792['HBack'])();
    }
  }

  function _0x35d395() {
    var _0x391c20 = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d["hlog"])('任务开始：预约');
    var _0x17df74 = (0x0, _0x3bfb91["OCRResult"])(/预约领金币|已预约|领预约金币/);
    if ((0x0, _0x3bfb91["OCRMatch"])(_0x17df74, /已预约/)) return;
    (0x0, _0x3bfb91["OCRMatchClick"])(_0x17df74, /领预约金币/) && (_0x17df74 = (0x0, _0x3bfb91["doCaptureScreen"])(), (0x0, _0x3bfb91['OCRMatchClick'])(_0x17df74, /看完视频再领.*|看完视频立即领取|看视频再.*/) && _0x3c633f(), _0x17df74 = (0x0, _0x3bfb91['doCaptureScreen'])());
    if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x17df74, /预约领金币/)) {
      var _0x17df74 = (0x0, _0x3bfb91["doCaptureScreen"])();
      (0x0, _0x3bfb91["OCRMatchClick"])(_0x17df74, /立即预约领取/) && ((0x0, _0x295792["HBack"])(), _0x17df74 = (0x0, _0x3bfb91['doCaptureScreen'])(), (0x0, _0x3bfb91["OCRMatchClick"])(_0x17df74, /领取奖励/) && _0x3c633f(), (0x0, _0x295792["HBack"])());
    }(0x0, _0x295792["HBack"])();
  }

  function _0x52c711() {
    var _0x1a2e3b = _0x5bc9ab;
    _0x5c58fa();
    for (var _0x1e2de0 = 0x0; _0x1e2de0 < 0x3; _0x1e2de0++) {
      if ((0x0, _0x3bfb91["OCRClick"])(/^(立即领|送福利|点击领取|惊喜奖励)$/)) {
        var _0x2bce72 = (0x0, _0x3bfb91["doCaptureScreen"])();
        if (_0x2bce72) {
          if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x2bce72, /看完视频再领.*|看完视频立即领取|看视频再.*/)) _0x3c633f();
          else {
            if ((0x0, _0x3bfb91["OCRMatchClick"])(_0x2bce72, /开心收下/)) continue;
            else(0x0, _0x3bfb91['OCRMatch'])(_0x2bce72, /开始抽奖/) && ((0x0, _0x3bfb91["OCRClick"])(/翻/) && (0x0, _0x3bfb91["OCRClick"])(/开心收下/));
          }
        }
      } else break;
    }
    _0x4485fc == _0x3a1147['ttjsapp'] && ((0x0, _0x3bfb91["OCRText"])(/每日挑战/) && ((0x0, _0x3bfb91['OCRClick'])(/^领取$/), (0x0, _0x3bfb91["OCRClick"])(/^00金币$/) && ((0x0, _0x3bfb91["OCRClick"])(/看完视频再领.*|看完视频立即领取|看视频再.*/) && _0x3c633f()))), _0x27cc33();
  }

  function _0x5d44ee() {
    var _0x49f208 = _0x5bc9ab;
    _0x5c58fa(), (0x0, _0x388a6d["hlog"])("任务开始：新人任务");
    if ((0x0, _0x3bfb91["OCRText"])(/新人福利|限时好礼/)) {
      (0x0, _0x388a6d["scroll_up_once"])(0.8, 0.6);
      if ((0x0, _0x3bfb91["OCRClick"])(/^(去看看|继续看)$/)) {
        (0x0, _0x3bfb91['OCRClick'])(/次播放/), (0x0, _0x45d97c["xs_kanshipin"])(0x7), (0x0, _0x295792["HBack"])();
        if (_0x5dee14(M02_app_registry)) return (0x0, _0x3bfb91["OCRClick"])(/开心收下/), !![];
      }
    } else return !![];
  }
}