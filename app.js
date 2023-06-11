import express from 'express';
import bodyParser from 'body-parser';

import { getUser, getUsers } from "./src/controllers/teste1.js";
import { createUser } from "./src/controllers/teste2.js";
import { deleteUser } from "./src/controllers/teste3.js";
import { uploadUser } from "./src/controllers/teste4.js";
import { listViews } from "./src/controllers/teste5.js";
import { isAdmin } from './src/middleware/isAdmin.js';

const app = express()

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user/:id", getUser);
app.get("/users", getUsers);
app.post("/users", createUser);
app.delete("/users/:id", isAdmin, deleteUser);
app.put("/users/:id", isAdmin, uploadUser);
app.get("/users/access/:id", listViews);


const port = 3000;
app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});