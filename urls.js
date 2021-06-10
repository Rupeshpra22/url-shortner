const express = require("express");
const router = express.Router();
const shortid = require("shortid");

const urls = {}
const userList = [];

router.get("/", (req, res) => {
    for (const url in urls) {
        userList.push({
            shortUrl: `https://urlshortnerapi-1.herokuapp.com/urls/${url}`,
            longUrl: urls[url]
        })
    }
    res.send(userList)
})

router.get("/:shortUrlId", (req, res) => {
    console.log(urls)
    const longUrl = urls[req.params.shortUrlId];
    if (longUrl) {
        // res.send({
        //     shortUrlId: `http://localhost:3000/urls/${req.params.shortUrlId}`,
        //     longUrl: longUrl
        // })
        res.redirect(longUrl);
    } else {
        res.send(req.params.shortUrlId)
        res.status(400).send("Url is not present")
    }
})

router.post("/", (req, res) => {
    const data = req.body;
    const longUrl = data.longUrl;
    const shortUrlId = shortid.generate();
    urls[shortUrlId] = longUrl;
    console.log(urls);
    res.send({ shortUrl: `https://urlshortnerapi-1.herokuapp.com/urls/${shortUrlId}` });
})

module.exports = router