function calculadora(){

var arrpantalla = [];
var arrcalculo = [];
var result = 0;
var menuestado = false;
var science = false;
var punto = 0;
var borron = false;
var ansbool;
var parentesis = 0;
var arrparent = [];
var parequalplus = 0; 
var parequalminus = 0;
var tipoo;
var element;
var maskr = false;
var opercnindx = 0;
var arropercn = ['del','division','multip','menos','mas'];
var menuindx = 0;
var arrmenu = ['menuclear','menuans','menupop','menuayuda','menuacerca'];
var adprimer = true;
var adtime = true;
var adlisto = false;
var parflag = 1;
var flagrand = getRandomInt(1,3);

math.config({
  number: 'BigNumber',      // Default type of number:
                            // 'number' (default), 'BigNumber', or 'Fraction'
  precision: 5             // Number of significant digits for BigNumbers
});

window.addEventListener("resize", function() {
  // Get screen size (inner/outerWidth, inner/outerHeight) 
 if (menuestado==true)
 {
menuopen();	 
	 }  


  	//console.log("Cambio");
}, false);


function getRandomInt(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}  


function anuncio()
{
getKaiAd({
	publisher: '2d01e5a1-4477-4b9e-90cd-91a498d7b2cf',
	app: 'Calc K',
	slot: 'calck',
	test: 0,
	onerror: err => {console.error('Custom catch:', err)},
	onready: ad => {
		// Ad is ready to be displayed
		// custom event
		
		
		var ayuda = document.getElementById('menuayuda');
		var acerca = document.getElementById('menuacerca');
		
		
		ayuda.addEventListener('click', llamaad);
		acerca.addEventListener('click', llamaad);
		
		function llamaad() {
			removeclkad();
				adlisto = false;
				ad.call('display');
				adcontador();
				
				
		}


		function removeclkad() {
			ayuda.removeEventListener('click', llamaad);
			acerca.removeEventListener('click', llamaad);
		  
		}
		
	
	
	//console.log(adprimer+" "+adlisto);
	}
});		
	
}


function adcontador()
{
adtime = false;	
var n = 0;
//var l = document.getElementById("number");
 var timerId = setInterval(function(){
  //l.innerHTML = n;
  n++;
  //console.log(n);
  //Rompe intervalo
  if(n >= 31){
           clearInterval(timerId);
           adtime = true;
       }
  
},1000);

}


function admuestra()
{
	if(adprimer == true)
	{
		var adrand = getRandomInt(1,3);	
		if(adrand == flagrand)
		{
		anuncio();
		adprimer = false;
		adlisto = true;	
		adtime = false;
		}
	}
	else if(adprimer == false && adlisto == false)
	{
	parflag++;	
	if(parflag%2!=0){	
			if(adtime == true)
			{
			adrand = getRandomInt(1,3);	
				if(adrand == flagrand)
				{
				anuncio();
				adlisto = true;				
				}
			}
			//console.log("Es impar"+parflag+"Randoms"+adrand+flagrand);
		}
	}
	
}



/*var borrado = document.getElementById('deltcl').parentNode;
 
borrado.style.backgroundColor="#8D00E5";*/
 
 document.getElementById('deltcl').parentNode.style.backgroundColor="#8D00E5";
 document.getElementById('menuclear').className = 'menussobre'; 
 //document.getElementById('menuclear').firstElementChild.style.backgroundColor="#D9FF27";

function mnusnavup(indez,arreglo)
{
	if(indez >= 1 && indez <= 4)
	{
		var nvindx = arreglo[indez];
			if (arreglo == arropercn)
			{
				document.getElementById(nvindx).parentNode.style.backgroundColor="#4A5A5E";	
				--indez;

				nvindx = arreglo[indez];
				document.getElementById(nvindx).parentNode.style.backgroundColor="#8D00E5";	
				}
				
				else if (arreglo == arrmenu)
				{
				document.getElementById(nvindx).className = 'menussobreb'; 	
				--indez;

				nvindx = arreglo[indez];
				document.getElementById(nvindx).className = 'menussobre'; 

				}
				
				
	}
	
 	return	indez;	
} 
 
 
 
function mnusnavdwn(indez,arreglo)
{
	if(indez >= 0 && indez <= 3)
	{
		var nvindx = arreglo[indez];
			if (arreglo == arropercn)
			{
				document.getElementById(nvindx).parentNode.style.backgroundColor="#4A5A5E";	
				++indez;

				nvindx = arreglo[indez];
				document.getElementById(nvindx).parentNode.style.backgroundColor="#8D00E5";	
				}
				
				else if (arreglo == arrmenu)
				{
				document.getElementById(nvindx).className = 'menussobreb'; 	
				++indez;

				nvindx = arreglo[indez];
				document.getElementById(nvindx).className = 'menussobre'; 

				}
	}
	
 	return	indez;	
}


//var elementactivo = document.activeElement.tabIndex;
//tagName
//alert(elementactivo);

document.activeElement.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  //console.log(e.key);
   if(maskr == false){ 
  switch(e.key) {
   case 'ArrowLeft':
    document.getElementById("menupop").click();
      break;
   case 'ArrowRight':
   document.getElementById("menupop").click();
      break;	
    case 'SoftLeft':
    document.getElementById("elipsisv").click();
      break;
   case 'SoftRight':
   document.getElementById("elipsisv").click();
      break;	
   /*case 'Backspace':
   if(maskr == true){
   e.preventDefault();	   
	   cerrar();
	   }
   //document.getElementById("cerrarh").click(); 
   break; 
	 */   
	}
 
 if(menuestado == false){ 
	  
  if (science == false)
	{
   switch(e.key) {
   	case 'ArrowUp':
    opercnindx =mnusnavup(opercnindx,arropercn);
      break;
   	case 'ArrowDown':
    opercnindx =mnusnavdwn(opercnindx,arropercn);
      break;
    case 'Enter':
    document.getElementById(arropercn[opercnindx]).click();
      break;
    case '1':
     document.getElementById("one").click();
      break;
    case '2':
    document.getElementById("two").click();
      break;
    case '3':
    document.getElementById("three").click();
      break;
    case '4':
    document.getElementById("four").click();
      break;
    case '5':
    document.getElementById("five").click();  
      break;
    case '6':
    document.getElementById("six").click();
      break;
    case '7':
    document.getElementById("seven").click();  
      break;
    case '8':
    document.getElementById("eight").click();
      break;
    case '9':
    document.getElementById("nine").click(); 
      break;
    case '*':
    document.getElementById("punto").click(); 
      break;
    case '0':
    document.getElementById("zero").click();
      break;
        
    case '#':
    document.getElementById("igual").click();
    document.getElementById(arropercn[opercnindx]).parentNode.style.backgroundColor="#4A5A5E";
    document.getElementById('deltcl').parentNode.style.backgroundColor="#8D00E5";
    opercnindx = 0; 
      break;  
    
          
      case 'w':
     document.getElementById("one").click();
      break;
    case 'e':
    document.getElementById("two").click();
      break;
    case 'r':
    document.getElementById("three").click();
      break;
    case 's':
    document.getElementById("four").click();
      break;
    case 'd':
    document.getElementById("five").click();  
      break;
    case 'f':
    document.getElementById("six").click();
      break;
    case 'z':
    document.getElementById("seven").click();  
      break;
    case 'x':
    document.getElementById("eight").click();
      break;
    case 'c':
    document.getElementById("nine").click(); 
      break;
    case '.':
    document.getElementById("punto").click(); 
      break;
    case ',':
    document.getElementById("zero").click();
      break;
 
      case 'Space':
    document.getElementById("igual").click();
    document.getElementById(arropercn[opercnindx]).parentNode.style.backgroundColor="#4A5A5E";
    document.getElementById('deltcl').parentNode.style.backgroundColor="#8D00E5";
    opercnindx = 0; 
      break;  
     } 
  }
  else {
  switch(e.key) {
   	
   	
    
    case '1':
     document.getElementById("seno").click();
      break;
    case '2':
    document.getElementById("coseno").click();
      break;
    case '3':
    document.getElementById("tangente").click();
      break;
    case '4':
    document.getElementById("ln").click();
      break;
    case '5':
    document.getElementById("log").click();  
      break;
    case '6':
    document.getElementById("factorial").click();
      break;
    case '7':
    document.getElementById("pi").click();  
      break;
    case '8':
    document.getElementById("euler").click();
      break;
    case '9':
    document.getElementById("potencia").click(); 
      break;
    case '*':
    document.getElementById("parentiz").click(); 
      break;
    case '0':
    document.getElementById("parentdc").click(); 
      break; 
    case '#':
    document.getElementById("raiz").click(); 
      break;  
      
      
      case 'w':
     document.getElementById("seno").click();
      break;
    case 'e':
    document.getElementById("coseno").click();
      break;
    case 'r':
    document.getElementById("tangente").click();
      break;
    case 's':
    document.getElementById("ln").click();
      break;
    case 'd':
    document.getElementById("log").click();  
      break;
    case 'f':
    document.getElementById("factorial").click();
      break;
    case 'z':
    document.getElementById("pi").click();  
      break;
    case 'x':
    document.getElementById("euler").click();
      break;
    case 'c':
    document.getElementById("potencia").click(); 
      break;
    case 'v':
    document.getElementById("parentiz").click(); 
      break;
    case 'b':
    document.getElementById("parentdc").click(); 
      break; 
    case 'n':
    document.getElementById("raiz").click(); 
      break;  
      
      
     } 
  
  }
 
 }//X
 else
	{
		switch(e.key) {
   	case 'ArrowUp':
    menuindx =mnusnavup(menuindx,arrmenu);
      break;
   	case 'ArrowDown':
    menuindx =mnusnavdwn(menuindx,arrmenu);
      break;
    case 'Enter':
    document.getElementById(arrmenu[menuindx]).click();
      break;
      }
//console.log(arrmenu[menuindx]);
	}
 } 
 else if(maskr == true){
switch(e.key) {
 case 'Backspace':  
  
   e.preventDefault();	   
	   cerrar();
	   
   //document.getElementById("cerrarh").click(); 
   break;
   case 'EndCall':  
  
   e.preventDefault();	   
	   cerrar();
	   
   //document.getElementById("cerrarh").click(); 
   break;
   case 'ArrowDown':
//Scroll a lo alto
var ayudadiv = document.getElementById("cuadroayuda");
var ayudadivdsply = ayudadiv.offsetHeight;



if(ayudadivdsply > 0)
{
	var tamayudadiv = ayudadiv.scrollWidth;
	
	/*while (tamayudadiv <= ) {
  // code block to be executed
  
   ayudadiv.scrollTop += 100;
		 
	}*/

	ayudadiv.scrollTop += 100;	 
	//console.log(tamayudadiv); //1060px
	// ads 236H, 212W 
	}

      break;

case 'ArrowUp':
//Scroll a lo alto
var ayudadiv = document.getElementById("cuadroayuda");
var ayudadivdsply = ayudadiv.offsetHeight;



if(ayudadivdsply > 0)
{
	var tamayudadiv = ayudadiv.scrollHeight;
	
	/*while (tamayudadiv <= ) {
  // code block to be executed
  
   ayudadiv.scrollTop += 100;
		 
	}*/

	ayudadiv.scrollTop -= 100;	 
	//console.log(tamayudadiv); //1060px
	
	}


      break;  
		}

	}
}

