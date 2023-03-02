const ProductManager = require("./class/ProductManager")

// instancio la clase
const product = new ProductManager('./productos.txt')
// agrego productos
// product.addProduct('pantalon','levis desgastado',13000,'direccion_pantalon','01A',24)
// product.saveProducts()
product.addProduct('remera','indumentaria de verano',3000,'direccion','01B',30)
product.saveProducts()
// ingreso un producto con codigo repetido
// product.addProduct('remera','indumentaria de verano',3000,'direccion','01B',30)
// console.log(product.getProduct())
// product.getProductById(1)


