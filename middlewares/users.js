const users = require('../models/user');

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
  try {
    req.user = await users.create(req.body);
    next();
  } catch (error) {
        res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
  }
};

module.exports = {findAllUsers, findUserById, createUser};