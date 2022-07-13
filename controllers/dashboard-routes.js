const router = require('express').Router();
const sequelize = require('../config/connection');
// const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        // where: {
        //     user_id: req.session.user_id
        // }
    })
        .then(dbPostData => {
            const posts = dbPostData.map(posts => posts.get({ plain: true }));
            res.render('all-posts-admin', {
                layout: 'dashboard',
                posts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/edit/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id',
            'title',
            'post_body'
        ],
        include: [{
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
            attributes: ['id', 'comment_body', 'post_id', 'user_id'],
            include: {
                model: User,
                attributes: ['username']
            }
        }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const posts = dbPostData.get({ plain: true });
            res.render('edit-post', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
router.get('/new', (req, res) => {
    res.render('new-post');
});



module.exports = router;