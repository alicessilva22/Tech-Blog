const sequelize = require('../config/connection');
// const seedComment = require('./commentData');
// const seedPosts = require('./postsData');
// const seedUser = require('./userData');


// const seedAll = async () => {
//   await sequelize.sync({ force: true });
  
//   await seedComment();
  
//   await seedPosts();

//   await seedUser();


//   process.exit(0);
// };

// seedAll();
const { Comment, Posts, User } = require('../models');

const userData = require('./userData.json');
const commentData = require('./commentData.json');
const postsData = require('./postsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const comment of commentData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const posts of postsData) {
    await Posts.create({
      ...posts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
