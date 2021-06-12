const inputElement = document.querySelector("#input-text");
const buttonElement = document.querySelector("#shorten");
const shortendUrlParentElement = document.querySelector(".shortened-link");
const shortendUrlElement = document.querySelector("#shorten-url");
const errorElement = document.querySelector(".error");
const recentlyShortenedElement = document.querySelector(".recently-shortened");
const allUrlElement = document.querySelector(".all-url");
const APIURL = "http://localhost:3000/urls/";
const deploymentServer = "https://urlshortnerapi-1.herokuapp.com/urls/"

window.onload = () => {
    inputElement.focus();
}


buttonElement.addEventListener("click", () => {
    const isHttpPresent = inputElement.value.split(":").includes("http");
    const isHttpsPresent = inputElement.value.split(":").includes("https");
    if (!isHttpPresent && !isHttpsPresent ) {
        errorElement.style.display = "block";
    } else {
        errorElement.style.display = "none";
        fetch(deploymentServer, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                longUrl: inputElement.value,
            }),
        })
            .then((res) => res.json())
            .then(data => {
                inputElement.value = "";
                shortendUrlElement.innerText = data.shortUrl;
                shortendUrlParentElement.style.display = "block";
            })
            .catch(error => console.log(error))
    }
})


