const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, callBack){
        callBack(null, './uploads')
    },
    filename: function(req, file, callBack){
        callBack(null, file.originalname)
    }
});


const upload = multer({
    storage: storage
})

app.post('/upload', upload.single('myfile'), (req, res) => {
    if(req.file){
        res.send('Successfully uploaded file')
    }else{
        res.send('File upload failed')
    }
});

const PORT = 5500;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});