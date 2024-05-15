const Cart = require('../models/cart');

const createCart = async (clientid) => {
    const cart = new Cart({
        Size: 0,
        total_price: 0,
        ClientId: clientid,
    });

    return await cart.save();
};

const getCartById = async (id) => {
    return await Cart.findById(id);
};

const getCarts = async () => {
    return await Cart.find({});
};

const addProduct = async (id, product) => {
    const cart = await getCartById(id)
    if (!cart)
        return null
    cart.products.append(product)
    cart.size = cart.size + 1
    cart.total_price = cart.total_price + product.price
    
    await cart.save();
    return cart;
}


const updateCart = async (id, purchased, clientid) => {
    const cart = await getCartById(id)
    if (!cart)
        return null

    if(purchased != null){
        cart.purchased = purchased
    }
    if(clientid != null){
        cart.clientid = clientid
    }
   
    await cart.save();
    return cart;
};

const deleteCart = async (id) => {
    const cart = await getCartById(id);
    if (!cart)
        return null;

    await cart.remove();
    return cart;
};

const deleteProduct = async (id,product) => {
    const cart = await getCartById(id);
    if (!cart)
        return null;

    product_index = cart.products.indexOf(product)
    if(product_index > -1){
        cart.products.splice(product_index,1)
    }
    cart.size = cart.size - 1
    cart.total_price = cart.total_price - product.price

    await cart.save();
    return cart;

};

module.exports = {
    createCart,
    getCartById,
    getCarts,
    updateCart,
    deleteCart,
    addProduct,
    deleteProduct
}