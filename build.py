#!/usr/bin/env python3
"""把 xyy_max 的拆分模块打包成 AutoJS 可直接运行的单个脚本。

模块按 index.json 的 idx 顺序排入 webpack 模块数组，Mxx_ 引用替换为数字索引，
入口固定为 48_main_ui（idx 48）。
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
INFRA = os.path.join(ROOT, 'infra')
SERIES = os.path.join(ROOT, 'series')
BABEL = os.path.join(ROOT, 'babel')
OUT = os.path.join(ROOT, 'xyy_max.js')
ENTRY = 48

SOURCES = {
    'infra': INFRA,
    'series': SERIES,
    'babel': BABEL,
}


def locate(idx):
    prefix = '%02d_' % idx
    for directory in (INFRA, SERIES, BABEL):
        if not os.path.isdir(directory):
            continue
        for name in sorted(os.listdir(directory)):
            if name.startswith(prefix) and name.endswith('.beauty.js'):
                return os.path.join(directory, name)
    return None


def build():
    index = json.load(open(os.path.join(ROOT, 'index.json')))
    present = {}
    for entry in index:
        idx = entry['idx']
        path = locate(idx)
        if path:
            present[idx] = path

    modules = []
    for idx in range(ENTRY + 1):
        path = present.get(idx)
        if not path:
            modules.append('function (_0x5d7a95) {}')
            continue
        source = open(path, encoding='utf-8').read().strip()
        source = re.sub(r'\bM(\d{2})_[A-Za-z0-9_]+', lambda m: str(int(m.group(1))), source)
        modules.append(source)

    head = open(os.path.join(ROOT, 'build', 'runtime.js'), encoding='utf-8').read()
    body = ',\n'.join(modules)
    with open(OUT, 'w', encoding='utf-8') as handle:
        handle.write(head)
        handle.write('[')
        handle.write(body)
        handle.write(']));\n')
    print('已生成 %s (%d 模块, %d 字节)' % (OUT, len(modules), os.path.getsize(OUT)))
    return 0


if __name__ == '__main__':
    sys.exit(build())
