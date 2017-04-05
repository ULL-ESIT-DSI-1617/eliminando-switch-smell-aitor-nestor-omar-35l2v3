function main(){
    let regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;
    let aux = (original.value).split(" ");
    let from = aux[0].match(regexp) //separamos el numero de la unidad
    let p;
    if(from == null){
        converted.innerHTML = "Ha introducido una unidad no soportada";
    }
    else if (from[2] == 'C' || from[2] == 'c' ){
        console.log("Es Celsius");
        p = new Celsius(aux[0]);
        console.log(p.val());
    }

    else if (from[2] == 'F' || from[2] == 'f' ){
        console.log("Es Fahrenheit");
        p = new Fahrenheit(aux[0]);
        //console.log(p.val());

    }

    else if (from[2] == 'K' || from[2] == 'k' ){
        console.log("Es Kelvin")
        p = new Kelvin(aux[0]);
      //  console.log(p.val());

    }

    let to_ = aux[aux.length - 1];    // Hacemos esto para contemplar la posibilidad de poner "to" o no
    console.log(to_);

    if (to_=='C' || to_ == 'c' ){
        console.log("A Celcius");
        converted.innerHTML = "La temperatura es " + p.toCelsius();
    }
    else if (to_ == 'F' || to_ == 'f' ){
        console.log("A Fahrenheit");
        converted.innerHTML = "La temperatura es " + p.toFahrenheit();
    }
    else if (to_ == 'K' || to_ == 'k' ){
        console.log("A Kelvin");
        converted.innerHTML = "La temperatura es " + p.toKelvin();
    }
}