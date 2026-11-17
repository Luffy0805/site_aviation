#!/usr/bin/env python3
"""Compare deux captures (snap.js) : DOM, textes, styles calculés, mise en page.
Ignore le bruit d'animation (tailles d'images en transition, compteurs qui montent)."""
import json, sys
a = json.load(open(sys.argv[1])); b = json.load(open(sys.argv[2]))
def num(s):
    try: return float(s.replace(' ', '').replace(',', '.').replace('\u202f', ''))
    except ValueError: return None
bad = 0
for k in a['pages']:
    x, y = a['pages'][k], b['pages'].get(k); probs = []
    if y is None: print(k, 'page absente'); bad += 1; continue
    xs, ys = x['sig'].split('\n'), y['sig'].split('\n')
    if len(xs) != len(ys): probs.append('nombre d\'éléments')
    else:
        for p, q in zip(xs, ys):
            if k == 'home' and p.startswith('g#'): continue  # animation SMIL du héros : bruit
            if p.startswith('IMG'): p, q = p.rsplit('|', 1)[0], q.rsplit('|', 1)[0]
            if p != q: probs.append('style : ' + p[:70]); break
    xt, yt = x['txt'].split('¦'), y['txt'].split('¦')
    if len(xt) != len(yt): probs.append('nombre de textes')
    else:
        for p, q in zip(xt, yt):
            if p != q:
                n1, n2 = num(p), num(q)
                if n1 is None or n2 is None or abs(n1 - n2) > max(3, abs(n1) * .02): probs.append('texte : %r / %r' % (p[:30], q[:30])); break
    if probs: bad += 1; print('✗', k, probs)
print('erreurs JS :', len(a['errs']), '/', len(b['errs']))
print('pages différentes : %d / %d' % (bad, len(a['pages'])))
sys.exit(1 if bad else 0)
