const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin') //capa de node para proteger datos
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/tracks')
const { validateCreate } = require('../validators/users')

router.get('/', getItems) // http://localhost:3001/api/1.0/tracks 
//este get llama al array listAll con toda la data
//el checkout se encarga de verificar si en la peticion http del front, existe un token o no

router.get('/:id', checkOrigin, getItem)

//Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router