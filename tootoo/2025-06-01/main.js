
const COR = {

    // Used by GTV ~ github tree view
    user: "theo-armour",
    repo: "2025",
    branch: "main",
    version: "2025-05-27",
    
    menuTitle: "Theo 2025",
    menuTitleEdit: "Theo Edit",

  // Used by GFO ~ github file open
  defaultFile: "README.md",
  defaultFileEdit: "@@README.md",

  pathApps: "./",
  pathContent: "../../",

    filterFolders: ["archive","tootoo"],
    ignoreFiles: [ "404.html", "favicon.ico", "index.html", "LICENSE", "readme.html", "test.md" ],

    urlBaseAPI: "https://api.github.com/repos/theo-armour/2025/contents/",
    urlSource: "https://github.com/theo-armour/2025/tree/main/",
    urlPathApps: "https://theo-armour.github.io/2025/tootoo/",
    urlPathContent: "https://theo-armour.github.io/2025/",
    urlPushPath: "https://theo-armour.github.io/2025/",

    iconExternalLink: "<img src='https://pushme-pullyou.github.io/assets/svg/icon-external-link.svg' width=16 >",
    iconGitHub: `<img src="https://pushme-pullyou.github.io/assets/svg/mark-github.svg">`,
	iconInfo: `<img src="https://pushme-pullyou.github.io/assets/svg/noun_Information_585560.svg">`,
    iconOpenClose: `<img src="https://pushme-pullyou.github.io/assets/svg/open-close-toggle.svg">`,
    iconPencil: `<img src="https://pushme-pullyou.github.io/assets/svg/https://pushme-pullyou.github.io/assets/svg/mark-github.svg" >`,
    iconRepo: `<img src=https://pushme-pullyou.github.io/assets/svg/dingbat.svg">`,

}

if (location.protocol === "https:") {

  COR.pathApps = COR.urlPathApps + COR.version + "/";
  COR.pathContent = COR.urlPathContent;
  //console.log( "COR.pathApps", COR.pathApps);

} else {

  COR.pathApps = "./";
  COR.pathContent = "../../";

}

/* 0 to 360 10=red 120=green 240=blue */
let r = document.querySelector(':root');
r.style.setProperty('--main-hue', '120');
r.style.setProperty('--mnu-width', '17rem');


// Text scaling functionality
let currentScale = 1.0;
const MIN_SCALE = 0.5;
const MAX_SCALE = 2.0;

function adjustTextSize(increment) {
  currentScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, currentScale + increment));
  applyTextScale();
  saveTextScale();
}

function resetTextSize() {
  currentScale = 1.0;
  applyTextScale();
  saveTextScale();
}

function applyTextScale() {
  // Apply scale to root font size
  document.documentElement.style.fontSize = (currentScale * 100) + '%';

  // Scale the body font size
  document.body.style.fontSize = (currentScale * 100) + '%';

  // Scale the navigation menu width proportionally
  const baseMenuWidth = 19; // rem
  const scaledMenuWidth = baseMenuWidth * currentScale;
  document.documentElement.style.setProperty('--mnu-width', scaledMenuWidth + 'rem');

  // Scale the GitHub image proportionally
  const imgGitHub = document.getElementById('imgGitHub');
  if (imgGitHub) {
    const baseImageSize = 20; // px
    imgGitHub.style.width = (baseImageSize * currentScale) + 'px';
  }

  // Scale tree view elements
  scaleTreeViewElements();

  // Update button styles to reflect current scale
  updateButtonStyles();
}

function scaleTreeViewElements() {
  const style = document.createElement('style');
  style.id = 'dynamic-text-scaling';

  // Remove existing dynamic style if it exists
  const existingStyle = document.getElementById('dynamic-text-scaling');
  if (existingStyle) {
    existingStyle.remove();
  }

  // Base font sizes for tree view elements
  const baseSizes = {
    topLevel: 16,
    firstLevel: 14,
    secondLevel: 12,
    thirdLevel: 11,
    fourthLevel: 10
  };

  style.innerHTML = `
        /* Dynamic text scaling for tree view */
        div div>.folder-contents>details>summary {
          font-size: ${baseSizes.topLevel * currentScale}pt !important;
        }
        
        .folder-contents>details>.folder-contents>details>summary {
          font-size: ${baseSizes.firstLevel * currentScale}pt !important;
        }
        
        .folder-contents>details>.folder-contents>details>.folder-contents>details>summary {
          font-size: ${baseSizes.secondLevel * currentScale}pt !important;
        }
        
        .folder-contents>details>.folder-contents>details>.folder-contents>details>.folder-contents>details>summary {
          font-size: ${baseSizes.thirdLevel * currentScale}pt !important;
        }
        
        .folder-contents>details>.folder-contents>details>.folder-contents>details>.folder-contents>details>.folder-contents>details>summary {
          font-size: ${baseSizes.fourthLevel * currentScale}pt !important;
        }
        
        /* Scale other text elements */
        .aDingbat {
          font-size: ${2 * currentScale}rem !important;
        }
      `;

  document.head.appendChild(style);
}

function updateButtonStyles() {
  const buttons = document.querySelectorAll('#divNavExtras button');
  buttons.forEach(button => {
    if (button.id === 'btnDecreaseText' || button.id === 'btnIncreaseText') {
      button.style.fontSize = (1.2 * currentScale) + 'rem';
    } else if (button.id === 'btnResetText') {
      button.style.fontSize = (1.0 * currentScale) + 'rem';
    }
  });
}

function saveTextScale() {
  localStorage.setItem('tootoo-text-scale', currentScale.toString());
}

function loadTextScale() {
  const saved = localStorage.getItem('tootoo-text-scale');
  if (saved) {
    currentScale = parseFloat(saved);
    // Ensure the loaded value is within bounds
    currentScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, currentScale));
    applyTextScale();
  }
}
