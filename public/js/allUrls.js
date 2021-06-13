const allUrlElement = document.querySelector(".all-url");
const gridElement = document.querySelector(".grid");
const noData = document.querySelector(".no-data");

const APIURL = "http://localhost:3000/urls/";
const deploymentServer = "https://urlshortnerapi-1.herokuapp.com/urls/"

window.onload = () =>{
        fetch(deploymentServer)
        .then((res)=>res.json())
        .then(data=>{
            if(data.length>0){
            constructTable(data);
            }else{
                noData.style.display = "flex"
            }
        })
        .catch(err=>{
            console.log(err)
        })

}

const constructTable = (data) =>{
    data.forEach(obj=>{
        const tr = document.createElement("tr");
            let shortUrlLink = document.createElement("a");
            let longUrlLink = document.createElement("a");
            let shortUrlTd = document.createElement("span");
            let longUrlTd = document.createElement("span");
            shortUrlLink.href =  obj["shortUrl"];
            shortUrlLink.target = "_blank";
            shortUrlTd.innerText = obj["shortUrl"];
            longUrlLink.href = obj["longUrl"];
            longUrlLink.target = "_blank";
            longUrlTd.innerText = obj["longUrl"];
            shortUrlLink.appendChild(shortUrlTd)
            longUrlLink.appendChild(longUrlTd)
            gridElement.appendChild(shortUrlLink);
            gridElement.appendChild(longUrlLink);
    })
}
