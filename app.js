const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser'); 

const connectToDatabase = require('./database/connect');
const cors = require("./middlewares/cors.js")
const apiRouter = require('./routes/api');
const pagesRouter = require('./routes/pages.js');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors,
  cookieParser(), 
  bodyParser.json(),
  pagesRouter, 
  express.static(path.join(__dirname, 'public')),
  apiRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
})