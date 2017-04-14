"use strict";
class Temperatura extends Medida{
    constructor(x){
        super(x);
    }

    get val2(){
        return super.valor
    }

    set val2(x){
        super.valor = x;
    }
    get unit2(){
        return super.unidad
    }

    set unit2(x){
        super.unidad = x;
    }
}

class Kelvin extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Kelvin a Celsius
        let cel = super.val2;
        let aux = cel - 273.15;
        return aux;

    }

    toKelvin(){
        return super.val2;
    }

    toFahrenheit(){                       //Paso de Kelvin a Fahrenheit
        let cel = super.val2;
        let aux = cel * (9/5) - 459.67;
        return aux;
    }
}
class Fahrenheit extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          //Paso de Fahrenheit a Celsius
        let cel = super.val2;
        let aux = cel - 32 * (5/9);
        return aux;
    }

    toKelvin(){                           //Paso de Fahrenheit a Kelvin
        let cel = super.val2;
        let aux = parseInt(cel) - 32 * (5/9) + 273;
        return aux;
    }

    toFahrenheit(){
        return super.val2;
    }
}

class Celsius extends Temperatura{
    constructor(x){
        super(x);
    }

    toFahrenheit(){
        let cel = super.val2;
        let aux = cel * (9/5) + 32;
        return aux;
    }

    toKelvin(){
        let cel = super.val2;
        let aux = parseInt(cel) + 273.15;
        return aux;
    }

    toCelcius(){
        return super.val2;
    }


}
