import {useNavigate, Routes, Route, Link} from 'react-router';
import {useState} from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CopingSkills from '../pages/CopingSkills';
import UserLibrary from '../pages/UserLibrary';
import CopingSkillsDetails from '../pages/CopingSkillDetails';
import CustomToolForm from '../features/coping-tools/CustomToolForm';
import EditCustomToolForm from '../features/coping-tools/EditCustomToolForm';

export default function Header() { 
    const [favoriteTool, setFavoriteTool] = useState([]);  //setting state for CopingSkills

    const handleFavoriteToolOnClick = (cskill) => { //appends added cskill to the new array of favoriteTool
        setFavoriteTool([
            ...favoriteTool, cskill
        ]);
    }

    const navigate = useNavigate(); //redirect users from page A to 'URL'
        const handleNavBack = () => {
        navigate('../copingskills');
        };
    
        const handleNavEdit = (cskillId) => { 
        navigate(`/features/coping-skills/editcustomtoolform/${cskillId}`);
        };

    const handleOnDelete = (name) => { //.filter() iterates & updates favoriteTool based on if the item still matches a known name within that array --> if not deletes the skill
        const revisedUserLib = favoriteTool.filter((cskill) => cskill.name !== name);
        setFavoriteTool(revisedUserLib);
        console.log(name);
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
                        handleFavoriteToolOnClick={handleFavoriteToolOnClick} //passing functions and variables as props to child
                        handleNavBack={handleNavBack}
                        favoriteTool={favoriteTool} />
                    }
                />
                <Route path="/copingskills/:cskillId" element={
                    <CopingSkillsDetails 
                        favoriteTool={favoriteTool}
                        handleNavBack={handleNavEdit} />
                    } 
                />
                <Route path="/features/coping-tools/customtoolform" element={
                    <CustomToolForm 
                        favoriteTool={favoriteTool} 
                        setFavoriteTool={setFavoriteTool} />
                    }
                />
                <Route path="/features/coping-skills/editcustomtoolform/:cskillId" element={
                    <EditCustomToolForm
                        favoriteTool={favoriteTool}
                        setFavoriteTool={setFavoriteTool}
                        handleNavBack={handleNavBack} 
                        handleNavEdit={handleNavEdit} />
                    }
                />
                <Route path="/userlibrary" element={
                    <UserLibrary
                        favoriteTool={favoriteTool}
                        handleOnDelete={handleOnDelete} //nameOfProperty={nameOfProperty}
                        handleNavEdit={handleNavEdit}
                        setFavoriteTool={setFavoriteTool} />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};
