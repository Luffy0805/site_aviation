/* ===== Fiches : pages générées depuis les objets de fiches/*.js =====
   Format d'une fiche : {id, c:"militaire|civil", hide?, kw?, t, d, sub, pres[], spec[[k,v]], tab?, bars?, bars2?, tl[[date,texte,repère?]], see[], charts?()}
   charts() est appelée une fois la page créée : c'est là qu'on met ADDTOP/ADD (chiffres clés, graphiques). */
const FI=[];
function PAGE(o){const sec=document.createElement("section");sec.id=o.id;
 const tb=(h,rows)=>'<div class="tw"><table><tr>'+h.map(c=>"<th>"+c+"</th>").join("")+"</tr>"+rows.map(r=>"<tr>"+r.map((c,i)=>"<td>"+(i?"":"<b>")+lk(c)+(i?"":"</b>")+"</td>").join("")+"</tr>").join("")+"</table></div>";
 const br=(b)=>'<div class="blk"><h3>'+b[0]+"</h3>"+b[1].map(x=>'<div class="bar"><span style="margin:0">'+x[0]+'</span><div><i style="width:'+x[1]/Math.max(...b[1].map(y=>y[1]))*100+'%"></i><span>'+(x[2]||x[1].toLocaleString("fr-FR"))+"</span></div></div>").join("")+"</div>";
 sec.innerHTML='<a class="back" href="#">← Retour</a><h2>'+o.t+'</h2><p class="sub">'+lk(o.sub)+"</p>"
  +(o.pres?'<div class="blk prose"><h3>Présentation</h3>'+o.pres.map(x=>"<p>"+lk(x)+"</p>").join("")+"</div>":"")
  +(o.spec?'<div class="blk"><h3>Fiche technique</h3>'+tb(["Caractéristique","Valeur"],o.spec)+"</div>":"")
  +(o.tab?'<div class="blk"><h3>Tableau</h3>'+tb(o.tab[0],o.tab[1])+"</div>":"")+(o.bars?br(o.bars):"")+(o.bars2?br(o.bars2):"")
  +(o.tl?'<div class="blk"><h3>Chronologie</h3><div class="hw"><button class="hb l"></button><button class="hb r"></button><div class="ht" id="tl-'+o.id+'"></div></div></div>':"")
  +'<div class="blk"><h3>Voir aussi</h3><p>'+o.see.map(lk).join(" · ")+"</p></div>";
 $("convertisseur").before(sec);sec.dataset.p=o.id;PG.push(sec);if(o.tl)HT("tl-"+o.id,o.tl)}
function buildFiches(){
  FI.forEach(o=>{RUBRIQUES.push({id:o.id,t:o.t,d:o.d,live:1,nh:o.hide?1:0});INDEX.push([o.t,o.d,o.id,(o.t+" "+o.d+" "+(o.kw||"")).toLowerCase()]);PAGE(o)});
  FI.forEach(o=>{if(o.charts)o.charts()});
}
