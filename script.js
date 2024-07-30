let tempdata;

async function getcountries()
{
  try{
  let country = await fetch("https://restcountries.com/v3.1/all");
  let countrydata = await country.json();
 foo(countrydata);
  
  for (var i=0; i<countrydata.length; i++)
  {
    let latlongval = countrydata[i].latlng;
  data (...latlongval);
  }
  
}
catch(error)
{
console.log(error);
}
}

async function data (lat,lon)
{
  try
  {

    let temp1 = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7127f5f4a6ef8104d15bd09137c543de`);
   tempdata = await temp1.json();

   return tempdata;
  }
  catch (error)
  {
console.log(error);
  }
}
getcountries();


let container = document.createElement("div");
container.className="container";

let row = document.createElement("div");
row.className="row";

 

async function foo(countrydata)
{
  
    for (let i=0; i<countrydata.length; i++)
    {
    
      let [latv,lonv]= countrydata[i].latlng;

        let col = document.createElement("div");
        col.className="col-lg-4 col-sm-12";
        
       let break1= document.createElement("br");

        let a= countrydata[i].flags.png;

        col.innerHTML =`
        
<div class="card text-center" style="width: 18rem; background-image: linear-gradient(to left, grey,lightgrey); ">
<h3 class="text-nowrap card-title-center" style="color:white; background-color:black; padding-bottom: 8%;padding-top: 8%; font-family: Garamond, serif;">${countrydata[i].name.common}</h3>
  <img src="${a}" class="card-img-top" alt="..." height="200" style="padding-inline: 10% 10%;padding-top: 10%;">
  <div class="card-body" style="font-family: "Lucida Console", "Courier New", monospace;">
    
    <p class="card-text-center" style="color:white;"><b>Capital: ${countrydata[i].capital}</b></p>
        <p class="card-text-center" style="color:white;"><b>Region: ${countrydata[i].region}</b></p>
            <p class="card-text-center" style="color:white;"><b>Country Code:  ${countrydata[i].cca2}</b></p>
            <p class=" text-nowrap card-text-center" style="color:white;font-family: "Lucida Console", "Courier New", monospace;"><b>Latlng:  ${countrydata[i].latlng}</b></p>
  
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="getTemp(${latv},${lonv})" style="background-image: linear-gradient(to left, black,grey); border: 2px solid white;font-family: "Lucida Console", "Courier New", monospace;">Click for Weather</button>
  </div>
</div>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 id ="countryweather"class="modal-title fs-5" id="exampleModalLabel"></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="weather">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

<br>
        `
        
        row.append(col);
        
        container.append(row);
       
        document.body.append(container);
       
    }
    
}

async function getTemp(latv,lonv)
{
      let tempo = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latv}&lon=${lonv}&appid=7127f5f4a6ef8104d15bd09137c543de`);
      let tempo1= await tempo.json();        
    let head =document.getElementById("countryweather");
    head.innerHTML = `${tempo1.name} Weather`;
    let elem =document.getElementById("weather");
    elem.innerHTML=`Temperature : ${tempo1.main.temp}
    Feels-like : ${tempo1.main.feels_like}
   Humidity  :  ${tempo1.main.humidity}
    Pressure :  ${tempo1.main.pressure}
    Ground-Level :  ${tempo1.main.grnd_level}
    Sea-Level :  ${tempo1.main.sea_level}`;    
}