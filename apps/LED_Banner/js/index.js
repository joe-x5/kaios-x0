if (!localStorage.getItem("ledbanner")) {
	
	var lstorage = {
				"text": "Put some text here...", 
				"color": "White", 
				"size":"Large", 
				"speed": "Normal",
				"direction":"To Left",
				"glow":"true"
					};
				
	localStorage.setItem("ledbanner", JSON.stringify(lstorage));
}

function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
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
  }
};

function nav (move) {
  var currentIndex = document.activeElement.tabIndex;
  var items = document.querySelectorAll(".items");
  var next = currentIndex + move;
  if (next>items.length-1) {next=items.length-1;} else if (next<0) {next=0;}
  var targetElement = items[next];
  targetElement.focus();
};



const softkeyCallback = {

    left: function() { 

     },
  
    center: function() { 
	
	var chk = document.activeElement;
	
	if (chk.id=="run") { window.open("run.html","_self"); }
	if (chk.id=="set") { window.open("set.html","_self"); }
	if (chk.id=="help") { window.open("help.html","_self");  }

      },
  
    right: function() { 
	
     }
};

document.addEventListener('keydown', handleKeydown);

window.addEventListener("load", function() {
  var items = document.querySelectorAll('.items');
  var targetElement = items[0];
  targetElement.focus();
});