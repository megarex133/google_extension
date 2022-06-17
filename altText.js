chrome.runtime.onInstalled.addListener(() => {
let AltList=[...document.getElementsByTagName("img")].filter(i=>i.alt!=null);});
alert(AltList);
// [...document.getElementsByTagName("a")].filter(i=>i.href.indexOf('mailto:')!=-1 || i.href.indexOf('tel:')!=-1).forEach(e=>e.style['background-color']='#FF0000')});