function prezz() {

	 var that = this;
    that.style.opacity="0.7";
    setTimeout(function()
    {
    that.style.opacity="0";
    },400);
	
    var bndinserta = true;

    // Obtiene caracter
   var caractercl = this.dataset.calculo;
    var caracter = this.dataset.pantalla;
    var caractersp = this.dataset.especial;

	

		var largo = arrpantalla.length;
		document.getElementById("resultado").style.color="#000000";
if (borron == true )
{
	if (caracter == '0' || caracter == '1' || caracter == '2' || caracter == '3' || caracter == '4' || caracter == '5' || caracter == '6' || caracter == '7' || caracter == '8' || caracter == '9'
	|| caracter == '.' || caracter == 'sin(' || caracter == 'cos(' || caracter == 'tan(' || caracter == 'ln(' || caracter == 'log(' || caracter == '√('
	|| caracter == 'π' || caracter == 'e' || caracter == '(' || caracter == ')')
	{
arrcalculo.pop();
		arrpantalla.pop();
}
borron=false;
}

		if (largo == 0) { // si es cero
			if (caracter == '×' || caracter == '÷' || caracter == '^' || caracter == '!' || caracter == '+' || caracter == ')' || caracter == '0') {
			bndinserta = false;
			}
    }

else {
--largo;

			if ((arrpantalla[largo] == '×' || arrpantalla[largo] == '÷' || arrpantalla[largo] == '^' || arrpantalla[largo] == '+') &&
			(caracter == '×' ^ caracter == '÷' ^ caracter == '^' ^ caracter == '+' ^ caracter == '!')) {
				arrcalculo.pop();
				arrpantalla.pop();
				}	
				
				if ((arrpantalla[largo] == '(') &&
			(caracter == '×' ^ caracter == '÷' ^ caracter == '^' ^ caracter == '+' ^ caracter == '!')) {
				bndinserta = false;
				}	
				
				
				if ((arrpantalla[largo] == '-') &&
			(caracter == '×' ^ caracter == '÷' ^ caracter == '^' ^ caracter == '+' ^ caracter == '!' ^ caracter == '-')) {

				--largo;
			   if (arrpantalla[largo] == '×' || arrpantalla[largo] == '÷' || arrpantalla[largo] == '+') {
				bndinserta = false;
				}
				else {
				arrcalculo.pop();
				arrpantalla.pop();
				}
			}	
		

		

		if (caracter != '.' ^ caracter != '0' ^ caracter != '1' ^ caracter != '2' ^ caracter != '3' ^ caracter != '4' ^ caracter != '5' ^ caracter != '6' ^ caracter != '7' ^ caracter != '8' ^ caracter != '9') {
		punto=0;
	  }
	
}

	if (caracter != '.' || caracter != '0' || caracter != '1' || caracter != '2' || caracter != '3' || caracter != '4' || caracter != '5' || caracter != '6' || caracter != '7' || caracter != '8' || caracter != '9') {
			document.getElementById("operacion").innerHTML = "Ans = "+result;
		}
	
largo = arrpantalla.length;
--largo;
anst = arrpantalla[largo];

if (anst == 'Ans') {
 if (caracter == '×' || caracter == '÷' || caracter == '+' || caracter == '-' || caracter == '!' || caracter == '^' || caracter == '(' || caracter == ')') {
			
			
			}
			else {
	  largo = arrpantalla.length;
		  arrcalculo.splice(largo,0,'*');
		  arrpantalla.splice(largo,0,'');	
			}
			
}

if (caracter == '.')
		{
			++punto;
			if (punto > 1 || anst=='.')
			{
				bndinserta = false;
			}
		}

if (caracter == '(' || caracter == 'sin(' || caracter == 'cos(' || caracter == 'tan(' || caracter == 'ln(' || caracter == 'log(' || caracter == '√(') {
++parentesis;
++parequalplus;
}
if (caracter == ')') {
	++parequalminus;
	
	if (parequalplus < parequalminus) {
		bndinserta = false;
		parequalminus = parequalplus;
		}
	else {
		
	if (parentesis > 0) {
	--parentesis;
	arrparent.pop();	
	}
}
}

for (i = 0; i < parentesis; i++) {
	arrparent[i] = "<span class='parnts'>)</span>";
}


    // Si posicion no es zero o el anterior es mult o divc
    if (bndinserta == true) {
    	ansbool = false;
    arrcalculo.push(caractercl);
    arrpantalla.push(caracter);
    
    if (parentesis == 0) {
    document.getElementById("resultado").innerHTML = arrpantalla.join("");
    }
    else if (parentesis > 0) {
    document.getElementById("resultado").innerHTML = arrpantalla.join("")+arrparent.join("");
    }
    
//Scroll a lo largo
var elem = document.getElementById("resultado");
		  elem.scrollLeft = elem.scrollWidth;
    }
    
    if (caractersp != 'eql')
	{
	   document.getElementById("deltcl").innerHTML="DEL";
	}

}

