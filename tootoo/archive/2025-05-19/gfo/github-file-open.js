initGFO();

function initGFO() {

  window.addEventListener("hashchange", onHashChange, false);

  onHashChange();

}


function onHashChange() {

  //console.log( "location.hash", location.hash );

  if ( location.hash.includes( "https://api.github.com")) {

    console.log( "notesy",  );

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="../notesy.html" onload=update() height=100% width=100% ><iframe>`;
  
  } else {

    console.log( "readme", location.hash );

    divMainContent.innerHTML = `<iframe id=ifr class="iframe-resize" src="../view-file.html" onload=update() height=100% width=100% ><iframe>`;

  }

}

function update() {

  ifr.contentWindow.location.hash = parent.location.hash;

}

