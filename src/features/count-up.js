/* ===== Chiffres clés qui comptent ===== */
if(!RM){const ZERO=f=>(f.d?"0,"+"0".repeat(f.d.length):"0")+f.suf,
 count=b=>{const f=b._f,t0=performance.now(),tok=b._k=(b._k||0)+1;(function st(t){if(b._k!==tok)return;const k=Math.min((t-t0)/1500,1),v=f.n*(1-Math.pow(1-k,3));
  let s=f.d?v.toFixed(f.d.length).replace(".",","):String(Math.round(v));if(f.sep)s=s.replace(/\B(?=(\d{3})+(?!\d))/g,f.sep);b.textContent=s+f.suf;if(k<1)requestAnimationFrame(st);else b.textContent=f.raw})(t0)};
 document.querySelectorAll(".nums b").forEach(b=>{if(b.dataset.n)return;const raw=b.textContent.trim(),m=raw.match(/^(\d{1,3}(?:[\u00a0\u202f ]\d{3})+|\d+)(?:,(\d+))?([^\d]{0,7})$/);if(!m)return;
  const ip=m[1].replace(/[\u00a0\u202f ]/g,""),n=parseFloat(ip+(m[2]?"."+m[2]:""));if(!m[2]&&!m[3]&&n>=1900&&n<=2100)return;
  b._f={n:n,d:m[2]||"",sep:/[\u00a0\u202f ]/.test(m[1])?m[1].match(/[\u00a0\u202f ]/)[0]:"",suf:m[3],raw:raw};b.textContent=ZERO(b._f);FX.add(b,count,e=>{e._k=(e._k||0)+1;e.textContent=ZERO(e._f)})})}
