const Comment = require('./Comment');
const Posts = require('./Posts');
const User = require('./User');

User.hasMany(Posts, {
    foreignKey: 'user_id'
});

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
  });
  
  Posts.hasMany(Comment, {
      foreignKey: 'posts_id',
      onDelete: 'cascade'
  });
  
Comment.belongsTo(Posts, {
    foreignKey: 'posts_id',
    onDelete: 'cascade'
});
  

module.exports = {User, Posts, Comment};