function borra() {

	 var that = this;
    that.style.opacity="0.7";
    setTimeout(function()
    {
    that.style.opacity="0";
    },400);
    document.getElementById("resultado").style.color="#000000";
      // "Imprime" en codigo
    var caractercl = this.dataset.calculo;
    var elimina=arrcalculo.pop();

    // Imprime en pantalla
    var caracter = this.dataset.pantalla;
    arrpantalla.pop();


	 var largop = arrpantalla.length;

	 if (largop != 0)
	 {
	 	
		if (elimina == '.')
		{
			 punto = 0;
		}
	   
			if (elimina == '(' || elimina == 'sin(' || elimina == 'cos(' || elimina == 'tan(' || elimina == 'log(' || elimina == 'log10(' || elimina == 'sqrt(') {
			--parentesis;
			--parequalplus;
			arrparent.pop();
		}
		--largop
		var p = largop;
		
		if (elimina == '+' || elimina == '-' || elimina == '÷' || elimina == '×' || elimina == '(' || elimina == 'sin(' || 
		elimina == 'cos(' || elimina == 'tan(' || elimina == 'log(' || elimina == 'log10(' || elimina == 'sqrt(')
		{
			p = largop;
			
			while (arrcalculo[p] == '.' || arrcalculo[p] == '0' || arrcalculo[p] == '1' || arrcalculo[p] == '2' || arrcalculo[p] == '3' || arrcalculo[p] == '4' 
|| arrcalculo[p] == '5' || arrcalculo[p] == '6' || arrcalculo[p] == '7' || arrcalculo[p] == '8' || arrcalculo[p] == '9')
			{
				--p;
				
			  if (arrcalculo[p] == '.') {	
			  ++punto;
			  }
			}
			 
		}
		
		
		if (elimina == ')') {
	   --parequalminus;		
		++parentesis;
		}
		
	  for (i = 0; i < parentesis; i++) {
	  arrparent[i] = "<span class='parnts'>)</span>";
     }

			
		if (parentesis == 0) {
    document.getElementById("resultado").innerHTML = arrpantalla.join("");
    }
    else if (parentesis > 0) {
    document.getElementById("resultado").innerHTML = arrpantalla.join("")+arrparent.join("");
    }
		
		
		}
	else {
		arrparent.length=0;
		parequalplus = 0;
		parequalminus = 0;
		parentesis = 0;
			 punto = 0;
		document.getElementById("resultado").innerHTML = 0;
	}
	document.getElementById("operacion").innerHTML = "Ans = "+result;
	document.getElementById("deltcl").innerHTML="DEL";
}

