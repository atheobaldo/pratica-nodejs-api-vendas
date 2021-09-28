const express = require('express')
const routers = express.Router()
const categoriasRouter = require('./categorias.router')
const fornecedoresRouter = require('./fornecedores.router')
const produtosRouter = require('./produtos.router')

routers.use('/categorias', categoriasRouter)
routers.use('/fornecedores', fornecedoresRouter)
routers.use('/produtos', produtosRouter)

module.exports = routers