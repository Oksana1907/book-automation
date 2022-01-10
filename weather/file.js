const promise = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no");

let weatherList = [];

promise
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        weatherList = data.results;
        render (data);
    });

    function render (data) {
        console.log(data)
        document.getElementById("app").insertAdjacentHTML(
            "beforeend",
            `
            <div class="greetings">Hello! Today will be a wonderful day)</div>
            <div> Your town: ${data.location.name}</div>
            <div> Your region: ${data.location.region}</div>
            <div> Outside the window ${data.current.condition.text}</div>
            <div> Feelslike ${data.current.feelslike_c}C</div>
            <div> Gust ${data.current.gust_kph}kph</div>
            <div> Humidity ${data.current.humidity}</div>
            `
            )

        }
