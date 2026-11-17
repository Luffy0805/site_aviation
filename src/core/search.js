/* ===== Loupe de recherche (Ctrl K) ===== */
/* ===== Loupe ===== */
const ov=document.getElementById("ov"),q=document.getElementById("q"),out=document.getElementById("out");let sel=0,cur=[];
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9 ]/g," ");
function lev(a,b){const m=[];for(let i=0;i<=a.length;i++)m[i]=[i];for(let j=1;j<=b.length;j++)m[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]==b[j-1]?0:1));return m[a.length][b.length]}
function score(e,toks){let s=0;const words=norm(e[0]+" "+e[1]+" "+e[3]).split(" ").filter(Boolean);
 for(const t of toks){let b=0;for(const w of words){if(w==t)b=Math.max(b,3);else if(w.startsWith(t))b=Math.max(b,2.5);else if(w.includes(t)&&t.length>2)b=Math.max(b,1.5);else if(t.length>3&&lev(w.slice(0,t.length+1),t)<=1)b=Math.max(b,1)}
  if(!b)return 0;s+=b}return s}
function render(){const toks=norm(q.value).split(" ").filter(Boolean);
 cur=(toks.length?INDEX.map(e=>[score(e,toks),e]).filter(x=>x[0]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]):INDEX.slice(0,8));sel=0;
 out.innerHTML=cur.length?cur.map((e,i)=>{const live=RUBRIQUES.find(r=>r.id==e[2]).live;return '<a href="#'+(live?e[2]:"rubriques")+'" data-i="'+i+'" class="'+(i?"":"sel")+'"><b>'+e[0]+"</b>"+(live?"":"<em>bientôt</em>")+"<small>"+e[1]+"</small></a>"}).join(""):'<div class="empty">Aucun résultat. Essaie un autre mot, par exemple « rafale » ou « mach ».</div>'}
function openS(){ov.classList.add("on");q.value="";render();q.focus()}
function closeS(){ov.classList.remove("on")}
document.getElementById("open").onclick=openS;document.getElementById("open2").onclick=openS;
ov.onclick=e=>{if(e.target==ov||e.target.closest("a"))closeS()};
q.oninput=render;
addEventListener("keydown",e=>{
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()=="k"){e.preventDefault();openS();return}
 if(!ov.classList.contains("on")){if(e.key=="/"&&!/INPUT|SELECT/.test(document.activeElement.tagName)){e.preventDefault();openS()}return}
 if(e.key=="Escape")closeS();
 if(e.key=="ArrowDown"||e.key=="ArrowUp"){e.preventDefault();const l=out.querySelectorAll("a");if(!l.length)return;l[sel].classList.remove("sel");sel=(sel+(e.key=="ArrowDown"?1:-1)+l.length)%l.length;l[sel].classList.add("sel");l[sel].scrollIntoView({block:"nearest"})}
 if(e.key=="Enter"){const l=out.querySelectorAll("a");if(l[sel]){l[sel].click()}}
});
