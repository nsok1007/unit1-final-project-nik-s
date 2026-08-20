import {Routes, Route, Link} from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CopingSkills from '../features/coping-tools/CopingSkills';
import CopingSkillsDetails from '../features/coping-tools/CopingSkillDetails';

export default function Header() {
    return(
        <div className="header"> 
          <h1>MoonLit</h1> {/*Figure out how to get h1 and nav elements on SAME line visually*/ }
            <nav>
                <Link to="./home">Home</Link> <Link to="./copingskills">Coping Skills</Link> <Link to="./about">About</Link> <Link to="./contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/copingskills" element={<CopingSkills />} />
                <Route path="/copingskills/:cskillId" element={<CopingSkillsDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};
