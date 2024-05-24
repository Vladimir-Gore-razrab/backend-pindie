const users = require('../models/user');
const bcrypt = require('bcryptjs'); 

const findAllUsers = async (req, res, next) => {
   req.usersArray = await users.find({});
  next();
}

const findUserById = async (req, res, next) => {
  try{
    req.user = await users.findById(req.params.id);
    next()
  } catch (err) {
    res.status(404).send({message: 'Пользователь не найден'})
  }
}

const createUser = async (req, res, next) => {
  console.log("POST /users");
  try {
    console.log(req.body);
    req.user = await users.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
  }
}

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
        res.status(400).send(JSON.stringify({ message: "Error updating user" }));
  }
}

const checkEmptyNameAndEmail = async (req, res, next) => {
  if (!req.body.username || !req.body.email) {
    res.status(400).send({message: 'Введите название категории'})
  } else {
    next();
  }
}

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
        res.status(400).send(JSON.stringify({ message: "Error deleting user" }));
  }
}

const hashPassword = async (req, res, next) => {
  try{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt); 
    req.body.password = hash; 
    next();
  } catch (error) {
    res.status(400).send(JSON.stringify({ message: "Ошибка хэширования пароля" }));
  }
}

module.exports = {findAllUsers, findUserById, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword};