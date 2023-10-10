const button = document.getElementById("theButton");
button.addEventListener("click" , generateCatPic);

function generateCatPic()
{

    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => { return response.json() })
    .then((data) => { console.log(data) });

    function displayCatPic(json){

        const data = json
        const catContainer = document.getElementById("cat-container");

        const catData = data[0];
        console.log(catData);
        console.log(catData.url);
        catContainer.innerHTML = `<img src="${catData.url}" alt="Cat Image" id="catImage">`;
        
    }

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(displayCatPic);



}





