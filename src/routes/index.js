const path = require('path');

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.use;

module.exports = router;
