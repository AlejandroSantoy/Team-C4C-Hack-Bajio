window.onload = function () {
    "use strict";
    var btncal = document.getElementById('calcular');
    var reinicio=document.getElementById('reset');
    btncal.addEventListener("click", calculo);
    reinicio.addEventListener("click", again);

};


function calculo(){
    "use strict";
    //isn contiene el monto

    var isn = document.getElementById('textmonto').value;
    
    if(isNaN(isn)){
        alert("Ingrese un numero en el monto");
    }
    else{
        if(isn == null || isn.length == 0 || /^\s+$/.test(isn)){
            
        }
        else{

        	//Interes anual constante
        	var int_an=0.09;
        	
        	//Interes mensual constante
        	var int_men=(int_an/12);
        	
        	//Años a pagar el prestamo 
            var años_inv = document.getElementById('años_inve').value;
            
            //Total de pagos a hacer
            var total_men=(años_inv*12);
            
            //Añadimos uno a la tasa mensual
        	var men_nueva=(int_men+1);
           	//Elevamos el interes sumado a la potencia del total de meses a pagar
            var elevada = Math.pow(men_nueva,(total_men*(-1)));
           	
            //A uno le restamos elevada
            var restado=1-elevada;

           	
            //Dividimos tasa interes periodico entre el valor estado de 1
            var dividido=int_men/restado;
                        var totak=dividido*isn;
           	

            document.getElementById('interesmeses').value=int_men;
            document.getElementById('total_pagos').value=total_men;
            document.getElementById('cant_mes').value=totak;
                }
    }

}

function again(){
	"use strict";
	var cadena = "";
	document.getElementById('interesmeses').value=cadena;
            document.getElementById('total_pagos').value=cadena;
            document.getElementById('cant_mes').value=cadena;
            document.getElementById('textmonto').value=cadena;
            document.getElementById('años_inve').value=cadena;

}