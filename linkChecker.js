chrome.runtime.onInstalled.addListener(() => {[...document.getElementsByTagName("a")].filter((i) => i.href.indexOf('mailto:email@email.com') !=-1|| i.href.indexOf('tel:123-456-7890')!=-1).forEach((e) => (e.style["background-color"] = "#FF0000"))
    });
// || i.href.indexOf('tel:')!=-1).forEach(e=>e.style['background-color']='#FF0000')})
