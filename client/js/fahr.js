"use strict";
class Fahrenheit extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Fahrenheit a Celsius
        let cel = super.get_val();
        let aux = cel - 32 * (5/9);
        return aux;
    }

    toKelvin(){                           //Paso de Fahrenheit a Kelvin
        let cel = super.get_val();
        let aux = parseInt(cel) - 32 * (5/9) + 273;
        return aux;
    }

    toFahrenheit(){
        return super.get_val();
    }
}
