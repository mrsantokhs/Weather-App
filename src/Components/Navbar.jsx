import React from 'react'
import "../Components/Components.css"
import { Link } from "react-router-dom";
import weatherlogo from "../Assets/weatherlogo.png"


const Navbar = () => {
    return (
        <div>
            <nav className="navbar bg-dark navbar-dark d-flex  ">


                <div className="navbar-brand">
                    <h3> <img src={weatherlogo} width={70} /> Weather Finder</h3></div>


                {/* <div className="nav-right">
                    <Link to="/projectdetails" > My Portfolio</Link>
    </div>*/}
            </nav>
        </div>
    )
}


export default Navbar