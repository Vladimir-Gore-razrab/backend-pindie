const { sendUserCreated, sendAllUsers } = require('../controllers/users');
const { findAllUsers, createUser} = require('../middlewares/users')

const usersRouter = require('express').Router();

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated) 

module.exports = usersRouter; 