var express = require('express');
const path = require('path');

const router = express.Router();

// Serve static assets
router.use(express.static(path.resolve(__dirname, '../../', 'build')));

// Always return the main index.html, so react-router render the route in the client
router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../', 'build', 'index.html'));
});

module.exports = router;
