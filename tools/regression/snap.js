const launch=require('./h.js'),fs=require('fs');
const [,, file, out, mode]=process.argv;
(async()=>{const b=await launch();const p=await b.newPage();const errs=[];
p.on('pageerror',e=>errs.push(String(e).slice(0,200)));
if(mode!=='anim') await p.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
await p.goto('file://'+file,{waitUntil:'load',timeout:120000});
await new Promise(r=>setTimeout(r,1200));
const ids=await p.evaluate(()=>[...new Set([...document.querySelectorAll('[data-p]')].map(e=>e.dataset.p))]);
const res={errs:null,pages:{}};
const PROPS=['display','position','color','background-color','font-size','font-weight','font-family','margin-top','margin-bottom','padding-top','padding-left','border-top-width','border-top-color','border-radius','grid-template-columns','flex-direction','text-align','z-index','cursor','overflow-x','max-width','line-height','letter-spacing','fill','stroke','stroke-width'];
for(const id of ids){
  await p.evaluate(i=>{location.hash=i},id);
  await new Promise(r=>setTimeout(r,mode==='anim'?1500:1100));
  res.pages[id]=await p.evaluate((PROPS,mode)=>{
    const root=[...document.querySelectorAll('[data-p]')].filter(e=>!e.hidden);
    const out={n:root.length,sig:[],txt:[]};
    const skipcls=new Set(['in','go','vis','on','ld','sel','h','draw','scan','fc']);
    for(const r of root){for(const e of [r,...r.querySelectorAll('*')]){
      if(e.closest('svg')&&e.tagName!=='svg'&&!['g','text'].includes(e.tagName)) {out.sig.push(e.tagName);continue}
      const cs=getComputedStyle(e);const cl=[...e.classList].filter(c=>!skipcls.has(c)).sort().join('.');
      const bb=e.getBoundingClientRect();
      out.sig.push(e.tagName+'#'+(e.id||'')+'.'+cl+'|'+PROPS.map(k=>cs.getPropertyValue(k)).join(',')+'|'+Math.round(bb.width)+'x'+Math.round(bb.height));
      if(e.children.length==0&&e.tagName!=='H2'&&e.tagName!=='H1')out.txt.push(e.textContent);
    }}
    out.sig=out.sig.join('\n');out.txt=out.txt.join('¦');
    out.counts={rv:document.querySelectorAll('.rv.in').length,bento:document.querySelectorAll('.bento').length,figs:document.querySelectorAll('.figs').length};
    return out},PROPS,mode);
}
res.errs=errs;
fs.writeFileSync(out,JSON.stringify(res));
console.log(file.split('/').pop(),ids.length,'pages; erreurs JS:',errs.length,errs.slice(0,3));
await b.close()})().catch(e=>{console.error('FAIL',e);process.exit(1)});
