const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./db/config');

// Import all routes
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/student');
const parentRoutes = require('./routes/parent');
const courseRoutes = require('./routes/course');
const quizRoutes = require('./routes/quiz');
const resultRoutes = require('./routes/result');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/parents', parentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/results', resultRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL database');
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
});
