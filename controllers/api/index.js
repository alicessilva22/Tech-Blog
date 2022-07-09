const router = require('express').Router();

const commentRoutes = require('./comment-routes');
const postsRoutes = require('./posts-routes');
const userRoutes = require('./user-routes.js');

router.use('/comments', commentRoutes);
router.use('/posts', postsRoutes);
router.use('/users', userRoutes);

module.exports = router;