const productsData = require('../config/products.json');

module.exports = {

    getAll() {
        return productsData;
    },

    getOne(id) {
        return productsData.find(x => x.id == id);
    },

    // create(product) {
    //     productsData.push(product);

    //     return fs.writeFile(__dirname + '/../config/products.json',
    //         JSON.stringify(productsData),
    //         (err) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //         }
    //     )
    // }
}