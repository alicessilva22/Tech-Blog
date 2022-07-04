const router = require('express').Router();

const commentRoutes = require('./commentRoutes');
const postsRoutes = require('./postsRoutes');
const userRoutes = require('./userRoutes.js');

router.use('/comments', commentRoutes);
router.use('/posts', postsRoutes);
router.use('/users', userRoutes);

module.exports = router;