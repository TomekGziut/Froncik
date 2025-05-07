const express = require('express');
const router = express.Router();
const db = require('../db'); // Połączenie z bazą danych

// Pobieranie wszystkich użytkowników
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    } else {
      res.json(results);
    }
  });
});

// Dodawanie nowego użytkownika
router.post('/', (req, res) => {
  const { login, password, mail, number, gender } = req.body;
  const sql = 'INSERT INTO users (login, password, mail, number, gender) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [login, password, mail, number, gender], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Błąd serwera');
    } else {
      res.status(201).send('Użytkownik dodany');
    }
  });
});

module.exports = router;