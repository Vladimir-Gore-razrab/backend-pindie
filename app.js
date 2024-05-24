const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const connectToDatabase = require('./database/connect');
const apiRouter = require('./routes/api');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  apiRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})