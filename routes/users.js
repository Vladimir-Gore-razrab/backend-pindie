const { sendUserCreated, sendAllUsers, sendUserUpdated, sendUserDeleted } = require('../controllers/users');
const { findAllUsers, createUser, updateUser, checkEmptyNameAndEmail, deleteUser} = require('../middlewares/users')

const usersRouter = require('express').Router();

usersRouter.get('/users', findAllUsers, sendAllUsers);
usersRouter.post('/users', checkEmptyNameAndEmail, findAllUsers, createUser, sendUserCreated);
usersRouter.put('/users/:id', checkEmptyNameAndEmail, updateUser, sendUserUpdated);
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted);

module.exports = usersRouter; 