const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const bodyParser = require('body-parser');
const appRoutes = require('./routes/index.js');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  favicon(path.join(__dirname, 'public', 'img', 'favicons', 'favicon.ico'))
);
app.use(bodyParser.urlencoded({extended: false}));

app.use(appRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
