
var searchTerms = document.getElementById("theSearch")
var query = "";


searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    query = searchTerms.value;
   console.log(query)

    fetchAPI();
});


function displayFood(json){

        const data = json
        console.log(data);
        console.log(data.results[0].title);
        const foodData = data[0];
        console.log(foodData);
  
        for(let i = 0; i < 4; i++ ){

            
            const foodCard = document.getElementById('cardContainer');
            const newCard = document.createElement('div');


        

    
            newCard.classList.add('newCard');

            const createCard = `
            
            <div className="card-container" onClick="showInfo('${data.results[i].id}')">
                <div class="card">

                    <div class="card-content">
                        <img src="${data.results[i].image}" alt="${data.results[i].title}">
                        
                        <h2>${data.results[i].title}</h2>

                    </div>

                </div>
            </div> 
            `

            newCard.innerHTML = createCard;
            foodCard.appendChild(newCard);

        }


        for(let i = 4; i < 8; i++ ){

            
            const foodCard = document.getElementById('cardContainer2');
            const newCard = document.createElement('div');


        

    
            newCard.classList.add('newCard');

            const createCard = `
            
            <div className="card-container" onClick="showInfo('${data.results[i].id}')">
                <div class="card">

                    <div class="card-content">
                        <img src="${data.results[i].image}" alt="${data.results[i].title}">
                        
                        <h2>${data.results[i].title}</h2>

                    </div>

                </div>
            </div> 
            `

            newCard.innerHTML = createCard;
            foodCard.appendChild(newCard);

        }


        for(let i = 8; i < 9; i++ ){

            
            const foodCard = document.getElementById('cardContainer3');
            const newCard = document.createElement('div');


        

    
            newCard.classList.add('newCard');

            const createCard = `
            
            <div className="card-container" onClick="showInfo('${data.results[i].id}')">
                <div class="card">

                    <div class="card-content">
                        <img src="${data.results[i].image}" alt="${data.results[i].title}">
                        
                        <h2>${data.results[i].title}</h2>

                    </div>

                </div>
            </div> 
            `

            newCard.innerHTML = createCard;
            foodCard.appendChild(newCard);

        }



        
}


async function fetchAPI(){
    fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&includeIngredients&apiKey=2fb19bf512ee4b02ba51d714a8f956bf`)
    .then(response => response.json())
    .then(displayFood);

}







function showInfo(id){

    console.log(id)


    window.location.href = `recipe-details.html?recipeId=${id}`
}

