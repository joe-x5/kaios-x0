function handleKeydown(e) {
  switch(e.key) {
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


const softkeyCallback = {
	
	back: function() { 
      window.open("index.html","_self");
     },
	
    left: function() { 
      
     },
  
    center: function() { 

      },
  
    right: function() { 
       window.open("index.html","_self");
     }
};

document.addEventListener('keydown', handleKeydown);