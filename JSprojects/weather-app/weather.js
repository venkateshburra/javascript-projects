
const apikey = 'ec0e47e64f609f6405b728ba8716d0d4';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const serachBox = document.querySelector('.search input');
const serachBtn = document.querySelector('.search button');
const WeatherIcon = document.querySelector('.weather-icon');

checkweather = async(city) => {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);

        if(response.status == 404) {
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';

        }

        else{

            var data = await response.json();
            console.log(data);
    
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
            if(data.weather[0].main == 'Clouds') {
                WeatherIcon.src = 'images/clouds.png';
            }
            else if(data.weather[0].main == 'Clear') {
                WeatherIcon.src = 'images/clear.png';
            }
            else if(data.weather[0].main == 'rain') {
                WeatherIcon.src = 'images/rain.png';
            }
            else if(data.weather[0].main == 'Drizzle') {
                WeatherIcon.src = 'images/drizzle.png';
            }
            else if(data.weather[0].main == 'Must') {
                WeatherIcon.src = 'images/mist.png';
            }
    
            document.querySelector('.weather').style.display = 'block';
            document.querySelector('.error').style.display = 'none';

    
    
        }
      
}

serachBtn.addEventListener('click', () => {

    
    checkweather(serachBox.value);
})