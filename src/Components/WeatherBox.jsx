import React, {useState, useEffect} from 'react'
import "../Components/Components.css"
import Waves from "./Waves"
import axios from "axios"


const WeatherBox = () => {
    const [city,setCity] = useState(null)
    const [search,setSearch] = useState('Christchurch')


    
     useEffect(() => {
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e36dd2ff45d26a282e978b93c04fd7ae`)
        .then(res=>{
            const responseCity = res.data.main;  
            // const responseCity = res.data;
            setCity(responseCity);
            
            
        });

        
      },[]);
   
    return (
        <div className="weather-box mx-auto">
            <div className="input-data  justify-content-center d-flex ">
            <input className="form-control w-50" type="search" placeholder="Search" aria-label="Search" onChange={(event)=>{setSearch(event.target.value)}}/>
            <button className="btn btn-primary "  >Search</button>
            </div>

            {!city ? (<p className="text-danger">No Data found</p>)
              :
            (
            <div className="weather-info">
                <h2 className="location">
                <i class="bi bi-geo-alt-fill"></i>
                 {search}
                </h2>
                <h1 className="temp">{city.temp}&#176;C</h1>
                
            </div>
            )      
}
        </div>
    )
}

export default WeatherBox