function nosigue() {
  // Si el caracter final no tiene seguimiento se elimina
   var largo = arrpantalla.length;


   if (largo > 0) {


	   --largo;

	   var eliminado = arrpantalla[largo];

	   var numeros = /^[0-9]+$/;
	   

		if(eliminado.match(numeros)){
		numexpr = true;
		}else{
		numexpr = false;
		}

	   if (numexpr != true ^ eliminado != '!' ^ eliminado != ')' ^ eliminado != 'π' ^ eliminado != 'e')
	   {
		arrcalculo.pop();
		arrpantalla.pop();
		}
		

	 document.getElementById("operacion").innerHTML = arrpantalla.join("");
	}
   
}

function ans() {
paneloff();
ansbool=true;

if (borron == true)
{
arrcalculo.pop();
arrpantalla.pop();	
borron = false;
}

arrcalculo.push(result);
arrpantalla.push(result);
document.getElementById("operacion").innerHTML = "Ans = "+result;

if (parentesis == 0) {
    document.getElementById("resultado").innerHTML = arrpantalla.join("");
    }
    else if (parentesis > 0) {
    document.getElementById("resultado").innerHTML = arrpantalla.join("")+arrparent.join("");
    }

}

function resultdo() {
	 var that = this;
    that.style.opacity="0.7";
    setTimeout(function()
    {
    that.style.opacity="0";
    },400);

var largoap = arrpantalla.length;

	for (i in arrcalculo) {	
		j=i;
		k=i;
		--j;
		++k;
		
	 if ((arrcalculo[i] == 'sin(' || arrcalculo[i] == 'cos(' || arrcalculo[i] == 'tan(' || arrcalculo[i] == 'log(' || 
	 arrcalculo[i] == 'log10(' || arrcalculo[i] == 'sqrt(' || arrcalculo[i] == '(') && (arrcalculo[j] == '0' || arrcalculo[j] == '1' || arrcalculo[j] == '2' || arrcalculo[j] == '3' 
	 || arrcalculo[j] == '4' || arrcalculo[j] == '5') || arrcalculo[j] == '6' || arrcalculo[j] == '7' || arrcalculo[j] == '8' 
	 || arrcalculo[j] == '9' ) {
	 	
		  if (largoap<2) {
		  arrcalculo.splice(j,0,'*');
		  arrpantalla.splice(j,0,'');
		  }
	  
	 }
	 
	 
	 if ((arrcalculo[i] == 'pi' || arrcalculo[i] == 'e' || arrcalculo[i] == ')') && (arrcalculo[k] == '0' || arrcalculo[k] == '1' || arrcalculo[k] == '2' 
	 || arrcalculo[k] == '3' || arrcalculo[k] == '4' || arrcalculo[k] == '5' || arrcalculo[k] == '6' || arrcalculo[k] == '7' 
	 || arrcalculo[k] == '8' || arrcalculo[k] == '9' || arrcalculo[k] == '.' || arrcalculo[k] == 'sin(' || arrcalculo[k] == 'cos(' 
	 || arrcalculo[k] == 'tan(' || arrcalculo[k] == 'log(' || arrcalculo[k] == 'log10(' || arrcalculo[k] == 'sqrt(' 
	 || arrcalculo[k] == 'pi' || arrcalculo[k] == 'e' || arrcalculo[k] == '(')) {
		  if (largoap>0) {
		 
		  arrcalculo.splice(k,0,'*');
		  arrpantalla.splice(k,0,'');
		  }
	  
	 }
	  
	}	

var largopt = arrparent.length;
	
		if (largopt > 0) {
			
			for (i = 0; i < largopt; i++) {	
			arrcalculo.push(')');
			arrpantalla.push(')');
			
			
			}
		arrparent.length = 0;	
		parequalplus = 0;
		parequalminus = 0;
		parentesis = 0;	
		}	
		
		if (ansbool == false) {
  nosigue();
}  



if (largoap!=0) {
	
	var resultd = arrcalculo.join("");
	var operacal = math.compile(resultd);
	var rsltfinal = operacal.evaluate();
	result=rsltfinal;
	document.getElementById("deltcl").innerHTML="CLR";
	
	
}


if (rsltfinal == undefined) {
	document.getElementById("operacion").innerHTML = 0+" =";
    	document.getElementById("resultado").innerHTML = 0;
    }
    else {
    	
			document.getElementById("operacion").innerHTML = arrpantalla.join("")+"=";
			
		   document.getElementById("resultado").innerHTML = rsltfinal;
		   
		   if (rsltfinal == Infinity || rsltfinal == 'NaN') {
				document.getElementById("resultado").style.color="#FF0000";
				result=0;
				rsltfinal = 0;
						}	
   }


   arrpantalla.length = 0;
   if (rsltfinal != undefined) {
	arrpantalla[0]= rsltfinal;
   }

	arrcalculo.length = 0;
	arrcalculo[0]= rsltfinal;
punto = 0;
borron = true;
}



