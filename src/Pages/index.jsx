import React from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import SideTech from "../Components/SideTech"
import WeatherBox from "../Components/WeatherBox"
import "../Pages/Pages.css"
import CitiesWeather from "../Components/CitiesWeather"

function App() {
    return (
        <div >
            <Navbar />

            <div className="page-center ">
                <div className="index-sidetech">
                    <SideTech />
                </div>


                <WeatherBox />

                <CitiesWeather className="index-cities" />



            </div>


            <Footer />
        </div>
    );
}

export default App;