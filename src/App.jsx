import {useNavigate, Routes, Route} from 'react-router';
import {useState, useEffect} from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import CopingSkills from './components/pages/CopingSkills';
import UserLibrary from './components/pages/UserLibrary';
import CopingSkillsDetails from './components/pages/CopingSkillDetails';
import CustomToolForm from './components/pages/features/coping-tools/CustomToolForm';
import EditCustomToolForm from './components/pages/features/coping-tools/EditCustomToolForm';
import Header from './components/layout-assets/header/Header';
import Footer from './components/layout-assets/footer/Footer';
import Disclaimer from './components/layout-assets/Disclaimer';
import './App.css'
import './index.css'


export default function App(){ 
    const favoriteToolFromLS = JSON.parse(localStorage.getItem('favoriteTool'));
    const [favoriteTool, setFavoriteTool] = useState(favoriteToolFromLS ? favoriteToolFromLS : []);  //setting state for CopingSkills
    
    useEffect(() => {
        localStorage.setItem(`favoriteTool`, JSON.stringify(favoriteTool));
    }, [favoriteTool]);

    const handleFavoriteToolOnClick = (cskill) => { //appends added cskill to the new array of favoriteTool

        //for loop to scan existing list for duplicate id before saving
        for (const tool of favoriteTool) {
            if (tool.name == cskill.name && tool.id == cskill.id) {
                console.error(`Coping skill was already added.`);
                return 
            }
        }

        // Don't save if tool.name matches incoming cskill.name (likewise for id)
        setFavoriteTool([
            ...favoriteTool, cskill
        ]);
    }

    const navigate = useNavigate(); //redirect users from page A to 'URL'
        const handleNavBack = () => {
        navigate('../userlibrary');
        };
    
        const handleNavHome = () => {
        navigate('../home');
        }
    
        const handleNavEdit = (cskillId) => { 
        navigate(`/features/coping-skills/editcustomtoolform/${cskillId}`);
        };

    //.filter() iterates & updates favoriteTool based on if the item still matches a known name within that array
    // if no match is found --> delete the skill
    const handleOnDelete = (name) => {
        const revisedUserLib = favoriteTool.filter((cskill) => cskill.name !== name);
        setFavoriteTool(revisedUserLib);
        };

    return(
        <div className="container-wrapper">
            <Header />
            <div className="main-content">
           <Routes>
                <Route path="/" element={<Home />} /> {/*Default path is set to home */}
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
                        setFavoriteTool={setFavoriteTool} 
                        handleNavHome={handleNavHome}/>
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
            <br></br>
            <Disclaimer />
            </div>
            <Footer />
            </div>
    );
};
