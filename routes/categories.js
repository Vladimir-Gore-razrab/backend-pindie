  const findAllCategories = require('../middlewares/categories');
  const sendAllCategories = require('../controllers/categories');
  
  const categoriesRouter = require('express').Router();
  
  categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
  
  module.exports = categoriesRouter;
  