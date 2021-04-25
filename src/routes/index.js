const mainRoutes = require('express').Router()
const foodRoutes = require('./foodRoutes');
const authRoutes = require('./authRoutes');


mainRoutes.use('/foods', foodRoutes);
mainRoutes.use('/auth', authRoutes);
 
module.exports = mainRoutes;