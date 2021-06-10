const express = require("express");
const router = express.Router();
const shortid = require("shortid");

const urls = {}
const userList = [];
const localServer = "http://localhost:3000/urls/"
const deploymentServer = "https://urlshortnerapi-1.herokuapp.com/urls/"
router.get("/", (req, res) => {
    for (const url in urls) {
        userList.push({
            shortUrl: deploymentServer+url,
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
        res.status(400).send("Url is not present")
    }
})

router.post("/", (req, res) => {
    const data = req.body;
    const longUrl = data.longUrl;
    const shortUrlId = shortid.generate();
    urls[shortUrlId] = longUrl;
    console.log(urls);
    res.send({ shortUrl: deploymentServer+shortUrlId });
})

module.exports = router