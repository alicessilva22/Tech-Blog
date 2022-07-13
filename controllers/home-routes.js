// const sequelize = require('../config/connection');
const router = require('express').Router();
// const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    res.render('all-posts');
});

module.exports = router;