function(_0x38b463, _0x28f3e6, _0xeed951) {
  var _0x12f2de = a1_0x4b7c,
    _0x2f7fa6 = _0xeed951(M11_babel_interop);
  Object['defineProperty'](_0x28f3e6, "__esModule", {
    'value': !![]
  }), _0x28f3e6["default"] = _0x28f3e6["KEY"] = _0x28f3e6['HID'] = _0x28f3e6["CONSUMER"] = void 0x0;
  var _0x5e5bb9 = _0x2f7fa6(_0xeed951(M16_babel_define_property)),
    _0x47c967 = _0xeed951(M00_utils_ui_helpers);

  function _0x559b53(_0x3610bd, _0x451998) {
    var _0x534000 = _0x12f2de,
      _0x2dd455 = Object["keys"](_0x3610bd);
    if (Object["getOwnPropertySymbols"]) {
      var _0x5d4668 = Object['getOwnPropertySymbols'](_0x3610bd);
      _0x451998 && (_0x5d4668 = _0x5d4668["filter"](function(_0x3037b1) {
        var _0x248b41 = _0x534000;
        return Object["getOwnPropertyDescriptor"](_0x3610bd, _0x3037b1)["enumerable"];
      })), _0x2dd455["push"]["apply"](_0x2dd455, _0x5d4668);
    }
    return _0x2dd455;
  }

  function _0x5e7655(_0x55c2bf) {
    var _0x1f30b4 = _0x12f2de;
    for (var _0x10ad4f = 0x1; _0x10ad4f < arguments['length']; _0x10ad4f++) {
      var _0x14d3ae = null != arguments[_0x10ad4f] ? arguments[_0x10ad4f] : {};
      _0x10ad4f % 0x2 ? _0x559b53(Object(_0x14d3ae), !0x0)["forEach"](function(_0x5e3b76) {
        var _0x2d75a9 = _0x1f30b4;
        (0x0, _0x5e5bb9["default"])(_0x55c2bf, _0x5e3b76, _0x14d3ae[_0x5e3b76]);
      }) : Object["getOwnPropertyDescriptors"] ? Object['defineProperties'](_0x55c2bf, Object["getOwnPropertyDescriptors"](_0x14d3ae)) : _0x559b53(Object(_0x14d3ae))["forEach"](function(_0x3b7319) {
        var _0x2fdffe = _0x1f30b4;
        Object["defineProperty"](_0x55c2bf, _0x3b7319, Object["getOwnPropertyDescriptor"](_0x14d3ae, _0x3b7319));
      });
    }
    return _0x55c2bf;
  }
  var _0x170e71 = "00001812-0000-1000-8000-00805f9b34fb",
    _0x3b9245 = '00002a32-0000-1000-8000-00805f9b34fb',
    _0x5ea49f = 0x2,
    _0x3b8bb2 = 0x4,
    _0x996387 = 0x1,
    _0x390141 = 0x2,
    _0x388208 = 0xf,
    _0x67dc4 = _0x28f3e6["KEY"] = {
      'BACKSPACE': 0x2a,
      'TAB': 0x2b,
      'ENTER': 0x28,
      'ESC': 0x29,
      'SPACE': 0x2c,
      'DELETE': 0x4c,
      'POWER': 0x66,
      'CAPSLOCK': 0x39,
      'HOME': 0x4a,
      'END': 0x4d,
      'PAGE_UP': 0x4b,
      'PAGE_DOWN': 0x4e,
      'RIGHT': 0x4f,
      'LEFT': 0x50,
      'DOWN': 0x51,
      'UP': 0x52
    },
    _0x9bab0b = _0x28f3e6["CONSUMER"] = {
      'VOLUME_UP': 0x1,
      'VOLUME_DOWN': 0x2,
      'PLAY_PAUSE': 0x3,
      'PREV_TRACK': 0x4,
      'NEXT_TRACK': 0x5,
      'HOME': 0x6,
      'BACK': 0x7,
      'RECENTS': 0x8,
      'STOP': 0x20,
      'EJECT': 0x40
    },
    _0x285b67 = ![],
    _0x45ee10 = null,
    _0x5c9216 = null,
    _0x2ea4e2 = null,
    _0xf6980 = null,
    _0x1c5656 = {
      'deviceName': 'ZHUAN_MI_HID',
      'autoReconnect': !![],
      'connectionTimeout': 0x4e20
    };

  function _0xca39c7(_0x1d8258) {
    var _0x24091a = _0x12f2de;
    if (_0x1d8258) {
      if (_0x1d8258['deviceName']) _0x1c5656['deviceName'] = _0x1d8258['deviceName'];
      if (typeof _0x1d8258["autoReconnect"] === "boolean") _0x1c5656['autoReconnect'] = _0x1d8258["autoReconnect"];
      if (_0x1d8258["connectionTimeout"]) _0x1c5656["connectionTimeout"] = _0x1d8258["connectionTimeout"];
    }
    return _0x5e7655({}, _0x1c5656);
  }

  function _0x163b76(_0x11aa1b) {
    var _0x4031d0 = _0x12f2de,
      _0xeb6d9 = [];
    for (var _0x34cce4 = 0x0; _0x34cce4 < _0x11aa1b["length"]; _0x34cce4++) {
      var _0x356522 = _0x11aa1b[_0x34cce4] & 0xff;
      _0x356522 = _0x356522["toString"](0x10);
      if (_0x356522["length"] === 0x1) _0x356522 = '0' + _0x356522;
      _0xeb6d9['push'](_0x356522);
    }
    return '[' + _0xeb6d9["join"](',\x20') + ']';
  }

  function _0x3a85ce() {
    var _0x4885e9 = _0x12f2de,
      _0x3ef234 = ["android.permission.ACCESS_FINE_LOCATION", "android.permission.ACCESS_COARSE_LOCATION", "android.permission.BLUETOOTH", "android.permission.BLUETOOTH_ADMIN"];
    android['os']["Build"]['VERSION']["SDK_INT"] >= 0x1f && (_0x3ef234["push"]('android.permission.BLUETOOTH_SCAN'), _0x3ef234["push"]("android.permission.BLUETOOTH_CONNECT"), _0x3ef234["push"]("android.permission.BLUETOOTH_ADVERTISE"));
    var _0x4afab1 = [];
    for (var _0x51af61 = 0x0; _0x51af61 < _0x3ef234['length']; _0x51af61++) {
      var _0x390b4e = _0x3ef234[_0x51af61];
      context["checkSelfPermission"](_0x390b4e) !== android["content"]['pm']['PackageManager']['PERMISSION_GRANTED'] && _0x4afab1['push'](_0x390b4e);
    }
    _0x4afab1["length"] > 0x0 && (runtime['requestPermissions'](_0x4afab1), sleep(0x7d0));
    var _0xe8df73 = android["bluetooth"]['BluetoothAdapter'],
      _0x15f16c = _0xe8df73["getDefaultAdapter"]();
    if (!_0x15f16c) return (0x0, _0x47c967['dlog'])("错误: 设备不支持蓝牙"), ![];
    return !_0x15f16c["isEnabled"]() && ((0x0, _0x47c967["dlog"])("蓝牙未启用，尝试开启..."), _0x15f16c["enable"](), sleep(0x7d0)), !![];
  }

  function _0x4bb611(_0x391bcc, _0x57b3b5) {
    var _0x217951 = _0x12f2de;
    _0x57b3b5 = _0x57b3b5 || 0x2710, _0x430685();
    var _0x2de156 = android["bluetooth"]["BluetoothAdapter"],
      _0xc70fea = _0x2de156["getDefaultAdapter"](),
      _0x4e5d21 = _0xc70fea["getBondedDevices"](),
      _0x132d7a = ![];
    if (_0x4e5d21["size"]() > 0x0) {
      var _0xa98cfa = _0x4e5d21["iterator"]();
      while (_0xa98cfa['hasNext']()) {
        var _0x55e747 = _0xa98cfa["next"](),
          _0x269a44 = _0x55e747["getName"]();
        (0x0, _0x47c967["dlog"])("已配对设备: " + _0x269a44);
        if (_0x269a44 && (_0x269a44["indexOf"](_0x391bcc) === 0x0 || _0x269a44['indexOf']("HID_") == 0x0)) {
          var _0x1e7dab = _0x55e747["getUuids"]();
          if (_0x1e7dab)
            for (var _0x1b0ae7 = 0x0; _0x1b0ae7 < _0x1e7dab["length"]; _0x1b0ae7++) {
              var _0x1b118d = _0x1e7dab[_0x1b0ae7]["toString"]()["toUpperCase"]();
              if (_0x1b118d === _0x170e71["toUpperCase"]()) {
                (0x0, _0x47c967['dlog'])(_0x55e747["getBondState"]());
                if (_0x55e747['getBondState']() === android["bluetooth"]["BluetoothDevice"]['BOND_BONDED']) {
                  _0x3b5b51(_0x55e747), _0x132d7a = !![];
                  break;
                }
              }
            }
        }
      }
    }!_0x132d7a && ((0x0, _0x47c967["dlog"])('未在已配对设备中找到，开始蓝牙扫描...'), _0x5b4e00(_0x391bcc, _0x57b3b5));
    var _0x2da4fa = 0x0,
      _0x51e758 = 0x1f4;
    while (!_0x285b67 && _0x2da4fa < _0x57b3b5) {
      sleep(_0x51e758), _0x2da4fa += _0x51e758;
    }
    return !_0x285b67 && _0x430685(), _0x285b67;
  }

  function _0x5b4e00(_0x131474, _0x3b66d0) {
    var _0x51a6f1 = _0x12f2de,
      _0x68ba65 = android["bluetooth"]["BluetoothAdapter"],
      _0x457f74 = _0x68ba65["getDefaultAdapter"](),
      _0xfc5b3e = _0x457f74["getBluetoothLeScanner"]();
    if (!_0xfc5b3e) return (0x0, _0x47c967["dlog"])('BLE扫描器不可用'), ![];
    _0xf6980 = new JavaAdapter(android["bluetooth"]['le']["ScanCallback"], {
      'onScanResult': function _0x5cd9e9(_0x443c7c, _0x497e43) {
        var _0x23aeb5 = _0x51a6f1,
          _0x4e8908 = _0x497e43["getDevice"](),
          _0x1610ac = _0x4e8908["getName"]();
        _0x1610ac && _0x1610ac['indexOf'](_0x131474) === 0x0 && ((0x0, _0x47c967["dlog"])("扫描找到设备: " + _0x1610ac), _0x430685(), _0x3b5b51(_0x4e8908));
      },
      'onScanFailed': function _0xb7d384(_0x383163) {
        var _0x1b5943 = _0x51a6f1;
        (0x0, _0x47c967["dlog"])("扫描失败: " + _0x383163);
      }
    });
    var _0x9e4593 = android['bluetooth']['le']["ScanSettings"],
      _0x5c91be = new _0x9e4593['Builder']();
    _0x5c91be["setScanMode"](_0x9e4593["SCAN_MODE_LOW_LATENCY"]);
    var _0x28293a = _0x5c91be["build"]();
    try {
      return _0xfc5b3e['startScan'](new java[("util")][("ArrayList")](), _0x28293a, _0xf6980), (0x0, _0x47c967["dlog"])("扫描开始，请等待..."), setTimeout(function() {
        var _0x2857f4 = _0x51a6f1;
        _0x430685(), !_0x285b67 && (0x0, _0x47c967["dlog"])('设备未找到，扫描超时');
      }, _0x3b66d0), !![];
    } catch (_0x1987e3) {
      return (0x0, _0x47c967["dlog"])("开始扫描时出错: " + _0x1987e3), ![];
    }
  }

  function _0x430685() {
    var _0xde8b7d = _0x12f2de;
    if (_0xf6980) try {
      var _0x2fd53c = android["bluetooth"]['BluetoothAdapter'],
        _0x56dcb9 = _0x2fd53c['getDefaultAdapter'](),
        _0x537936 = _0x56dcb9["getBluetoothLeScanner"]();
      _0x537936 && (_0x537936['stopScan'](_0xf6980), (0x0, _0x47c967["dlog"])("停止扫描"));
    } catch (_0x2c4dc3) {
      (0x0, _0x47c967["dlog"])("停止扫描时出错: " + _0x2c4dc3);
    }
  }

  function _0x3b5b51(_0xfd7d5c) {
    var _0x2749a0 = _0x12f2de;
    bluetoothDevice = _0xfd7d5c;
    var _0x3e1438 = new JavaAdapter(android['bluetooth']["BluetoothGattCallback"], {
      'onConnectionStateChange': function _0x9ab82(_0x49bb8b, _0x2a21e4, _0x1099ac) {
        var _0xe89352 = _0x2749a0;
        _0x45ee10 = _0x49bb8b;
        if (_0x2a21e4 === 0x0) {
          if (_0x1099ac === 0x2) {
            var _0x54a947 = _0x49bb8b["discoverServices"]();
            !_0x54a947 && (0x0, _0x47c967["dlog"])('发现服务请求失败');
          } else _0x1099ac === 0x0 && (_0x285b67 = ![], (0x0, _0x47c967["dlog"])("设备已断开连接"));
        }
      },
      'onServicesDiscovered': function _0x31cd8e(_0xb2010f, _0x29b230) {
        var _0x3c1b0f = _0x2749a0;
        if (_0x29b230 === 0x0) {
          var _0x115e02 = _0xb2010f['getServices']();
          for (var _0x13fd38 = 0x0; _0x13fd38 < _0x115e02["size"](); _0x13fd38++) {
            var _0x39d024 = _0x115e02["get"](_0x13fd38),
              _0x17328f = _0x39d024['getUuid']()["toString"]();
            if (_0x17328f["toUpperCase"]() === _0x170e71["toUpperCase"]()) {
              _0x5c9216 = _0x39d024;
              break;
            }
          }
          if (_0x5c9216) {
            var _0x314d62 = _0x5c9216["getCharacteristics"]();
            for (var _0x482d73 = 0x0; _0x482d73 < _0x314d62["size"](); _0x482d73++) {
              var _0x5b8945 = _0x314d62['get'](_0x482d73),
                _0x44d351 = _0x5b8945["getUuid"]()["toString"]();
              if (_0x44d351["toUpperCase"]() === _0x3b9245["toUpperCase"]()) {
                _0x2ea4e2 = _0x5b8945;
                break;
              }
            }
            _0x2ea4e2 ? (_0x285b67 = !![], (0x0, _0x47c967["dlog"])("连接成功，可以使用HID功能了")) : (0x0, _0x47c967["dlog"])("未找到输出报告特性，无法发送命令");
          } else(0x0, _0x47c967['dlog'])("未找到HID服务");
        }
      }
    });
    try {
      _0xfd7d5c["connectGatt"](context, ![], _0x3e1438);
    } catch (_0x2f6419) {
      (0x0, _0x47c967["dlog"])("连接HID失败，请手动连接");
    }
  }

  function _0xd7ee9f() {
    var _0x2070fd = _0x12f2de;
    if (_0x45ee10) try {
      _0x45ee10["disconnect"](), _0x45ee10['close'](), _0x45ee10 = null, _0x285b67 = ![], _0x2ea4e2 = null, _0x5c9216 = null, (0x0, _0x47c967["dlog"])("已断开连接");
    } catch (_0x30a028) {
      (0x0, _0x47c967['dlog'])("断开连接时出错: " + _0x30a028);
    }
    return !_0x285b67;
  }

  function _0x1b61b8() {
    return _0x285b67;
  }

  function _0x544361(_0xa098c5) {
    var _0x3f4b73 = _0x12f2de;
    if (!_0x285b67 || !_0x2ea4e2) return ![];
    var _0x1ebc37 = util["java"]["array"]("byte", 0x2);
    _0x1ebc37[0x0] = _0x5ea49f, _0x1ebc37[0x1] = _0xa098c5;
    try {
      _0x2ea4e2["setValue"](_0x1ebc37), _0x2ea4e2["setWriteType"](android["bluetooth"]["BluetoothGattCharacteristic"]["WRITE_TYPE_DEFAULT"]);
      var _0x2f43e4 = _0x45ee10["writeCharacteristic"](_0x2ea4e2);
      return _0x2f43e4;
    } catch (_0x3cce96) {
      return toastLog("HID未连接,请连接..." + _0x3cce96), ![];
    }
  }

  function _0x5f3fbf(_0x5e46fe) {
    var _0x5d7e26 = _0x12f2de;
    if (!_0x285b67 || !_0x2ea4e2) return ![];
    if (!_0x5e46fe || !Array["isArray"](_0x5e46fe) || _0x5e46fe["length"] === 0x0) return (0x0, _0x47c967["dlog"])("无效的组合按键参数: keys必须是非空数组"), ![];
    var _0xb65a08 = 0x3 + _0x5e46fe['length'],
      _0x26d59f = util["java"]["array"]("byte", _0xb65a08);
    _0x26d59f[0x0] = _0x5ea49f, _0x26d59f[0x1] = _0x388208, _0x26d59f[0x2] = _0x5e46fe['length'];
    for (var _0x1141e2 = 0x0; _0x1141e2 < _0x5e46fe["length"]; _0x1141e2++) {
      var _0x222a50 = _0x5e46fe[_0x1141e2];
      _0x26d59f[0x3 + _0x1141e2] = _0x222a50 > 0x7f ? _0x222a50 - 0x100 : _0x222a50;
    }(0x0, _0x47c967["dlog"])("发送组合按键命令: " + _0x163b76(_0x26d59f));
    try {
      _0x2ea4e2['setValue'](_0x26d59f), _0x2ea4e2["setWriteType"](android["bluetooth"]["BluetoothGattCharacteristic"]["WRITE_TYPE_DEFAULT"]);
      var _0x3761cf = _0x45ee10["writeCharacteristic"](_0x2ea4e2);
      return (0x0, _0x47c967['dlog'])('组合按键写入状态:\x20' + _0x3761cf), _0x3761cf;
    } catch (_0x136813) {
      return toastLog("HID未连接,请连接..." + _0x136813), ![];
    }
  }

  function _0x331532(_0x12e854, _0x4e3e88, _0x45d367, _0x5e9a75, _0x1c705e) {
    var _0x6c3303 = _0x12f2de;
    if (!_0x285b67 || !_0x2ea4e2) return ![];
    var _0x1128a3 = util['java']['array']("byte", 0xc);
    _0x1128a3[0x0] = _0x3b8bb2, _0x1128a3[0x1] = _0x996387;
    var _0x450bd9 = _0x12e854 >> 0x8 & 0xff,
      _0x617bb8 = _0x12e854 & 0xff;
    _0x1128a3[0x2] = _0x450bd9 > 0x7f ? _0x450bd9 - 0x100 : _0x450bd9, _0x1128a3[0x3] = _0x617bb8 > 0x7f ? _0x617bb8 - 0x100 : _0x617bb8;
    var _0xce9f76 = _0x4e3e88 >> 0x8 & 0xff,
      _0x1b0a8f = _0x4e3e88 & 0xff;
    _0x1128a3[0x4] = _0xce9f76 > 0x7f ? _0xce9f76 - 0x100 : _0xce9f76, _0x1128a3[0x5] = _0x1b0a8f > 0x7f ? _0x1b0a8f - 0x100 : _0x1b0a8f;
    var _0x4e8574 = _0x45d367 >> 0x8 & 0xff,
      _0x2da5b3 = _0x45d367 & 0xff;
    _0x1128a3[0x6] = _0x4e8574 > 0x7f ? _0x4e8574 - 0x100 : _0x4e8574, _0x1128a3[0x7] = _0x2da5b3 > 0x7f ? _0x2da5b3 - 0x100 : _0x2da5b3;
    var _0x1f0606 = _0x5e9a75 >> 0x8 & 0xff,
      _0x254fab = _0x5e9a75 & 0xff;
    _0x1128a3[0x8] = _0x1f0606 > 0x7f ? _0x1f0606 - 0x100 : _0x1f0606, _0x1128a3[0x9] = _0x254fab > 0x7f ? _0x254fab - 0x100 : _0x254fab;
    var _0x1ea8b0 = _0x1c705e >> 0x8 & 0xff,
      _0x8c48c1 = _0x1c705e & 0xff;
    _0x1128a3[0xa] = _0x1ea8b0 > 0x7f ? _0x1ea8b0 - 0x100 : _0x1ea8b0, _0x1128a3[0xb] = _0x8c48c1 > 0x7f ? _0x8c48c1 - 0x100 : _0x8c48c1;
    try {
      _0x2ea4e2["setValue"](_0x1128a3), _0x2ea4e2['setWriteType'](android["bluetooth"]['BluetoothGattCharacteristic']["WRITE_TYPE_NO_RESPONSE"]);
      var _0x465793 = _0x45ee10["writeCharacteristic"](_0x2ea4e2);
      return _0x465793;
    } catch (_0x1e0fb0) {
      return toastLog('HID未连接,请连接...' + _0x1e0fb0), ![];
    }
  }

  function _0x4caba0(_0x577428, _0xaeabb0, _0x4a13e7, _0xd743a6, _0x51cb71, _0x5ef9c2, _0x132912) {
    var _0x2cf6d5 = _0x12f2de;
    if (!_0x285b67 || !_0x2ea4e2) return ![];
    var _0x2c4e68 = util["java"]["array"]("byte", 0x10);
    _0x2c4e68[0x0] = _0x3b8bb2, _0x2c4e68[0x1] = _0x390141;
    var _0x2e6558 = _0x577428 >> 0x8 & 0xff,
      _0x4e0577 = _0x577428 & 0xff;
    _0x2c4e68[0x2] = _0x2e6558 > 0x7f ? _0x2e6558 - 0x100 : _0x2e6558, _0x2c4e68[0x3] = _0x4e0577 > 0x7f ? _0x4e0577 - 0x100 : _0x4e0577;
    var _0x3919a3 = _0xaeabb0 >> 0x8 & 0xff,
      _0x5ecf3a = _0xaeabb0 & 0xff;
    _0x2c4e68[0x4] = _0x3919a3 > 0x7f ? _0x3919a3 - 0x100 : _0x3919a3, _0x2c4e68[0x5] = _0x5ecf3a > 0x7f ? _0x5ecf3a - 0x100 : _0x5ecf3a;
    var _0x13a188 = _0x4a13e7 >> 0x8 & 0xff,
      _0x39dfc0 = _0x4a13e7 & 0xff;
    _0x2c4e68[0x6] = _0x13a188 > 0x7f ? _0x13a188 - 0x100 : _0x13a188, _0x2c4e68[0x7] = _0x39dfc0 > 0x7f ? _0x39dfc0 - 0x100 : _0x39dfc0;
    var _0x4c90d2 = _0xd743a6 >> 0x8 & 0xff,
      _0x44f1b9 = _0xd743a6 & 0xff;
    _0x2c4e68[0x8] = _0x4c90d2 > 0x7f ? _0x4c90d2 - 0x100 : _0x4c90d2, _0x2c4e68[0x9] = _0x44f1b9 > 0x7f ? _0x44f1b9 - 0x100 : _0x44f1b9;
    var _0x5176cc = _0x51cb71 >> 0x8 & 0xff,
      _0x515285 = _0x51cb71 & 0xff;
    _0x2c4e68[0xa] = _0x5176cc > 0x7f ? _0x5176cc - 0x100 : _0x5176cc, _0x2c4e68[0xb] = _0x515285 > 0x7f ? _0x515285 - 0x100 : _0x515285;
    var _0x3ef4d4 = _0x5ef9c2 >> 0x8 & 0xff,
      _0xf85f90 = _0x5ef9c2 & 0xff;
    _0x2c4e68[0xc] = _0x3ef4d4 > 0x7f ? _0x3ef4d4 - 0x100 : _0x3ef4d4, _0x2c4e68[0xd] = _0xf85f90 > 0x7f ? _0xf85f90 - 0x100 : _0xf85f90;
    var _0x4171ef = _0x132912 >> 0x8 & 0xff,
      _0x53583e = _0x132912 & 0xff;
    _0x2c4e68[0xe] = _0x4171ef > 0x7f ? _0x4171ef - 0x100 : _0x4171ef, _0x2c4e68[0xf] = _0x53583e > 0x7f ? _0x53583e - 0x100 : _0x53583e;
    try {
      _0x2ea4e2["setValue"](_0x2c4e68), _0x2ea4e2["setWriteType"](android['bluetooth']["BluetoothGattCharacteristic"]['WRITE_TYPE_NO_RESPONSE']);
      var _0x35e015 = _0x45ee10["writeCharacteristic"](_0x2ea4e2);
      return _0x35e015;
    } catch (_0x2f9fec) {
      return toastLog('HID未连接,请连接...' + _0x2f9fec), ![];
    }
  }

  function _0x35076b(_0x1579ae) {
    var _0x394e1e = _0x12f2de;
    if (!_0x285b67 || !_0x2ea4e2 || !_0x1579ae) return ![];
    var _0x4503a6 = !![];
    for (var _0x1affab = 0x0; _0x1affab < _0x1579ae["length"]; _0x1affab++) {
      var _0x3a2365 = _0x1579ae["charCodeAt"](_0x1affab);
      if (_0x3a2365 > 0x0 && _0x3a2365 < 0x80) {
        var _0x33b57d = 0x0;
        if (_0x3a2365 >= 0x61 && _0x3a2365 <= 0x7a) _0x33b57d = _0x3a2365 - 0x61 + 0x4;
        else {
          if (_0x3a2365 >= 0x41 && _0x3a2365 <= 0x5a) _0x33b57d = _0x3a2365 - 0x41 + 0x4;
          else {
            if (_0x3a2365 >= 0x31 && _0x3a2365 <= 0x39) _0x33b57d = _0x3a2365 - 0x31 + 0x1e;
            else {
              if (_0x3a2365 == 0x30) _0x33b57d = 0x27;
              else {
                if (_0x3a2365 == 0x20) _0x33b57d = _0x67dc4["SPACE"];
                else continue;
              }
            }
          }
        }!_0x544361(_0x33b57d) && (_0x4503a6 = ![]), sleep(0x32);
      } else {}
    }
    return _0x4503a6;
  }

  function _0x34273b(_0x5ab105, _0x1a1d6c) {
    var _0x28f700 = _0x12f2de;
    if (_0x5ab105) _0x1c5656["deviceName"] = _0x5ab105;
    if (_0x1a1d6c) _0xca39c7(_0x1a1d6c);
    if (!_0x3a85ce()) return ![];
    if (!_0x4bb611(_0x1c5656["deviceName"], _0x1c5656["connectionTimeout"])) return ![];
    return _0x1c5656['autoReconnect'] && _0x26fa41(), !![];
  }
  var _0x2c95d9 = null;

  function _0x26fa41() {
    _0x2c95d9 && clearInterval(_0x2c95d9), _0x2c95d9 = setInterval(function() {
      var _0x27f877 = a1_0x4b7c;
      !_0x285b67 && _0x1c5656['autoReconnect'] && _0x4bb611(_0x1c5656["deviceName"], _0x1c5656['connectionTimeout']);
    }, 0x1388);
  }

  function _0x5cfbcb() {
    _0x2c95d9 && (clearInterval(_0x2c95d9), _0x2c95d9 = null);
  }

  function _0x2379e7() {
    return _0x5cfbcb(), _0x285b67 && _0xd7ee9f(), !![];
  }
  var _0x531e1b = _0x28f3e6["HID"] = {
      'init': _0x34273b,
      'setConfig': _0xca39c7,
      'release': _0x2379e7,
      'isConnected': function _0x315d9c() {
        return _0x285b67;
      },
      'sendKey': _0x544361,
      'sendText': _0x35076b,
      'keyCombination': _0x5f3fbf,
      'touchClick': _0x331532,
      'touchSlide': _0x4caba0,
      'back': function _0x446087() {
        var _0x5c6516 = _0x12f2de;
        return _0x544361(_0x9bab0b["BACK"]);
      },
      'home': function _0x12b56d() {
        var _0x1ad3e8 = _0x12f2de;
        return _0x544361(_0x9bab0b["HOME"]);
      },
      'recents': function _0x57a5f7() {
        var _0x4b5522 = _0x12f2de;
        return _0x544361(_0x9bab0b["RECENTS"]);
      },
      'volumeUp': function _0x403072() {
        var _0x148d4c = _0x12f2de;
        return _0x544361(_0x9bab0b["VOLUME_UP"]);
      },
      'volumeDown': function _0x4e10e9() {
        return _0x544361(_0x9bab0b['VOLUME_DOWN']);
      },
      'playPause': function _0x2e7a03() {
        var _0x666f3c = _0x12f2de;
        return _0x544361(_0x9bab0b["PLAY_PAUSE"]);
      },
      'prevTrack': function _0x216547() {
        var _0x5b8b80 = _0x12f2de;
        return _0x544361(_0x9bab0b["PREV_TRACK"]);
      },
      'nextTrack': function _0x32db90() {
        var _0x42099c = _0x12f2de;
        return _0x544361(_0x9bab0b["NEXT_TRACK"]);
      },
      'stop': function _0x21a757() {
        var _0x261fc1 = _0x12f2de;
        return _0x544361(_0x9bab0b["STOP"]);
      },
      'eject': function _0xc18450() {
        var _0x5a18aa = _0x12f2de;
        return _0x544361(_0x9bab0b["EJECT"]);
      },
      'enter': function _0x3ce01b() {
        return _0x544361(_0x67dc4['ENTER']);
      },
      'tab': function _0x5e5456() {
        var _0x377f0b = _0x12f2de;
        return _0x544361(_0x67dc4["TAB"]);
      },
      'esc': function _0x3f1d9a() {
        var _0x3b0b77 = _0x12f2de;
        return _0x544361(_0x67dc4["ESC"]);
      },
      'space': function _0x18a36c() {
        var _0x1c505d = _0x12f2de;
        return _0x544361(_0x67dc4["SPACE"]);
      },
      'backspace': function _0x4d42c7() {
        return _0x544361(_0x67dc4['BACKSPACE']);
      },
      'delete': function _0x3b2609() {
        var _0x713cfc = _0x12f2de;
        return _0x544361(_0x67dc4["DELETE"]);
      },
      'arrowUp': function _0x37679b() {
        return _0x544361(_0x67dc4['UP']);
      },
      'arrowDown': function _0x47ef2c() {
        var _0x380297 = _0x12f2de;
        return _0x544361(_0x67dc4["DOWN"]);
      },
      'arrowLeft': function _0x143723() {
        var _0x1f337f = _0x12f2de;
        return _0x544361(_0x67dc4["LEFT"]);
      },
      'arrowRight': function _0x3e1396() {
        var _0x450c29 = _0x12f2de;
        return _0x544361(_0x67dc4["RIGHT"]);
      },
      'pageUp': function _0x139218() {
        var _0xc8adfc = _0x12f2de;
        return _0x544361(_0x67dc4["PAGE_UP"]);
      },
      'pageDown': function _0x48ea88() {
        return _0x544361(_0x67dc4['PAGE_DOWN']);
      },
      'homeKey': function _0x3abdf4() {
        return _0x544361(_0x67dc4['HOME']);
      },
      'endKey': function _0x5be67c() {
        var _0x4e24bb = _0x12f2de;
        return _0x544361(_0x67dc4["END"]);
      },
      'click': function _0x2a3b86(_0x39d4ab, _0x30d014) {
        var _0x1b62d4 = _0x12f2de;
        return _0x331532(_0x39d4ab, _0x30d014, 0x64, device['width'], device["height"]);
      },
      'longClick': function _0x4538c4(_0x3eea7a, _0xe00f8c, _0x383b06) {
        var _0x49aecd = _0x12f2de;
        return _0x331532(_0x3eea7a, _0xe00f8c, _0x383b06 || 0x2bc, device["width"], device["height"]);
      },
      'swipeUp': function _0x4e5fc3(_0x21dd50, _0x58a3e8, _0x180930, _0x1b9cab, _0x430735, _0x42077a, _0x2a231c) {
        return _0x4caba0(_0x21dd50, _0x58a3e8, _0x180930, _0x1b9cab, _0x430735, _0x42077a, _0x2a231c);
      },
      'swipeDown': function _0x22484b(_0x3ea0e1, _0x27e9f7, _0x3e308, _0x3f484a, _0x3cd5fa, _0x540f34, _0x6f596a) {
        return _0x4caba0(_0x3ea0e1, _0x27e9f7, _0x3e308, _0x3f484a, _0x3cd5fa, _0x540f34, _0x6f596a);
      },
      'swipeLeft': function _0x3aea51(_0x51e1d9, _0x533f82, _0x5a4330, _0x197a7b, _0x1d4ae6, _0x4a0b74, _0x4c2599) {
        return _0x4caba0(_0x51e1d9, _0x533f82, _0x5a4330, _0x197a7b, _0x1d4ae6, _0x4a0b74, _0x4c2599);
      },
      'swipeRight': function _0xa7a928(_0x4c9510, _0x5b7b54, _0x5b8c37, _0x4176cc, _0x2eeb48, _0x328910, _0x5da034) {
        return _0x4caba0(_0x4c9510, _0x5b7b54, _0x5b8c37, _0x4176cc, _0x2eeb48, _0x328910, _0x5da034);
      },
      'swipe': function _0x4ec8e0(_0x5a09cd, _0x37582a, _0x3a74b5, _0x273e00, _0x252635, _0x568099, _0x3aa94b) {
        return _0x4caba0(_0x5a09cd, _0x37582a, _0x3a74b5, _0x273e00, _0x252635, _0x568099, _0x3aa94b);
      },
      'doubleClick': function _0x2b8c95(_0x22ff55, _0x4583ba) {
        var _0x1b8d83 = _0x12f2de;
        if (_0x331532(_0x22ff55, _0x4583ba, 0x64, device["width"], device["height"])) return sleep(0x64), _0x331532(_0x22ff55, _0x4583ba, 0x64, device["width"], device['height']);
        return ![];
      },
      'ctrlA': function _0x18acde() {
        var _0xcf3fb6 = _0x12f2de;
        return _0x5f3fbf([_0x67dc4["CAPSLOCK"], 0x4]);
      },
      'ctrlC': function _0x5423c2() {
        var _0x1609db = _0x12f2de;
        return _0x5f3fbf([_0x67dc4["CAPSLOCK"], 0x6]);
      },
      'ctrlV': function _0x7b5165() {
        var _0x1ffeac = _0x12f2de;
        return _0x5f3fbf([_0x67dc4["CAPSLOCK"], 0x19]);
      },
      'ctrlZ': function _0x5922b6() {
        var _0x53a868 = _0x12f2de;
        return _0x5f3fbf([_0x67dc4["CAPSLOCK"], 0x1d]);
      },
      'altTab': function _0x4a7c4() {
        var _0x723dd6 = _0x12f2de;
        return _0x5f3fbf([_0x67dc4["ESC"], _0x67dc4["TAB"]]);
      },
      'recentsV2': function _0x2f1775() {
        return _0x5f3fbf([0xe3, 0x2b]);
      }
    },
    _0x57626c = _0x28f3e6["default"] = _0x531e1b;
}