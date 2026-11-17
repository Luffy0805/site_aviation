# Mon aviation : projet

Encyclopédie personnelle sur l'aviation. **`index.html` est généré** : on édite `src/`, puis on lance `python3 build.py`.
Le site s'ouvre en local (double-clic), sans serveur, à côté du dossier `images/`.

```
build.py             assemble src/ en index.html (Python 3, rien à installer)  ·  --check vérifie le JS avec node
index.html           livrable (généré)
images/              tes photos (jamais renommées ni compressées)
src/
  index.template.html  squelette : repère <!--@include fichier--> , <!--@css--> , <!--@js-->
  manifest.txt         ORDRE de chargement des feuilles de style et des scripts (il compte, voir plus bas)
  partials/            morceaux de page communs : barre, héros, accueil, pied de page, pop-ups
  pages/<id>/          une page statique = page.html + page.js (+ gros plans SVG à part)
  fiches/<id>.js       une fiche (avion, constructeur…) : contenu ET graphiques au même endroit
  components/          briques réutilisables : frise HT, plan zoomable BLUEPRINT, graphiques (BARS, DONUT, LINE, SCAT…)
  core/                socle : $, liens {id|texte}, routeur, loupe, menus, création des fiches
  features/            effets et comportements : curseur, photos, visionneuse, transitions, bento, animations des plans
  data/                données volumineuses ou partagées : rubriques, aéroports, photos, séries communes
  css/                 17 feuilles, de 01-base à 17-effects (les plus tardives surchargent les premières)
tools/regression/    test automatique avant/après (voir son README)
```

## Recettes
- **Ajouter une fiche** (page générée) : crée `src/fiches/mon-avion.js` avec `FI.push({id, c:"militaire", t, d, sub, pres, spec, tl, see, charts(){ ADDTOP(...); ADD(...) }})`, ajoute la ligne dans `manifest.txt` **avant** `core/fiches-boot.js`, puis ajoute `["mon-avion"]` dans `CAT` (`core/menus.js`). La carte d'accueil et la loupe se créent toutes seules (`hide:1` = pas de carte d'accueil).
- **Ajouter une page statique** : `src/pages/<id>/page.html` (une `<section id="<id>">`), un `page.js`, une ligne `<!--@include pages/<id>/page.html-->` dans `index.template.html`, les lignes du manifest, une entrée dans `data/rubriques.js`.
- **Ajouter des photos à une page** : `data/photos.js`.
- **Modifier un gros plan** : `src/pages/rafale/plan-trois-vues.svg`, etc. (plus besoin d'ouvrir un fichier de 1,6 Mo).

## Pourquoi pas de modules ES ?
Chrome bloque `import` et `fetch` entre fichiers ouverts en `file://`. Les scripts sont donc concaténés dans une seule balise, en **variables globales**, dans l'ordre du manifest : un `const` doit être défini avant d'être lu (les `function` sont remontées, pas les `const`).

## Ordre des écouteurs « hashchange » (important)
Dans le manifest : `title-decode` → `photos` → `history` → `page-transition`. C'est l'ordre d'origine, il est conservé à l'identique.