// Panel Cientifico +++++++++++++++++++++++++++++++++++++++++
/*
var panelsc = document.getElementById('cientific');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(panelsc);
//listen to events...
mc.add( new Hammer.Pan({ event: 'panleft' }) );
mc.add( new Hammer.Pan({ event: 'panright'}) );

function handlePanl() {
	 document.getElementById("cientific").style.right="0%";
		science = true;
		document.getElementById("scstate").innerHTML="Close";
    document.getElementById("flechal").style.display="none";
	document.getElementById("flechar").style.display="block";
	 }

function handlePanr() {
	 document.getElementById("cientific").style.right="-83.5%";
	 science = false;
	document.getElementById("scstate").innerHTML="Open";
    document.getElementById("flechar").style.display="none";
		document.getElementById("flechal").style.display="block";
	 }

mc.on("panleft", handlePanl);
mc.on("panright", handlePanr);
*/
// Menu +++++++++++++++++++++++++++++++++++++++++++++++++++

function menuopen() {
 if (menuestado == false) {
  admuestra();	 
  document.getElementById("elipsisv").style.borderStyle="solid"; 
  //checa si es horizontal o vertical
  if (window.matchMedia("(orientation: portrait)").matches) {
     document.getElementById("elipsisv").style.borderWidth="1px 1px 0px 1px";
  } else {
     document.getElementById("elipsisv").style.borderWidth="1px 0px 1px 1px";
  }

 
  document.getElementById("elipsisv").style.borderColor="#BFBFBF";
  document.getElementById("menup").style.display="block";
  menuestado = true;
 }
 else {
  document.getElementById("elipsisv").style.borderWidth="0px";
  document.getElementById("elipsisv").style.borderStyle="none";
  document.getElementById("elipsisv").style.borderColor="#BFBFBF";
  document.getElementById("menup").style.display="none";
  menuestado = false;
 }//menu style reset
 document.getElementById(arrmenu[menuindx]).className = 'menussobreb'; 
 document.getElementById('menuclear').className = 'menussobre';
 menuindx = 0; 

}


