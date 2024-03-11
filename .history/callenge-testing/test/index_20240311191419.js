class carritoCompra{
    constructor(){
        
        this.productos=[]
    
    }
agregarProducto(producto){

        this.productos.push(producto)
    }


carlcularTotal(){

    let total = 0;

    for(const producto of this.productos){
        total += producto.precio * producto.cantidad
    }
    return total
}
aplicarDescuento(){

    const subtotal= this.carlcularTotal()
    const descuento= this.carlcularTotal * (porcentaje / 100)
    const total= subtotal-descuento

    return total;
}




}


module.exports= carritoCompra;