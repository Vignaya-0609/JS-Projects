const getFact = document.getElementById("getQuote");
const randomFact = document.getElementById("randomQuote");
const displayContent = document.querySelector(".quote");

// Default displayContent is none
displayContent.style.display = "none";

const apiKey = '1dcA2MK/Jk2cmPIE592/Vw==nwDRcWbt5whRFb9S';
const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=';

function fetchQuote(category) {
    fetch(apiUrl + category, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            const quote = data[0].quote;
            const author = data[0].author;
            displayContent.style.display = "block";
            displayContent.innerHTML = `<p>"${quote}"</p><p style="text-align: end;">- ${author}</p>`;
            
        } else {
            displayContent.style.display = "block";
            displayContent.innerHTML = `<p>No quotes found for the category "${category}".</p>`;
            
        }
    })
    .catch(error => {
        displayContent.style.display = "block";
        console.error('Error:', error);
        displayContent.innerHTML = `<p>An error occurred while fetching the quote.</p>`;
        
    });
}

// Get Quote
getFact.addEventListener("click", () => {
    const category = document.getElementById("val").value.trim();
    if (category) {
        fetchQuote(category);
    } else {
        displayContent.style.display = "block";
        displayContent.innerHTML = `<p>The input field cannot be empty.</p>`;
        
    }
});

// Random Quote
randomFact.addEventListener("click", () => {
    const categories = ['age','alone','amazing','anger','architecture','art','attitude','beauty','best','birthday','business','car','change','communication','computers','cool','courage','dad','dating','death','design','dreams','education','environmental','equality','experience','failure','faith','family','famous','fear','fitness','food','forgiveness','freedom','friendship','funny','future','god','good','government','graduation','great','happiness','health','history','home','hope','humor','imagination','inspirational','intelligence','jealousy','knowledge','leadership','learning','legal', 'life',  'love','marriage','medical','men','mom','money','morning','movies','success'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    fetchQuote(randomCategory);
});
