# Constructor de un objeto en JavaScript

Para *definir* un tipo de objeto, puedes crear una *función del tipo de objeto* que especifica su nombre, propiedades y métodos. Por ejemplo, supongamos que deseas crear un tipo de objeto para los coches. Quieres que este tipo de objeto se llame auto, y deseas que tenga propiedades de marca, modelo y el año. Para ello, podrías escribir la siguiente función:
```javascript
function Auto(marca, modelo, annio) {     //La primera letra del objeto se suele poner en mayúscula
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}
```
A continuación, para crear un objeto llamado miAuto, se podría realizar de la siguiente manera con una llamada **new**:
```javascript
var miAuto = new Auto("Subaru", "Impreza WRC", 2001);
```
