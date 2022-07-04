const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Posts, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Posts.findAll({
            attributes: ['id',
                'title',
                'posts_body',
                'created_at'
            ],
            order: [
                ['created_at', 'DESC']
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
        .then(dbPostsData => res.json(dbPostsData.reverse()))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});
router.get('/:id', (req, res) => {
    Posts.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id',
                'posts_body',
                'title',
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
            res.json(dbPostsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', withAuth, (req, res) => {
    Posts.create({
            title: req.body.title,
            posts_body: req.body.posts_body,
            user_id: req.session.user_id
        })
        .then(dbPostsData => res.json(dbPostsData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', withAuth, (req, res) => {
    Posts.update({
            title: req.body.title,
            posts_body: req.body.posts_body
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbPostsData => {
            if (!dbPostsData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostsData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', withAuth, (req, res) => {
    Posts.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostsData => {
        if (!dbPostsData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostsData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;