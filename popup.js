checkButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      let emails = [...document.getElementsByTagName("a")].filter(
        (i) => i.href.indexOf("mailto:email@email.com") != -1
      ).length;
      let tels = [...document.getElementsByTagName("a")].filter(
        (i) => i.href.indexOf("tel:123-456-789") != -1
      ).length;
      let alts = [...document.getElementsByTagName("img")].filter(
        (i) => i.alt === null || i.alt === ""
      ).length;
      let texts = [...document.getElementsByTagName("span")].filter(
        (i) => i.textContent.indexOf("100-150 words describing") != -1
      ).length;
      alert(
        `Amount of default emails: ${emails}\nAmount of default telephones: ${tels}\nAmount of missing alt tags: ${alts}\nAmount of default texts: ${texts}`
      );
      let emailsList = "",
        telsList = "",
        altsList = "",
        textsList = "";
      if (emails != 0) {
        for (let i = 0; i < emails; i++)
          emailsList +=
            i +
            1 +
            ". " +
            [...document.getElementsByTagName("a")].filter(
              (i) => i.href.indexOf("mailto:") != -1
            )[i] +
            "\n";
        alert(`Default emails: 
             ${emailsList}`);
        console.log(`Default emails: 
             ${emailsList}`);
      }
      if (tels != 0) {
        for (let i = 0; i < tels; i++)
          telsList +=
            i +
            1 +
            ". " +
            [...document.getElementsByTagName("a")].filter(
              (i) => i.href.indexOf("tel:") != -1
            )[i] +
            "\n";
        alert(`Default phones: 
             ${telsList}`);
        console.log(`Default phones: 
             ${telsList}`);
      }
      if (alts != 0) {
        for (let i = 0; i < alts; i++)
          altsList +=
            i +
            1 +
            ". " +
            [...document.getElementsByTagName("img")]
              .filter((i) => i.alt === null || i.alt === "")
              .map((e) => e.src)[i] +
            "\n";
        alert(`Missing alt tags: 
             ${altsList}`);
        console.log(`Missing alt tags: 
             ${altsList}`);
      }
      if (texts != 0) {
        for (let i = 0; i < texts; i++)
          textsList +=
            i +
            1 +
            ". " +
            [...document.getElementsByTagName("span")].filter(
              (i) => i.textContent.indexOf("100-150 words describing") != -1
            )[i].textContent +
            "\n";
        alert(`Default texts: 
             ${textsList}`);
        console.log(`Default texts: 
             ${textsList}`);
      }
    },
  });
});

// function showNoAlt(){
//   let AltList=[...document.getElementsByTagName("img")].filter(i=>i.alt===null || i.alt==="").map(i=>i.src);
//   let ShowAltList=''
//   for(let i=0;i<AltList.length;i++)ShowAltList+=i+1+'. '+AltList[i]+'\n';
//   alert("Found Images WITHOUT ALT TEXT" + '\n' + ShowAltList.length);
//   alert(ShowAltList);
// }
