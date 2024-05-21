const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    console.log('GET /categories'); 
    req.categoriesArray = await categories.find({});
  next();
}

const findCategoryById = async (req, res, next) => {
  try{
    req.category = await categories.findById(req.params.id);
    next()
  } catch (err) {
    res.status(404).send({message: 'Категория не найдена'})
  }
}

const createCategory = async (req, res, next) => {
  try {
    req.category = await categories.create(req.body);
    next();
  } catch (err) {
        res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
  }
};

module.exports = {findAllCategories, findCategoryById, createCategory};