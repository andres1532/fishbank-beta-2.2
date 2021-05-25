var DineroInicial = document.getElementById('Dinero').innerHTML = 0;
var CantidadBarcos = 0;
var BarcosNivel0 = 0;
var BarcosNivel1 = 0;
var BarcosNivel2 = 0;
var BarcosNivel3 = 0;
var BarcosNivel4 = 0;

var Barcos = parseInt(document.getElementById('BarcoGenerico').value);

function Enviar(){
    var a = DineroInicial; 
    var b = parseInt(document.getElementById('ContenedorPantallaGiro').value);

    //alert(dinero);

    if(b == 100 || b == 200 || b == 500 || b == 1000){
        var c = DineroInicial += b;
        document.getElementById('Dinero').innerHTML = c;
        document.getElementById('ContenedorPantallaGiro').value = null;

    } else{

        alert("Ingresaste un valor diferente de los disponibles");
        document.getElementById('Dinero').innerHTML = DineroInicial;

    }

}

function ComprarBarco(){
    var a = DineroInicial; 
    var b = parseInt(document.getElementById('CompraBarco').value);

    if(DineroInicial >= b){
        
        var c = DineroInicial -= b;
        document.getElementById('Dinero').innerHTML = c;
        document.getElementById('CantidadBarcos').innerHTML = CantidadBarcos += 1;
        document.getElementById('BarcoGenerico').innerHTML = BarcosNivel0 += 1;

    }
    
    if(DineroInicial < b){
        alert("No tienes dinero suficiente para comprar barcos");
        b = null;
    }
}

function Pagar(){
    var a = DineroInicial; 
    var b = parseInt(document.getElementById('ContenedorPantallaValor').value);

    if (a < 100){

        alert("No tienes dinero suficiente para realizar está mejoras");
        document.getElementById('Dinero').innerHTML = b;

    } 

    //Aumentando mejoras
    if(CantidadBarcos > 0) {
        
        //mejora 1
        if(a >= 100 && b == 100 && BarcosNivel0 > 0){
            var c = DineroInicial -= b;
            
            document.getElementById('Dinero').innerHTML = c;
            document.getElementById('BarcoGenerico').innerHTML = BarcosNivel0 -= 1;
            document.getElementById('Nivel1').innerHTML = BarcosNivel1 += 1;

        }else if(document.getElementById('BarcoGenerico').value <= 0 || DineroInicial < 100){
                alert("No tienes barcos para mejorar");
                document.getElementById('BarcoGenerico').innerHTML = 0;
                b = null;
            }

        //mejora 2
        if(a >= 200 && b == 200 && BarcosNivel1 > 0){
            var c = DineroInicial -= b;

            document.getElementById('Dinero').innerHTML = c;
            document.getElementById('Nivel1').innerHTML = BarcosNivel1 -= 1;
            document.getElementById('Nivel2').innerHTML = BarcosNivel2 += 1;

        } else if(document.getElementById('Nivel1').value <= 0 || DineroInicial < 200){

            alert("No tienes barcos Nivel 1 o dinero suficiente para mejorar");
            b = null;
        }
        
        /*else{
            alert("No tienes dinero suficiente para realizar más mejoras");
            document.getElementById('Dinero').innerHTML = DineroInicial;
            b = null;
        }*/

        //mejora 3
        if(a >= 300 && b == 300 && BarcosNivel2 > 0){
            var c = DineroInicial -= b;

            document.getElementById('Dinero').innerHTML = c;
            document.getElementById('Nivel2').innerHTML = BarcosNivel2 -= 1;
            document.getElementById('Nivel3').innerHTML = BarcosNivel3 += 1;

        }else if(document.getElementById('Nivel2').value <= 0 || b <= 300){

            //alert("No tienes barcos Nivel 2 para mejorar");

        }

        //mejora 4
        if(a >= 400 && b == 400 && BarcosNivel3 > 0){
            var c = DineroInicial -= b;

            document.getElementById('Dinero').innerHTML = c;
            document.getElementById('Nivel3').innerHTML = BarcosNivel3 -= 1;
            document.getElementById('Nivel4').innerHTML = BarcosNivel4 += 1;

        }else /*if(document.getElementById('Nivel3').value <= 0 || BarcosNivel3 == 0)*/{

            //alert("No tienes barcos Nivel 3 o dinero suficiente para mejorar");
            b = null;
        }


   } else if(BarcosNivel0 <= 0){

        alert("No tienes barcos para realizar esta mejora");
        document.getElementById('Dinero').innerHTML = c; 
    }

    //condiciones para la compra de mejoras
    if(b == 100 || b == 200 || b == 300 || b == 400){

        document.getElementById('Dinero').innerHTML = c;

    } else if(b != 100 || b != 200 || b != 300 || b != 400){

        document.getElementById('Dinero').innerHTML = DineroInicial;
    }

}