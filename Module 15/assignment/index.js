const express = require('express');
const fs = require('fs');
const app = express();


app.get('/', (req, res)=>{
    res.end("This is the Home Page")
})

app.get('/about', (req, res) => {
    res.end("This is the About Page")
})

app.get('/contact', (req, res) => {
    res.end("This is the Contact Page")
})

app.get('/file-write', async (req, res) => {
    try{
        await fs.writeFileSync('demo.txt', 'hello world')
        res.end('File written successfully')
    }catch (error) {
        res.status(500).end('Failed to write file')
    }
})

const PORT = 5500;

app.listen(PORT, function(){
    console.log(`Server is running on PORT ${PORT}`);
})
