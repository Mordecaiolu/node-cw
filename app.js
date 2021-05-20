var express = require("express");
var app = express();
var cors = require('cors')
app.use(cors())
app.listen(3000);

let lessons = [
    {'lesson':'maths','location':'Lagos','price':'100'},
    {'lesson':'biology','location':'Abuja','price':'80'},
    {'lesson':'chemistry','location':'Port-Harcourt','price':'90'},
    {'lesson':'physics','location':'Ondo','price':'150'},
];

let user = [
    {'email': 'user@email.com',
     'password':'mypassword'}
]

app.get('/lessons', (request, response) => {
    response.end(JSON.stringify(lessons));
  });

  app.get('/user', (request, response) => {
    response.end(JSON.stringify(user));
  });
  