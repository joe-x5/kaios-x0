var lstorage = JSON.parse(localStorage.getItem("ledbanner"));

var text = lstorage.text;
var color = lstorage.color;
var size = lstorage.size;
var speed = lstorage.speed;
var direction = lstorage.direction;
var glow = lstorage.glow;

var fontSize = 240;
var lineHeight = 240;

if (size=="XLarge") { fontSize = 320; lineHeight = 320;}
if (size=="Large") { fontSize = 260; lineHeight = 260;}
if (size=="Medium") { fontSize = 200;}
if (size=="Small") { fontSize = 140;}
if (size=="XSmall") { fontSize = 80;}

var speedSize = 6;

if (speed=="XSlow") { speedSize=10; }
if (speed=="Slow") { speedSize=8; }
if (speed=="Normal") { speedSize=6; }
if (speed=="Fast") { speedSize=4; }
if (speed=="XFast") { speedSize=2; }

speedSize=Math.floor((speedSize*text.length)/6);

var colorHex = "#FFFFFF";

if (color=="White") { colorHex = "#FFFFFF"; }
if (color=="Yellow") { colorHex = "#FFFF00"; }
if (color=="Orange") { colorHex = "#FF8000"; }
if (color=="Red") { colorHex = "#FF0000"; }
if (color=="Green") { colorHex = "#00FF00"; }
if (color=="Blue") { colorHex = "#00BFFF"; }
if (color=="Pink") { colorHex="#FFC0CB"; }
if (color=="Violet") { colorHex="#BF8BFF"; }
if (color=="Magenta") { colorHex="#FF00FF"; }

var raindowHex = ["#FFFF00","#00BFFF","#FFFFFF","#FF0000","#00FF00","#FFC0CB","#FF00FF","#FF8000","#BF8BFF"];


var lock = navigator.requestWakeLock("screen");

window.onkeydown = function (e) {
	if (e.key == "Backspace") { 
	e.preventDefault(); 
	lock.unlock();
	window.history.back();
	}
}


var div = document.createElement("div");

if (color=="Rainbow") {
	
	var text2 = "";
	var startColor=0;
	var addglow="";
	
	for (var i=0;i<text.length;i++) {
		if (glow=="true") { addglow="text-shadow:"+raindowHex[startColor]+"  0 0 15px;" ;}
		text2=text2+"<span style='color:"+raindowHex[startColor]+";"+addglow+"'>"+text[i]+"</span>";
		startColor++;
		if (startColor>=raindowHex.length) {startColor=0;}
	}
	div.innerHTML=text2;
	
} else {
div.innerHTML="<span style='color:"+colorHex+"'>"+text+"</span>";
if (glow=="true") {	div.style.setProperty("text-shadow", colorHex+" 0 0 15px"); }
}
div.style.setProperty("position", "fixed");
if (direction=="To Left") { div.style.setProperty("top", "320px"); }
if (direction=="To Right") { div.style.setProperty("bottom", "320px"); }
div.style.setProperty("left", "0px");
div.style.setProperty("writing-mode", "vertical-lr");
div.style.setProperty("line-height", lineHeight+"px");
div.style.setProperty("font-size", fontSize+"px");
div.style.setProperty("white-space", "nowrap");
div.style.setProperty("animation-name", "runtext_anim");
div.style.setProperty("animation-fill-mode", "forwards");
div.style.setProperty("animation-timing-function", "linear");
div.style.setProperty("animation-iteration-count", "infinite");
div.style.setProperty("animation-duration", speedSize+"s");


document.body.appendChild(div);

var clientHeight = div.clientHeight;

var style = document.createElement("style");
style.type = "text/css";
document.getElementsByTagName("head")[0].appendChild(style);

var keyFrames;

if (direction=="To Left")  { keyFrames = "@keyframes runtext_anim { 100% { top:-"+clientHeight+"px; }}"; }
if (direction=="To Right")  { keyFrames = "@keyframes runtext_anim { 100% { bottom:-"+clientHeight+"px; }}"; }
style.innerHTML = keyFrames;


