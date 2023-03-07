const fs = require('fs')

class ProductManager {
  constructor(path) {
    this.path = path
    this.products = [];
    this.loadProducts()
  }

  static id = 000;

  loadProducts = async()=>{
    try {
      const data = await fs.readFileSync(this.path,'utf-8')
      this.products = JSON.parse(data)
    } catch (err) {
      console.log(`error: ${err}`)
    }
  }

// saveProducts = () => {
//   return new promises((res,rej)=>{
    
//   })
// }

  saveProducts = async () => {
    try {
      const data = await JSON.stringify(this.products);
      fs.writeFileSync(this.path, data);
    } catch (err) {
      console.error(err);
    }
  }

  addProduct = async (title, description, price, thumbnail, code, stock) => {
    try{
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
    catch(error){
      console.log(error)
    }
  }

  getProduct() {
    return this.products;
  }

  getProductById = async(id) => {
    const productoBuscado = this.products.find((prod) => prod.id === id);
    try{
      if (productoBuscado) {
        console.log(`el producto se encontro y es:`);
        console.log(productoBuscado);
      } else {
        console.log("no se encontro el producto");
      }

    }
    catch(err)
    {
      console.log(err)
    }
  }
  
  updateProduct(id, updatedFields) {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      const updatedProduct = {
        ...this.products[index],
        ...updatedFields,
        id 
      };
      this.products[index] = updatedProduct;
      this.saveProducts();
      return updatedProduct;
    }
    return null;
  }
}

module.exports = ProductManager;
