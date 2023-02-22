class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 000;

  addProduct(title, description, price, thumbnail, code, stock) {
     const productoBuscado = this.products.find((prod) => prod.code === code);

    if (!productoBuscado) {
      ProductManager.id++;
      
      this.products.push({
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        id: ProductManager.id,
      });
    } else {
      console.log(`el codigo ${code} ya existe`);
    }
  }

  getProduct() {
    return this.products;
  }

  getProductById(id) {
    const productoBuscado = this.products.find((prod) => prod.id === id);
    if (productoBuscado) {
      console.log(`el producto se encontro y es:`);
      console.log(productoBuscado);
    } else {
      console.log("no se encontro el producto");
    }
  }
}

module.exports = ProductManager;
