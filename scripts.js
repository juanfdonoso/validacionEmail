function validarEmail(){
    /*
    Esta función valida un email que va a tener, como mínimo, la forma:
    x@x.xx
    Por lo tanto, se deben cumplir la siguientes condiciones:
    0. Debe tener, por lo menos, 6 caracteres
    1. Debe iniciar con una letra [65-90] o [97-122] valore en ascii
    2. Debe tener una sola @
    3. La @ debe ocupar una posición >= 1 y <= length-5
    4. El último punto debe ocupar una posición >= length-5 y <= length-3

    Vamos a declara una bandera que controle cada una de las condiciones anotadas
    */

    // leemos el email ingresado
    var email = document.getElementById("email").value;

    // declaramos una variable para el mensaje de validación
    var mensaje = "";

    //declaramos la banderas que validan cada condición indicada
    var flagPrimerCaracter = false;
    var flagArroba = false;
    var flagPosicionArroba = false;
    var flagUltimoPunto = false;
    var flagNumCaracteres = false;

    //checamos la longitud del email ingresado
    var n = email.length;
    if (n < 6){
        flagNumCaracteres = true;
        mensaje += "El email ingresado no tiene más de 6 caracteres<br>";
    }

    //checamos que el primer caracter sea una letra mayúscula o minúscula
    var primerCaracter = email.charCodeAt(0);
    if ((primerCaracter >= 65 && primerCaracter <= 90) || (primerCaracter >= 97 && primerCaracter <= 122)){
        // no hacemos nada, está correcto
    }else{
        flagPrimerCaracter = true;
        mensaje += "El primer caracer no es una letra<br>";
    }

    // checamos el número de @
    var numArrobas = 0;
    for (var i=0; i<n; i++){
        if (email.charAt(i) == "@") numArrobas++;
    }
    if (numArrobas != 1){
        flagArroba = true;
        mensaje += "El email ingresado contiene más de una @<br>";
    }


    //checamos  posición de la arroba si tenemos solo una arroba
    if (!flagArroba){
        var posArroba = email.indexOf("@");
        if (posArroba >= 1 && posArroba <= email.length-5){
            //esta correcto
        }else{
            flagPosicionArroba = true;
            mensaje += "La arroba no se encuentra en una posición válida<br>";
        }
    }

    // checamos la posición del último punto
    var ultimoPunto = email.lastIndexOf(".");
    if ((ultimoPunto >= email.length-5 && ultimoPunto <= email.length-3) && ultimoPunto != -1){
        //posición correcta
    }else{
        flagUltimoPunto = true;
        mensaje += "El último punto del email tiene una posición inválida";
    }

    //checamos el estado de las banderas
    if (!flagUltimoPunto && !flagNumCaracteres && !flagPosicionArroba && !flagPrimerCaracter && !flagArroba){
        document.getElementById("msj").innerHTML = "<span class='mensaje'>El email ingresado es válido</span>";
    }else{
        document.getElementById("msj").innerHTML="<span class='error'>"+mensaje+"</span>";
    }

 }