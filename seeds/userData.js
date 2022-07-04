const { User } = require('../models');

const userData = [
  {
    "username": "Alice1",
    "email": "alice1@email.com",
    "password": "password12345"
  },
  {
    "username": "Alice2",
    "email": "alice2@email.com",
    "password": "password12345"
  },
  {
    "username": "Alice3",
    "email": "alice3@email.com",
    "password": "password12345"
  },
  {
    "username": "Alice4",
    "email": "alice4@email.com",
    "password": "password12345"
  },
  {
    "username": "Alice5",
    "email": "alice5@email.com",
    "password": "password12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;