const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_body: req.body.comment_body,
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCommentData => {
          if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
          }
          res.json(dbCommentData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;