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
