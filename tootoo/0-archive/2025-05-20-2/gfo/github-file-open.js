initGFO();

function initGFO() {

  window.addEventListener("hashchange", onHashChange, false);

  onHashChange();

}


function onHashChange() {

  const hash = location.hash.slice(1);

  //console.log( "hash", hash );

  if (hash.includes("https://api.github.com")) {

    //console.log("notesy", COR.pathApps);

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.pathApps}notesy.html" height=100% width=100% ><iframe>`;

  } else {

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.pathApps}view-file.html" height=100% width=100% ><iframe>`;

    if (hash.endsWith("md") || hash.includes("LICENSE")) {

      getTextfromURL(hash);

    } else {

      divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${hash}"" ></iframe>`

    }
  }
}


function getTextfromURL(url = location.hash.slice(1)) {

  console.log("url", url);

  showdown.setFlavor("github");
  const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };

  const xhr = new XMLHttpRequest();
  xhr.open("get", url, true);
  xhr.onload = () => {
    let txt = xhr.responseText;
    txt = txt.replace(/\<!--@@@/, " ).replace /\@@@-- >/, ");
    divMainContent.innerHTML = new showdown.Converter(options).makeHtml(txt);
    window.scrollTo(0, 0);
  };
  xhr.send(null);

  let title = url.split("/").pop()
    .split("-")
    .filter(x => x.length > 0)
    //.map((x) => (x.charAt(0).toUpperCase() + x.slice(1)))
    .join(" ");
  document.title = "TooToo: " + title;

}