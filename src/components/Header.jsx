import {Routes, Route, Link} from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CopingSkills from '../pages/CopingSkills';
import CopingSkillsDetails from '../pages/CopingSkillDetails';
import CustomToolForm from '../features/coping-tools/CustomToolForm';
import UserInventory from '../pages/UserInventory';

export default function Header() {
    return(
        <div className="header"> 
          <h1>MoonLit</h1> {/*Figure out how to get h1 and nav elements on SAME line visually*/ }
            <nav>
                <Link to="./home">Home</Link> <Link to="./copingskills">Coping Skills</Link> <Link to="./userinventory">My Library</Link> <Link to="./about">About</Link> <Link to="./contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} /> {/*Default path which is currently set to home */}
                <Route path="/home" element={<Home />} />
                <Route path="/copingskills" element={<CopingSkills />} />
                <Route path="/copingskills/:cskillId" element={<CopingSkillsDetails />} />
                <Route path="/features/coping-tools/customtoolform" element={<CustomToolForm />} />
                <Route path= "/UserInventory" element={<UserInventory />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                
            </Routes>
        </div>
    );
};
