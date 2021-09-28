const express = require('express')
const routers = express.Router()
const { uuid } = require('uuidv4');

routers.post('/', async function(request, response){

    response.status(201).json()
} )

routers.get('/', async function(request, response){
    
    response.status(200).json()
} )

routers.get('/:codigo', async function(request, response){
    
    response.status(200).json()
} )

routers.put('/:codigo', async function(request, response){
    
    response.status(200).json()
} )

routers.delete('/:codigo', async function(request, response){
    
    response.status(204).json()
} )

module.exports = routers