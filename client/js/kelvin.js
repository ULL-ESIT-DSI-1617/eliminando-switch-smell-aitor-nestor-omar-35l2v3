"use strict";
class Kelvin extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Kelvin a Celsius
        let cel = super.get_val();
        let aux = cel - 273.15;
        return aux;

    }

    toKelvin(){
        return super.get_val();
    }

    toFahrenheit(){                       //Paso de Kelvin a Fahrenheit
        let cel = super.get_val();
        let aux = cel * (9/5) - 459.67;
        return aux;
    }
}
