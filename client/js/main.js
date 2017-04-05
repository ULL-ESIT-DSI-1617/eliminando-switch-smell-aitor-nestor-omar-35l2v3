function main() {
      var valor     = document.getElementById('original').value,
          elemento  = document.getElementById('converted');
                  p = new Medida
      elemento.innerHTML =  p.convertir(valor);
      return false;

  
}