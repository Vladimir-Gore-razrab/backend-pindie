const { sendUserCreated, sendAllUsers, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
const { findAllUsers, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword} = require('../middlewares/users')

const usersRouter = require('express').Router();

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', checkEmptyNameAndEmail, findAllUsers, checkAuth,createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, hashPassword, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted);
usersRouter.get('/me', checkAuth, sendMe);

module.exports = usersRouter; 