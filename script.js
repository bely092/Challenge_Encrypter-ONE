
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



var salida = document.getElementById("mostrar-texto");
var cadena = document.getElementById("area");
var frase = "";

function copiarTexto(){
    const boton = document.getElementById("btn-3");
   	const rango = document.createRange();
   	const seleccion = window.getSelection();


   	boton.addEventListener("click", function(){
   		rango.selectNodeContents(salida);
   		seleccion.removeAllRanges();
   		seleccion.addRange(rango);
        
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
   	});
   
}


function encriptar(){
	//funcion para encriptar
    if(cadena.value != ""){  
        document.getElementById("caja-1").style.display = "none";
        document.getElementById("campo-lateral-2").style.display = "contents"; 	
    	frase = cadena.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    	frase = frase.replace(/e/gim,"enter");
    	frase = frase.replace(/i/gim,"imes");
		frase = frase.replace(/a/gim,"ai");		
        frase = frase.replace(/o/gim,"ober");
		frase = frase.replace(/u/gim,"ufat");
		salida.innerHTML = frase;
        salida.value = frase;
    }
    else{
    	alert('Intente Nuevamente');
    } 
}


function desencriptar(){
	//funcion que intenta desensencriptar
    if(cadena.value != ""){ 
        document.getElementById("caja-1").style.display = "none";
        document.getElementById("campo-lateral-2").style.display = "contents";  	
    	frase = cadena.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    	frase = frase.replace(/enter/gim,"e");
    	frase = frase.replace(/imes/gim ,"i");
		frase = frase.replace(/ai/gim,"a");		
        frase = frase.replace(/ober/gim,"o");
		frase = frase.replace(/ufat/gim,"u");
		salida.innerHTML = frase;
        salida.value = frase;
    }
    else{
    	alert('Intente Nuevamente');
    }
  
  
}



