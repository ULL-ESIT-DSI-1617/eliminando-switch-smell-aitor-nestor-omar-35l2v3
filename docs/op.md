# Objetos y propiedades

Un *objeto de JavaScript* tiene **propiedades asociadas**. Una propiedad de un objeto puede ser explicada como una *variable que se adjunta al objeto*. Las propiedades de un objeto son básicamente lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto. Las **propiedades** de un objeto definen las *características de un objeto*.

Para acceder a una propiedad de un determinado objetos, se realiza de la siguiente forma:
```javascript
nombreObjeto.nombrePropiedad
```

Como todas las variables de JavaScript, tanto el nombre del objeto (que puede ser una variable normal) y el nombre de propiedad *son sensible a mayúsculas y minúsculas*. Puedes definir propiedades *asignándoles un valor*. Por ejemplo:
```javascript
var miAuto = new Object();          //Creamos el objeto miAuto
  miAuto.marca = "Fiat";            //Marca de miAuto
  miAuto.modelo = "500X";        //Modelo de miAuto
  miAuto.año = 2016;                //Año de miAuto
```

Otra manera de establecer propiedades de objetos sería mediante el uso de corchetes:
```javascript
miAuto["marca"] = "Fiat";
miAuto["modelo"] = "500X";
miAuto["año"] = 2016;
```

También puedes acceder a las propiedades mediante el uso de un valor de cadena que se almacena en una variable:
```javascript
let nombrePropiedad = "marca";
  miAuto[nombrePropiedad] = "Fiat";

let nombrePropiedad = "modelo";
  miAuto[nombrePropiedad] = "500X";
```
