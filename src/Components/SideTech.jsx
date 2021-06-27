import React from 'react';
import "./Components.css"
import { FaReact } from "react-icons/fa"
import { SiBootstrap } from "react-icons/si"
import axiosLogo from "../Assets/axios.jpg"
import fontAwesome from "../Assets/fontAwesome.png"
import openWeather from "../Assets/openweather.png"
import reactRouter from "../Assets/reactRouter.png"


function SideTech() {

    return (
        <div className="sidetech-main  ">
            <div className="mb-3 bg-dark"><h4 className="text-danger">Technologies Used</h4></div>

            <div>
                <div className="sidetech-ulist d-flex flex-column ">
                    <div className="d-flex flex-column tech-list">
                        <FaReact className=" react-icon mx-auto" />
                        <p>React Js</p>
                    </div>
                    <div className="d-flex flex-column tech-list">
                        <img src={axiosLogo} width={100} className="mx-auto" />
                        <p className="mt-2">Fetching <br />Data</p>
                    </div>

                    <div className="d-flex flex-column tech-list">
                        <SiBootstrap className=" bootstrap-icon mx-auto" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="d-flex flex-column tech-list">
                        <img src={reactRouter} width={100} className="mx-auto" />
                        <p>React Router</p>
                    </div>
                    <div className="d-flex flex-column tech-list">
                        <img src={openWeather} width={80} className="mx-auto" />
                        <p>Open Weather Api</p>
                    </div>
                    <div className="d-flex flex-column tech-list">
                        <img src={fontAwesome} width={100} className="mx-auto" />
                        <p>Font Awesome Icons</p>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default SideTech
