
"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
const regexp = XRegExp('^(\\s*) \n' +
      '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
      '(\\s*)                                             \n' +
      '(?<tipo> [a-zA-z])                                    \n' +
      '(\\s*)                                             \n' +
      '(to)?                                              \n' +
      '(\\s*)                                             \n' +
      '(?<para> [a-zA-Z])                                      \n' +
      '(\\s*)$','ix');      

class Medida {
  
    
    constructor(x) {

      
        var match = this.match(x)
        this.measures = {};
        if (match) 
        {
          this.val = match[2];
          this.unit = match[5];
        }    
      

    }
  
    convertir(valor) {
      
      var match = this.match(valor);
      var measures = this.measures
      
      if (match) 
      {
        this.val = match[2];
        this.unit = match[5];
        console.log(this.val)
        var numero = match.valor,
        tipo   = match.tipo.toLowerCase()
        var destino = match.para.toLowerCase()
            
          measures.f = Fahrenheit; 
          measures.c = Celsius;
          measures.k = Kelvin; 
          
          var source = new measures[tipo](numero);
          var target = "to"+measures[destino].name;
          return source[target]().toFixed(2) + " "+target;
  
              
      }
      else {
        
        return "Error,introduzca una temperatura valida "
        
      }
    }
    
    match(valor) {
      
      
      return XRegExp.exec(valor,regexp)
      
    }
    
    get valor(){
        console.log(this.val)
        return this.val.toString()
    }

    set valor(x){
        this.val = x;
    }
    
    get unidad(){
        return this.unit.toString()
    }

    set unidad(x){
        this.unit = x;
    }
}
