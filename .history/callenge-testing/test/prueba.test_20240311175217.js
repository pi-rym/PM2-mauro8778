
const carritoCompra = require("./index");

describe('CarritoCompra',()=>{
beforeEach (()=>{

    const carrito = new carritoCompra();
});

describe('sobre el constructor de la clase CarritoCompra',()=>{


    it ('carritoCompra tendria q ser una clase',()=>{

        expect(typeof carritoCompra.prototype.constructor).toBe('function')

    })
    it('carritoCompra deberia ser una instancia de la clase CarritoCompra',()=>{

        expect(carrito instanceof (carritoCompra),toBe(true))
    })

    it('Deberia guardar productos en la lista',()=>{
        expect(carrito.productos).toBe([]);
    })

})

describe('metodos de la clase carritoCompra',()=>{


    const producto1={

        id:1,
        nombre: 'lapicera roja',
        precio: 1000,
        cantidad: 3
    }
    const producto2={
        id:2,
        nombre:"lapicera blanca",
         precio: 900,
        cantidad:5
    }

    it ('deberia tener un metodo llamado agragar al carro',()=>{

        expect(typeof carrito.agregarProducto).tobe('function')
    })

    it('deberia tener un metodo para llamar a la calculadora',()=>{

        expect(typeof carrito.carlcularTotal).tobe('function')
    })
    it('deberia poder agregar un producto a la lista',()=>{

        carrito.agregarProducto(producto1)
        expect(carrito.producto).tocontain(producto1)
    })

    it('el metodo calculartotal deberia sumar todos los productos',()=>{

        carrito.agregarProducto(producto1)
        carrito.agregarProducto(producto2)
        const total = producto1.precio * producto1.cantidad + producto2.precio * producto2.cantidad
        carritoCompra.carlcularTota()
        expect(total).tobe(totalExpect)

    })

    it('el metodo aplicarDescuento deberia aplicar descuento al total',()=>{

        carrito.agregarProducto(producto1)
        carrito.agregarProducto(producto2)

        const subtotal = producto1.precio * producto1.cantidad + producto2.precio * producto2.cantidad;

        const porcentajeDescuento=30

        const totalExpect = subtotal = (subtotal * (porcentajeDescuento/100))
    
        const total = carrito.aplicarDescuento(porcentajeDescuento)
        expect(totalExpect).toBe(total);
    });
});
});