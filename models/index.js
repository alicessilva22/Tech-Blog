const Comment = require('./Comment');
const Posts = require('./Posts');
const User = require('./User');

User.hasMany(Posts, {
    foreignKey: 'user_id'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  Posts.hasMany(Comment, {
      foreignKey: 'posts_id',
  });
  
Comment.belongsTo(Posts, {
    foreignKey: 'posts_id',
});
  

module.exports = {User, Posts, Comment};