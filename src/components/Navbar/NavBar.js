import React from "react";
import './style.css';

function NavBar() {
    return (
        <div className="container">
            <div className="logo">COPE Health</div>

            <div className="links">
                <div className="features" >Features</div>
                <div className="link">For Patients</div>
                <div className="link">For Hospitals</div>
            </div>

            <div className="right-nav">
                <div className="login-con">
                    <div className="login">Login</div>
                </div>
    
                <div className="gs-con">
                    <div className="get-started">
                        <button>Get Started</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default NavBar