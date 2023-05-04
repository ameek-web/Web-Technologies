const apikey="3f5aa6796159e57000ab84a92180e36c ";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=louisville&appid=3f5aa6796159e57000ab84a92180e36c";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiUrl + city + `&appid=${apikey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      
    }else{
        var data=await response.json();
    

      document.querySelector(".city").innerHTML = data.name ;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

      if(data.weather[0].main =="Clouds"){
         weatherIcon.src="cloud.jpg";
      }
      elseif(data.weather[0].main =="Drizzle")
      {
         weatherIcon.src="drizzle.png";
      }
      elseif(data.weather[0].main =="Rain")
      {
          weatherIcon.src="rain.webp";
      }
      elseif(data.weather[0].main =="Cold")
      {
          weatherIcon.src="snow.webp";
      }
      elseif(data.weather[0].main =="Clear")
      {
          weatherIcon.src="sunny.jpg";
      }
      document.querySelector(".weather").style.display="block";
      document.querySelector(".error").style.display="none";
    }

 
}
    
searchBtn.addEventListener("click",()=> {
        checkweather(searchBox.value);

})      



  
  
  