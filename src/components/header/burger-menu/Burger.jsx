import {useState} from 'react';
import {Link} from 'react-router';
import ReusableButton from '../../ReusableButton.jsx'
import './burger.css'

export default function BurgerMenu(){

    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const handleClick = () => {
    setHamburgerMenu(!hamburgerMenu);
    };

    return(
        <div className="menu-container">
            <div className="menu-button">
                <ReusableButton onClick={handleClick} text={"☰"} style={{fontSize: "xx-large"}} />
            </div>
            <ul className="menu-links" style={{display: hamburgerMenu ? 'block' : 'none'}} >
                <li><Link to="./copingskills">Coping Skills</Link></li>
                <li><Link to="./userlibrary">User Library</Link></li>
                <li><Link to="./about">About</Link></li>
                <li><Link to="./contact">Contact</Link></li>
            </ul>
        </div>
    )
}



