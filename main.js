      const apiKey = "c03c6470fc0b56d91130393f74ac6fbc";
      const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        } else {
          let data = await response.json();

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML =
            data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "sources/clouds.png";
          } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "sources/rain.png";
          } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "sources/clear.png";
          } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "sources/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "sources/mist.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none"
        }
      }

      searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
      });
