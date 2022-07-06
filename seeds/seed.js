const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedPosts = require('./postsData');
const seedUser = require('./userData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComment();

  await seedPosts();

  await seedUser();


  process.exit(0);
};

seedAll();

// const sequelize = require('../config/connection');

// const { Comment, Posts, User } = require('../models');

// const userData = require('./userData.js');
// const commentData = require('./commentData.js');
// const postsData = require('./postsData.js');


// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });
//   const comments = await Comment.bulkCreate(commentData, {
//     individualHooks: true,
//     returning: true,
//   });
//   const posts = await Posts.bulkCreate(postsData, {
//     individualHooks: true,
//     returning: true,
//   });

//   process.exit(0);
// };

// seedDatabase();
