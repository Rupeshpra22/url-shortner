const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const urls = require("./urls");

app.use(express.static('public'));
app.use(express.json());
let allowAccessOrigin = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Acces-Contorl-Allow-Methods','Content-Type','Authorization')
    next();
}
app.use(allowAccessOrigin)
app.use('/urls', urls);

app.get('/', (req,res)=>{
    res.send("URL Shortner");
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})