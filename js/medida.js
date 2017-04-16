"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
const regexp = XRegExp('^(\\s*) \n' +
      '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
      '(\\s*)                                             \n' +
      '(?<tipo> [a-zA-z])                                 \n' +
      '(\\s*)                                             \n' +
      '(to)?                                              \n' +
      '(\\s*)                                             \n' +
      '(?<para> [a-zA-Z])                                 \n' +
      '(\\s*)$','ix');      

let measures = {}

class Medida {
  
    
    constructor(x) {
        this.valor = x; 
    }
  
    convertir() {
      
      var match =  XRegExp.exec(this.valor,regexp)
    
      if (match) 
      {
      
        var numero  = parseFloat(match.valor)
        var tipo    = match.tipo.toLowerCase()
        var destino = match.para.toLowerCase()
        
        measures.f = Fahrenheit; 
        measures.c = Celsius;
        measures.k = Kelvin; 
        measures.e = Euros;
        measures.l = Libras;
        measures.d = Dolares; 
        
        try { 
    
          var source = new measures[tipo](numero);
          var target = "to"+measures[destino].name;
          return source[target]() + " " +measures[destino].name
    
        }
        
        catch(err) {
          return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
        }
              
      }
      else {
        
        return "Error,introduzca una conversión valida "
        
      }
    }
    
    getValor() {
      return this.valor; 
    }
    
}
