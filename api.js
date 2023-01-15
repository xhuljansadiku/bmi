    	const apiKey = "4b6edea1684ef990db617793049b2f30";

        async function getWeather() {
            const city = document.getElementById("city-input").value;
            const url = `http://api.openweathermap.org/data/2.5/weather?q=berlin&appid=4b6edea1684ef990db617793049b2f30`;
            const response = await fetch(url);

           
            if (response.ok) {
                const data = await response.json();
                displayWeather(data);
            } else {
                console.log("Error:", response.status);
            }
        }

        function displayWeather(data) {
            const weatherData = document.getElementById("weather-data");
            //convert kelvin to celsius
            const celsius = Math.round(data.main.temp - 273.15);
            weatherData.innerHTML = `
                <p>Temperature: ${celsius} &#8451;</p>
                <p>Humidity: ${data.main.humidity}</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        }