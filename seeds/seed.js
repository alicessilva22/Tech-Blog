const sequelize = require('../config/connection');
const { Comment, Post, User } = require('../models');
const seedComment = require('./commentData');
const seedPost = require('./postData');
const seedUser = require('./userData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  await seedComment();
  await seedPost();


  process.exit(0);
};

seedAll();

// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');

// const userData = require('./userData.json');
// const projectData = require('./projectData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

// seedDatabase();