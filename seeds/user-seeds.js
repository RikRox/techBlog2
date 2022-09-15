const { User } = require('../models');

const userData = [
  {
    username: "Rikayla",
    email: "Rikayla@gmail.com",
    password: "password1234"
  },
  {
    username: "War",
    email: "war@email.com",
    password: "password1234"
  },
  {
    username: "Rick",
    email: "Rick@gmail.com",
    password: "password1234"
  },
  {
    username: "Andrea",
    email: "Andrea@gmail.com",
    password: "password1234"
  },
  {
    username: "Car",
    email: "car@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

//  WARNING seed bulk create does NOT hash the password, so they must be hashed via the update route before the login route will work!

module.exports = seedUsers;
