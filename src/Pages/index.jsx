import React from "react"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

import WeatherBox from "../Components/WeatherBox"
import Pages from "../Pages/Pages.css"

function App() {
    return (
        <div >
            <Navbar />
          
            
            <WeatherBox/>
           

       
            
            <Footer/>
        </div>
    );
}

export default App;