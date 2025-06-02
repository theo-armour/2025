
const COR = {

    // Used by GFO ~ github file open
    defaultFile: "README.md",
    pathContent: "../../",

    // Used by GTV ~ github tree view
    user: "pushme-pullyou",
    repo: "tootoo-2025",
    branch: "main",

    urlSource: "https://github.com/pushme-pullyou/tootoo-2025/tree/main/tootoo",
    urlPathContent: "https://pushme-pullyou.github.io/tootoo-2025/",
    urlPushPath: "https://pushme-pullyou.github.io/tootoo-2025/tootoo/",

    menuTitle: "TooToo 2025",
    version: "Version: 2025-05-17 12:06",

    filterFolders: [], //[ "code"],

    ignoreFiles: [], //[ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html" ],
}

/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '120');
r.style.setProperty('--mnu-width', '17rem');

