import {Routes, Route, Link} from 'react-router';
import {useState} from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CopingSkills from '../pages/CopingSkills';
import CopingSkillsDetails from '../pages/CopingSkillDetails';
import CustomToolForm from '../features/coping-tools/CustomToolForm';
import UserLibrary from '../pages/UserLibrary';

export default function Header() {
    const [favoriteTool, setFavoriteTool] = useState([]);

    const handleFavoriteToolOnClick = (cskill) => {
        setFavoriteTool([
            ...favoriteTool, cskill
        ]);
    }
    const HandleOnDelete = (id) => {
        console.log(id);
        };
        

    return(
        <div className="header"> 
          <h1>MoonLit</h1> {/*Figure out how to get h1 and nav elements on SAME line visually*/ }
            <nav>
                <Link to="./home">Home</Link> <Link to="./copingskills">Coping Skills</Link> <Link to="./userlibrary">User Library</Link><Link to="./about">About</Link> <Link to="./contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} /> {/*Default path which is currently set to home */}
                <Route path="/home" element={<Home />} />
                <Route path="/copingskills" element={
                    <CopingSkills 
                        handleFavoriteToolOnClick={handleFavoriteToolOnClick}
                        favoriteTool={favoriteTool} />
                    }
                />
                <Route path="/copingskills/:cskillId" element={<CopingSkillsDetails />} />
                <Route path="/features/coping-tools/customtoolform" element={
                    <CustomToolForm 
                        favoriteTool={favoriteTool} 
                        setFavoriteTool={setFavoriteTool} />
                    }
                />
                <Route path="/userlibrary" element={
                    <UserLibrary
                        favoriteTool={favoriteTool}
                        onDelete={HandleOnDelete}/>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};
