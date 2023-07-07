function fetchweather(){
    let place=id_place.value;
    console.log(place);


fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8f9164d0bb1a347b51a7d0e25e247b6c&q=${place}&units=metric`).then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(data){
    let placeName=data.name
    let temp=data.main.temp
    let minTemp=data.main.temp_min
    let maxTemp=data.main.temp_max
    let pressure=data.main.pressure
    let humidity=data.main.humidity
    let windSpeed=data.wind.windSpeed
    let windDegree=data.wind.windDeg
    let icon=data.weather[0].icon
    let desc=data.weather[0].description
    let feels_like=data.main.feels_like

    let htmlData=`
    <div class="card text-center">
  <div class="card-header">
    Weather-Application
  </div>
  <div class="card-body">
    <h5 class="card-title">${placeName}</h5>
    <p class="card-text">${temp}</p>
    <p class="card-text">${desc}</p>
    <p class="card-text">${feels_like}</p>
    <p class="card-text">${humidity}</p>


    <a href="#" class="btn btn-primary">Go Somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>
    `
    document.querySelector("#id_result").innerHTML=htmlData
}

function fetchWeatherByLocation(){
    // let lat=navigator.geolocation.getCurrentPosition(p=>console.log(p.coords.latitude))
    // let long=navigator.geolocation.getCurrentPosition(p=>console.log(p.coords.longitude))
    // console.log(lat,long)
    navigator.geolocation.getCurrentPosition((p)=>{
      let lat=p.coords.latitude
      let long=p.coords.longitude
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8f9164d0bb1a347b51a7d0e25e247b6c`).then(res=>res.json()).then(data=>displayWeather(data))
      
})
  }