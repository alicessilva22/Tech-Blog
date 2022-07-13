const { Comment } = require('../models');

const commentData = [
  {
    comment_body: "Great content!",
    user_id: 001,
    post_id: 005
  },
  {
    comment_body: "Awesome!",
    user_id: 002,
    post_id: 004
  },
  {
    comment_body: "That is fantastic!",
    user_id: 003,
    post_id: 002,

  },
  {
    comment_body: "Love this!",
    user_id: 004,
    post_id: 003
  },
  {
    comment_body: "Well done!",
    user_id: 005,
    post_id: 001
  }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;