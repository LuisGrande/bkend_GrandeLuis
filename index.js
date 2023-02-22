const ProductManager = require("./class/ProductManager")

// instancio la clase
const product = new ProductManager
// agrego productos
product.addProduct('pantalon','levis desgastado',13000,'direccion_pantalon','01A',24)
product.addProduct('remera','indumentaria de verano',3000,'direccion','01B',30)
product.addProduct('remera','indumentaria de verano',3000,'direccion','01B',30)
console.log(product.getProduct())
product.getProductById(1)
