
const COR = {

    version: "2025-05-24",

    // Used by GFO ~ github file open
    defaultFile: "README.md",
    pathApps: "./",
    pathContent: "../../",

    // Used by GTV ~ github tree view
    user: "theo-armour",
    repo: "2025",
    branch: "main",

    urlSource: "https://github.com/theo-armour/2025/tree/main/",
    urlPathContent: "https://theo-armour.github.io/2025/",
    urlPathApps: "https://theo-armour.github.io/2025/code/2025-05-24/",
    urlPushPath: "https://theo-armour.github.io/2025/",

    iconExternalLink: "<img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >",
 	iconGitHub: `<img src="https://pushme-pullyou.github.io/assets/svg/mark-github.svg">`,
	iconInfo: `<img class=infoImg src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">`,
	iconRepo: "❦",

    menuTitle:  "Theo 2025",
    

    filterFolders: [ "archive", "code"],

    ignoreFiles: [ "404.html", "favicon.ico", "index.html", "readme.html" ],

}

if (location.protocol === "https:") {

    COR.pathContent = COR.urlPathContent;
    COR.pathApps = COR.urlPathApps + COR.version + "/";

} else {

    COR.pathContent = "../../";
    COR.pathApps = "./";

}

//console.log( "COR.pathApps", COR.pathApps);
/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '12');
r.style.setProperty('--mnu-width', '17rem');

