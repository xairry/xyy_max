function(_0x1e225a, _0x5cc7b4, _0x1d55e9) {
  'ui';
  var _0x31130a = _0x1d55e9(M11_babel_interop),
    _0x34a052 = _0x1d55e9(M06_storage_card),
    _0x53175f = _0x1d55e9(M02_app_registry),
    _0x5e8529 = _0x1d55e9(M00_utils_ui_helpers),
    _0x444108 = _0x1d55e9(M01_config_global),
    _0x32a9de = _0x1d55e9(M04_push_report),
    _0x32af94 = {
      'app_name': "赚米VIP",
      'notices': ["本仓库仅供学习交流，已移除登录与远程下发"],
      'is_agent': ![],
      'wx_pusher_token': '',
      'buy_url': '',
      'tutorial_url': ''
    },
    _0x487fa6 = 0x0,
    _0x42683b = null,
    _0x3d1a5c = ![],
    _0x5d0dcd = null;

  function _0x4a5bc5() {
    ui["layout"]("\n        <drawer id=\"drawer\">\n            <vertical padding=\"10\" bg=\"#F5F7FA\">\n                <appbar>\n                    <toolbar id=\"toolbar\" bg=\"#4A6FE3\">\n                        <frame layout_gravity=\"center\">\n                            <text id=\"toolbarTitle\" textColor=\"#FFFFFF\" textSize=\"20sp\" textStyle=\"bold\" layout_gravity=\"center\" />\n                        </frame>\n                    </toolbar>\n                </appbar>\n                <frame margin=\"0 8 0 0\">\n                    <vertical bg=\"#F5F7FA\">\n                        <card cardCornerRadius=\"8dp\" cardElevation=\"3dp\" margin=\"0 0 0 0\" foreground=\"?selectableItemBackground\">\n                            <horizontal w=\"*\" padding=\"12\" gravity=\"center_vertical\">\n                                <text text=\"ℹ️\" textSize=\"18sp\" textColor=\"#4A6FE3\" layout_gravity=\"center\" />\n                                <text id=\"noticeText\" textColor=\"#FF0000\" textSize=\"13sp\" layout_weight=\"1\" margin=\"8 0 0 0\" />\n                            </horizontal>\n                        </card>\n\n                        <card cardCornerRadius=\"8dp\" cardElevation=\"2dp\" margin=\"0 8 0 0\">\n                            <vertical padding=\"12 8\">\n                                <text text=\"任务配置\" textColor=\"#4A6FE3\" textSize=\"14sp\" textStyle=\"bold\" margin=\"0 0 0 2\" />\n                                <text text=\"填系列 key，逗号分隔；留空则按默认顺序执行全部\" textColor=\"#5D6B89\" textSize=\"11sp\" margin=\"2 0 4 2\" />\n                                <input id=\"inputApps\" hint=\"例如 dyjs, ksjs, fqxs\" textSize=\"13sp\" margin=\"0 6 0 0\" padding=\"10 6\" bg=\"#F0F2F5\" cornerRadius=\"6dp\" />\n                                <horizontal w=\"*\" margin=\"0 6 0 0\" gravity=\"center_vertical\">\n                                    <text text=\"看视频(分)\" textColor=\"#5D6B89\" textSize=\"12sp\" />\n                                    <input id=\"inputVideo\" hint=\"15\" inputType=\"number\" textSize=\"13sp\" layout_weight=\"1\" margin=\"4 2\" padding=\"8 6\" bg=\"#F0F2F5\" cornerRadius=\"6dp\" />\n                                    <text text=\"看书(分)\" textColor=\"#5D6B89\" textSize=\"12sp\" />\n                                    <input id=\"inputBook\" hint=\"20\" inputType=\"number\" textSize=\"13sp\" layout_weight=\"1\" margin=\"4 2\" padding=\"8 6\" bg=\"#F0F2F5\" cornerRadius=\"6dp\" />\n                                </horizontal>\n                            </vertical>\n                        </card>\n\n                        <button id=\"enterButton\" text=\"开始运行\" w=\"*\" h=\"40\" style=\"@style/Widget.AppCompat.Button.Colored\" textColor=\"#FFFFFF\" bg=\"#4CAF50\" margin=\"0 12 0 0\" textSize=\"15sp\" textStyle=\"bold\" cornerRadius=\"20dp\" elevation=\"2dp\" />\n\n                        <card cardCornerRadius=\"8dp\" cardElevation=\"2dp\" margin=\"0 8 0 0\">\n                            <horizontal w=\"*\" padding=\"4\">\n                                <button id=\"resetButton\" text=\"清理今日进度\" w=\"*\" layout_weight=\"1\" style=\"@style/Widget.AppCompat.Button.Borderless\" textColor=\"#5D6B89\" margin=\"4 2\" padding=\"4 2\" textSize=\"13sp\" background=\"#F0F2F5\" cornerRadius=\"12dp\" elevation=\"1dp\" />\n                                <button id=\"pushButton\" text=\"发送收益推送\" w=\"*\" layout_weight=\"1\" style=\"@style/Widget.AppCompat.Button.Borderless\" textColor=\"#5D6B89\" margin=\"4 2\" padding=\"4 2\" textSize=\"13sp\" background=\"#F0F2F5\" cornerRadius=\"12dp\" elevation=\"1dp\" />\n                            </horizontal>\n                        </card>\n\n                        <vertical margin=\"0 8 0 0\" padding=\"10 8\" bg=\"#F0F2F5\" w=\"*\" h=\"auto\" cardCornerRadius=\"8dp\">\n                            <text id=\"tips\" textColor=\"#FF0000\" textSize=\"13sp\" />\n                            <text id=\"notify\" textColor=\"#5D6B89\" textSize=\"13sp\" margin=\"0 4 0 0\" />\n                        </vertical>\n                    </vertical>\n                </frame>\n            </vertical>\n        </drawer>\n    "), activity['setSupportActionBar'](ui['toolbar']), ui["toolbar"]['setTitle'](''), ui["toolbarTitle"]["setText"](_0x32af94["app_name"]);
    var _0x4469da = (0x0, _0x34a052["getLongStorageValueByKey"])("run_apps");
    _0x4469da && ui["inputApps"]["setText"](_0x4469da);
    var _0x11e7a9 = (0x0, _0x34a052["getLongStorageValueByKey"])("run_video_min");
    _0x11e7a9 && ui["inputVideo"]["setText"](String(_0x11e7a9));
    var _0x5b12d4 = (0x0, _0x34a052["getLongStorageValueByKey"])("run_book_min");
    _0x5b12d4 && ui["inputBook"]["setText"](String(_0x5b12d4));
    ui["enterButton"]["click"](function() {
      _0x3d1a5c ? _0x25ce6a(![]) : _0xc90063();
    }), ui["resetButton"]["click"](function() {
      _0x2ec699();
    }), ui["pushButton"]["click"](function() {
      _0x3e066b();
    }), ui['noticeText']['on']("click", function() {
      dialogs["build"]({
        'title': '通知',
        'content': _0x32af94["notices"][_0x487fa6],
        'positive': '确定'
      })["show"]();
    }), ui["emitter"]['on']('exit', function() {
      _0x1387ad();
    });
  }

  function _0x2ec699() {
    threads["start"](function() {
      try {
        (0x0, _0x32a9de["clearAllQiandaoStatus"])();
        (0x0, _0x34a052["clearRunApp"])();
        ui["run"](function() {
          ui["tips"]["setText"]("已清理今日签到与任务进度");
        });
      } catch (_0x2c098e) {
        ui["run"](function() {
          ui["tips"]["setText"]("清理失败: " + _0x2c098e);
        });
      }
    });
  }

  function _0x3e066b() {
    threads["start"](function() {
      try {
        (0x0, _0x32a9de["sendwxpusher"])();
        ui["run"](function() {
          ui["tips"]["setText"]("已发送收益推送");
        });
      } catch (_0x22c360) {
        ui["run"](function() {
          ui["tips"]["setText"]("推送失败: " + _0x22c360);
        });
      }
    });
  }

  function _0x1bfc0f() {
    ui["run"](function() {
      ui["enterButton"]["setText"]("运行中，点击停止");
    });
  }

  function _0x25ce6a(_0x1a90ec) {
    _0x3d1a5c = ![];
    _0x5e8529["runState"]["stopRequested"] = ![];
    if (_0x1a90ec) _0x5d0dcd && _0x5d0dcd["interrupt"]();
    ui["run"](function() {
      ui["enterButton"]["setText"]("开始运行");
    });
  }

  function _0x18a70d() {
    var _0x3b6f4c = ui["inputApps"]["text"]() || "",
      _0x4c0d21 = _0x3b6f4c["split"](/,|，|\s+/)["map"](function(_0x5e3a2a) {
        return _0x5e3a2a["trim"]();
      })["filter"](function(_0x5e3a2a) {
        return _0x5e3a2a && _0x53175f["funcs"][_0x5e3a2a];
      });
    if (_0x4c0d21["length"]) return _0x4c0d21;
    var _0x7c1e0a = [];
    for (var _0x4b8f3a in _0x53175f["default_app_order"]) {
      var _0x2f6e1c = _0x53175f["default_app_order"][_0x4b8f3a];
      _0x53175f["funcs"][_0x2f6e1c] && _0x7c1e0a["push"](_0x2f6e1c);
    }
    return _0x7c1e0a;
  }

  function _0x2b95b5(_0x4a1c3f, _0x5b12d4) {
    var _0x7c1e0a = [];
    for (var _0x3f9b2e in _0x53175f["funcApp"]) {
      var _0x221dc1 = _0x53175f["funcApp"][_0x3f9b2e];
      _0x7c1e0a["push"](_0x3f9b2e);
      if (_0x444108[_0x3f9b2e + "_rw_list"] === undefined) _0x444108[_0x3f9b2e + "_rw_list"] = _0x36c08a[_0x3f9b2e] || [];
      if (_0x444108[_0x3f9b2e + "_kanshiping_min"] === undefined) _0x444108[_0x3f9b2e + "_kanshiping_min"] = _0x4a1c3f;
      if (_0x444108[_0x3f9b2e + "_kanxiaoshu_min"] === undefined) _0x444108[_0x3f9b2e + "_kanxiaoshu_min"] = _0x5b12d4;
      if (_0x444108[_0x3f9b2e + "_kanduanju_min"] === undefined) _0x444108[_0x3f9b2e + "_kanduanju_min"] = _0x5b12d4;
      if (_0x444108[_0x3f9b2e + "_tingshu_min"] === undefined) _0x444108[_0x3f9b2e + "_tingshu_min"] = _0x5b12d4;
      if (_0x444108[_0x3f9b2e + "_tingdu_min"] === undefined) _0x444108[_0x3f9b2e + "_tingdu_min"] = _0x5b12d4;
      if (_0x444108[_0x3f9b2e + "_dushu_min"] === undefined) _0x444108[_0x3f9b2e + "_dushu_min"] = _0x5b12d4;
      if (_0x444108[_0x3f9b2e + "_tingge_min"] === undefined) _0x444108[_0x3f9b2e + "_tingge_min"] = _0x5b12d4;
      _0x221dc1;
    }
    if (!_0x444108["app_list"]) _0x444108["app_list"] = _0x7c1e0a;
    if (!_0x444108["time_min"]) _0x444108["time_min"] = 0x3;
    if (!_0x444108["time_max"]) _0x444108["time_max"] = 0xa;
    if (!_0x444108["global_conf"]) _0x444108["global_conf"] = [];
  }

  function _0xc90063() {
    _0x1bfc0f(), ui["run"](function() {
      ui["tips"]["setText"]("正在初始化...");
    }), threads["start"](function() {
      try {
        (0x0, _0x34a052["setLongStorage"])("run_apps", ui["inputApps"]["text"]() || "");
        var _0x55fe6c = parseInt(ui["inputVideo"]["text"]()) || 0xf;
        _0x55fe6c && (0x0, _0x34a052["setLongStorage"])("run_video_min", _0x55fe6c);
        var _0x1a90ec = parseInt(ui["inputBook"]["text"]()) || 0x14;
        _0x1a90ec && (0x0, _0x34a052["setLongStorage"])("run_book_min", _0x1a90ec);
        (0x0, _0x444108["initEnv"])(![]);
        _0x2b95b5(_0x55fe6c, _0x1a90ec);
        var _0x2bceac = _0x18a70d();
        if (!_0x2bceac["length"]) {
          ui["run"](function() {
            ui["tips"]["setText"]("没有可运行的系列，请检查配置");
          }), _0x25ce6a(![]);
          return;
        }
        _0x3d1a5c = !![];
        ui["run"](function() {
          ui["tips"]["setText"]("共 " + _0x2bceac["length"] + " 个系列，开始执行");
        });
        _0x5d0dcd = threads["start"](function() {
          _0x4a3cc1(_0x2bceac);
        });
      } catch (_0x3b7ff2) {
        ui["run"](function() {
          ui["tips"]["setText"]("启动异常: " + _0x3b7ff2);
        }), _0x25ce6a(![]);
      }
    });
  }

  function _0x4a3cc1(_0x2bceac) {
    for (var _0x24f8b9 = 0x0; _0x24f8b9 < _0x2bceac["length"]; _0x24f8b9++) {
      var _0x5312a7 = _0x2bceac[_0x24f8b9];
      if (_0x5e8529["runState"]["stopRequested"]) break;
      if ((0x0, _0x34a052["isBlackApp"])(_0x5312a7)) continue;
      var _0x4a4a51 = _0x53175f["funcs"][_0x5312a7];
      if (!_0x4a4a51) continue;
      var _0x4f2a3e = _0x53175f["appPackageName"][_0x5312a7];
      if (!_0x4f2a3e || !(0x0, _0x53175f["isAppInstalled"])(_0x4f2a3e)) {
        (0x0, _0x5e8529["hlog"])("未安装，跳过: " + _0x5312a7);
        continue;
      }
      try {
        (0x0, _0x5e8529["hlog"])("开始执行系列: " + _0x5312a7);
        (0x0, _0x5e8529["startApp"])(_0x53175f["funcApp"][_0x5312a7]);
        (0x0, _0x34a052["setCurrentApp"])(_0x5312a7);
        var _0x1f2e02 = Date["now"]();
        _0x4a4a51();
        (0x0, _0x34a052["setAppDuration"])(_0x5312a7, Math["round"]((Date["now"]() - _0x1f2e02) / 0xea60));
        (0x0, _0x34a052["setAppRuntimes"])(_0x5312a7);
        (0x0, _0x34a052["finishRw"])(_0x5312a7, 'done');
      } catch (_0x2f1e4c) {
        (0x0, _0x5e8529["handleAppError"])(_0x2f1e4c);
      }
      if (_0x5e8529["runState"]["stopRequested"]) break;
    }
    (0x0, _0x5e8529["hlog"])("全部系列执行完毕");
    ui["run"](function() {
      ui["tips"]["setText"]("全部系列执行完毕");
    }), _0x25ce6a(![]);
  }

  function _0x47a10e() {
    ui["run"](function() {
      ui["noticeText"]["setText"](_0x32af94["notices"][_0x487fa6]);
    }), _0x42683b && clearInterval(_0x42683b), _0x42683b = setInterval(function() {
      _0x487fa6 = (_0x487fa6 + 0x1) % _0x32af94["notices"]["length"], ui["run"](function() {
        ui['noticeText']["setAlpha"](0x0), ui["noticeText"]["setText"](_0x32af94["notices"][_0x487fa6]), ui["noticeText"]['animate']()['alpha'](0x1)["setDuration"](0x1f4)["start"]();
      });
    }, 0x1388);
  }

  function _0x1387ad() {
    _0x42683b && (clearInterval(_0x42683b), _0x42683b = null);
    _0x5e8529["runState"]["stopRequested"] = !![];
    _0x5d0dcd && _0x5d0dcd["interrupt"]();
  }

  var _0x36c08a = {
    'ksjs': ['ksjs_qiandao', 'ksjs_sousuo', 'ksjs_kaibaoxiang', 'ksjs_kanguanggao', 'ksjs_guangjie', 'ksjs_lingfanbu', 'ksjs_kanzhibo', 'ksjs_yuyue', 'ksjs_weiya', 'ksjs_kanshipin'],
    'kspt': ['kspt_qiandao', 'kspt_sousuo', 'kspt_kaibaoxiang', 'kspt_kanguanggao', 'kspt_guangjie', 'kspt_lingfanbu', 'kspt_kanzhibo', 'kspt_yuyue', 'kspt_weiya', 'kspt_kanshipin'],
    'xfmfdj': ['xfmfdj_qiandao', 'xfmfdj_kaibaoxiang', 'xfmfdj_kanguanggao', 'xfmfdj_kanduanju'],
    'dyjs': ['dyjs_qiandao', 'dyjs_kaibaoxiang', 'dyjs_kanguanggao', 'dyjs_guangjie', 'dyjs_kanzhibo', 'dyjs_lingfanbu', 'dyjs_yuyue', 'dyjs_kanshipin'],
    'dy': ['dy_qiandao', 'dy_kaibaoxiang', 'dy_kanguanggao', 'dy_guangjie', 'dy_hongbaoyu', 'dy_yuyue', 'dy_kanshipin'],
    'dyhs': ['dyhs_qiandao', 'dyhs_kaibaoxiang', 'dyhs_kanguanggao', 'dyhs_kanshipin'],
    'dysc': ['dysc_qiandao', 'dysc_kanguanggao', 'dysc_fanka', 'dysc_choujinbi'],
    'qsyy': ['qsyy_qiandao', 'qsyy_kaibaoxiang', 'qsyy_kanguanggao', 'qsyy_hongbaoyu', 'qsyy_fanka'],
    'ttjs': ['ttjs_qiandao', 'ttjs_kaibaoxiang', 'ttjs_kanguanggao', 'ttjs_lingfanbu', 'ttjs_shuijiao', 'ttjs_yuyue', 'ttjs_kanshipin'],
    'jrtt': ['jrtt_qiandao', 'jrtt_kaibaoxiang', 'jrtt_kanguanggao', 'jrtt_lingfanbu', 'jrtt_shuijiao', 'jrtt_yuyue', 'jrtt_kanshipin', 'jrtt_xinren'],
    'xgsp': ['xgsp_qiandao', 'xgsp_kaibaoxiang', 'xgsp_kanguanggao', 'xgsp_guangjie', 'xgsp_lingfanbu', 'xgsp_yuyue', 'xgsp_kanshipin'],
    'wkllq': ['wkllq_qiandao', 'wkllq_kaibaoxiang', 'wkllq_kanguanggao', 'wkllq_hongbaoyu', 'wkllq_lingfanbu', 'wkllq_yuyue', 'wkllq_kanshipin'],
    'fqxs': ['fqxs_qiandao', 'fqxs_kaibaoxiang', 'fqxs_kanguanggao', 'fqxs_hongbaoyu', 'fqxs_fanka', 'fqxs_lingfanbu', 'fqxs_yuyue', 'fqxs_tingdu', 'fqxs_kanduanju'],
    'fqct': ['fqct_qiandao', 'fqct_kaibaoxiang', 'fqct_kanguanggao', 'fqct_hongbaoyu', 'fqct_lingfanbu', 'fqct_yuyue', 'fqct_tingdu', 'fqct_kanduanju'],
    'fqctyyb': ['fqctyyb_qiandao', 'fqctyyb_kaibaoxiang', 'fqctyyb_kanguanggao', 'fqctyyb_hongbaoyu', 'fqctyyb_lingfanbu', 'fqctyyb_yuyue', 'fqctyyb_tingdu', 'fqctyyb_kanduanju'],
    'hgdj': ['hgdj_qiandao', 'hgdj_kaibaoxiang', 'hgdj_kanguanggao', 'hgdj_hongbaoyu', 'hgdj_fanka', 'hgdj_lingfanbu', 'hgdj_yuyue', 'hgdj_tingdu', 'hgdj_kanduanju'],
    'mymfdj': ['mymfdj_qiandao', 'mymfdj_kaibaoxiang', 'mymfdj_kanguanggao', 'mymfdj_yuyue', 'mymfdj_kanduanju'],
    'xnmfdj': ['xnmfdj_qiandao', 'xnmfdj_kaibaoxiang', 'xnmfdj_kanguanggao', 'xnmfdj_hongbaoyu', 'xnmfdj_fanka', 'xnmfdj_lingfanbu', 'xnmfdj_yuyue', 'xnmfdj_tingdu', 'xnmfdj_kanduanju'],
    'dhmfxs': ['dhmfxs_qiandao', 'dhmfxs_kaibaoxiang', 'dhmfxs_kanguanggao', 'dhmfxs_hongbaoyu', 'dhmfxs_fanka', 'dhmfxs_lingfanbu', 'dhmfxs_yuyue', 'dhmfxs_tingdu', 'dhmfxs_kanduanju'],
    'hmjc': ['hmjc_qiandao', 'hmjc_kaibaoxiang', 'hmjc_kanguanggao', 'hmjc_fanka', 'hmjc_yuyue', 'hmjc_hongbaoyu', 'hmjc_kanduanju'],
    'ucjs': ['ucjs_qiandao', 'ucjs_kaibaoxiang', 'ucjs_kanguanggao'],
    'sqxs': ['sqxs_qiandao', 'sqxs_kaibaoxiang', 'sqxs_choujiang', 'sqxs_kanguanggao', 'sqxs_guangshangcheng', 'sqxs_lingfanbu', 'sqxs_yuyue', 'sqxs_xiaoshuo'],
    'qmxs': ['qmxs_qiandao', 'qmxs_kaibaoxiang', 'qmxs_kanguanggao', 'qmxs_guangjie', 'qmxs_choujiang', 'qmxs_hongbaoyu', 'qmxs_lingfanbu', 'qmxs_guangshangcheng', 'qmxs_xiaoshuo', 'qmxs_tingshu'],
    'qzxs': ['qzxs_qiandao', 'qzxs_kaibaoxiang', 'qzxs_xiaoshuo', 'qzxs_tingshu'],
    'xkxs': ['xkxs_qiandao', 'xkxs_kaibaoxiang', 'xkxs_xiaoshuo', 'xkxs_tingshu'],
    'xmxs': ['xmxs_qiandao', 'xmxs_kaibaoxiang', 'xmxs_xiaoshuo', 'xmxs_tingshu'],
    'djxs': ['djxs_qiandao', 'djxs_kaibaoxiang', 'djxs_kanguanggao', 'djxs_lingfanbu', 'djxs_xiaoshuo', 'djxs_kanxiaoshuo', 'djxs_guangjie', 'djxs_hongbaoyu'],
    'sdmfxs': ['sdmfxs_qiandao', 'sdmfxs_kaibaoxiang', 'sdmfxs_kanguanggao', 'sdmfxs_lingfanbu', 'sdmfxs_xiaoshuo'],
    'hkmfxs': ['hkmfxs_qiandao', 'hkmfxs_kaibaoxiang', 'hkmfxs_kanguanggao', 'hkmfxs_lingfanbu', 'hkmfxs_xiaoshuo'],
    'dsdddsp': ['dsdddsp_qiandao', 'dsdddsp_kaibaoxiang', 'dsdddsp_kanguanggao', 'dsdddsp_lingfanbu', 'dsdddsp_kanduanju'],
    'sd': ['sd_qiandao', 'sd_kaibaoxiang', 'sd_kanguanggao', 'sd_lingfanbu', 'sd_xiaoshuo'],
    'wifi': ['wifi_qiandao', 'wifi_kaibaoxiang', 'wifi_kanguanggao'],
    'himovie': ['himovie_qiandao', 'himovie_kanguanggao', 'himovie_yuyue', 'himovie_anzhuang', 'himovie_kanduanju'],
    'hwmusic': ['hwmusic_anzhuang'],
    'hwread': ['hwread_qiandao', 'hwread_kanguanggao', 'hwread_yuyue', 'hwread_anzhuang', 'hwread_dushu'],
    'mimovie': ['mimovie_qiandao', 'mimovie_kaibaoxiang', 'mimovie_yuyue', 'mimovie_fanka', 'mimovie_anzhuang', 'mimovie_tiyan', 'mimovie_kanduanju'],
    'mibrowser': ['mibrowser_qiandao', 'mibrowser_kaibaoxiang', 'mibrowser_anzhuang', 'mibrowser_tiyan', 'mibrowser_kanduanju'],
    'hymfxs': ['hymfxs_qiandao', 'hymfxs_kaibaoxiang', 'hymfxs_kanguanggao', 'hymfxs_lingfanbu', 'hymfxs_xiaoshuo'],
    'micontent': ['micontent_qiandao', 'micontent_kaibaoxiang', 'micontent_yuyue', 'micontent_fanka', 'micontent_anzhuang', 'micontent_tiyan']
  };

  _0x4a5bc5(), _0x47a10e();
}
