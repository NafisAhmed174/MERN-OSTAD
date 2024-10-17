const express = require('express');
const { register, login, getProfile, updateProfile } = require('../controllers/authController');
const { uploadFile, readFile, deleteFile } = require('../controllers/fileController');
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multer');

const router = express.Router();

// Registration and Login
router.post('/register', register);
router.post('/login', login);

// Profile
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

// File Upload, Read, and Delete
router.post('/upload', auth, upload.single('file'), uploadFile);
router.get('/file/:filename', auth, readFile);
router.delete('/file/:filename', auth, deleteFile);

module.exports = router;
