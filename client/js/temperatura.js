"use strict";
class Temperatura extends Medida{
    constructor(x){
        super(x);
    }

    get val(){
        let val = super.cadena;
        return val;
    }

    set val(x){
        super.val = x;
    }
    get unit(){
        let unit = super.unidad;
        return unit;
    }

    set unit(x){
        super.unit = x;
    }
}

class Kelvin extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Kelvin a Celsius
        let cel = super.val;
        let aux = cel - 273.15;
        return aux;

    }

    toKelvin(){
        return super.val;
    }

    toFahrenheit(){                       //Paso de Kelvin a Fahrenheit
        let cel = super.val;
        let aux = cel * (9/5) - 459.67;
        return aux;
    }
}
class Fahrenheit extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Fahrenheit a Celsius
        let cel = super.val;
        let aux = cel - 32 * (5/9);
        return aux;
    }

    toKelvin(){                           //Paso de Fahrenheit a Kelvin
        let cel = super.val;
        let aux = parseInt(cel) - 32 * (5/9) + 273;
        return aux;
    }

    toFahrenheit(){
        return super.val;
    }
}

class Celsius extends Temperatura{
    constructor(x){
        super(x);
    }

    toFahrenheit(){
        let cel = super.val;
        let aux = cel * (9/5) + 32;
        return aux;
    }

    toKelvin(){
        let cel = super.val;
        let aux = parseInt(cel) + 273.15;
        return aux;
    }

    toCelcius(){
        return super.val;
    }


}