function menupop() {
	if (science == false)
	{
	document.getElementById("cientific").style.right="0%";
	science = true;
	document.getElementById("scstate").innerHTML="Close";
    document.getElementById("flechal").style.display="none";
	document.getElementById("flechar").style.display="block";
	}
	else {
		document.getElementById("cientific").style.right="-83.5%";
		science = false;
		document.getElementById("scstate").innerHTML="Open";
		document.getElementById("flechar").style.display="none";
		document.getElementById("flechal").style.display="block"
	}

paneloff();
}

function menuclear() {
arrparent.length = 0;
parequalplus = 0;
parequalminus = 0;
parentesis = 0;	
punto=0;
arrpantalla.length = 0;
arrcalculo.length = 0;
document.getElementById("operacion").innerHTML = '';
document.getElementById("resultado").innerHTML = 0;
document.getElementById("deltcl").innerHTML="DEL";
document.getElementById("resultado").style.color="#000000";
paneloff();
}

function paneloff() {
document.getElementById("elipsisv").style.borderWidth="0px";
document.getElementById("elipsisv").style.borderStyle="none";
document.getElementById("elipsisv").style.borderColor="#BFBFBF";
document.getElementById("menup").style.display="none";
menuestado = false;
}

function ayuda() {	
document.getElementById("mascarah").style.display="block";
document.getElementById("ayuda").style.display="block";
paneloff();
maskr=true;
//Scroll a lo alto
var elem = document.getElementById("cuadroayuda");
		  elem.scrollTop = 0;
		  //console.log(elem.offsetHeight);		
}

