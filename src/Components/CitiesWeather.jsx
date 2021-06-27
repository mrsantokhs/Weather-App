import React, { useState, useEffect } from 'react'
import AucklandWeather from "./AucklandWeather"
import WellingtonWeather from "./WellingtonWeather"
import { FiSun } from 'react-icons/fi';
import { FaCloudShowersHeavy } from "react-icons/fa"
import Invercargill from './Invercargill';

const CitiesWeather = () => {

    return (
        <div className="cities-main  ">
            <div>
                <AucklandWeather />
            </div>

            <div>
                <WellingtonWeather />
            </div>
            <div>
                <Invercargill />
            </div>
        </div>
    )
}

export default CitiesWeather