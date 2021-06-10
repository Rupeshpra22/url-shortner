const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const urls = require("./urls");
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let allowAccessOrigin = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
}

app.use(cors());

app.use('/urls', urls);

app.get('/', (req,res)=>{
    res.send("URL Shortner backend");
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})