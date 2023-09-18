const apiKey = 'a374c69bab9999fa6ef227a326712f53';
const btClima = document.querySelector('#getWeather');
const weather = document.querySelector('#weather');
const inputCity = document.querySelector('#nomecity');


// Função para obter dados meteorológicos
const getWeatherData = async (city) => {
    try {
        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
        const res = await fetch(apiWeatherURL);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Função para exibir dados meteorológicos
const showWeatherData = async (city) => {
    const data = await getWeatherData(city);
    if (data && data.cod !== "404") {
        const temperatura = data.main.temp;
        weather.innerHTML = `Temperatura em ${city}: ${parseInt(temperatura)}°C`;

        console.log(data);

        if (data.weather[0].description === 'nublado' || data.weather[0].description === 'algumas nuvens' || data.weather[0].description === 'chuva moderada') {
            document.querySelector('#weather-icon').setAttribute('src', './images/cloud.png');
        } else if (data.weather[0].description === 'chuva' || data.weather[0].description === 'chuva leve') {
            document.querySelector('#weather-icon').setAttribute('src', './images/rain.png');
        } else if (data.weather[0].description === 'nuvens dispersas' || data.weather[0].description === 'céu limpo') {
            document.querySelector('#weather-icon').setAttribute('src', './images/sunny.png');
        } else {
            document.querySelector('#weather-icon').setAttribute('src', './images/snow.png');
        }
    } else {
        weather.innerHTML = 'Cidade não encontrada.';
    }
}

// Evento de clique no botão
inputCity.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        const city = inputCity.value;
        showWeatherData(city);
    }
});

btClima.addEventListener('click', async (e) => {
    e.preventDefault();

    const city = inputCity.value.trim(); // Obtém o valor do campo de entrada e remove espaços extras
    if (city) {
        showWeatherData(city);
    } else {
        weather.innerHTML = 'Por favor, insira o nome da cidade.';
        weatherIcon.setAttribute('src', './images/generic.png');
    }
});

// Inicializa a exibição de dados meteorológicos ao carregar a página
showWeatherData();