/* ===== Page Dassault Aviation ===== */
/* ===== Dassault ===== */
P("dpres",["Dassault Aviation est une entreprise française née des Avions Marcel Bloch. Marcel Bloch, qui prend le nom de Dassault après la Seconde Guerre mondiale, a débuté en concevant l’hélice Éclair pendant la Première Guerre mondiale.",
"Aujourd’hui, l’entreprise produit des avions de combat ({rafale|Rafale}, {mirage|Mirage}) et la gamme d’avions d’affaires Falcon. Son carnet de commandes dépasse 45 milliards d’euros (30 juin 2026), principalement porté par le Rafale à l’export."]);
HT("dtl",[["1916","Marcel Bloch conçoit l’hélice Éclair."],["1929","Création de la Société des Avions Marcel Bloch."],["1947","L’entreprise devient Avions Marcel Dassault."],
["1949","Premier vol de l’Ouragan, premier avion à réaction de combat de série de l’entreprise."],["1956","Premier vol du Mirage III."],["1959","Premier vol du Mirage IV, bombardier nucléaire."],
["1963","Premier vol du Falcon 20, premier avion d’affaires de la marque."],["1971","Dassault et Breguet fusionnent.",1],["1978","Premier vol du {mirage|Mirage 2000}."],
["1986","Premier vol du démonstrateur {rafale|Rafale}."],["1990","L’entreprise prend le nom de Dassault Aviation.",1],["2012","Premier vol du démonstrateur de drone de combat nEUROn."],
["2024","6,2 Md€ de chiffre d’affaires et 14 600 salariés ; 21 Rafale et 31 Falcon livrés.",1],["2025","Plus de 10 000 avions livrés dans plus de 90 pays depuis un siècle ; 26 Rafale et 37 Falcon livrés.",1],
["2026","533 Rafale commandés depuis l’origine."]]);
TB("dtab",["Création","Premier vol","Remarque"],[["Ouragan","1949","Chasseur à réaction"],["Mystère IV","1952","Chasseur-bombardier transsonique"],["Mirage III","1956","Delta, grand succès à l’export"],["Mirage IV","1959","Bombardier de la force nucléaire stratégique"],["Falcon 20","1963","Premier d’une grande lignée Falcon"],["Mirage F1","1966","Chasseur à aile haute"],["Alpha Jet","1973","Avion d’entraînement, développé avec Dornier"],["{mirage|Mirage 2000}","1978","Delta monomoteur polyvalent"],["{rafale|Rafale}","1986","Omnirôle bimoteur"],["nEUROn","2012","Démonstrateur de drone de combat"]]);
SE("dsee",["{rafale|Rafale}","{mirage|Mirage 2000}","{chasseurs|Comparatif des chasseurs}"]);
/* Graphiques ajoutés aux blocs existants */
ADDTOP("dassault","Chiffres clés",el=>el.innerHTML=NUMS([["10 000+","avions livrés dans plus de 90 pays"],["6,2 Md€","chiffre d’affaires 2024"],["14 600","salariés"],["400","entreprises dans le programme Rafale"]]));
ADD("dassault","Livraisons de 2024 et 2025",el=>GBARS(el,[["Rafale",21,26],["Falcon",31,37]],["2024","2025"]));
