const Product = require('../models/product');

const createProduct = async (name, type, brand, supplier, price) => {
    const product = new Product({
        Name: name,
        Type: type,
        Brand: brand,
        Supplier: supplier,
        Price: price,
    });

    return await product.save();
};

const getProductById = async (id) => {
    return await Product.findById(id);
};

const getProducts = async () => {
    return await Product.find({});
};

const updateProduct = async (id, name, type, brand, supplier, price) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    product.name = name;
    product.type = type;
    product.brand = brand;
    product.supplier = supplier;
    product.price = price;
    await product.save();
    return product;
};

const deleteProduct = async (id) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    await product.remove();
    return product;
};

module.exports = {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct
}