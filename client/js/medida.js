
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it


class Medida {
    constructor(x) {

       this.regexp = XRegExp('^(\\s*) \n' +
             '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
             '(\\s*)                                             \n' +
             '(?<tipo> [fFcCkK])                                    \n' +
             '(\\s*)                                             \n' +
             '(to)?                                              \n' +
             '(\\s*)                                             \n' +
             '(?<para> [a-zA-Z])                                      \n' +
             '(\\s*)$','ix');
             
             
      var  regexp = this.regexp;

        var aux = XRegExp.exec(x,regexp);
        this.measures = {};
        if (aux) 
        {
          this.val = aux[1];
          this.unit = aux[2];
          
        }


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
      
      var match = this.match(valor);
      var measures = this.measures
      
      if (match) 
      {
        
        var numero = match.valor,
        tipo   = match.tipo.toLowerCase()
        var destino = match.para.toLowerCase()
            
          measures.f = Fahrenheit; 
          measures.c = Celsius;
          measures.k = Kelvin; 
          
        //  
          
        
    
          var source = new measures[tipo](numero);
          var target = "to"+measures[destino].name;
          return source[target]().toFixed(2) + " "+target;
  
          
          
        
        
      }
      else {
        
        return "Error,introduzca una temperatura valida "
        
      }
    }
    
    match(valor) {
      
      
      return XRegExp.exec(valor,this.regexp)
      
    }
}
