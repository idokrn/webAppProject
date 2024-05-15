const cartService = require('../services/cart');

const createCart = async (req, res) => {
    const newCart = await cartService.createCart(
        req.body.client_id,
    );
    res.json(newCart);
};

const getCarts = async (req, res) => {
    const carts = await cartService.getCarts();
    res.json(carts);
};

const getCart = async (req, res) => {
    const cart = await cartService.getCartById(req.params.id);
    if (!cart) {
        return res.status(404).json({ errors: ['Cart not found'] });
    }

    res.json(cart);
};

const cartPurchased = async (req,res) => {
  const cart = await cartService.updateCart(
    req.params.id,
    Date.now(),
    null
  )
  res.json(cart)
}

const addProduct = async (req,res) => {
  const cart = await cartService.addProduct(
    req.params.id,
    req.body.product
  )
  res.send();
}

const deleteProduct = async (req,res) => {
  const cart = await cartService.deleteProduct(
    req.params.id,
    req.body.product
  )
  res.send();
}

const deleteCart = async (req, res) => {
  const cart = await cartService.deleteCart(req.params.id);
  if (!cart) {
    return res.status(404).json({ errors: ['Cart not found'] });
  }

  res.send();
};

module.exports = {
  createCart,
  getCarts,
  getCart,
  deleteCart,
  cartPurchased,
  addProduct
};