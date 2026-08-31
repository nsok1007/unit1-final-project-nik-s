import {NavLink} from 'react-router';
import Burger from '../header/burger-menu/Burger';
import '../header/header.css'

export default function Header() { 
    return(
        <div className="header">
            <nav className="nav-bar">
                <div className="nav-default">
                    <NavLink to="./home"><h1>MoonLit</h1></NavLink>
                </div>
                <div className="nav-burger">
                    <NavLink to="./copingskills">Coping Skills</NavLink>
                    <NavLink to="./about">About</NavLink>
                    <NavLink to="./contact">Contact</NavLink>
                    <NavLink to="./userlibrary">User Library</NavLink>
                </div>
                <div className="burger-section">
                    <Burger/>
                </div>
            </nav>
        </div>
    );
};
