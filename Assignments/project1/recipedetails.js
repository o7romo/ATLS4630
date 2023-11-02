    
function getRecipeIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    console.log(params)
    return params.get("recipeId");
}

   
function fetchRecipeDetails(recipeId) {
        const apiKey = "2fb19bf512ee4b02ba51d714a8f956bf"; 
        const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
               
                console.log(data);
                console.log(data.analyzedInstructions[0].steps[0].step);
                

                //To add image
                document.getElementById("recipe-image").src = data.image;
               
                //To add title
                document.getElementById("recipe-title").textContent = data.title;
            
                //To add the recipe steps.
                const listContainer = document.getElementById('dynamic-list');
                data.analyzedInstructions[0].steps.forEach((step, index) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `Step ${index + 1}: ${step.step}`;
                    listContainer.appendChild(listItem);
                });


               //To add ingredients
                const  ingredientContainer = document.getElementById('Ingredient-list')
                data.extendedIngredients.forEach((original, index) => {
                    const listItem = document.createElement('li');
                    listItem.textContent =  original.original;
                    ingredientContainer.appendChild(listItem);
                });


                //To Use Tags given by the api and add summary
                const apiSummary = data.summary;
                const info = document.getElementById('recipe-summary');
                info.innerHTML = apiSummary;
            })
            .catch(error => {
                console.error("Error fetching recipe details:", error);
            });
}

    
document.addEventListener("DOMContentLoaded", function() {
    const recipeId = getRecipeIdFromURL();
    if (recipeId) {
        fetchRecipeDetails(recipeId);
    }
});

document.getElementById("theButton").addEventListener("click", function() {
   
    window.location.href = "index.html";
});