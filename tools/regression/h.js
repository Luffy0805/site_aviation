const puppeteer=require('puppeteer-core');let chromium=require('@sparticuz/chromium');chromium=chromium.default||chromium;
module.exports=async function launch(){
  return puppeteer.launch({executablePath:await chromium.executablePath(),args:[...chromium.args,'--allow-file-accessfrom-files','--allow-file-access-from-files','--no-sandbox'],headless:'shell',protocolTimeout:240000,defaultViewport:{width:1280,height:900}});
}
