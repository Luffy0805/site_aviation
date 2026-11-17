/* ===== Page Bases : carte de France ===== */
const PX=(lo,la)=>[((lo+5)*.695*55).toFixed(0),((51.5-la)*55).toFixed(0)];
const BS=[["Istres-Le Tubé","BA 125",4.92,43.52,"Ravitailleurs A330 MRTT, dissuasion nucléaire, essais en vol DGA. Piste de 5 000 m."],
["Mont-de-Marsan","BA 118",-.5,43.91,"Rafale B/C, CEAM, drones Reaper."],
["Saint-Dizier","BA 113",4.9,48.64,"Rafale B/C, dissuasion nucléaire, formation des pilotes."],
["Nancy-Ochey","BA 133",5.96,48.58,"Mirage 2000D."],
["Luxeuil","BA 116",6.36,47.78,"Mirage 2000-5F."],
["Landivisiau","BAN",-4.15,48.53,"Rafale M de la Marine."],
["Orléans-Bricy","BA 123",1.76,47.99,"Transport A400M et C-130J, forces spéciales."],
["Avord","BA 702",2.63,47.05,"AWACS E-3F."],
["Cognac","BA 709",-.32,45.66,"Drones MQ-9 Reaper, école Pilatus PC-21."]];
$("btab").innerHTML="<tr><th>Base</th><th>Rôle</th></tr>"+BS.map(b=>`<tr><td><b>${b[0]}</b><br><span style="color:var(--mut)">${b[1]}</span></td><td>${b[4]}</td></tr>`).join("");
/* ===== Carte des bases (refonte) ===== */
const FR2=[[2.37,51.05],[1.85,50.95],[1.6,50.7],[1.55,50.2],[1.08,49.93],[.1,49.5],[-.4,49.3],[-1.27,49.7],[-1.9,49.65],[-1.6,48.8],[-2,48.65],[-2.3,48.68],[-3.4,48.8],[-4,48.7],[-4.8,48.45],[-4.5,48.35],[-4.7,48.04],[-4.35,47.8],[-3.4,47.7],[-3.1,47.5],[-2.5,47.5],[-2.2,47.28],[-2.2,46.95],[-1.8,46.5],[-1.2,46.15],[-1.3,45.85],[-1.05,45.55],[-1.2,44.65],[-1.3,44],[-1.5,43.5],[-1.78,43.37],[-.7,42.95],[.7,42.8],[1.5,42.45],[2,42.35],[3.17,42.43],[3,42.7],[3.1,43.15],[3.7,43.4],[4.4,43.4],[5,43.3],[5.9,43.1],[6.7,43.4],[7,43.55],[7.25,43.7],[7.5,43.78],[6.9,44.2],[7.1,44.6],[6.8,45.15],[7,45.5],[6.8,45.9],[6.1,46.25],[6.2,46.6],[6.9,47.2],[7.55,47.6],[7.6,48],[7.8,48.6],[8.2,49.05],[7,49.15],[5.8,49.5],[5.05,49.85],[4.8,50.1],[4,50.3],[3.1,50.75]];
const BS2=BS.concat([["Charles de Gaulle (Toulon)","Porte-avions",5.93,43.0,"Le seul porte-avions français. Clique pour ouvrir sa page.","porte-avions"]]);
const BN=[[10,"A330 MRTT",0],[35,"Rafale",0],[40,"Rafale",0],[50,"Mirage 2000D",1],[20,"Mirage 2000-5F",0],[40,"Rafale M",1],[20,"A400M",0],[4,"E-3F AWACS",0],[10,"MQ-9 Reaper",0],[30,"aéronefs embarqués",0]];
const LP=["s","s","e","m","b","s","s","s","s","e"];
const tip=$("tip");
$("fmap").innerHTML=`<defs><linearGradient id="fg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d3a69"/><stop offset="1" stop-color="#0f1b36"/></linearGradient></defs><polygon points="${FR2.map(p=>PX(...p)).join(" ")}" fill="url(#fg)" stroke="#9db4d6" stroke-width="1.4" stroke-linejoin="round"/>`+BS2.map((b,i)=>{const[x,y]=PX(b[2],b[3]),n=BN[i]?BN[i][0]:0,r=(6+Math.sqrt(n)*.95).toFixed(1),lp=LP[i]||"s",ax=lp=="e"?"end":lp=="m"||lp=="b"?"middle":"start",tx=lp=="e"?+x-+r-5:lp=="m"||lp=="b"?+x:+x+ +r+5,ty=lp=="m"?+y-+r-17:lp=="b"?+y+ +r+16:+y+4;return `<circle data-i="${i}" cx="${x}" cy="${y}" r="${r}" fill="${b[5]?"#4aa3ff":"#ffb347"}"/><text text-anchor="${ax}" x="${tx}" y="${ty}">${b[0].split(" (")[0]}</text>${BN[i]?`<text class="bn" text-anchor="${ax}" x="${tx}" y="${ty+13}">≈ ${n} ${BN[i][1]}</text>`:""}`}).join("");
$("fmap").onmouseover=e=>{const c=e.target.closest("circle");if(!c)return;const b=BS2[c.dataset.i];tip.hidden=false;tip.innerHTML="<b>"+b[0]+"</b><br>"+b[1]+"<br>"+b[4]+(BN[c.dataset.i]?"<br><b>≈ "+BN[c.dataset.i][0]+" "+BN[c.dataset.i][1]+"</b> <i>("+(BN[c.dataset.i][2]?"recoupé":"estimation")+")</i>":"")+(b[5]?"":"<br><i>Clic : vue satellite (HERE)</i>")};
$("fmap").onmousemove=e=>{const r=$("fmap").parentNode.getBoundingClientRect();tip.style.left=(e.clientX-r.left+14)+"px";tip.style.top=(e.clientY-r.top+14)+"px"};
$("fmap").onmouseout=()=>tip.hidden=true;
$("fmap").onclick=e=>{const c=e.target.closest("circle");if(!c)return;const b=BS2[c.dataset.i];if(b[5])location.hash="#"+b[5];else{tip.hidden=true;window.open("https://wego.here.com/?map="+b[3]+","+b[2]+",15,satellite","_blank","noopener")}};
