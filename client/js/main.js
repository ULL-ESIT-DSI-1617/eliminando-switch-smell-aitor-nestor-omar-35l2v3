function main() {
      var valor     = document.getElementById('original').value,
          elemento  = document.getElementById('converted');
                  p = new Medida(valor)
                  elemento.innerHTML =  p.convertir(valor);
      return false;

  
}