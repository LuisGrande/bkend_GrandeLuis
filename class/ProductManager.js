class ProductManager {
  id;
  title = "";
  description = "";
  price;
  thumbnail = "";
  code;
  stock;

  constructor() {
    this.products = [];
    this.id = 0;
  }

  addProduct(product) {
    this.products.push(product);
    console.log(this.products);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const SearchProduct = this.products.find((prod) => {
      prod.code === id;
    });

        if (SearchProduct ===true){
            return prod
        }
        else{
            return 'no se encontro el producto'
        }
    }
}

module.exports = ProductManager
