// copyright 2025 Theo Armour. MIT license.
/* global COR, MNUdivShowHide, MNUdivPopUp, detNavMenu */
// jshint esversion:
// jshint loopfunc: true


let MNU = {};


MNU.init = function () {

	MNU.info = `
Menu system<br>
<br>
File: mnu-menu.js<br>
Name space: MNU<br>
Release: 2025-01-10<br>
<button onclick=MNU.getSample()>Testing: add sample menu</button>
`;

	MNU.infoBoxHtm = COR.description ? COR.description : MNU.info;

	MNUdivShowHide.innerHTML = `

	<details id=detNavMenu class="gmd-4">

		<summary id=sumNavMenu class="summary-nav gmd-1" title="click to view or hide menu">
			☰ <span id=spnMenuHelp>show&darr; || hide&uarr; menu</span>
		</summary>

		<nav id="navMenu" class="gmd-4">

			<div id=MNUdivHeader></div>

			<div id=MNUdivExtras>
				<button onclick=document.body.style.fontSize="80%";sumNavMenu.style.width="10rem"; style="font-size:80%;" >A</button>
				<button onclick=document.body.style.fontSize="100%";sumNavMenu.style.width="13rem"; style="font-size:100%;">A</button>
				<button onclick=document.body.style.fontSize="150%";sumNavMenu.style.width="20rem";  style="font-size:150%;">A</button>
			</div>

			<div id=MNUdivContent></div>

			<div id=MNUdivSample></div>

			<div id=MNUdivFooter></div>

		</nav>

	</details>`;

	if ( window.innerWidth < 800 || window.innerHeight < 500 ) {

		//document.documentElement.style.setProperty( "--mnu-width", "35%" );
		//console.log( "bb", 23 );
		sumNavMenu.hidden = false;
		detNavMenu.open = false;

	} else {

		const value = window.getComputedStyle( document.documentElement ).getPropertyValue( '--mnu-width' ); // #999999
		//console.log( "value", value );
		detNavMenu.style.width = value;
		detNavMenu.style.maxWidth = "50%";
		detNavMenu.open = true;
		//navMenu.hidden = false;
		sumNavMenu.hidden = true;
	}

	//${ MNU.addInfoBox( "Files to try" ) }


	MNUdivHeader.innerHTML = `
<header>

	<h1>
		<a id=MNUaSource href=${ COR.urlSource } target="_top" title="Click to go to the source code on GitHub">
			${ COR.iconGitHub }</a>

		<a href="" title="Click this title to reload this page">
			<span id=MNUspnTitle>${ COR.title }</span>
			<span id=MNUspnVersion>${ COR.version }</span></a>

		${ MNU.addInfoBox( MNU.infoBoxHtm, "MNUinfoBox" ) }

	</h1>

</header>`;



	MNUdivFooter.innerHTML = `
<footer>

	<div id=divLog ></div>

	<hr>

	<center>
		<a id=MNUaIcon class=aDingbat href="javascript:MNUspnTitle.scrollIntoView();" title="Scroll to top" >
		${ COR.iconRepo }
		</a>
	</center>

</footer>`;


};



MNU.addInfoBox = function ( text = MNU.infoBoxHtm, id = "" ) {
	//console.log( { text } );
	const htm = `
<span class="info">
	${ COR.iconInfo }
	<div class="infoTooltip gmd-5">
		<div id=${ id } >${ text }</div>
	</div>
</span>`;

	return htm;

};

