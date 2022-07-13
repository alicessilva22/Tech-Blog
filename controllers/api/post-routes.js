const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');
const { Post, User, Comment } = require('../../models');


router.post('/', (req, res) => {
    Post.create({
            title: req.body.title,
            post_body: req.body.post_body,
            user_id: req.session.user_id
        })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/:id', (req, res) => {
    Post.update({
            title: req.body.title,
            post_body: req.body.post_body
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', (req, res) => {
    Post.destroy({
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