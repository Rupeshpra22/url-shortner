Designing Url Shortner

Functionalites : Shorten the big URL to small URL
we send a long URL to the server and it returns the short URL and when we hit the short url through our browser
it gets redirected to the longer url.

so we have

GET //get the shortUrl and longUrl
API endpoint: https://localhost:3000/urls
Response:
{
    [
        {
            shortUrl: "",
            longUrl: ""
        },
        {
            shortUrl: "",
            longUrl: ""
        }
    ]
}

GET //converts the short url to long url
API endpoint: https://localhost:3000/urls/shorturl
Response: 
{
    longUrl : longUrl
}


POST //takes the longurl and returns the shorturl
API endpoint: https://localhost:3000/urls
Request Body: 
{
    longUrl : longUrl
}
Response:
{
    shortUrl: shortUrl
}