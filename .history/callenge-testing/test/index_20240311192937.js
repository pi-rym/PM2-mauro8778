class carritoCompra{
    constructor(){
        
        this.productos=[]
    
    }
agregarProducto(producto){

        this.productos.push(producto)
    }


calcularTotal(){

    let total = 0;

    for(const producto of this.productos){
        total += producto.precio * producto.cantidad;
    }
    return total
}
aplicarDescuento(porcentajeDescuento){

    const subtotal= this.calcularTotal()
    const descuento= this.carlcularTotal * (porcentajeDescuento / 100)
    const total= subtotal-descuento

    return total;
}
};


module.exports= carritoCompra;