const searchBtn = document.getElementById("search");

// Weather app URL
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "YOUR_API_KEY";

function weatherApp() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch(`${baseURL}appid=${apiKey}&q=${city}`)
        .then((res) => res.json())
        .then((data) => {
            const cityName = document.getElementById("cityName");
            const main = document.getElementById("main");
            const description = document.getElementById("description");
            const temp = document.getElementById("temp");
            const humidity = document.getElementById("humidity");
            const err = document.getElementById("err");

            if (data.cod === "404") {
                cityName.textContent = "";
                main.textContent = "";
                description.textContent = "";
                temp.textContent = "";
                humidity.textContent = "";
                err.textContent = "City Not Found";
            } else {
                cityName.textContent = data.name;
                main.textContent = data.weather[0].main;
                description.textContent = data.weather[0].description;
                temp.textContent = `Temperature: ${data.main.temp} K`;
                humidity.textContent = `Humidity: ${data.main.humidity}%`;
                err.textContent = "";
            }
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}

searchBtn.addEventListener("click", weatherApp);
