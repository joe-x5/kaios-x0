var lstorage = JSON.parse(localStorage.getItem("ledbanner"));

var colormass = ["Rainbow","White","Yellow","Orange","Red","Green","Blue","Pink","Violet","Magenta"];
var sizemass = ["XSmall","Small","Medium","Large","XLarge"];
var speedmass = ["XSlow","Slow","Normal","Fast","XFast"];
var directionmass = ["To Left","To Right"];

var text = lstorage.text;
var color = lstorage.color;
var size = lstorage.size;
var speed = lstorage.speed;
var direction = lstorage.direction;
var glow = lstorage.glow;

document.getElementById("text").value = text;
document.getElementById("color").value = color;
document.getElementById("size").value = size;
document.getElementById("speed").value = speed;
document.getElementById("direction").value = direction;
if (glow=="true") { document.getElementById("glow").checked=true; } else { document.getElementById("glow").checked=false;}


function leftright(mv) {
	var chk = document.activeElement;
	
	if (chk.id=="color") {
		if (colormass.indexOf(document.getElementById("color").value)+mv>-1 && colormass.indexOf(document.getElementById("color").value)+mv<colormass.length) {
			document.getElementById("color").value=colormass[colormass.indexOf(document.getElementById("color").value)+mv];
		}
	}
	
	if (chk.id=="size") {
		if (sizemass.indexOf(document.getElementById("size").value)+mv>-1 && sizemass.indexOf(document.getElementById("size").value)+mv<sizemass.length) {
			document.getElementById("size").value=sizemass[sizemass.indexOf(document.getElementById("size").value)+mv];
		}
	}
	
	if (chk.id=="speed") {
		if (speedmass.indexOf(document.getElementById("speed").value)+mv>-1 && speedmass.indexOf(document.getElementById("speed").value)+mv<speedmass.length) {
			document.getElementById("speed").value=speedmass[speedmass.indexOf(document.getElementById("speed").value)+mv];
		}
	}
	
	if (chk.id=="direction") {
		if (directionmass.indexOf(document.getElementById("direction").value)+mv>-1 && directionmass.indexOf(document.getElementById("direction").value)+mv<directionmass.length) {
			document.getElementById("direction").value=directionmass[directionmass.indexOf(document.getElementById("direction").value)+mv];
		}
	}
	
}

function handleKeydown(e) {
  switch(e.key) {
	case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
      break;
	case 'ArrowLeft':
		leftright(-1);
      break;
    case 'ArrowRight':
		leftright(1);
      break;
    case 'SoftLeft':
      softkeyCallback.left();
      break;
    case 'SoftRight':
      softkeyCallback.right();
      break;
    case 'Enter':
      softkeyCallback.center();
      break;
	case 'Backspace':
	    e.preventDefault();
		softkeyCallback.back();		
	break;

  }
};

function nav (move) {
  var currentIndex = document.activeElement.tabIndex;
  var items = document.querySelectorAll(".items");
  var next = currentIndex + move;
	  if (next<items.length && next>-1) {
		  var targetElement = items[next];
		  targetElement.focus();
	  }
};


const softkeyCallback = {
	
	back: function() { 
      window.open("index.html","_self");
     },
	
    left: function() { 
      
		lstorage.text = document.getElementById("text").value.trim();
		if (lstorage.text.length==0) { lstorage.text="Put some text here..."; }
		lstorage.color = document.getElementById("color").value;
		lstorage.size = document.getElementById("size").value;
		lstorage.speed = document.getElementById("speed").value;
		lstorage.direction = document.getElementById("direction").value;
		if (document.getElementById("glow").checked) { lstorage.glow="true"; } else { lstorage.glow="false"; }
		localStorage.setItem("ledbanner", JSON.stringify(lstorage));
		window.open("index.html","_self");
	  
     },
  
    center: function() { 
	
		var chk = document.activeElement;
	
		if (chk.id=="glow") {
			if (chk.checked) { chk.checked=false; } else { chk.checked=true; }
		}
      },
  
    right: function() { 
       window.open("index.html","_self");
     }
};

document.addEventListener('keydown', handleKeydown);

window.addEventListener("load", function() { document.getElementById("text").focus(); });

function start_KaiAds() {
	getKaiAd({
	publisher: '58d21092-87f8-47c3-883d-fcd67eb318d8',
	app: 'Bouncy Balls',
	slot: 'fullscreen',
	test: 0,
	onerror: err => console.error('Custom catch:', err),
	onready: ad => {
		ad.call('display')
		ad.on('click', () => console.log('click event') )
		ad.on('close', () => {
			document.addEventListener('keydown', handleKeydown); 
			document.getElementById("text").focus();
			} )
		ad.on('display', () => document.removeEventListener('keydown', handleKeydown) )
	}
})
}

document.addEventListener("DOMContentLoaded", () => { start_KaiAds(); });