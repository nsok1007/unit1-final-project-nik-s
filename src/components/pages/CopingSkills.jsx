import {useState} from 'react';
import {useNavigate, Link} from 'react-router';
import ReusableButton from '../../components/layout-assets/ReusableButton';
import ReusableItem from '../../components/pages/features/coping-tools/ReusableItem';
import mockData from './features/coping-tools/mockData.json';
import './pages.css'

export default function CopingSkills({favoriteTool, handleFavoriteToolOnClick}){ 
    const [elementVisible] = useState(true) //set state for conditional rendering to HIDE new/added skills from showing on CopingSkills

    const toCustomToolForm = useNavigate();
    const handlePageRedirect = () => {
    toCustomToolForm('/features/coping-tools/customtoolform');
    };

    return(
   <div>
        <h1 className="header-title">Coping Skill</h1>
        <h2 className="subtitle">Browse skills, create your own, and add them to your user library!</h2>
        <br></br>
        <ul>
            {mockData.map((cskill) => ( //.map() iterates over mockData and renders the destructured prop 'name' from cskill
                    <li key={cskill.id}>
                        <Link to={`/copingskills/${cskill.id}`}>
                        {cskill.name}
                        </Link>
                        <div className="button">
                            <ReusableButton onClick={() => handleFavoriteToolOnClick(cskill)} text={"Add +"} style={{marginLeft: '10px', width: '50px', height: '20px', textAlign: 'center', justifyContent: 'center', borderRadius: '8px', border: 'none'}} />
                        </div>
                    </li>
                ))}
                <br></br>
                <div className="button" style={{textAlign: 'center', marginTop: '20px'}}>
                    <ReusableButton onClick={handlePageRedirect} text={"New Tool +"} style={{width: '95px', height: '35px', textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', border: 'none'}}/>
                </div>
                <br></br>
       </ul>
       <div>
           {!elementVisible && 
                <ul >
                    {favoriteTool.map((cskill) => (
                    <ReusableItem key={cskill.id} cskill={cskill} />
                    ))}
                </ul>
            }
        </div>
   </div>
   )   
}