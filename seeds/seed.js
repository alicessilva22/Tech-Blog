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