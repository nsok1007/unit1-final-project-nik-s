import {useState} from 'react';
import {useParams, useNavigate} from 'react-router';
import mockData from '../pages/features/coping-tools/mockData.json';
import ReusableButton from '../components/ReusableButton'
import ErrorMessage from '../components/ErrorMessage';
import './pages.css'

export default function CopingSkillsDetails({favoriteTool, editedSkill, handleNavEdit}){  
    const [displayButton] = useState(true);
    const{cskillId} = useParams(); 
    const userFavoritesAll = mockData.concat(favoriteTool) //joins mockData w/ user-generated array 'favoriteTool'
    const cskill = userFavoritesAll.find((cskill) => cskill.id === cskillId);  //Inside mockData, find the object and see if the property is equal to the URL parameter

    const toCopingSkills = useNavigate();
    const handleNavBack = () => {
    toCopingSkills('../copingskills');
    };

    if (!cskill) {
        return (
            <ErrorMessage>
                <p> Task not available.</p>
            </ErrorMessage>
        );
    } else {
            return(
                <div>
                    <h1 className="header-title">Coping Skill Details</h1>
                    <p className="detail-name"><strong>Name:</strong> {cskill.name}</p>
                    <p className="detail-description"><strong>Description:</strong> {cskill.description}</p> <br></br>
                    <div className="button">
                         <ReusableButton onClick={handleNavBack} text={"Back"} style={{marginTop: "10px", marginLeft: "50px", width: "70px", height: "25px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}} />
                    </div>
                    <div>
                        {!displayButton && editedSkill.id == [mockData.id]}
                        <ReusableButton onClick={handleNavEdit} text={"Edit"} style={{marginTop: "10px", marginLeft: "50px", width: "70px", height: "25px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}} />
                        
                    </div>  
                </div>
        )  
        }
    }

