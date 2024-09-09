const apiKey = '6c200ae694f65f94d3e5c86cc97e742c'; // Replace with your API key

function getWeather() {
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                document.getElementById('weatherData').innerHTML = `<p>City not found</p>`;
                return;
            }

            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;

            document.getElementById('weatherData').innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Pressure: ${pressure} hPa</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch(error => {
            console.log("Error fetching weather data:", error);
        });
}
