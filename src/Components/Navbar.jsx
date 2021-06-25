import React from 'react'
import "../Components/Components.css"
import { Link } from "react-router-dom";
import SideBar from "./SideBar"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-dark navbar-dark d-flex  ">
                <SideBar />

                <div class="navbar-brand  h1 mx-auto">Weather Finder</div>


                <div className="nav-right">
                    <Link to="/projectdetails" > My Portfolio</Link>
                </div>
            </nav>
        </div>
    )
}


export default Navbar