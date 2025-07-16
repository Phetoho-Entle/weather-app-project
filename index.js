function search (event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInput.value;

    let apiKey = "739f904148cfa8boc86t8a8b426aac3f";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
 
    axios.get(apiUrl).then(displayWeather);
}