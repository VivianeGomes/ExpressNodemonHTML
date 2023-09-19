const express = require('express');
const router = express.Router();
const path = require('path');

// Rota para a página inicial (home)
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/home.html'));
});

// Rota para a página de cadastro
router.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/register.html'));
});

module.exports = router;
