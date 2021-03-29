import React from "react";
import '../navBar/navBar.css';
import nutri from '../../Assets/img/nutrialuslogo.png'


const NavBar = () => {
    return (

        <div>
            <ul className="nav">
                <li className="nav-item">
                    <div className='nutribox'>
                        <img className='nutrilogo' src={nutri} />
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i class="bi bi-person-fill"></i>  Pacientes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i class="bi bi-journals"></i>  Agenda</a>
                </li>
            </ul>

        </div>


    );
};
export default NavBar;