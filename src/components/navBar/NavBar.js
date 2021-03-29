import React from "react";
import '../navBar/navBar.css';


const NavBar = () => {
    return (

        <div>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Gana</a>
                </li>
                <a className="nav-link active" href="https://ayuda.somosmach.com/hc/es">
                    {/* <img className="helpImg" src={iconHelp}></img> */}
                </a>
            </ul>

        </div>


    );
};
export default NavBar;