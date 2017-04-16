"use strict";
class Temperatura extends Medida{
    constructor(x){
        super(x);
    }


    
}

class Kelvin extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                          
        return (super.getValor() - 273.15).toFixed(2);
    }

    toKelvin(){
        return super.getValor();
    }

    toFahrenheit(){                       
        return (super.getValor() * (9/5) - 459.67).toFixed(2);
    }
}
class Fahrenheit extends Temperatura{
    constructor(x){
        super(x)
    }

    toCelsius(){                         
        return (super.getValor() - 32 * (5/9)).toFixed(2);
    }

    toKelvin(){
        return ((super.getValor() + 459.67) * (5/9)).toFixed(2);
    }

    toFahrenheit(){
        return super.getValor();
    }
}

class Celsius extends Temperatura{
    constructor(x){
        super(x);
    }

    toFahrenheit(){
        return (super.getValor() * (9/5) + 32).toFixed(2);
    }

    toKelvin(){
        return (super.getValor() + 273.15).toFixed(2);
    }

    toCelcius(){
        return super.getValor();
    }


}
