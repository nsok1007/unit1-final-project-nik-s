import {useParams, useNavigate} from 'react-router';
import mockData from '../features/coping-tools/mockData.json';
import ReusableButton from '../components/ReusableButton'
import ErrorMessage from '../components/ErrorMessage';

export default function CopingSkillsDetails({favoriteTool}){  
   const{cskillId} = useParams(); 
   const userFavoritesAll = mockData.concat(favoriteTool)
   console.log(userFavoritesAll);
   const cskill = userFavoritesAll.find((cskill) => cskill.id === cskillId); 
    // const cskill = mockData.find((cskill) => cskill.id === cskillId); 
   //Inside mockData, find the object and see if the property is equal to the URL parameter

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
                <h1>Coping Skill Details</h1>
                <p className="detail-name"><strong>Name:</strong> {cskill.name}</p>
                <p className="detail-description"><strong>Description:</strong> {cskill.description}</p> <br></br>
                <ReusableButton onClick={handleNavBack} text={"Back"} />
            </div>
   )};
};

