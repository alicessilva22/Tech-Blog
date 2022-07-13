const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        Post.findAll({
            include: [User],
        }).then(data => {
            const post = data.map((posts) => posts.get({ plain: true }))
            res.render('all-posts', { post });
        })
    } else {
        res.redirect('/login')
    }
});


router.get('/post/:id', (req, res) => {
    Post.findByPk(req.params.id, {
        include: [
            User,
            {
                model: Comment,
                include: [User]
            }
        ]
    }).then(data => {
        if (data) {
            const post = data.get({ plain: true })
            res.render('single-post', { post })
        } else {
            res.status(404).end()
        }
    })
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
});


module.exports = router;