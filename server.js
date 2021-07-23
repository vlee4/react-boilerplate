const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3000;

const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.json());
app.use(express.static('public'));
app.use(express.static('dist'));

app.get('/', (req, res)=>{
    res.sendFile(HTML_FILE, (err)=>{
        if(err){
            res.status(500).send(err);
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`)
})