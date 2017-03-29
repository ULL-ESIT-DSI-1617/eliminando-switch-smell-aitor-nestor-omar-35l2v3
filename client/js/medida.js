
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
class Medida {
    constructor(x) {

        var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkK])/;

        aux = x.toString();
        // aux = aux.split(" "); // Guardamos en variable string para poder hacer el split

        var aux = aux.match(regexp);
        console.log(aux);

        //----------------- GUARDAMOS EN VARIABLES DEL OBJETO
        this.val = aux[1];
        this.unit = aux[2];
        //-----------------


    }

    get_val(){
        let val = this.val;
        return val.toString();
    }

    set_val(x){
        this.val = x;
    }
    get_unit(){
        let unit = this.unit;
        return unit.toString();
    }

    set_unit(x){
        this.unit = x;
    }
}
