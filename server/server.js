const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3030;

massive(process.env.connectionString).then(db => {
  app.set('db', db);
  app.listen(port, () => console.log(`Listening on ${port}`));
});