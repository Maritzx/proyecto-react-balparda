import products from './products';


function getMockAPIdata() {
    const promiseProducts = new Promise((resolve, reject) => { 
    setTimeout(() => {
        console.log("Devolviendo datos")
        resolve(products);
    }, 1000);
});
    return promiseProducts;
}

export default getMockAPIdata;