/* ===== Aides de rédaction : liens {id|texte}, paragraphes, tableaux ===== */
/* ===== Liens entre pages : {page|texte} ===== */
const lk=t=>t.replace(/\{([\w-]+)\|([^}]+)\}/g,'<a class="xl" href="#$1">$2</a>');
const P=(id,a)=>$(id).innerHTML=a.map(x=>"<p>"+lk(x)+"</p>").join("");
const TL=(id,a)=>$(id).innerHTML=a.map(x=>"<li><b>"+x[0]+"</b> "+lk(x[1])+"</li>").join("");
const TB=(id,h,a)=>$(id).innerHTML="<tr>"+h.map(c=>"<th>"+c+"</th>").join("")+"</tr>"+a.map(r=>"<tr>"+r.map((c,i)=>"<td>"+(i?"":"<b>")+lk(c)+(i?"":"</b>")+"</td>").join("")+"</tr>").join("");
const SE=(id,a)=>$(id).innerHTML=a.map(x=>lk(x)).join(" · ");
