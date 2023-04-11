class ProductManager{

    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, stock, code, id){
        const product = {
            title,
            description,
            price: price,
            thumbnail,
            stock,
            code,
            id : this.#nuevoId() + 1
        }
        this.products.push(product)
    }

    getProduct(){
        return this.products
    }

    #nuevoId(){
        let maxId = 0;
        this.products.map((product) => {
            if(product.id > maxId) maxId = product.id;
        });
        return maxId
    }

    getProductById(id){
        const findProduct = this.products.find(product => product.id == id)
            if(!findProduct){
                console.log('Not found');
            }else{
                console.log(findProduct);
            }
    }
}
const productManager = new ProductManager();
productManager.addProduct('producto de prueba 1','Es un producto de prueba',5000,'sin imagen',100,'abc123')
productManager.addProduct('producto de prueba 2','Es un producto de prueba',3500,'sin imagen',50,'abc456')
productManager.addProduct('producto de prueba 3','Es un producto de prueba',4000,'sin imagen',150,'abc789')
console.log(productManager.getProduct())
productManager.getProductById(2)
productManager.getProductById(4)