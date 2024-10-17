const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/students', studentRoutes);

mongoose.connect('mongodb://localhost:27017/student-db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error('Database connection failed:', err));
