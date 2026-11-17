# Test de non-régression

Compare deux versions du site page par page (DOM, textes, styles calculés, mise en page) dans Chromium sans interface.

```
npm i puppeteer-core @sparticuz/chromium        # une fois, dans ce dossier
node snap.js /chemin/avant/index.html avant.json    # capture « avant »
python3 ../../build.py && node snap.js /chemin/index.html apres.json
python3 compare.py avant.json apres.json
```
Détails : mouvement réduit forcé (résultats déterministes) ; ajoute `anim` en 3e argument pour tester avec les animations.
Mets un dossier `images/` à côté du HTML (même factice) : sans lui, le chargement des photos échoue à des instants variables et fausse la comparaison.
Ne teste pas : cartes Esri/HERE/Google (réseau), rendu des animations image par image.
