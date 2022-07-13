const { Post } = require('../models');

const postsData = [
  {
    title: "Lorem Ipsum",
    post_body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    user_id: 001
  },
  {
    title: "Google's New Tech Can Read Your Body Language—Without Cameras",
    post_body: "Google is developing new technology to record and analyse user movement and behaviour without the use of cameras. The new system will use radar to generate spatial awareness, monitor the environment for changes, and then send out commands.",
    user_id: 002
  },
  {
    title: "Secrets of the Moon's Permanent Shadows Are Coming to Light",
    post_body: "Robots will venture into the sunless depths of lunar craters to find ancient water ice, while studies find hints about how water arrives on rocky worlds.",
    user_id: 003
  },
  {
    title: "One Day, AI Will Seem as Human as Anyone. What Then?",
    post_body: "A Google engineer's claim that the LaMDA program is sentient underscores an urgent need to demystify the human condition.",
    user_id: 004
  },
  {
    title: "The Best Webcams for Looking Brighter and Better",
    post_body: "Zoom into peoples' offices and living rooms with the best version of your on-camera self.",
    user_id: 005
  }
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;