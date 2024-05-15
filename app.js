const express = require('express')

const server = express()

const productsController = require('./controllers/products')

server.get('/products', "???") // Product
// server.get('/client', "???") // Client
// server.get('/supplier', "???") // Supplier
// server.get('/admin', "???") // Admin
// server.get('/map', "???") // Map
// server.get('/social', "???") // Social


server.listen(80)