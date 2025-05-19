import { sumar } from "./sumar";

/*

describe

it 

expect

*/


describe("Modulo sumar", function() {

    it("1+1 debe de ser 2", function () {
        let resultado = sumar(1,1);
        expect(resultado).toEqual(2);
    })

})