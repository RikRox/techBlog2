const { Post } = require('../models');

const postData = [
  {
    title: 'Will Backend Development get any easier?',
    post_text: 'Not looking good! Click here to find out why!',
    user_id: 1,
  },
  {
    title: 'Node',
    post_text: 'Create a blog with node! No packages',
    user_id: 2,
  },
  {
    title: 'Handlebars',
    post_text: 'Comes in handy but a lot to wrap your mind around',
    user_id: 2,
  },
  {
    title: 'Sessions',
    post_text: 'Do not get me started on sessions.',
    user_id: 3,
  },
  {
    title: 'Javascript',
    post_text: 'Think it is hard? You have not seen anything yet!',
    user_id: 4,
  },
  {
    title: 'Express.js',
    post_text: 'Express.js yourself!',
    user_id: 5,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
