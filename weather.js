const apikey =  '791aec2fe53e2324f0daa608dc392212';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=matric&q=';

const searchbox = document.querySelector(".searchbox input");
const searchbtn = document.querySelector(".searchbox button")  
const weathericon = document.querySelector("img");


const errorBox = document.querySelector(".error-box");
const errorIcon = document.querySelector(".error-icon img");
const errorMessage = document.querySelector(".error-message");

async function checkweather(cityname){
  const response = await fetch(apiurl + cityname + `&appid=${apikey}`);

  if(response.status == 404){
    document.querySelector(".error-box").style.display = "block";
    document.querySelector(".weatherbox").style.display = "none";
  } 
  else{
    var data = await response.json();

  
    document.querySelector(".cityname").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h" ;
    
  
  if(data.weather[0].main == "Clouds"){
    weathericon.src = "https://cdn-icons-png.flaticon.com/512/4834/4834559.png"
  }
  else if(data.weather[0].main == "Clear"){
    weathericon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222807.png"
  }
  else if(data.weather[0].main == "drizzle"){
    weathericon.src = "https://cdn2.iconfinder.com/data/icons/weather-filled-outline-3/64/weather07-512.png"
  }
  else if(data.weather[0].main == "Haze"){
    weathericon.src = "https://cdn-icons-png.flaticon.com/512/1779/1779862.png"
  }
  else if(data.weather[0].main == "Sunny"){
    weathericon.src = "https://cdn-icons-png.flaticon.com/512/3222/3222691.png"
  }
  else if(data.weather[0].main == "Mist"){
    weathericon.src = "https://cdn-icons-png.flaticon.com/512/175/175872.png"
  
  }
  document.querySelector(".error-box").style.display = "none";
    document.querySelector(".weatherbox").style.display = "block";
  }

  
}
searchbtn.addEventListener("click", ()=>{
  
  checkweather(searchbox.value);
});


