document.getElementById('check').addEventListener('click', function() {
    let word = document.getElementById('val').value;
    let apiKey = 'YOUR_API_KEY';
    let apiUrl = 'https://api.api-ninjas.com/v1/country?name='+word.trim();

    if (word === '') {
        alert('Please enter a country name to search.');
        return;
    }

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // console.log(data);
        if (data && data.length > 0) {
            document.getElementById('res').style.display = 'block';
            document.getElementById('error').style.display = 'none';
            document.getElementById('name').innerText = data[0].name;
            document.getElementById('region').innerText = "Region: "+ data[0].region;
            document.getElementById('currency').innerText ="Currency: "+data[0].currency.code + " - " + data[0].currency.name;
            document.getElementById('capital').innerText = "Capital: " + data[0].capital;
            document.getElementById('population').innerText = "Population: " + data[0].population.toLocaleString();
        } else {
            document.getElementById('res').style.display = 'none';
            document.getElementById('error').style.display = 'block';
            document.getElementById('errorMessage').innerText = 'Country not found or invalid input.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('res').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorMessage').innerText = 'An error occurred while fetching the country data.';
    });
});
