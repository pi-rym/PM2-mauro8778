class carritoCompra{
    constructor(){
        
        this.products=[]
    
    }
agregarProducto(producto){

        this.products.push(producto)
    }


carlcularTotal(){

    let total=0;
    for(const item of this.products){
        total+=item.price*item.quantity
    }
    return total
}
aplicarDescuento(){

    const subtotal= this.carlcularTota()
    const descuento= this.carlcularTota*(porcentaje/100)
    const total=subtotal-descuento

    return total;
}




};


module.exports= carritoCompra;