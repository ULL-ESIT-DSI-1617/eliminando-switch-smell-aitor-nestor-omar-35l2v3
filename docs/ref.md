# Referenciación, getters y setters

### Referencia con this

JavaScript tiene una palabra clave especial, **this**, que se puede utilizar dentro de un método para referirse al objeto actual. Por ejemplo, supongamos que tenemos una función llamada **validar** que valida el valor de la propiedad de un objeto, teniendo en cuenta al objeto y los valores altos y bajos:
```javascript
function validar(objeto, valoralto, valorbajo) {
  if ((objeto.value < valoralto) || (objeto.value > valorbajo))
    alert("Valores no válidos!");
}
```
Entonces, se podría llamar a validar en el controlador de eventos **onchange** de cada elemento del formulario, usando **this** para pasarle el elemento, como en el siguiente ejemplo:
```javascript
<input type="text" name="edad" size="3"
  onChange="validar(this, 18, 99)">
```
En general, **this** se refiere al objeto de llamada en un método.

Otro tipo de referenciación sería con **super**, trabajando igual que **this**:
```javascript
class Fahrenheit extends Temperatura{
    constructor(x){
        super(x)
    }
```
Para hacer referencia a objetos de la clase Temperatura, se realizaría así:
```javascript
get_val(){
    let val = super.val;
    return val.toString();
}

```


### Getters y setters
Un **getter** es un método que obtiene el valor de una propiedad específica. Un **setter** es un método que establece el valor de una propiedad específica. Puede definir *getters y setters* de cualquier objeto predefinido del núcleo o de un objeto definido por el usuario que admita la adición de nuevas características. La sintaxis para definir *getter y setters* utiliza la sintaxis literal de un objeto.

Un ejemplo del uso de getters y setters se refleja a continuación.

```javascript
function Temperatura(val, unit) {
    Medida.call(this, val, unit)
  };
  Temperatura.prototype = new Medida();               //Tipo de herencia mediante prototipo
  Temperatura.prototype.contructor = Temperatura;

  get_val(){
      let val = this.val;
      return val.toString();
  }

  set_val(x){
      this.val = x;
  }
  get_unit(){
      let unit = this.unit;
      return unit.toString();
  }

  set_unit(x){
      this.unit = x;
  }
}
```
