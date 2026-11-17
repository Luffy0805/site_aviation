#!/usr/bin/env python3
"""Assemble src/ en un seul index.html (ouvrable en local, sans serveur).
Usage :  python3 build.py            -> index.html à côté de ce script
         python3 build.py --check    -> vérifie aussi la syntaxe JS (node requis)
"""
import re, sys, subprocess, tempfile, pathlib
ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
OUT = ROOT / "index.html"
read = lambda p: (SRC / p).read_text(encoding="utf-8")

def include(txt):
    return re.sub(r"<!--@include ([^>]+?)-->", lambda m: include(read(m.group(1))), txt)

files = [l.strip() for l in read("manifest.txt").splitlines() if l.strip() and not l.startswith("#")]
css_files = [f for f in files if f.endswith(".css")]
js_files = [f for f in files if f.endswith(".js")]
css = "\n".join(read(f) for f in css_files)
js = "\n".join(read(f) for f in js_files)
html = include(read("index.template.html"))
html = html.replace("<!--@css-->", css).replace("<!--@js-->", js)
OUT.write_text(html, encoding="utf-8")
print(f"{OUT.name} : {len(html)/1e6:.2f} Mo ({len(js_files)} scripts, {len(css_files)} feuilles de style)")
if "--check" in sys.argv:
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as t:
        t.write(js)
    r = subprocess.run(["node", "--check", t.name], capture_output=True, text=True)
    print("node --check :", "OK" if r.returncode == 0 else r.stderr)
