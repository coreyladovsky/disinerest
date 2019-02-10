const { db } = require('../quieries/index.js');
const faker = require('faker');


let users = [];

for (let i = 0; i < 25; i++) {
  let email = faker.internet.email()
  let first_name = faker.name.firstName();
  let last_name = faker.name.lastName();
  let image_url = faker.image.avatar();
  let age = Math.floor(Math.random() * 35) + 18
  let str = `('${email}', ${age}, '${first_name}', '${last_name}', '${image_url}')`
  users.push(str)
}

let boards = [];

for(let i = 0; i < 100; i++) {
  let user_id = Math.floor(Math.random() * 25) + 1;
  let title = faker.random.words();
  let description = faker.lorem.paragraph();
  let category = faker.name.jobType();
  let str =   `(${user_id}, '${title}', '${description}', '${category}')`
  boards.push(str)
}

let pins = [];

for(let i = 0; i < 200; i++) {
  let title = faker.random.words();
  let description = faker.lorem.paragraph();
  let user_id = Math.floor(Math.random() * 25) + 1;
  let board_id = Math.floor(Math.random() * 100) + 1;
  let original_poster_id = Math.floor(Math.random() * 25) + 1;
  let url = faker.image.image();
  let str = `(${user_id}, ${board_id}, '${title}', '${description}', ${original_poster_id}, '${url}', '${url}')`
  pins.push(str)
}

users = users.join(", ")
boards = boards.join(", ")
pins = pins.join(", ")


db.none("INSERT INTO users(email, age, first_name, last_name, image_url) VALUES " + users + ";")
  .then(() => {
    db.none("INSERT INTO boards(user_id, title, description, category) VALUES " + boards + ";")
    .then(() => {
      db.none("INSERT INTO pins(user_id, board_id, title, description, original_poster_id, link_url, image_url) VALUES " + pins + ";")
    })
  })
  .catch(err => {
    console.log(err);
  })
