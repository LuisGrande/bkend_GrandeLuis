const ProductManager = require("./class/ProductManager")
const product = require("./class/data")
const productList = new ProductManager

// product = {title:'cuchara',
// description :'utensillo de cocina',
// price:30,
// thumbnail : 'direccion',
// code:1,
// stock:30
// }

// prompt('ingrese un valor')

productList.addProduct(product)

console.log(productList.getProducts())

console.log(productList.getProductById(3))



