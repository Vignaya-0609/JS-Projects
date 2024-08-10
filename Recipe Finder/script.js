document.getElementById('search').addEventListener('click', function() {
    // Get the input value
    const query = document.getElementById('recipe').value.trim();
    const apiKey = 'YOUR_API_KEY';
    // Check if the input is not empty
    if (query === '') {
        alert('Please enter a recipe name.');
        return;
    }

    // Clear previous results
    document.querySelector('.res').innerHTML = '';

    // AJAX request to the API using Fetch API
    fetch(`https://api.api-ninjas.com/v1/recipe?query=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey },
    })
    .then(response => response.json())
    .then(result => {
        if (result.length === 0) {
            document.querySelector('.res').innerHTML = '<p style="text-align:center;color:white;">No recipes found.</p>';
            return;
        }

        result.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');

            const recipeName = document.createElement('h3');
            recipeName.textContent = recipe.title;
            recipeElement.appendChild(recipeName);

            const recipeIngredients = document.createElement('p');
            recipeIngredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.ingredients}`;
            recipeElement.appendChild(recipeIngredients);

            const recipeInstructions = document.createElement('p');
            recipeInstructions.innerHTML = `<strong>Instructions:</strong> ${recipe.instructions}`;
            recipeElement.appendChild(recipeInstructions);

            document.querySelector('.res').appendChild(recipeElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        document.querySelector('.res').innerHTML = '<p>Error fetching recipes. Please try again later.</p>';
    });
});
