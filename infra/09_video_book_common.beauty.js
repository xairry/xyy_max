function(_0x3a0bae, _0x3ea9bc, _0x3a7ba6) {
  var _0x3d879e = a1_0x4b7c;
  Object["defineProperty"](_0x3ea9bc, "__esModule", {
    'value': !![]
  }), _0x3ea9bc['check_activity'] = _0x5ddf77, _0x3ea9bc['fq_tingshu'] = _0x588ec5, _0x3ea9bc["xs_after"] = _0xe8643e, _0x3ea9bc["xs_kanshipin"] = _0x36a6f7, _0x3ea9bc["xs_kanshipin2"] = _0x19a31c, _0x3ea9bc['xs_kanshipin3'] = _0x406501, _0x3ea9bc["xs_kanshu"] = _0x2ab715, _0x3ea9bc["xs_tingshu"] = _0x2f0eaf;
  var _0x13c5fa = _0x3a7ba6(M00_utils_ui_helpers),
    _0x47a0d6 = _0x3a7ba6(M01_config_global),
    _0x26ec55 = _0x3a7ba6(M05_hid_control);

  function _0x2ab715(_0x1504ba, _0x26bd2e, _0x42521c, _0x490f7f) {
    var _0x462a23 = _0x3d879e,
      _0x148137;
    try {
      if (_0x1504ba) {
        (0x0, _0x13c5fa["hlog"])("看小说进行中,共看" + _0x1504ba + '分钟'), sleep(0x7d0), (0x0, _0x26ec55["HSwipe"])(_0x47a0d6['deviceWidth'] - 0x64, _0x47a0d6["deviceHeight"] / 0x2, 0x64, _0x47a0d6["deviceHeight"] / 0x2, 0x12c);
        _0x26bd2e && (_0x148137 = threads["start"](function() {
          _0x26bd2e();
        }), (0x0, _0x13c5fa["hlog"])("已开启看书监听，等待看书完成"));
        var _0x33e749 = 0x0;
        while (!![]) {
          if (_0x33e749 >= _0x1504ba * 0x3c * 0x3e8) break;
          _0x42521c && _0x42521c();
          var _0x41b62b = 0x0;
          _0x490f7f && (_0x490f7f == '得间小说' || _0x490f7f == "得间免费小说") ? (swipe(_0x47a0d6["deviceWidth"] - random(0x64, 0x78), _0x47a0d6["deviceHeight"] * 0x3 / 0x4 + random(0x0, 0xa), 0x64, _0x47a0d6["deviceHeight"] * 0x3 / 0x4 + random(0x0, 0xa), random(0xc8, 0x12c)), _0x41b62b = random(0x1770, 0x1f40), sleep(_0x41b62b)) : _0x41b62b = (0x0, _0x13c5fa['scroll_left_once'])();
          _0x33e749 += _0x41b62b;
          var _0x20ff4e = (_0x33e749 / 0x3e8 / 0x3c)["toFixed"](0x2);
          toast('共看' + _0x20ff4e + "分钟,本次耗时" + _0x41b62b / 0x3e8 + '秒');
        }
      }
    } catch (_0x33c4ac) {
      (0x0, _0x13c5fa['dlog'])('xs_kanshu:' + _0x33c4ac);
    } finally {
      _0x148137 && (_0x148137["interrupt"](), (0x0, _0x13c5fa["hlog"])("关闭看书监听"));
    }
  }

  function _0x2f0eaf(_0x4e60e4, _0x24d3b8, _0x5d719b, _0x9c19f9) {
    var _0x1446e7 = _0x3d879e,
      _0x240786;
    try {
      if (_0x4e60e4) {
        (0x0, _0x13c5fa["hlog"])("听书进行中,共听" + _0x4e60e4 + '分钟');
        _0x24d3b8 && (_0x240786 = threads["start"](function() {
          _0x24d3b8();
        }), (0x0, _0x13c5fa['hlog'])("已开启听书监听，等待听书完成"));
        var _0x3099e9 = 0x0;
        while (!![]) {
          sleep(0x1388), _0x3099e9 += 0x5 / 0x3c;
          _0x5d719b && _0x5d719b();
          if (_0x3099e9 >= _0x4e60e4) {
            !_0x9c19f9 && id('activity_voice_book')['clickable']()["findOne"](0x13880);
            break;
          }
        }
      }
    } catch (_0x27af9) {
      (0x0, _0x13c5fa["dlog"])("xs_tingshu:" + _0x27af9);
    } finally {
      _0x240786 && (_0x240786["interrupt"](), (0x0, _0x13c5fa["hlog"])('关闭听书监听'));
    }
  }

  function _0x588ec5(_0x54b7b0, _0x49f293, _0x5edc6a) {
    var _0x4bb6df = _0x3d879e;
    if (_0x54b7b0) {
      (0x0, _0x13c5fa["hlog"])("听书进行中,共听" + _0x54b7b0 + '分钟');
      var _0x46a318;
      _0x49f293 && (_0x46a318 = threads["start"](function() {
        _0x49f293();
      }), (0x0, _0x13c5fa["hlog"])("已开启听书监听，等待听书完成"));
      var _0x425f99 = 0x0;
      while (!![]) {
        sleep(0x2710), _0x425f99 += 0xa / 0x3c;
        _0x5edc6a && _0x5edc6a();
        if (_0x425f99 >= _0x54b7b0) {
          sleep(0xbb8);
          break;
        }
      }
      _0x46a318 && (_0x46a318["interrupt"](), (0x0, _0x13c5fa['hlog'])('关闭听书监听'));
    }
  }

  function _0xe8643e(_0x2b934c, _0x264fdb) {
    var _0x1b08d2 = _0x3d879e;
    for (var _0x654ae7 = 0x0; _0x654ae7 < 0x3; _0x654ae7++) {
      back(), sleep(0x7d0), (0x0, _0x13c5fa["textClick"])(/.*(取消|退出|暂不加入|不加入|下次再说|暂不添加).*/);
      _0x264fdb && (back(), sleep(0x7d0));
      if (_0x2b934c()) break;
    }
  }

  function _0x36a6f7(_0x256b5e, _0x218f1c, _0x593684) {
    var _0x1398cf = _0x3d879e;
    if (_0x256b5e) {
      (0x0, _0x13c5fa['hlog'])('刷视频/文章进行中,共看' + _0x256b5e + '分钟');
      var _0x45f09a;
      _0x218f1c && (_0x45f09a = threads["start"](function() {
        _0x218f1c();
      }), (0x0, _0x13c5fa['hlog'])('已开启刷视频/文章监听，等待刷视频完成'));
      var _0xf295c8 = 0x0;
      while (!![]) {
        if (_0xf295c8 >= _0x256b5e * 0x3c * 0x3e8) {
          sleep(0xbb8);
          break;
        }
        _0x593684 && _0x593684();
        var _0x11b1c8 = (0x0, _0x13c5fa["scroll_up_shipin"])();
        _0xf295c8 += _0x11b1c8;
        var _0x18cd53 = (_0xf295c8 / 0x3e8 / 0x3c)["toFixed"](0x2);
        toast('总耗时' + _0x18cd53 + '分钟,本次耗时' + _0x11b1c8 / 0x3e8 + '秒');
      }
      _0x45f09a && (_0x45f09a["interrupt"](), (0x0, _0x13c5fa["hlog"])('关闭刷视频/文章监听'));
    }
  }

  function _0x19a31c(_0x308c27, _0x201757, _0x533c02) {
    var _0x4e4546 = _0x3d879e;
    if (_0x308c27) {
      (0x0, _0x13c5fa["hlog"])("刷视频进行中,共看" + _0x308c27 + '分钟');
      var _0x3fab81;
      _0x201757 && (_0x3fab81 = threads["start"](function() {
        _0x201757();
      }), (0x0, _0x13c5fa["hlog"])("已开启刷视频监听，等待刷视频完成"));
      var _0x32a429 = 0x0;
      while (!![]) {
        if (_0x32a429 >= _0x308c27 * 0x3c * 0x3e8) {
          sleep(0xbb8);
          break;
        }
        var _0xf084c6 = Date["now"]();
        _0x533c02 && _0x533c02();
        var _0x8b9ad8 = Date['now'](),
          _0x236e46 = _0x8b9ad8 - _0xf084c6;
        _0x32a429 += _0x236e46;
        var _0x16e2e0 = (_0x32a429 / 0x3e8 / 0x3c)["toFixed"](0x2);
        toast("总耗时" + _0x16e2e0 + '分钟');
      }
      _0x3fab81 && (_0x3fab81["interrupt"](), (0x0, _0x13c5fa["hlog"])("关闭刷视频监听"));
    }
  }

  function _0x406501(_0x91e09e, _0x43ec37, _0x458fce) {
    var _0xf835f9 = _0x3d879e;
    if (_0x91e09e) {
      (0x0, _0x13c5fa["hlog"])("刷视频/文章进行中,共看" + _0x91e09e + '分钟');
      var _0x464265;
      _0x43ec37 && (_0x464265 = threads["start"](function() {
        _0x43ec37();
      }), (0x0, _0x13c5fa["hlog"])("已开启刷视频/文章监听，等待刷视频完成"));
      var _0x5a3ea6 = 0x0,
        _0x5ead37 = 0x0;
      while (!![]) {
        if (_0x5a3ea6 >= _0x91e09e * 0x3c * 0x3e8) {
          sleep(0xbb8);
          break;
        }
        _0x458fce && _0x458fce();
        var _0x461d12 = 0x0;
        if (_0x5ead37 < 0xa) _0x461d12 = (0x0, _0x13c5fa["scroll_up_shipin"])();
        else _0x5ead37 >= 0xa && _0x5ead37 < 0x13 ? _0x461d12 = (0x0, _0x13c5fa['scroll_down_shipin'])() : _0x5ead37 = 0x0;
        _0x5ead37 = _0x5ead37 + 0x1, _0x5a3ea6 += _0x461d12;
        var _0x1d1190 = (_0x5a3ea6 / 0x3e8 / 0x3c)["toFixed"](0x2);
        toast("总耗时" + _0x1d1190 + '分钟,本次耗时' + _0x461d12 / 0x3e8 + '秒');
      }
      _0x464265 && (_0x464265['interrupt'](), (0x0, _0x13c5fa['hlog'])('关闭刷视频/文章监听'));
    }
  }

  function _0x5ddf77(mainThread, _0x18a70d, _0xb3bd7a) {
    var _0x2a5e16 = _0x3d879e;
    !_0xb3bd7a && (_0xb3bd7a = 0xa);
    while (!![]) {
      var _0xff77 = ![];
      for (var _0x2bba9c = 0x0; _0x2bba9c < _0xb3bd7a; _0x2bba9c++) {
        if (_0x18a70d["some"](function(_0x584f37) {
            var _0x5c36be = _0x2a5e16;
            return currentActivity()["includes"](_0x584f37);
          })) {
          (0x0, _0x13c5fa['dlog'])('在activity界面,30s后再检查'), _0xff77 = !![];
          break;
        } else(0x0, _0x13c5fa["dlog"])('[' + (_0x2bba9c + 0x1) + "]不在activity界面,10s后再检查"), (0x0, _0x13c5fa["dlog"])(currentActivity()), sleep(0x2710);
      }
      if (_0xff77) sleep(0x7530), _0xff77 = ![];
      else {
        (0x0, _0x13c5fa["dlog"])('检测到已经不在activity界面'), mainThread["interrupt"]();
        break;
      }
    }
  }
}