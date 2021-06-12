const express = require("express");
const router = express.Router();
const shortid = require("shortid");

const urls = {};
const localServer = "http://localhost:3000/urls/"
const deploymentServer = "https://urlshortnerapi-1.herokuapp.com/urls/"

router.get("/", (req, res) => {
    const urlList = Object.keys(urls).map((key) => {
        return {
            shortUrlId: key,
            shortUrl: deploymentServer + key,
            longUrl: urls[key]
        };
    });
    res.send(urlList)
})

router.get("/:shortUrlId", (req, res) => {
    console.log(urls)
    const longUrl = urls[req.params.shortUrlId];
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(400).send("Url is not present")
    }
})

router.post("/", (req, res) => {
    const data = req.body;
    const longUrl = data.longUrl;
    const shortUrlId = shortid.generate();
    urls[shortUrlId] = longUrl;
    res.send({ shortUrl: deploymentServer + shortUrlId });
})

module.exports = router