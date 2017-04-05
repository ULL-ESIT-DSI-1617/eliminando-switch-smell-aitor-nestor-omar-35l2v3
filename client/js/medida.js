
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
class Medida {
    constructor(x) {

        var regexp = XRegExp('^(\\s*) \n' +
                '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
                '(\\s*)                                             \n' +
                '(?<tipo> [fck])                                    \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<to> [fck])                                      \n' +
                '(\\s*)$','ix');

        aux = x.toString();
        // aux = aux.split(" "); // Guardamos en variable string para poder hacer el split

        var aux = aux.match(regexp);
        console.log(aux);

        //----------------- GUARDAMOS EN VARIABLES DEL OBJETO
        this.val = aux[1];
        this.unit = aux[2];
        //-----------------


    }

    get cadena(){
        let val = this.val;
        return val.toString();
    }

    set cadena(x){
        this.val = x;
    }
    get unidad(){
        let unit = this.unit;
        return unit.toString();
    }

    set unidad(x){
        this.unit = x;
    }
    
    convertir(valor) {
      
      //AQUI VA TODO EL CODIGO
    }
}