function acerca() {	
document.getElementById("mascara").style.display="block";
document.getElementById("about").style.display="block";
paneloff();
maskr=true;
}

function cerrar() {	
document.getElementById("mascara").style.display="none";
document.getElementById("about").style.display="none";
document.getElementById("mascarah").style.display="none";
document.getElementById("ayuda").style.display="none";
maskr=false;
}

function expression(){
document.location.href = "#expression";
}
function scientific(){
document.location.href = "#scientific";
}
function featuresf(){
document.location.href = "#features";
}


// Botones ++++++++++++++++++++++++++++++++++++++

document.getElementById("seven").onclick = prezz;
document.getElementById("eight").onclick = prezz;
document.getElementById("nine").onclick = prezz;
document.getElementById("del").onclick = borra;

document.getElementById("four").onclick = prezz;
document.getElementById("five").onclick = prezz;
document.getElementById("six").onclick = prezz;
document.getElementById("division").onclick = prezz;

document.getElementById("one").onclick = prezz;
document.getElementById("two").onclick = prezz;
document.getElementById("three").onclick = prezz;
document.getElementById("multip").onclick = prezz;

document.getElementById("punto").onclick = prezz;
document.getElementById("zero").onclick = prezz;
document.getElementById("igual").onclick = resultdo;
document.getElementById("menos").onclick = prezz;
document.getElementById("mas").onclick = prezz;

