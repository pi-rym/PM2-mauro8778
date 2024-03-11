
const carritoCompra = require("./index")

beforeEach()=>{

    carritoCompra= new CarritoCompra()
}

describe('sobre el constructor de la clase CarritoCompra',()=>{


    it ('carritoCompra tendria q ser una clase',()=>{

        expect(typeof CarritoCompra.prototype.constructor).tobe('function')

    })
    it('carritoCompra deberia ser una instancia de la clase CarritoCompra',()=>{

        expect(carritoCompra instanceof (CarritoCompra),tobe(true))
    })

    it('Deberia guardar productos en la lista',()=>{


    })
})