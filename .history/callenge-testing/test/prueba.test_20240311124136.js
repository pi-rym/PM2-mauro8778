
const CarritoCompra = require("./index");

describe('clase CarritoCompra',()=>{
    let carritoCompra;
beforeEach (()=>{

    carritoCompra = new CarritoCompra();
});

describe('sobre el constructor de la clase CarritoCompra',()=>{


    it ('carritoCompra tendria q ser una clase',()=>{

        expect(typeof CarritoCompra.prototype.constructor).tobe('function')

    })
    it('carritoCompra deberia ser una instancia de la clase CarritoCompra',()=>{

        expect(carritoCompra instanceof (CarritoCompra),tobe(true))
    })

    it('Deberia guardar productos en la lista',()=>{
        expect
    })

})

describe('metodos de la clase carritoCompra',()=>{


    const producto1={

        id:1,
        nae: 'lapicera roja',
        price: 1000,
        queantity=3
    }
    const producto2={
        id:2,
        name:"lapicera blanca",
       price: 900,
       quantity:5
    }

    it ('deberia tener un metodo llamado agragar al carro',()=>{

        expect(typeof CarritoCompra.agregarProducto).tobe('function')
    })

    it('deberia tener un metodo para llamar a la calculadora',()=>{

        expect(typeof CarritoCompra.carlcularTota).tobe('function')
    })
    it('deberia poder agregar un producto a la lista',()=>{

        CarritoCompra.agregarProducto(producto1)
        expect(CarritoCompra.producto).tocontain(producto1)
    })

    it('el metodo calculartotal deberia sumar todos los productos',()=>{

        CarritoCompra.agregarProducto(producto1)
        CarritoCompra.agregarProducto(producto2)
        const total =producto1.price*producto1.quantity+producto2.price*producto2*quantity
        CarritoCompra.carlcularTota()
        expect(total).tobe(totalExpect)

    })

    it('el metodo aplicarDescuento deberia aplicar descuento al total',()=>{

        carritoCompra.agregarProducto(producto1)
        carritoCompra.agregarProducto(producto2)

        const subtotal=producto1.price*producto1.quantity+ producto2.price*producto2*quantity;

        const porcentajeDescuento=30
        const totalExpect=subtotal=(subtotal*(porcentajeDescuento/100))
    
        const total=CarritoCompra-aplicarDescuento(porcentajeDescuento)
        expect(totalExpect).toBe(total);
    });
});
});