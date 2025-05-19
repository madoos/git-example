import { multiplicar } from "./multiplicar";

describe ("test del modulo mutiplicar", function(){
    it ("3*3 debe sr igual a 9", function(){
        let resultado = multiplicar(3,3);

        expect (resultado).toEqual(9);
    })
})
