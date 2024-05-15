const productService = require('../services/product');

const createProduct = async (req, res) => {
    const newProduct = await productService.createProduct(
        req.body.name,
        req.body.type,
        req.body.brand,
        req.body.supplier,
        req.body.price
    );
    res.json(newProduct);
};

const getProducts = async (req, res) => {
    const products = await productService.getProducts();
    res.json(products);
};

const getProduct = async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
        return res.status(404).json({ errors: ['Product not found'] });
    }

    res.json(product);
};

const updateProduct = async (req, res) => {
    // if (!req.body.title) {
    //   res.status(400).json({
    //     message: "title is required",
    //   });
    // }
  
    const product = await productService.updateProduct(
        req.params.id,
        req.body.name,
        req.body.type,
        req.body.brand,
        req.body.supplier,
        req.body.price
    );
    if (!product) {
      return res.status(404).json({ errors: ['Product not found'] });
    }
  
    res.json(product);
  };

  const deleteProduct = async (req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    if (!product) {
      return res.status(404).json({ errors: ['Product not found'] });
    }
  
    res.send();
  };

  module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
  };