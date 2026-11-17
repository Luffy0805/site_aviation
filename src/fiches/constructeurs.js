/* ===== Fiche : Constructeurs civils ===== */
FI.push({
  id:"constructeurs",
  c:"civil",
  t:"Constructeurs civils",
  d:"Airbus, Boeing, ATR, Embraer, COMAC…",
  sub:"Les grands noms de la construction d’avions civils.",
  tab:[
    ["Constructeur","Création","Pays","Produits phares"],
    [
      ["Airbus","1970","Europe (Toulouse)","{a320|A320}, A350, A380 ; premier vol de l’A300 en 1972"],
      ["Boeing","1916","États-Unis","{b737|737}, 747, 777, 787"],
      ["ATR","1981","France et Italie (Toulouse)","ATR 42 et ATR 72, avions régionaux à hélices"],
      ["Embraer","1969","Brésil","Famille E-Jets, avions régionaux"],
      ["COMAC","2008","Chine","C919 : premier vol en 2017, mise en service en 2023"],
      ["Bombardier","1942","Canada","Avions d’affaires Global ; les CRJ ont été cédés à Mitsubishi en 2020"],
      ["{dassault|Dassault Aviation}","1929","France","Avions d’affaires Falcon, en plus des avions de combat"]
    ]
  ],
  see:["{liners|Avions de ligne}","{a320|Airbus A320}","{dassault|Dassault Aviation}"],
  charts(){
    ADDTOP("constructeurs","Chiffres clés 2025",el=>el.innerHTML=NUMS([["793","livraisons Airbus"],["600","livraisons Boeing"],["8 754 + 1 124","carnet Airbus (monocouloirs + gros-porteurs)"],["6 713","carnet Boeing (hors 777-300ER)"]]));
    ADD("constructeurs","Livraisons annuelles : Airbus, Boeing et Embraer, 2005–2025",el=>LINE(el,XS,[{n:"Airbus",c:"#4aa3ff",v:AB},{n:"Boeing",c:"#ffb347",v:BO},{n:"Embraer (avions commerciaux)",c:"#5fd0a0",v:EM}]),"2023 à 2025 : chiffres publiés par les constructeurs et recoupés par recherche (Embraer : 73 en 2024, 78 en 2025). 2005 à 2022 : chiffres publics écrits de mémoire, à vérifier.");
    ADD("constructeurs","Les 5 constructeurs en 2025 : la taille des deux géants",el=>BARS(el,[["Airbus",793],["Boeing",600],["Embraer",78,"78 (avions commerciaux)"],["ATR",32],["COMAC (C919)",15]]),"Airbus et Boeing livrent 1 393 des 1 518 avions de ces cinq constructeurs, soit 92 %.");
    ADD("constructeurs","Livraisons cumulées sur 21 ans",el=>DONUT(el,[["Airbus",sum(AB)],["Boeing",sum(BO)],["Embraer (avions commerciaux)",sum(EM)]],[(sum(AB)+sum(BO)+sum(EM)).toLocaleString("fr-FR"),"avions livrés"],["#4aa3ff","#ffb347","#5fd0a0"]));
  }
});
