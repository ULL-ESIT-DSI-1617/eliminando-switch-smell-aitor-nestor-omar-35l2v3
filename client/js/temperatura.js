"use strict";
class Temperatura extends Medida{
    constructor(x){
        super(x);
    }

    get_val(){
        let val = super.get_val();
        return val;
    }

    set_val(x){
        super.val = x;
    }
    get_unit(){
        let unit = super.get_val();
        return unit;
    }

    set_unit(x){
        super.unit = x;
    }
}

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

class Celsius extends Temperatura{
    constructor(x){
        super(x);

    }

    toFahrenheit(){
        let cel = super.get_val()
        let aux = cel * (9/5) + 32;
        return aux;
    }

    toKelvin(){
        let cel = super.get_val();
        let aux = parseInt(cel) + 273.15;
        return aux;
    }

    toCelcius(){
        return super.get_val();
    }


}
