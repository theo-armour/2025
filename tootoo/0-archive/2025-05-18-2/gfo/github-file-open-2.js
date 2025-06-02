initGFO();

function initGFO() {

  window.addEventListener("hashchange", onHashChange, false);

  location.hash = COR.pathContent + COR.defaultFile;

  //onHashChange();

}

function onHashChange() {

  if ( location.hash.includes( "https://api.github.com")) {
console.log( "", 55 );
    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="notesy.html" onload=update() height=100% width=100% ><iframe>`;
  
  } else {

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="readme.html" onload=update() height=100% width=100% ><iframe>`;

  }

}

function update() {

  ifr.contentWindow.location.hash = COR.pathContent + location.hash.slice(1);

}

