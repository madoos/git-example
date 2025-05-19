import { dividir } from "./dividir";

describe("modulo dividir", function() {
    it("4 entre 2 debería ser 2", function() {
        let resultado = dividir(4, 2);
        expect(resultado).toEqual(2);
    });

    it("no deneria dividir entre 0", function() {
        expect(function() {
            dividir(4, 0);
        }).toThrowError("No se puede dividir por cero");

    })
})