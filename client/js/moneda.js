"use strict";
class Moneda extends Medida{
    constructor(x){
        super(x);
    }  
}

class Euros extends Moneda{
    constructor(x){
        super(x)
      }
      
    toEuros(){
      return super.getValor();
    }
    toLibras(){
      return (super.getValor() * 0.8475).toFixed(3)
    }
    toDolares(){
      return (super.getValor() * 1.0613).toFixed(3)
    }
}

class Libras extends Moneda {
  constructor(x){
      super(x)
    }
    
  toLibras(){
    return super.getValor();
  }
  toEuros(){
    return (super.getValor() * 1.17981).toFixed(3)
  }
  toDolares(){
    return (super.getValor() * 1.2522).toFixed(3)
  }
}

class Dolares extends Moneda {
  constructor(x){
      super(x)
    }
    
  toDolares(){
    return super.getValor();
  }
  toEuros(){
    return (super.getValor() * 0.9421).toFixed(3)
  }
  toLibras(){
    return (super.getValor() * 0.798).toFixed(3)
  }
}