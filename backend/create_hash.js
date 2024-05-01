// example script for hash generation
const bcrypt = require('bcrypt');
const saltRounds = 10;
const password = 'test'; // this is the password we used to test user login, we had a user in our database with the hashed password

bcrypt
  .hash(password, saltRounds)
  .then((hash) => {
    console.log('Hash: ', hash);
  })
  .catch((err) => console.error(err.message));
