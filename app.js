const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("URL Shortner backend");
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})