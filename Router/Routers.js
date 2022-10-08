const { allUser, createUser, oneUser, deleteUser, updateUser } = require('../Controller/userContorller');

const Router = require('express').Router()




Router.get('/',allUser)
Router.get('/:id',oneUser)
Router.delete('/:id',deleteUser)
Router.patch('/:id',updateUser)

Router.post('/',createUser)

module.exports = Router;