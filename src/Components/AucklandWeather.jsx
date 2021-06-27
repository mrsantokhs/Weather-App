import React, { useState, useEffect } from 'react'
import axios from "axios"
import { FiSun } from 'react-icons/fi';
import { FaCloudShowersHeavy } from "react-icons/fa"

function AucklandWeather() {

    const [city, setCity] = useState('Auckland')
    useEffect(() => {

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e36dd2ff45d26a282e978b93c04fd7ae`)
            .then(res => {
                const responseCity = res.data.main;

                setCity(responseCity);
            });


    }, []);




    return (
        <div>
            <div>
                {/*} <div >
                    {city.weather.map((weather) => (
                        <div ><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} /></div>
                    ))}
                    </div> */}
                <FiSun className="cities-weathericons" />
                <h3 className="cities-cityname">Auckland</h3>
                <h2 className="cities-temp">{city.temp}&#176;C</h2>

            </div>
        </div>
    )
}

export default AucklandWeather
