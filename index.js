function search (event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#city-input");
    let city = searchInputElement.value;

    let apiKey = "739f904148cfa8boc86t8a8b426aac3f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
 
    axios.get(apiUrl).then(displayWeather);
}

function displayWeather (response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = `${temperature}°C`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);