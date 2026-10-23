// 最小 AutoJS 运行环境桩，用于本地加载与流程测试
const fs = require('fs');
const vm = require('vm');

const noop = () => {};
const logs = [];
const handlers = {};

const node = new Proxy(function () {}, {
  get: (t, p) => {
    if (p === 'text' || p === 'desc' || p === 'id') return () => '';
    if (p === 'findOnce' || p === 'findOne') return () => null;
    if (p === 'find') return () => [];
    if (p === 'untilFind') return () => [];
    if (p === 'exists') return () => false;
    if (p === 'clickable') return () => false;
    if (p === 'bounds') return () => null;
    if (p === 'children') return () => [];
    if (p === 'childCount') return () => 0;
    if (p === 'child') return () => null;
    if (p === 'parent') return () => null;
    if (p === 'indexInParent') return () => 0;
    if (p === 'click' || p === 'longClick' || p === 'setText') return () => true;
    return node;
  },
  apply: () => node,
});

function el(id) {
  return new Proxy(function () {}, {
    get: (t, p) => {
      if (p === 'click') return (fn) => { handlers[id] = fn; };
      if (p === 'text') return () => '';
      if (p === 'on') return noop;
      if (p === 'animate') return () => ({ alpha: () => ({ setDuration: () => ({ start: noop }) }) });
      return el(id);
    },
    apply: () => el(id),
  });
}

const selector = () => node;
const storage = () => ({ get: () => undefined, put: noop, remove: noop, clear: noop });

const sandbox = {
  console: {
    log: (...a) => logs.push(a.join(' ')),
    error: (...a) => logs.push('ERR ' + a.join(' ')),
    show: noop,
    hide: noop,
  },
  ui: {
    layout: noop, run: (fn) => fn(), emitter: { on: noop }, toolbar: { setTitle: noop },
    toolbarTitle: el('toolbarTitle'), inputApps: el('inputApps'), inputVideo: el('inputVideo'),
    inputBook: el('inputBook'), enterButton: el('enterButton'), resetButton: el('resetButton'),
    pushButton: el('pushButton'), noticeText: el('noticeText'), tips: el('tips'),
  },
  activity: { setSupportActionBar: noop },
  dialogs: { build: () => ({ show: noop, on: () => ({ show: noop }) }) },
  threads: { start: (fn) => { try { fn(); } catch (e) { logs.push('THREAD ERR ' + e.message); } return { interrupt: noop }; } },
  storages: { create: storage },
  device: { width: 1080, height: 2400, brand: 'test', model: 'x', getAndroidId: () => 'a', getBattery: () => 50, isCharging: () => false },
  http: { request: noop, postJson: noop },
  engines: { execScript: noop, stopAll: () => logs.push('STOPALL') },
  app: { openUrl: noop, launch: () => true, getAppName: (p) => (sandbox.__installed || []).includes(p) ? p : null },
  getAppName: (p) => (sandbox.__installed || []).includes(p) ? p : null,
  sleep: noop, toast: noop, alert: noop, confirm: () => false, random: (a, b) => a,
  currentPackage: () => '', currentActivity: () => '', back: noop, home: noop, recents: noop,
  click: () => true, longClick: () => true, swipe: noop, press: noop, setClip: noop, getClip: () => '',
  launch: () => true, launchPackage: () => true, openAppSetting: noop, forceStop: noop,
  text: selector, desc: selector, id: selector, className: selector,
  textContains: selector, descContains: selector, idContains: selector, classNameContains: selector,
  textMatches: selector, descMatches: selector, idMatches: selector, classNameMatches: selector,
  textStartsWith: selector, descStartsWith: selector, bounds: selector,
  images: { threshold: noop, toBase64: () => '', findImage: () => null, matchTemplate: () => null },
  captureScreen: () => null,
  setInterval: noop, clearInterval: noop, setTimeout: noop, clearTimeout: noop,
  exit: noop, interrupt: noop,
  Math, Date, JSON, Object, Array, String, Number, Boolean, RegExp, Error, TypeError, RangeError,
  parseInt, parseFloat, isNaN, isFinite, Symbol, Promise, Proxy, Map, Set,
};
sandbox.global = sandbox;
sandbox.__installed = process.env.SMOKE_INSTALLED ? process.env.SMOKE_INSTALLED.split(',') : [];

vm.createContext(sandbox);
try {
  vm.runInContext(fs.readFileSync(process.argv[2], 'utf8'), sandbox, { filename: 'xyy_max.js' });
  console.log('LOAD OK');
  if (process.env.SMOKE_CLICK) {
    handlers[process.env.SMOKE_CLICK] && handlers[process.env.SMOKE_CLICK]();
    logs.slice(0, Number(process.env.SMOKE_LIMIT || 40)).forEach((l) => console.log(l.slice(0, 140)));
  }
} catch (e) {
  console.log('LOAD FAILED:', e.message);
  console.log(e.stack.split('\n').slice(0, 4).join('\n'));
}
