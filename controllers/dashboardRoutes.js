const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Posts, User, Comment } = require('../models');

router.get('/', withAuth, (req, res) => {
    Posts.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'posts_body',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_body', 'posts_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostsData => {
            const posts = dbPostsData.map(posts => posts.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/edit/:id', withAuth, (req, res) => {
    Posts.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'title',
                'posts_body',
                'created_at'
            ],
            include: [{
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_body', 'posts_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                }
            ]
        })
        .then(dbPostsData => {
            if (!dbPostsData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }

            const post = dbPostsData.get({ plain: true });
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