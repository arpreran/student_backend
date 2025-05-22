const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');

const register = async (req, res) => {
  const { Name, Subject, Password } = req.body;
  try {
    const existing = await Teacher.findOne({ where: { Name } });
    if (existing) return res.status(400).json({ message: 'Teacher already exists' });

    const hashedPassword = await bcrypt.hash(Password, 10);
    const teacher = await Teacher.create({ Name, Subject, Password: hashedPassword });

    res.status(201).json({ message: 'Teacher registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
};

const login = async (req, res) => {
  const { Name, Password } = req.body;
  try {
    const teacher = await Teacher.findOne({ where: { Name } });
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });

    const isMatch = await bcrypt.compare(Password, teacher.Password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: teacher.TeacherID }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Error during login', error: err.message });
  }
};

module.exports = { register, login };
