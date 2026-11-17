/* ===== Page Mirage 2000 ===== */
/* ===== Mirage 2000 ===== */
const MI=[["2000C","1984","Chasseur et intercepteur monoplace","Radar RDI, canon 30 mm","Super 530D, Magic 2"],
["2000B","1984","Biplace d’entraînement","Comme le C, sans canons internes","—"],
["2000N","1988 (retiré en 2018)","Frappe nucléaire à basse altitude","Radar Antilope 5","Missile ASMP"],
["2000D","1995 (service)","Attaque conventionnelle, appui rapproché","Armements guidés laser et GPS","SCALP-EG"],
["2000-5 / 5F","1997","Modernisation multirôle","Radar RDY, cockpit tout écran","Missiles MICA"],
["2000-9","Émirats arabes unis","Version ultime, avec des technologies du Rafale","Avionique modernisée","—"]];
$("mtab").innerHTML="<tr><th>Version</th><th>Date</th><th>Rôle</th><th>Particularités</th><th>Armement clé</th></tr>"+MI.map(r=>"<tr><td><b>"+r[0]+"</b></td>"+r.slice(1).map(c=>"<td>"+c+"</td>").join("")+"</tr>").join("");
/* ===== Mirage 2000 ===== */
$("mintro").textContent="Monomoteur à aile delta, ancêtre direct du Rafale dans l’armée de l’Air, et un des grands succès à l’export de Dassault.";
P("mpres",["Le Mirage 2000 est un chasseur monomoteur à aile delta, conçu par {dassault|Dassault Aviation} à la fin des années 1970, pour succéder aux premières générations de Mirage. Son moteur est le Snecma M53.",
"Sa grande force est sa polyvalence : un même châssis a donné un intercepteur (C), un avion d’entraînement (B), un bombardier nucléaire à basse altitude (N), un avion d’appui conventionnel (D) et un multirôle (-5). Plus de 600 exemplaires ont été construits, pour la France et pour l’export (Émirats, Inde, Grèce, Égypte, Pérou, Taïwan, Qatar, Brésil…).",
"Il a été relayé en première ligne par le {rafale|Rafale}, qui reprend sa formule delta et ses missions."]);
TB("mspec",["Caractéristique","Valeur"],[["Longueur","14,36 m"],["Envergure","9,13 m"],["Masse maximale au décollage","environ 17 t"],["Moteur","1 Snecma M53-P2, environ 64 kN à sec et 95 kN avec postcombustion"],["Vitesse maximale","environ Mach 2,2"],["Équipement de série","Canons de 30 mm, radar RDI (C)"]]);
HT("mtl",[["1975","Lancement du programme, pour un avion de combat plus léger et moins coûteux."],["10 mars 1978","Premier vol du prototype."],
["1978","Septembre, meeting de Farnborough : le prototype relève le nez à 25°.",1],["20 novembre 1982","Premier vol du premier 2000C de série."],
["juillet 1984","Mise en service du 2000C."],["1984","315 exemplaires iront à l’armée de l’Air.",1],["1988","Mise en service du 2000N, avec le missile ASMP."],
["1991","Premier vol du prototype 2000D.",1],["1992","Taïwan, premier client du 2000-5, la variante conçue pour l’export.",1],["1994","Le Qatar commande à son tour.",1],
["avril 1995","Mise en service du 2000D, version d’attaque conventionnelle."],["1997","Modernisation en 2000-5F, avec radar RDY et missiles MICA."],
["2007","23 novembre : livraison du dernier des 601 exemplaires de série, à la Grèce."],["2007","286 exemplaires exportés dans 8 pays ; 75 2000N et 86 2000D construits.",1],
["2018","Retrait du 2000N."],["Années 2020","Les 2000D modernisés restent en service en France, avant leur retrait progressif (à vérifier selon le calendrier en vigueur)."]]);
SE("msee",["{dassault|Dassault Aviation}","{rafale|Rafale}","{chasseurs|Comparatif des chasseurs}","{bases|Bases aériennes}"]);
BLUEPRINT("mplan",2031,2961,[
[153,511,"Nez et radar","Le nez abrite le radar : RDI sur le 2000C, RDY sur le 2000-5, Antilope V sur le 2000N.",[20,360,420,262],null],
[294,428,"Perche de ravitaillement","Sonde de ravitaillement en vol, devant le pare-brise : elle se connecte au panier d’un avion ravitailleur.",[180,360,320,200],null],
[485,396,"Cockpit","Cockpit monoplace (ici un 2000C), sous une verrière en deux éléments. Les versions B, N et D sont biplaces.",[320,300,400,250],null],
[664,473,"Entrées d’air","Vue de face : deux entrées d’air latérales à demi-cônes mobiles, qui règlent le flux d’air selon la vitesse.",[1130,2180,340,212],null],
[1277,894,"Aile delta (dessus)","Aile delta sans empennage horizontal, flèche d’environ 58°, gouvernes en bord de fuite. Premier chasseur français à commandes de vol électriques.",[1050,580,700,437],null],
[613,1750,"Vue de dessous","Trappes d’accès, pylônes et points d’emport sous le fuselage et sous les ailes.",[330,1560,700,437],null],
[1622,179,"Dérive","Dérive haute, qui équilibre l’appareil et porte des antennes et des détecteurs.",[1420,70,400,250],null],
[1718,460,"Tuyère du M53","Un seul moteur Snecma M53, environ 95 kN avec postcombustion, à tuyère à pétales.",[1560,330,320,200],null],
[1316,2772,"Train avant","Jambe avant avec roues jumelées (voir la vue de face), rétractable dans le fuselage.",[1160,2620,340,212],null],
[779,2740,"Train principal","Train principal : une grande roue par jambe, qui se loge dans le fuselage et l’aile.",[560,2600,420,262],null],
[1290,2465,"Trains vus de face","Vue de face : train avant à roues jumelées et deux trains principaux à roue unique.",[1220,2330,420,262],null]]);
const MV=[["Prototype 2000-01","Premier vol le 10 mars 1978. Profil épuré, sans les armements des versions de série."],["2000B","Biplace d’entraînement et de transformation. Le dessin montre la perche de ravitaillement et un réservoir ventral."],["2000N","Biplace de pénétration à basse altitude pour la frappe nucléaire. Le dessin montre le grand réservoir sous le fuselage."],["2000D-R1","Biplace d’attaque conventionnelle. Le dessin montre des bombes guidées sous le fuselage."],["2000-5F","Monoplace multirôle modernisé. Le dessin montre des missiles sous le fuselage et les ailes."]];
const VD=[[1980, 644], [1996, 664], [1988, 676], [1996, 704], [2000, 652]];
$("mvb").innerHTML=MV.map((v,i)=>`<button aria-pressed="${i==0}" data-i="${i}">${v[0]}</button>`).join("");
function mv(i){$("mvuse").setAttribute("href","#mv"+i);$("mvsvg").setAttribute("viewBox","0 0 "+VD[i][0]+" "+VD[i][1]);$("mvinfo").innerHTML="<b>"+MV[i][0]+"</b>"+lk(MV[i][1]);$("mvb").querySelectorAll("button").forEach(b=>b.setAttribute("aria-pressed",+b.dataset.i==i))}
$("mvb").onclick=e=>{if(e.target.tagName=="BUTTON")mv(+e.target.dataset.i)};mv(0);
/* Graphiques ajoutés aux blocs existants */
ADDTOP("mirage","Chiffres clés",el=>el.innerHTML=NUMS([["601","exemplaires de série (1978–2007)"],["315","pour l’armée de l’Air"],["286","exportés dans 8 pays"],["75 et 86","2000N et 2000D construits"]]));
ADD("mirage","France contre export",el=>DONUT(el,[["Armée de l’Air",315],["Export",286]],["601","exemplaires"]));
ADD("mirage","Les clients export, en nombre d’appareils",el=>BARS(el,[["Émirats arabes unis",68],["Grèce",65],["Taïwan",60],["Inde",59],["Égypte",20],["Qatar",12,"environ 12"],["Pérou",12,"environ 12"]]),"Le Brésil a aussi acquis des appareils d’occasion français.");
