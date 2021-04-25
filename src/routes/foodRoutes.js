const mainRoutes = require('express').Router();
const foodRoutes = require('../controllers/foodController');
const authMiddleware = require('../helpers/authMiddleware');

mainRoutes.get("/",foodRoutes.getAllFoods);
mainRoutes.post("/",authMiddleware.checkLogin, foodRoutes.addnewFoods);
mainRoutes.get("/:id", foodRoutes.getFoodsByID);
mainRoutes.delete("/:id",authMiddleware.checkLogin,foodRoutes.deleteFoods);
mainRoutes.put("/:id",authMiddleware.checkLogin, foodRoutes.updateFoods);


module.exports = mainRoutes;