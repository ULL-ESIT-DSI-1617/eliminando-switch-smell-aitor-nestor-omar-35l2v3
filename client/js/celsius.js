"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
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
