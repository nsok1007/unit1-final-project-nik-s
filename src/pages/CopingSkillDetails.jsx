import {useParams, useNavigate} from 'react-router';
import mockData from '../features/coping-tools/mockData.json';
import ReusableButton from '../components/ReusableButton'
import ErrorMessage from '../components/ErrorMessage';

export default function CopingSkillsDetails(){  
   const{cskillId} = useParams(); 
   const cskill = mockData.find((cskill) => cskill.id === cskillId); 
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
                <h1>{cskill.name}</h1>
                <p className="detail-description"><strong>Description:</strong> {cskill.description}</p>

                <ReusableButton onClick={handleNavBack} text={"Back"} />
            </div>
   )};
};

