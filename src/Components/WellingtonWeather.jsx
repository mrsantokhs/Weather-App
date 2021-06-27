import React, { useState, useEffect } from 'react'
import axios from "axios"
import { FiSun } from 'react-icons/fi';
import { FaCloudShowersHeavy } from "react-icons/fa"

function WellingtonWeather() {

    const [city, setCity] = useState('Wellington')
    useEffect(() => {

        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e36dd2ff45d26a282e978b93c04fd7ae`)
            .then(res => {
                const responseCity = res.data.main;
                // const responseCity = res.data;
                setCity(responseCity);
            });


    }, []);
    return (
        <div>

            <FiSun className="cities-weathericons" />
            <h3>Wellington</h3>
            <h2>{city.temp}&#176;C</h2>

        </div>
    )
}

export default WellingtonWeather
