const { Comment } = require('../models');

const commentData = [
    {
      "user_id": 1,
      "posts_id": 1,
      "comment_body": "Great content!"
    },
    {
      "user_id": 2,
      "posts_id": 1,
      "comment_body": "Awesome!"
    },
    {
      "user_id": 3,
      "posts_id": 1,
      "comment_body": "That is fantastic!"
    },
    {
      "user_id": 4,
      "posts_id": 1,
      "comment_body": "Love this!"
    },
    {
      "user_id": 5,
      "posts_id": 1,
      "comment_body": "Well done!"
    }
  ]
  
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;