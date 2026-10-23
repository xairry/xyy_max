function(_0x240b6f, _0x563e29, _0x3b8c1d) {
  var _0x4ae869 = a1_0x4b7c,
    _0x2b07ee = _0x3b8c1d(M11_babel_interop);
  Object["defineProperty"](_0x563e29, '__esModule', {
    'value': !![]
  }), _0x563e29['HBack'] = _0x17bb23, _0x563e29['HCheckClick'] = _0x43f1d8, _0x563e29["HCheckClickXY"] = _0x36ca7b, _0x563e29['HClick'] = _0x2334df, _0x563e29["HFind"] = _0x3efe73, _0x563e29['HFindClick'] = _0x82b31b, _0x563e29['HFindClickXY'] = _0x487221, _0x563e29["HHome"] = _0x5983b6, _0x563e29["HRecents"] = _0x2a0c07, _0x563e29["HSwipe"] = _0x2800d2, _0x563e29["HSwipeDown"] = _0x193111, _0x563e29["HSwipeUp"] = _0x2f274d;
  var _0x2772b1 = _0x2b07ee(_0x3b8c1d(M15_hid_ble)),
    _0x2f8779 = _0x3b8c1d(M00_utils_ui_helpers),
    _0x2d1b36 = _0x3b8c1d(M01_config_global),
    _0x2f0f58 = _0x3b8c1d(M03_ocr_engine),
    _0x371a8a = typeof hid !== "undefined",
    _0x585999 = _0x371a8a ? hid : _0x2772b1["default"];

  function _0x5983b6() {
    var _0x4c053e = _0x4ae869;
    _0x2d1b36['hidMode'] ? _0x585999["home"]() : home();
    sleep(0x7d0);
    return;
  }

  function _0x11d47f() {
    var _0x2119c = _0x4ae869;
    return device["brand"]['toLowerCase']() === "oppo" || device["brand"]["toLowerCase"]() === "oneplus" || device["brand"]['toLowerCase']() === "realme";
  }

  function _0x2a0c07() {
    var _0x53a5b0 = _0x4ae869;
    _0x2d1b36["hidMode"] ? _0x11d47f() ? _0x371a8a ? hid["recentsV2"]() : _0x2800d2(_0x2d1b36['deviceWidth'] / 0x2, _0x2d1b36['deviceHeight'], _0x2d1b36["deviceWidth"] / 0x2, _0x2d1b36["deviceHeight"] * 0.8, 0x190) : _0x585999['recents']() : recents(), sleep(0x7d0);
  }

  function _0x17bb23() {
    var _0x5af79f = _0x4ae869;
    _0x2d1b36['hidMode'] ? _0x585999["back"]() : back(), sleep(0xbb8);
  }

  function _0x2334df(_0x4da8e8, _0x2ba6e4) {
    var _0x129d3d = _0x4ae869;
    _0x2d1b36["hidMode"] ? _0x371a8a ? hid["click"](_0x4da8e8, _0x2ba6e4, _0x2d1b36['deviceWidth'], _0x2d1b36['deviceHeight']) : _0x2772b1["default"]['click'](_0x4da8e8, _0x2ba6e4) : click(_0x4da8e8, _0x2ba6e4);
  }

  function _0x3efe73(_0x5ba0ca, _0x16f219) {
    var _0x437db4 = _0x4ae869;
    if (_0x2d1b36["hidMode"]) return _0x16f219 && sleep(_0x16f219), (0x0, _0x2f0f58['OCRText'])(_0x5ba0ca);
    else {
      if (_0x16f219) return textMatches(_0x5ba0ca)["findOne"](_0x16f219);
      return textMatches(_0x5ba0ca)["findOnce"]();
    }
  }

  function _0x82b31b(_0x4db85d, _0x20cf47) {
    var _0x4dc568 = _0x4ae869;
    if (_0x2d1b36["hidMode"]) return _0x20cf47 && sleep(_0x20cf47), (0x0, _0x2f0f58["OCRClick"])(_0x4db85d);
    else {
      var _0x500069;
      return _0x20cf47 ? _0x500069 = textMatches(_0x4db85d)["findOne"](_0x20cf47) : _0x500069 = textMatches(_0x4db85d)["findOnce"](), (0x0, _0x2f8779['cClick'])(_0x500069);
    }
  }

  function _0x487221(_0x6dc5f4, _0x9f59f9) {
    var _0x4a7e69 = _0x4ae869;
    if (_0x2d1b36["hidMode"]) return _0x9f59f9 && sleep(_0x9f59f9), (0x0, _0x2f0f58["OCRClick"])(_0x6dc5f4);
    else {
      var _0x4d7baf;
      return _0x9f59f9 ? _0x4d7baf = textMatches(_0x6dc5f4)["findOne"](_0x9f59f9) : _0x4d7baf = textMatches(_0x6dc5f4)["findOnce"](), (0x0, _0x2f8779['pClick'])(_0x4d7baf);
    }
  }

  function _0x43f1d8(_0x4be4d9, _0x3d65e6) {
    var _0x245829 = _0x4ae869;
    if (_0x2d1b36["hidMode"]) {
      if ((0x0, _0x2f0f58['OCRText'])(_0x4be4d9)) return (0x0, _0x2f0f58["OCRClick"])(_0x3d65e6);
    } else {
      var _0x31749d = textMatches(_0x4be4d9)["findOnce"]();
      if (_0x31749d) return (0x0, _0x2f8779["textClick"])(_0x3d65e6);
    }
  }

  function _0x36ca7b(_0x520339, _0x447ff2) {
    var _0x2746b5 = _0x4ae869;
    if (_0x2d1b36["hidMode"]) {
      if ((0x0, _0x2f0f58["OCRText"])(_0x520339)) return (0x0, _0x2f0f58['OCRClick'])(_0x447ff2);
    } else {
      var _0x579e23 = textMatches(_0x520339)["findOnce"]();
      if (_0x579e23) return (0x0, _0x2f8779["textClickXY"])(_0x447ff2);
    }
  }

  function _0x2800d2(_0x314d53, _0x886010, _0xa4ad57, _0x1a552b, _0x588cf0) {
    var _0x4a0b0c = _0x4ae869;
    _0x2d1b36["hidMode"] ? (_0x585999["swipe"](_0x314d53, _0x886010, _0xa4ad57, _0x1a552b, _0x588cf0, _0x2d1b36['deviceWidth'], _0x2d1b36["deviceHeight"]), sleep(0x1f4)) : swipe(_0x314d53, _0x886010, _0xa4ad57, _0x1a552b, _0x588cf0);
  }

  function _0x2f274d() {
    var _0x1957a5 = _0x4ae869;
    _0x2d1b36["hidMode"] ? (_0x585999["swipe"](random(_0x2d1b36["deviceWidth"] / 0x2 - 0x64, _0x2d1b36["deviceWidth"] / 0x2 + 0x64), random(_0x2d1b36["deviceHeight"] * 0.75, _0x2d1b36["deviceHeight"] * 0.9), _0x2d1b36["deviceWidth"] / 0x2, random(_0x2d1b36["deviceHeight"] * 0.2, _0x2d1b36["deviceHeight"] * 0.25), random(0x2bc, 0x3e8), _0x2d1b36["deviceWidth"], _0x2d1b36["deviceHeight"]), sleep(0x1f4)) : swipe(random(_0x2d1b36["deviceWidth"] / 0x2 - 0x64, _0x2d1b36['deviceWidth'] / 0x2 + 0x64), random(_0x2d1b36["deviceHeight"] * 0.75, _0x2d1b36["deviceHeight"] * 0.9), _0x2d1b36['deviceWidth'] / 0x2, random(_0x2d1b36['deviceHeight'] * 0.2, _0x2d1b36["deviceHeight"] * 0.25), random(0x12c, 0x190));
  }

  function _0x193111() {
    var _0x3231c0 = _0x4ae869;
    _0x2d1b36['hidMode'] ? (_0x585999["swipe"](random(_0x2d1b36["deviceWidth"] / 0x2 - 0x64, _0x2d1b36["deviceWidth"] / 0x2 + 0x64), random(_0x2d1b36["deviceHeight"] * 0.2, _0x2d1b36["deviceHeight"] * 0.25), _0x2d1b36["deviceWidth"] / 0x2, random(_0x2d1b36["deviceHeight"] * 0.75, _0x2d1b36["deviceHeight"] * 0.9), random(0x2bc, 0x3e8), _0x2d1b36["deviceWidth"], _0x2d1b36['deviceHeight']), sleep(0x1f4)) : swipe(random(_0x2d1b36["deviceWidth"] / 0x2 - 0x64, _0x2d1b36['deviceWidth'] / 0x2 + 0x64), random(_0x2d1b36["deviceHeight"] * 0.2, _0x2d1b36["deviceHeight"] * 0.25), _0x2d1b36["deviceWidth"] / 0x2, random(_0x2d1b36["deviceHeight"] * 0.75, _0x2d1b36["deviceHeight"] * 0.9), random(0x12c, 0x190));
  }
}