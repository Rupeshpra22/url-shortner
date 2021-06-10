const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let allowAccessOrigin = (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
}

app.use(allowAccessOrigin);

app.get('/', (req,res)=>{
    res.send({"message": "Url Shortner Backend"});
})

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`)
})