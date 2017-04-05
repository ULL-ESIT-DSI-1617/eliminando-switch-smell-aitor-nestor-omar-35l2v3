function main() {
      var valor     = document.getElementById('original').value,
          elemento  = document.getElementById('converted');
      elemento.innerHTML = Medida.convertir(valor);
      return false;

  
}