var express = require("express");
var app = express();
var cors = require('cors')
app.use(cors())
app.listen(3000);

let lessons = [
    {'topic':'chemistry','location':'Lagos','price':'100'},
    {'topic':'chemistry','location':'Abuja','price':'80'},
    {'topic':'chemistry','location':'Port-Harcourt','price':'90'},
    {'topic':'chemistry','location':'Ondo','price':'150'},
];

let user = [
    {'email': 'user@email.com', 'password':'mypassword'}
]

app.get('/lessons', (request, response) => {
    response.json(lessons);
  });

  app.get('/user', (request, response) => {
    response.json(user);
  });
  