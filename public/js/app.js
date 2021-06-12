const inputElement = document.querySelector("#input-text");
const buttonElement = document.querySelector("#shorten");
const shortendUrlParentElement = document.querySelector(".shortened-link");
const shortendUrlElement = document.querySelector("#shorten-url");
const errorElement = document.querySelector(".error");
const recentlyShortenedElement = document.querySelector(".recently-shortened");
const allUrlElement = document.querySelector(".all-url");
const clipboardElement = document.querySelector(".clipboard");
const copyElement = document.querySelector(".copy");

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

clipboardElement.addEventListener("click", ()=>{
    copyToClipBoard(shortendUrlElement.textContent);
})

const copyToClipBoard = (str) =>
{
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    copyElement.style.display = "block";
    setTimeout(function(){
        copyElement.style.display = "none";
    }, 2000);
};


