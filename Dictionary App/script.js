document.getElementById('check').addEventListener('click', function() {
    let word = document.getElementById('val').value;
    let apiKey = 'YOUR_API_KEY';
    let apiUrl = 'https://api.api-ninjas.com/v1/dictionary?word=' + word;

    if (word === '') {
        alert('Please enter a word to search.');
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
        if (data.valid) {
            document.getElementById('name').innerText = data.word;
            document.getElementById('meaning').innerText = data.definition;
        } else {
            document.getElementById('name').innerText = '';
            document.getElementById('meaning').innerText = 'Word not found or invalid.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('name').innerText = '';
        document.getElementById('meaning').innerText = 'An error occurred while fetching the word.';
    });
});
