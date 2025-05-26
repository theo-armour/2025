initGFOE();

function initGFOE() {

  COR.pathContent = "https://pushme-pullyou.github.io/tootoo-2025/";

  window.addEventListener("hashchange", onHashChange, false);

  onHashChange();

}


function onHashChange() {

  let hash = location.hash.slice(1);

  console.log( "hash", hash );

  if (hash.includes("@@")) {

    //console.log("notesy", hash );

    const url = COR.base + hash;
    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${COR.pathApps}notesy.html" onload=ifr.contentWindow.init($(url}) ><iframe>`;

  } else {

    if (hash.endsWith("md") || hash.includes("LICENSE")) {

      getHTMLfromURL(hash);

    } else if ( /\.(jpg|jpeg|png|gif|svg|ico|bmp|tiff|webp)$/i.test(hash) ) {

      //console.log( "img", hash  );

      divMainContent.innerHTML = `<img src="${ COR.pathContent }${hash}" ></img>`;

    } else {

      divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="${ COR.pathContent }${hash}" ></iframe>`

    }
  }
}


function getHTMLfromURL(url = location.hash.slice(1)) {

  console.log("url", COR.pathContent + url);

  showdown.setFlavor("github");
  const options = { openLinksInNewWindow: false, excludeTrailingPunctuationFromURLs: true, ghMention: true, simplifiedAutoLink: true, simpleLineBreaks: true, emoji: true };

  const xhr = new XMLHttpRequest();
  xhr.open("get", COR.pathContent + url, true);
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
  document.title = `${ COR.menuTitle}: ` + title;

}