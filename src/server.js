const express = require('express')
const routers = require('./routers/principal.router')

const app = express()
app.use(express.json()) 
app.use(routers)

app.listen(8000, () => {
    console.log('api em execução na porta 8000...')
 })