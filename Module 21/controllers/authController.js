const Student = require('../models/student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const student = await Student.create({ name, email, password });
        res.status(201).json({ message: 'Student registered successfully', student });
    }catch(error){
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
  
    if (!student || !(await bcrypt.compare(password, student.password))) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }
  
    const token = jwt.sign({ id: student._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', token });
  };
  