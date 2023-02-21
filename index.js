const ProductManager = require("./class/ProductManager")


const product = new ProductManager
product.addProduct('remera','indumentaria de verano',3000,'direccion',001,30)
console.log(product.getProduct())
