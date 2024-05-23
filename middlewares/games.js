const game = require("../models/game")

const findAllGames = async (req, res, next) => {
    console.log('GET /games');
    req.gamesArray = await game.find({})
    .populate('categories')
    .populate({
        path: 'users',
        select: '-password'
    });
    next();
}

const findGameById = async (req, res, next) => {
    try {
        req.game = await games.findById(req.params.id);
    next();
    } catch (error) {
        res.status(404).send({ message: "Game not found" });
    }
};
const createGame = async (req, res, next) => {
    try {
        req.game = await game.create(req.body); 
        next()
    } catch (err) {
      res.status(400).send({massage: 'Ошибка при создании игры'})
    }
}

const updateGame = async (req, res, next) => {
    try {
      req.game = await games.findByIdAndUpdate(req.params.id, req.body);
      next();
    } catch (error) {
      res.status(400).send({ message: "Ошибка обновления игры" });
    }
  };

  const deleteGame = async (req, res, next) => {
    try {
      req.game = await games.findByIdAndDelete(req.params.id);
      next();
    } catch (error) {
      res.status(400).send({ message: "Ошибка удаления игры" });
    }
  }

module.exports = {findAllGames, createGame, findGameById, updateGame, deleteGame};