window.onload = function () {
    "use strict";
    var btncal = document.getElementById('btncal');
    btncal.addEventListener("click", calcular);
};
function calcular(){
    "use strict";
    var isn = document.getElementById("exampleInputAmount").value;
    if(isNaN(isn)){
        alert("Ingrese un numero en el monto");
    }
    else{
        if(isn == null || isn.length == 0 || /^\s+$/.test(isn)){
            alert("El campo de monto es incompleto");
        }
        else{
            //Monto a ahorrar 
            var i = .07/12;
            var montoa = parseFloat(document.getElementById("exampleInputAmount").value);
            //años de ahorro
            var anoa = parseFloat(document.getElementById("anosahorro").value);
            //Mese de ahorro
            var mesa = anoa*12;
            //monto en una sola exchibicion
            var montoE = mesa*montoa;
            //Devolviendo datos
            document.getElementById('montoE').value = montoE;
            //Años para juvilarse
            var juvia = parseFloat(document.getElementById("juvi").value);
            //valor fututo
            var vf0 = Math.pow(1+i,mesa);
            var vf1 = vf0-1;
            var vf2 = vf1/i;
            //vf final
            var vf3 = montoa*vf2;
            //impuestos
            var ahorrosc = vf3*0.2;
            //ahorro despues de los impuestos
            var ahorro_despues = vf3-ahorrosc;
            //monto por comision
            var monto_comision = .05*vf3;
            //num de depositos
            var num_dep = juvia*12;
            //monto despues de impuesto y comicion
            var mic = ahorro_despues-monto_comision;
            //
            var finalresult = mic/num_dep;
            
            document.getElementById('disabledInput').value = finalresult;
        }
    }
}
