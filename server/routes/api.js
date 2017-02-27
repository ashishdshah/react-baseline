var express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send(200, 'test api called');
});

router.get('*', (req, res) => {
  res.send(404, 'file not found..!');
})

module.exports = router;
