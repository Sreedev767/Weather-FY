var input = document.getElementById("input_name");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") 
  {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

const d = new Date();
document.getElementById("date").innerHTML = d;

function refreshPage() {
  if (confirm("Are You Sure , Want To Refresh ?")) {
      location.reload();
  }
}



const search = async ()=>{
  let placeName = input_name.value
  console.log(placeName);

  if (placeName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&units=metric&appid=ba61db2e655c6674b682551969e319e4`);
    response.json().then((data)=>{
      
      if (response.status==200)  
      {

      let image =" "
      

      let pName = data.name
      console.log(pName);

      let temperature = data.main.temp
      console.log(temperature);

      let descriptions = data.weather[0].description
      console.log(descriptions);

      let humiditys = data.main.humidity
      console.log(humiditys);

      let pressures = data.main.pressure
      console.log(pressures);

      let winds = data.wind.speed
      console.log(winds);

      console.log(data.name);

      switch (data.weather[0].main) {
        case 'Clear':
          image='images/clear.png'       
          break;
        case 'Rain':
          image='images/rain.png'
        
          break;
        case 'Clouds':
          image='images/cloud.png'
          break;
        case 'Snow':
          image='images/snow.png'
          break;
        case 'Mist':
          image='images/mist.png'
          break;
           
        default:
          image='images/cloud.png'
          break;
          

      }
      
    result.innerHTML=`
    
    <div class="card-body1">
    <!-- 1. temp -->
      <div class="weather-box text-center mb-5">
        <div class="weather-info">
          <img src="${image}" alt="">
          <h1 class="temperature mt-3">${temperature} °C</h1>
          <div class="description">${descriptions}</div>
          <h5 class="city">${pName}</h5>
        </div>
      </div>

      <!-- 2. details -->
      <div class="weather-details row text-center gx-5">
      
        <div class="humidity col-md-4">
          <i class="fa-solid fa-xl fa-water" style="color: #ffffff;"></i> 
          <div class="text">
            <div class="info-humidity">
              <span>${humiditys} %</span>
            </div>
            <p>Humidity</p>
          </div>
        </div>
      
      
        <div class="pressure col-md-4">
          <i class="fa-solid fa-xl fa-smog" style="color: #ffffff;"></i> 
          <div class="text">
            <div class="info-humidity">
              <span>${pressures} pa</span>
            </div>
            <p>Pressure</p>
          </div>
        </div>
      
        <div class="wind col-md-4">
          <i class="fa-solid fa-xl fa-wind" style="color: #ffffff;"></i> 
          <div class="text">
            <div class="info-humidity">
              <span>${winds} km/hr</span>
            </div>
            <p>Wind</p>
          </div>
        </div>
      </div>
      <div id="${date}"></div>
    </div>
    
  `
    }
    else{
      input_name.value=""
      result.innerHTML=`
      <div class="error text-center" style="transition:height 1s ease;">
        <img class=" imagess mx-auto " style="  width: 40%;" src="./images/404.png" alt="404 - error">
        <p class="text-light " style="font-size="20px">Oops ! Location ${response.statusText}</p>
      </div>
      `
      alert('Enter A Valid Location')

    }

      
    })
  }
  else{
    alert('Please Enter A Location')
  }
}
