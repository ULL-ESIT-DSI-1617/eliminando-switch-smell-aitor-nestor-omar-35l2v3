"use strict";
class Temperatura extends Medida{
    constructor(x){
        super(x);
    }

    get_val(){
        let val = super.get_val();
        return val;
    }

    set_val(x){
        super.val = x;
    }
    get_unit(){
        let unit = super.get_val();
        return unit;
    }

    set_unit(x){
        super.unit = x;
    }
}
