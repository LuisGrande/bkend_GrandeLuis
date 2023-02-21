class ProductManager {
  
    constructor() {
    this.products = [];
    
  }
  static id = 000

  addProduct(title,description,price,thumbnail,code,stock) {
    ProductManager.id ++
    this.products.push({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id:ProductManager.id
    })
  }

  getProduct(){
    return this.products
  }
}



module.exports = ProductManager
