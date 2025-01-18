
let city=document.getElementsByClassName('city')[0]
let cityForm=document.getElementsByClassName('weather-city')[0]
let datetime=document.getElementsByClassName('weather-date')[0]
let cityTitle=document.getElementsByClassName('weather-city-title')[0]
let weatherStatus=document.getElementsByClassName('weather-status')[0]
let icon=document.getElementsByClassName('weather-icon')[0]
let w_temp=document.getElementsByClassName('weather-temp')[0]
let w_min=document.getElementById('min')
let w_max=document.getElementById('max')
let feelLike=document.getElementById('feelLike')
let humidity=document.getElementById('humidity')
let pressure=document.getElementById('pressure')
let wind1=document.getElementById('wind')

// console.log(city,datetime,cityTitle,icon,w_temp,w_max,w_min)
// to get the actual country name
//! 4587a6c585565f8bb5f6fe7b9384c69b
const getCountry=(code)=>{
  return  new Intl.DisplayNames(['en'], { type: 'region' }).of(code)
}
const getDate=(dt)=>{
  const d=new Date(dt*1000)
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      date:'numeric',
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const weather_date =new Intl.DateTimeFormat("en-US", options).format(d)
    return weather_date
 }
 let city_search='pune'
const getWeatherData = async () => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_search}&APPID=4587a6c585565f8bb5f6fe7b9384c69b`;
  try{
    const res= await fetch(weatherUrl)
    const data= await res.json()
    console.log(data)
    const {main,wind,sys,dt,name,weather}=data

    cityTitle.innerText=`${name}, ${getCountry(sys.country)}`
    datetime.innerText=getDate(dt)
    w_temp.innerHTML=`${main.temp}&deg;`
    w_max.innerHTML=`Max: ${main.temp_max.toFixed()}&deg;`
    w_min.innerHTML=`Min: ${main.temp_min.toFixed()}&deg;`
    weatherStatus.innerHTML=`${weather[0].main}`
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`;
  
    feelLike.innerHTML=`${main.feels_like}&deg;`
    humidity.innerHTML=`${main.humidity}%`
    pressure.innerHTML=`${main.pressure} hpa`
    wind1.innerHTML=`${wind.speed} m/s`
  }catch(e){
    console.log('failed to load data')
    cityTitle.innerText="Failed to Load Data"
  }
};
cityForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(city.value);
  city_search=city.value
  getWeatherData()
  city.value=""
})
document.body.addEventListener("load", getWeatherData());
