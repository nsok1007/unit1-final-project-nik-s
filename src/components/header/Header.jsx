import {NavLink} from 'react-router';
import '../header/header.css'

export default function Header() { 
    return(
        <div className="header">
            <nav className="nav-bar">
                    <NavLink to="./home"><h1 className="site-name">MoonLit</h1></NavLink>
                    <NavLink to="./copingskills">Coping Skills</NavLink>
                    <NavLink to="./about">About</NavLink>
                    <NavLink to="./contact">Contact</NavLink>
                <div className="nav-right">
                    <NavLink to="./userlibrary">User Library</NavLink>
                </div>
            </nav>
        </div>
    );
};
