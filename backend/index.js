const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Połączenie z bazą danych
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Podaj swoje hasło do MySQL
  database: 'codecamp',
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    return;
  }
  console.log('Połączono z bazą danych MySQL');
});

// Importowanie tras
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses');
const assignmentRoutes = require('./routes/assignments');
const additionalRoutes = require('./routes/additional');

// Używanie tras
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/additional', additionalRoutes);

// Start serwera
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});