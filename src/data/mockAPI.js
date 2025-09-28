import products from './products';


function getMockAPIdata() {
    const promiseProducts = new Promise((resolve) => { 
    setTimeout(() => {
        console.log("Devolviendo datos")
        resolve(products);
    }, 500);
});
    return promiseProducts;
}

export function getProductById( idRequested) {
    const reqItem = products.find( (item) => item.id === Number(idRequested))

    const promiseProduct = new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("Devolviendo producto...", reqItem)
            if(reqItem) {
                resolve(reqItem);
            }
            else {
                reject("No se encontro el producto solicitado");
            }
        }, 500)
    })

    return promiseProduct;
}

export function getProductsByCateg( categRequested) {
    const productsFilter = products.filter( item => item.category === categRequested );

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(productsFilter.length > 1) 
                {
                    console.log("Devolviendo productos por categoría...", productsFilter)
                    resolve(productsFilter)
                }
                else {
                    console.log("No se encontraron productos para la categoría solicitada")
                    reject("No se encontraron productos para la categoría solicitada")
                }
            }, 500)
    })
}

export default getMockAPIdata;