// cientifica

document.getElementById("seno").onclick = prezz;
document.getElementById("coseno").onclick = prezz;
document.getElementById("tangente").onclick = prezz;

document.getElementById("ln").onclick = prezz;
document.getElementById("log").onclick = prezz;
document.getElementById("factorial").onclick = prezz;

document.getElementById("pi").onclick = prezz;
document.getElementById("euler").onclick = prezz;
document.getElementById("potencia").onclick = prezz;

document.getElementById("parentiz").onclick = prezz;
document.getElementById("parentdc").onclick = prezz;
document.getElementById("raiz").onclick = prezz;


document.getElementById("elipsisv").onclick = menuopen;

document.getElementById("operacion").onclick = paneloff;
document.getElementById("resultado").onclick = paneloff;

document.getElementById("menuclear").onclick = menuclear;

document.getElementById("menuans").onclick = ans;

document.getElementById("menupop").onclick = menupop;


document.getElementById("cerrarh").onclick = cerrar;

document.getElementById("menuayuda").onclick = ayuda;



document.getElementById("cerrar").onclick = cerrar;

document.getElementById("menuacerca").onclick = acerca;

//document.getElementById("tipo").onclick = expression;
//document.getElementById("panscf").onclick = scientific;
//document.getElementById("caract").onclick = featuresf;

/*screen.addEventListener("orientationchange", function () {

	tipoo=screen.orientation || screen.mozOrientation || screen.msOrientation;
	element = document.getElementById("menupop");
	
	
	if(tipoo == "landscape-primary" || tipoo == "landscape-secondary")
		{
		document.getElementById("cientific").style.right="0%";
		science = true;
		document.getElementById("scstate").innerHTML="Close";
		element.classList.add("disabled");
		mc.off("panleft", handlePanl);
		mc.off("panright", handlePanr);
		}
		else {
			document.getElementById("cientific").style.right="-83.5%";
			science = false;
			document.getElementById("scstate").innerHTML="Open";
			element.classList.remove("disabled");
			mc.on("panleft", handlePanl);
			mc.on("panright", handlePanr);
		}
		

});*/
	
};
