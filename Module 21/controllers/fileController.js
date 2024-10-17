const fs = require('fs');
const path = require('path');

exports.uploadFile = (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    res.status(200).json({ message: 'File uploaded successfully', file: req.file });
};

exports.readFile = (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.params.filename);
    res.sendFile(filePath);
};

exports.deleteFile = (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.params.filename);
    fs.unlink(filePath, (err) => {
        if (err) return res.status(500).json({ error: 'File deletion failed' });
        res.status(200).json({ message: 'File deleted successfully' });
    });
};
