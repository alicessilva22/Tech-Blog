const router = require('express').Router();
const sequelize = require('../config/connection');
const { Posts, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    
    Posts.findAll({
      attributes: [
        'id',
        'title',
        'posts_body'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_body', 'posts_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
      .then(dbPostsData => {
        const posts = dbPostsData.map(posts => posts.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  router.get('/posts/:id', (req, res) => {
    Posts.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'posts_body'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_body', 'posts_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username'],
          }
        }
      ]
    })
      .then(dbPostsData => {
        if (!dbPostsData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const posts = dbPostsData.get({ plain: true });
  
        res.render('single-post', {
            posts,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;