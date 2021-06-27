import React, { useState, useEffect } from 'react'
import "../Components/Components.css"
import Waves from "./Waves"
import axios from "axios"
import { ImLocation } from 'react-icons/im';
import { FcSearch } from 'react-icons/fc';
import { GiPaperWindmill } from "react-icons/gi"





const WeatherBox = () => {
    const [city, setCity] = useState()
    const [search, setSearch] = useState('Christchurch')



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
                <input className="form-control w-50  mt-3" type="search" placeholder="Search by City" aria-label="Search" onChange={(event) => { setSearch(event.target.value) }} />



            </div>

            <div className="weather-info  d-flex h-100   ">
                {!city ? (<div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>)
                    :
                    (
                        <div className=" text-light">

                            <div >
                                {city.weather.map((weather) => (
                                    <div ><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} width={80} /></div>
                                ))}
                            </div>

                            <h3 className="weather-location">

                                <ImLocation class="location-icon" />

                                {search}, {city.sys.country}
                            </h3>
                            <h1 className="weather-temp">{city.main.temp}&#176;C</h1>
                            <p class="weather-wind"><GiPaperWindmill class="wind-icon" /> Wind:{city.wind.speed}</p>
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


