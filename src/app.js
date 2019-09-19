const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const appRoutes = require('./routes/index.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(appRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
