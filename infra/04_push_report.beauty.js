function(_0x2a0881, _0x221733, _0xa22243) {
  var _0x34a7a8 = a1_0x4b7c,
    _0x33b56f = _0xa22243(M11_babel_interop);
  Object["defineProperty"](_0x221733, '__esModule', {
    'value': !![]
  }), _0x221733["clearAllQiandaoStatus"] = _0x589c79, _0x221733["clearPushTimers"] = _0x2b8614, _0x221733["clearQiandaoStatus"] = _0x4804cb, _0x221733["getRotName"] = _0x150929, _0x221733["isOpenPush"] = _0x4d0b89, _0x221733['scheduleNextPush'] = _0x3aabed, _0x221733["sendText"] = _0x25c7dc, _0x221733['sendwxpusher'] = _0x36a7d4, _0x221733["setGold"] = _0x267a08, _0x221733["setQiandaoStatus"] = _0x249682;
  var _0x3c9f49 = _0xa22243(M02_app_registry),
    _0x78b74e = _0xa22243(M00_utils_ui_helpers),
    _0x408f3f = _0xa22243(M12_date_utils),
    _0x5bfadf = _0xa22243(M06_storage_card),
    _0x1ca968 = _0xa22243(M01_config_global),
    _0x2bceac = [],
    _0x2ede0a = [];

  function _0x4d0b89() {
    var _0x55a0be = _0x34a7a8;
    return _0x1ca968['wxpusher_UID'] && _0x1ca968["push_time"];
  }

  function _0x249682(_0x5127cd) {
    var _0x219e39 = _0x34a7a8,
      _0x44236e = _0x5af4b1();
    _0x44236e[_0x5127cd + '_qiandao'] = '已签';
    var _0x312d5a = (0x0, _0x408f3f["getCurrentDate"])(),
      _0x222e49 = _0x4ad41e();
    _0x222e49['put'](_0x312d5a, _0x44236e), (0x0, _0x78b74e["dlog"])(_0x5127cd + '_qiandao:' + _0x44236e[_0x5127cd + "_qiandao"]);
  }

  function _0x589c79() {
    var _0x35e505 = _0x34a7a8,
      _0x51a819 = _0x4ad41e(),
      _0x273c69 = (0x0, _0x408f3f['getCurrentDate'])(),
      _0x4168dc = _0x51a819["get"](_0x273c69, null);
    if (_0x4168dc) {
      for (var _0x29e2cb in _0x4168dc) {
        _0x29e2cb && (_0x29e2cb["indexOf"]('_qiandao') !== -0x1 || /_qiandao$/ ["test"](_0x29e2cb)) && delete _0x4168dc[_0x29e2cb];
      }
      _0x51a819['put'](_0x273c69, _0x4168dc);
    }
    var _0x13b931 = (0x0, _0x5bfadf['getStorage'])();
    for (var _0x4d7810 in _0x3c9f49['funcApp']) {
      var _0x2ff33c = _0x3c9f49["funcApp"][_0x4d7810];
      _0x13b931["remove"](_0x2ff33c + '_init'), _0x13b931['remove'](_0x4d7810 + '_qiandao'), _0x13b931["remove"](_0x2ff33c + '_qiandao');
    }(0x0, _0x78b74e["dlog"])("已清理所有APP签到标记及任务运行缓存");
  }

  function _0x4804cb(_0x39b43d) {
    var _0x37f79f = _0x34a7a8;
    if (!_0x39b43d) {
      _0x589c79();
      return;
    }
    var _0x16f4fc = _0x4ad41e(),
      _0x5eeda1 = (0x0, _0x408f3f["getCurrentDate"])(),
      _0x4c3dcd = _0x16f4fc["get"](_0x5eeda1, null);
    _0x4c3dcd && _0x4c3dcd[_0x39b43d + "_qiandao"] !== undefined && (delete _0x4c3dcd[_0x39b43d + "_qiandao"], _0x16f4fc["put"](_0x5eeda1, _0x4c3dcd));
    var _0x55c197 = (0x0, _0x5bfadf["getStorage"])();
    _0x55c197["remove"](_0x39b43d + '_init'), _0x55c197["remove"](_0x39b43d + "_qiandao");
    for (var _0x121770 in _0x3c9f49["funcApp"]) {
      (_0x3c9f49["funcApp"][_0x121770] === _0x39b43d || _0x121770 === _0x39b43d) && (_0x55c197["remove"](_0x3c9f49['funcApp'][_0x121770] + "_init"), _0x55c197["remove"](_0x121770 + "_qiandao"), _0x55c197['remove'](_0x3c9f49['funcApp'][_0x121770] + "_qiandao"));
    }(0x0, _0x78b74e["dlog"])('已清理签到标记及任务运行缓存:' + _0x39b43d);
  }

  function _0x267a08(_0x369393, _0x51a012, _0x210a2d, _0x25581e) {
    var _0x14bae7 = _0x34a7a8,
      _0xc8e72 = _0x4ad41e(),
      _0x518c3d = {},
      _0x4da6a9 = (0x0, _0x408f3f["getCurrentDate"])();
    _0x4fa70c(_0xc8e72);
    var _0x2eaf04 = _0xc8e72['get'](_0x4da6a9, null);
    _0x2eaf04 && (_0x518c3d = _0x2eaf04);
    _0x51a012 && _0x51a012 > 0x0 && (_0x518c3d[_0x369393] = _0x51a012);
    _0x210a2d && _0x210a2d > 0x0 && (_0x518c3d[_0x369393 + "total"] = _0x210a2d);
    _0x25581e && (_0x518c3d[_0x369393 + "ketixian"] = _0x25581e);
    _0xc8e72["put"](_0x4da6a9, _0x518c3d), (0x0, _0x78b74e["dlog"])(_0x369393 + ':' + _0x51a012), (0x0, _0x78b74e["dlog"])(_0x369393 + "total:" + _0x210a2d), (0x0, _0x78b74e['dlog'])(_0x369393 + "ketixian:" + _0x25581e), (0x0, _0x78b74e["dlog"])(_0x369393 + "_qiandao:" + _0x518c3d[_0x369393 + "_qiandao"]);
  }

  function _0x4fa70c(_0x2382c6) {
    var _0x305aa0 = _0x34a7a8;
    _0x2382c6["remove"]((0x0, _0x408f3f['getBeforeYesterdayDate'])());
  }

  function _0x4ad41e() {
    var _0x3863b9 = _0x34a7a8,
      _0x2dcc26 = storages["create"]("zmbkgold");
    return _0x2dcc26;
  }

  function _0x5af4b1() {
    var _0x56f2c9 = _0x34a7a8,
      _0xcea4b1 = _0x4ad41e(),
      _0x139d11 = (0x0, _0x408f3f["getCurrentDate"])(),
      _0x5335d6 = _0xcea4b1['get'](_0x139d11, null);
    return (0x0, _0x78b74e["dlog"])(_0x5335d6), _0x5335d6 || {};
  }

  function _0x96047f() {
    var _0x3ef22a = _0x34a7a8,
      _0x103bae = _0x5af4b1(),
      _0x303483 = 0x0,
      _0x2e4515 = 0x0,
      _0x588985 = [],
      _0xef5c1c = 0x0;
    for (var _0x410267 in _0x3c9f49["funcApp"]) {
      var _0x1fe25b = _0x3c9f49["funcApp"][_0x410267],
        _0x441df1 = _0x103bae[_0x1fe25b] !== undefined && _0x103bae[_0x1fe25b] !== null || _0x103bae[_0x1fe25b + "total"] !== undefined && _0x103bae[_0x1fe25b + "total"] !== null,
        _0xd1041b = _0x441df1;
      !_0xd1041b && (_0x1ca968["app_list"]["indexOf"](_0x410267) == -0x1 || (0x0, _0x5bfadf["isBlackApp"])(_0x410267) || !(0x0, _0x3c9f49["getPackageNameByAppName"])(_0x1fe25b) ? _0xd1041b = ![] : _0xd1041b = !![]);
      if (!_0xd1041b) continue;
      var _0x13e939 = _0x103bae[_0x1fe25b] || 0x0;
      (_0x1fe25b == _0x3c9f49["dyscapp"] || _0x1fe25b == _0x3c9f49['wkllqapp']) && (_0x13e939 = _0x7d5a30(_0x1fe25b) || 0x0);
      var _0x4f974b = void 0x0;
      if (_0x1fe25b == _0x3c9f49['xfmfdjapp'] || _0x1fe25b == _0x3c9f49["ucjsapp"]) _0x4f974b = (_0x13e939 || 0x0) / 0x7530 * 0x2710;
      else(0x0, _0x3c9f49['is3App'])(_0x1fe25b) ? _0x4f974b = (_0x13e939 || 0x0) / 0x80e8 * 0x2710 : _0x4f974b = _0x13e939 || 0x0;
      if (_0x4f974b < 0x0) _0x4f974b = 0x0;
      var _0x2ada2a = parseFloat((_0x4f974b / 0x2710)['toFixed'](0x2)),
        _0x38de6d = _0x103bae[_0x1fe25b + "total"],
        _0x4b2dd0 = _0x38de6d ? parseFloat(_0x38de6d) : 0x0,
        _0x47bbca = _0x1ca968["app_run_times"][_0x410267] || '∞',
        _0x332287 = (0x0, _0x5bfadf["getAppRuntimes"])(_0x410267) || 0x0,
        _0x5eb23d = _0x332287 + '/' + _0x47bbca,
        _0x385864 = (0x0, _0x5bfadf["getAppDuration"])(_0x410267),
        _0x41f7bd = _0x103bae[_0x1fe25b + "_qiandao"] || '未签',
        _0x2deabc = _0x385864 > 0x0 ? (_0x2ada2a / (_0x385864 / 0x3c))["toFixed"](0x2) : "0.00",
        _0x202fe9 = {
          'name': _0x1fe25b,
          'today_earnings': _0x2ada2a,
          'total_earnings': parseFloat(_0x4b2dd0["toFixed"](0x2)),
          'times': _0x5eb23d,
          'duration': _0x385864,
          'conversion_rate': _0x2deabc,
          'checkin_status': _0x41f7bd
        };
      _0x103bae[_0x1fe25b + 'ketixian'] && (_0x202fe9["color"] = 'red'), _0x588985["push"](_0x202fe9), _0x303483 += _0x2ada2a, _0x2e4515 += _0x4b2dd0, _0xef5c1c += _0x385864;
    }
    var _0x3f2c64 = {
        'columns': [{
          'key': "device_name",
          'title': '设备',
          'type': "text"
        }, {
          'key': 'today_earnings',
          'title': '日收',
          'type': "money"
        }, {
          'key': "total_earnings",
          'title': '总收',
          'type': "money"
        }, {
          'key': "running_apps",
          'title': "正在运行",
          'type': "text-number"
        }, {
          'key': "total_duration",
          'title': "总耗时(h)",
          'type': "text-number"
        }]
      },
      _0x3f4bce = {
        'columns': [{
          'key': 'name',
          'title': "APP",
          'type': 'text'
        }, {
          'key': "today_earnings",
          'title': '日收',
          'type': "money"
        }, {
          'key': "total_earnings",
          'title': '总收',
          'type': "money"
        }, {
          'key': "times",
          'title': '次数',
          'type': 'text-number'
        }, {
          'key': "duration",
          'title': '耗时',
          'type': 'text-number'
        }, {
          'key': "conversion_rate",
          'title': "转化率(元/h)",
          'type': 'text-number'
        }, {
          'key': 'checkin_status',
          'title': '签到',
          'type': "status"
        }]
      };
    return {
      'table_config': _0x3f2c64,
      'device_name': _0x150929(),
      'today_earnings': parseFloat(_0x303483["toFixed"](0x2)),
      'total_earnings': parseFloat(_0x2e4515["toFixed"](0x2)),
      'running_apps': (0x0, _0x5bfadf["getCurrentRunningApp"])(),
      'detail_config': _0x3f4bce,
      'detail_data': _0x588985,
      'total_duration': (_0xef5c1c / 0x3c)["toFixed"](0x1)
    };
  }

  function _0x4a3cc1(_0x4348a2) {
    var _0x248e3d = _0x34a7a8,
      _0x5920ec = "<html><body>";
    _0x5920ec += "<table border='1' style='border-collapse: collapse; width: 100%;'>";
    var _0x3ec4da = '';
    _0x5920ec += "<tr><th>App</th><th>日收</th><th>总收</th><th>次数</th><th>耗时</th><th>转化率</th><th>签到</th></tr>";
    var _0xe55fd0 = 0x0,
      _0x19bec0 = 0x0,
      _0x59a8c9 = 0x0;
    for (var _0x5ad1db in _0x3c9f49["funcApp"]) {
      var _0x2c0f7c = _0x3c9f49["funcApp"][_0x5ad1db],
        _0x54672b = _0x4348a2[_0x2c0f7c + "_qiandao"] || '未签',
        _0x1b83a6 = '',
        _0x1f6c9f = '',
        _0x5e75cc = '';
      if (_0x4348a2[_0x2c0f7c] || _0x4348a2[_0x2c0f7c + "total"]) {
        _0x1b83a6 = _0x4348a2[_0x2c0f7c] || 0x0;
        (_0x2c0f7c == _0x3c9f49['dyscapp'] || _0x2c0f7c == _0x3c9f49["wkllqapp"]) && (_0x1b83a6 = _0x7d5a30(_0x2c0f7c));
        _0x1b83a6 < 0x0 && (_0x1b83a6 = 0x0);
        _0x1f6c9f = _0x4348a2[_0x2c0f7c + "total"] || 0x0, _0x1b83a6 = parseInt(_0x1b83a6), _0x1f6c9f = parseFloat(_0x1f6c9f)["toFixed"](0x2);
        if ((0x0, _0x3c9f49['is3App'])(_0x2c0f7c)) _0x5e75cc = (_0x1b83a6 / 0x80e8 * 0x2710)["toFixed"](0x2);
        else _0x2c0f7c == _0x3c9f49["xfmfdjapp"] ? _0x5e75cc = (_0x1b83a6 / 0x7530 * 0x2710)['toFixed'](0x2) : _0x5e75cc = _0x1b83a6;
        _0xe55fd0 += parseFloat(_0x5e75cc / 0x2710), _0x19bec0 += parseFloat(_0x1f6c9f);
      } else {
        if (_0x1ca968["app_list"]["indexOf"](_0x5ad1db) == -0x1 || (0x0, _0x5bfadf["isBlackApp"])(_0x5ad1db) || !(0x0, _0x3c9f49['getPackageNameByAppName'])(_0x2c0f7c)) continue;
      }
      var _0x3d3bcc = !!_0x4348a2[_0x2c0f7c + "ketixian"],
        _0x3add2c = _0x3d3bcc ? " style='color: red; font-weight: bold;'" : '',
        _0x382bb9 = _0x3d3bcc ? " style='color: red; font-weight: bold;'" : '',
        _0x32af1f = '';
      if (_0x3d3bcc) _0x32af1f = " style='color: red; font-weight: bold;'";
      else {
        if (_0x2c0f7c == _0x3c9f49["dyhsapp"]) _0x32af1f = _0x1f6c9f && _0x1f6c9f >= 0xa ? " style='color: red; font-weight: bold;'" : '';
        else _0x2c0f7c == _0x3c9f49["djxsapp"] || _0x2c0f7c == _0x3c9f49["sqxsapp"] || _0x2c0f7c == _0x3c9f49["sdmfxsapp"] || _0x2c0f7c == _0x3c9f49["hkmfxsapp"] || _0x2c0f7c == _0x3c9f49["dsdddspapp"] || _0x2c0f7c == _0x3c9f49["sdapp"] || _0x2c0f7c == _0x3c9f49["hymfxsapp"] || _0x2c0f7c == _0x3c9f49["hmjcapp"] ? _0x32af1f = _0x1f6c9f && _0x1f6c9f >= 0x1e ? '\x20style=\x27color:\x20red;\x20font-weight:\x20bold;\x27' : '' : _0x32af1f = _0x1f6c9f && _0x1f6c9f >= 0xf ? " style='color: red; font-weight: bold;'" : '';
      }
      var _0x21e399 = _0x1ca968["app_run_times"][_0x5ad1db] || '∞',
        _0xa7dc32 = (0x0, _0x5bfadf["getAppRuntimes"])(_0x5ad1db),
        _0x544f3c = (0x0, _0x5bfadf["getAppDuration"])(_0x5ad1db),
        _0x56eadd = (0x0, _0x5bfadf['getCurrentRunningApp'])(),
        _0x5a253f = _0x3d3bcc ? " style='color: red; font-weight: bold;'" : _0x2c0f7c == _0x56eadd ? " style='color: green; font-weight: bold;'" : '',
        _0x2f2bc0 = _0x3d3bcc ? " style='color: red; font-weight: bold;'" : _0x54672b == '已签' ? " style='color: green; font-weight: bold;'" : '';
      _0x59a8c9 += _0x544f3c;
      var _0x20215a = _0x544f3c > 0x0 ? (parseFloat(_0x5e75cc / 0x2710) / (_0x544f3c / 0x3c))['toFixed'](0x2) : "0.00",
        _0x15d71e = (0x0, _0x5bfadf["getTiXian"])(_0x2c0f7c);
      _0x15d71e && (_0x3ec4da = _0x3ec4da + "<a style='color: red;'>" + _0x2c0f7c + '今日提现:' + _0x15d71e + '元</a></br>'), _0x5920ec += "<tr" + _0x3add2c + "><td" + _0x5a253f + '>' + _0x2c0f7c + '</td><td' + _0x382bb9 + '>' + _0x1b83a6 + "</td><td" + _0x32af1f + '>' + _0x1f6c9f + '</td><td' + _0x382bb9 + '>' + _0xa7dc32 + '/' + _0x21e399 + "</td><td" + _0x382bb9 + '>' + _0x544f3c + "</td><td" + _0x382bb9 + '>' + _0x20215a + "</td><td" + _0x2f2bc0 + '>' + _0x54672b + '</td></tr>';
    }
    _0xe55fd0 = _0xe55fd0["toFixed"](0x2), _0x19bec0 = _0x19bec0['toFixed'](0x2);
    var _0x211798 = device["getBattery"]();
    _0x211798 += '%';
    var _0x438e9d = device["isCharging"]();
    _0x438e9d && (_0x211798 += ",正在充电中...");
    _0x59a8c9 = (_0x59a8c9 / 0x3c)["toFixed"](0x1) + 'h', _0x5920ec += '<tr><td>总计</td><td>' + _0xe55fd0 + "</td><td>" + _0x19bec0 + "</td><td></td><td>" + _0x59a8c9 + "</td></tr>", _0x5920ec += "</table>", _0x5920ec += "<a style='color: red;'>红色:可提现</a></br>", _0x5920ec += "<a style='color: green;'>绿色:当前正在运行的APP</a></br>", _0x5920ec += "<a style='color: blue;'>∞:表示无限循环次数;耗时:分钟;转化率:元/小时</a></br>", _0x5920ec += "</br>", _0x5920ec += _0x3ec4da, _0x5920ec += "当前手机电量:" + _0x211798 + "</br>";
    !_0x1ca968["APP_CONFIG"]["is_agent"] && (_0x5920ec += "<a href='" + _0x3c9f49['ZM_DOC'] + "'>操作手册</a></br>");
    _0x5920ec += "提示：以上统计仅为参考,如出现统计错误请到APP查看!" + "</br>";
    var _0x15f0ab = '',
      _0x363bac = _0x150929();
    return _0x15f0ab += _0x363bac + " --" + _0xe55fd0 + '元', _0x15f0ab += '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', _0x15f0ab + _0x5920ec;
  }

  function _0x150929() {
    var _0x4781cd = _0x34a7a8;
    if (_0x1ca968['device_name']) return (0x0, _0x78b74e["dlog"])('从设置中获取到机器人名称'), _0x1ca968["device_name"];
    if (_0x1ca968['ROBOT_NAME']) return _0x1ca968["ROBOT_NAME"];
    return device["brand"] + '-' + device["model"];
  }

  function _0x7d5a30(_0x48fcd8) {
    var _0x223d4d = _0x34a7a8,
      _0x46842f = 0x0,
      _0x50da0d = _0x4ad41e(),
      _0x22a53c = (0x0, _0x408f3f["getCurrentDate"])(),
      _0x275a03 = (0x0, _0x408f3f["getYesterdayDate"])(),
      _0x1299fd = _0x50da0d["get"](_0x275a03, null),
      _0x45ff6e = _0x50da0d["get"](_0x22a53c, null),
      _0x12ba9b = 0x1;
    return _0x48fcd8 += "total", _0x1299fd && _0x45ff6e && _0x1299fd[_0x48fcd8] && (_0x46842f = _0x45ff6e[_0x48fcd8] - _0x1299fd[_0x48fcd8], _0x46842f && (_0x48fcd8 == _0x3c9f49['wkllqapp'] && (_0x12ba9b = 0x3), _0x46842f = parseInt(_0x46842f * 0x2710 / _0x12ba9b))), _0x46842f;
  }

  function _0x36a7d4() {
    var _0x4db766 = _0x34a7a8;
    try {
      var _0x188b97 = 'http://wxpusher.zjiecode.com/api/send/message',
        _0x59885c = _0x1ca968["APP_CONFIG"]["wx_pusher_token"];
      !_0x59885c && (_0x59885c = "AT_C4tw7qEXbaH18z12wZn7WPr4jtr7AiQ4");
      var _0x2b1ae3 = _0x1ca968["wxpusher_UID"],
        _0x249b44 = _0x5af4b1(),
        _0x4fc043 = {
          'appToken': _0x59885c,
          'content': _0x4a3cc1(_0x249b44),
          'uids': [_0x2b1ae3],
          'contentType': 0x2
        };
      (0x0, _0x78b74e["dlog"])("开始推送"), http["postJson"](_0x188b97, _0x4fc043, function(_0x2e4d27) {
        var _0x5aead8 = _0x4db766;
        _0x2e4d27["statusCode"] == 0xc8 ? (0x0, _0x78b74e['hlog'])("消息推送成功！") : (0x0, _0x78b74e["hlog"])('消息推送失败：' + _0x2e4d27['body']["string"]());
      });
    } catch (_0x32ff3e) {
      (0x0, _0x78b74e["dlog"])(_0x32ff3e);
    }
  }

  function _0x3aabed() {
    var _0xd72500 = _0x34a7a8;
    (0x0, _0x78b74e["hlog"])("已开启每日收益推送");
    var _0x2c05af = _0x1ca968["push_time"]['split'](/,|，/)["map"](Number),
      _0x4e7b30 = _0x2c05af["filter"](function(_0x9dfccd, _0x29c806, _0x44c90d) {
        return _0x44c90d['indexOf'](_0x9dfccd) == _0x29c806;
      });
    (0x0, _0x78b74e["dlog"])(_0x4e7b30);
    for (var _0x2d7adc = 0x0; _0x2d7adc < _0x4e7b30["length"]; _0x2d7adc++) {
      var _0x493a59 = _0x4e7b30[_0x2d7adc];
      _0x47c3c4(_0x493a59);
    }
  }

  function _0x2b8614() {
    var _0x317f85 = _0x34a7a8;
    try {
      for (var _0x1aa391 = 0x0; _0x1aa391 < _0x2bceac["length"]; _0x1aa391++) {
        clearTimeout(_0x2bceac[_0x1aa391]);
      }
      for (var _0x2723e7 = 0x0; _0x2723e7 < _0x2ede0a['length']; _0x2723e7++) {
        clearInterval(_0x2ede0a[_0x2723e7]);
      }
      _0x2bceac = [], _0x2ede0a = [], (0x0, _0x78b74e["dlog"])('wxpusher\x20定时器已清理');
    } catch (_0x2055ca) {
      (0x0, _0x78b74e["dlog"])('清理\x20wxpusher\x20定时器失败:\x20' + _0x2055ca);
    }
  }

  function _0x13fafc(_0x224c17) {
    var _0x41e296 = _0x34a7a8,
      _0x3fbabe = new Date(),
      _0x595b6b = _0x3fbabe["getHours"](),
      _0x482562 = _0x3fbabe["getMinutes"](),
      _0x74d176 = _0x3fbabe["getSeconds"]();
    return _0x595b6b < _0x224c17 || _0x595b6b == _0x224c17 && (_0x482562 > 0x0 || _0x74d176 > 0x0) ? (_0x224c17 - _0x595b6b) * 0x3c * 0x3c * 0x3e8 - _0x482562 * 0x3c * 0x3e8 - _0x74d176 * 0x3e8 : (0x18 - _0x595b6b + _0x224c17) * 0x3c * 0x3c * 0x3e8 - _0x482562 * 0x3c * 0x3e8 - _0x74d176 * 0x3e8;
  }

  function _0x5bb4a0() {
    return Math['floor'](random(0x0, 0x12c) * 0x3e8);
  }

  function _0x47c3c4(_0x4391c4) {
    var _0x4a19b7 = _0x34a7a8,
      _0xe647d9 = _0x13fafc(_0x4391c4),
      _0x3e189f = _0x5bb4a0(),
      _0x2c011e = setTimeout(function() {
        var _0x2ca0f4 = a1_0x4b7c;
        _0x36a7d4();
        var _0x8f2689 = setInterval(_0x36a7d4, 0x18 * 0x3c * 0x3c * 0x3e8);
        _0x2ede0a["push"](_0x8f2689);
      }, _0xe647d9 + _0x3e189f);
    _0x2bceac["push"](_0x2c011e);
  }

  function _0x25c7dc(_0x54849e) {
    var _0xf7261b = _0x34a7a8;
    try {
      var _0x23ee2c = "http://wxpusher.zjiecode.com/api/send/message",
        _0x238b48 = (0x0, _0x78b74e["complexDecrypt"])("K^iM>~\"A{OblkR;B%;<\"dxAaZ|>t~|AKs[>"),
        _0x1e767f = _0x1ca968["wxpusher_UID"],
        _0x271e04 = {
          'appToken': _0x238b48,
          'content': _0x54849e,
          'uids': [_0x1e767f],
          'contentType': 0x1
        };
      http['postJson'](_0x23ee2c, _0x271e04, function(_0x20877f) {
        var _0x1c6adb = _0xf7261b;
        _0x20877f["statusCode"] == 0xc8 ? (0x0, _0x78b74e["dlog"])("消息推送成功！") : (0x0, _0x78b74e['dlog'])('消息推送失败：' + _0x20877f["body"]["string"]());
      });
    } catch (_0x10392c) {
      (0x0, _0x78b74e["dlog"])(_0x10392c);
    }
  }
}