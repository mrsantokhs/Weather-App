import React, { useState, useEffect } from 'react'
import "../Components/Components.css"
import Waves from "./Waves"
import axios from "axios"
import { ImLocation } from 'react-icons/im';
import { FcSearch } from 'react-icons/fc';
import { GiPaperWindmill } from "react-icons/gi"
import tempIcon from "../Assets/temp.svg"






const WeatherBox = () => {
    const [city, setCity] = useState()
    const [search, setSearch] = useState('Christchurch')

    const date = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const day = weekday[date.getDay()];

    useEffect(() => {

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e36dd2ff45d26a282e978b93c04fd7ae`)
            .then(res => {
                const responseCity = res.data;



                setCity(responseCity);


            });


    }, [search]);



    return (
        <div className="weather-box ">
            <div className="input-data  justify-content-center  d-flex ">
                <input className=" weather-input form-control   mt-3" type="search" placeholder="Search by City" aria-label="Search" onChange={(event) => { setSearch(event.target.value) }} />



            </div>

            <div className="weather-info  d-flex    mx-auto  ">
                {!city ? (<div class="spinner-border mx-auto" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>)
                    :
                    (
                        <div className="text-light w-100 h-100">

                            <h3 className="weather-location text-danger">

                                <ImLocation className="location-icon" />

                                {search}, {city.sys.country}
                            </h3>

                            {city.weather.map((weather) => (
                                <div key={weather}><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} width={80} /></div>
                            ))}



                            <div className="d-flex w-100 justify-content-center">
                                <img src={tempIcon} height={60} className="temp-icon" />
                                <h1 className="weather-temp ">  {city.main.temp}&#176;C</h1>
                            </div>
                            <h4>Day: {day}</h4>

                            <p className="weather-wind"><GiPaperWindmill class="wind-icon" /> Wind:{city.wind.speed}</p>






                            {/*<div >
                                {city.weather.map((weather) => (
                                    <div >{weather.main}</div>
                                ))}
                                </div>*/}





                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default WeatherBox


