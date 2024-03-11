class carritoCompra{
    constructor(){
        
        this.productos=[]
    
    }
agregarProducto(productos){

        this.products.push(productos)
    }


carlcularTotal(){

    return this.productos.reduce((total, producto) => total + producto.precio, 0);
}
aplicarDescuento(){

    const descuento = this.calcularTotal() * (porcentaje / 100);
    return this.calcularTotal() - descuento;
}
};


module.exports= carritoCompra;