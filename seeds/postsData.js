const { Posts } = require('../models');

const postsData = [
  {
    "user_id": 5,
    "title": "Lorem Ipsum",
    "posts_body": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    "user_id": 3,
    "title": "Google's New Tech Can Read Your Body Language—Without Cameras",
    "posts_body": "Google is developing new technology to record and analyse user movement and behaviour without the use of cameras. The new system will use radar to generate spatial awareness, monitor the environment for changes, and then send out commands."
  },
  {
    "user_id": 4,
    "title": "Secrets of the Moon's Permanent Shadows Are Coming to Light",
    "posts_body": "Robots will venture into the sunless depths of lunar craters to find ancient water ice, while studies find hints about how water arrives on rocky worlds."
  },
  {
    "user_id": 2,
    "title": "One Day, AI Will Seem as Human as Anyone. What Then?",
    "posts_body": "A Google engineer's claim that the LaMDA program is sentient underscores an urgent need to demystify the human condition."
  },
  {
    "user_id": 1,
    "title": "The Best Webcams for Looking Brighter and Better",
    "posts_body": "Zoom into peoples' offices and living rooms with the best version of your on-camera self."
  }
]

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;