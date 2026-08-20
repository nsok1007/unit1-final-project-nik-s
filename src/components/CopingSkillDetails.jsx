import {useParams} from 'react-router';
import mockData from '../mockData';
import ErrorMessage from './ErrorMessage';

export default function CopingSkillsDetails(){  
   const{cskillId} = useParams(); 
   const cskill = mockData.find((cskill) => cskill.id === cskillId); 
   //Inside mockData, find the object and see if the property is equal to the URL parameter

   if (!cskill) {
    return (
        <ErrorMessage>
            <p> Task not available.</p>
        </ErrorMessage>
    );
   } else {
        return(
            <div>
                <p className="detail-description">description: {cskill.description}</p>
            </div>
   )};
}

/*
Syntax: arrayName.find((currentObjectName) => currentObjectName.key === valueToFind)
        mockData.find((task) => task.id === taskId)

        mockData = array
        task = current object being examined (named it 'task' for this action)
        task.id = property I'm checking for
        
        useParams() takes the URL dynamic parameter (:taskId below) and names the parameter 'taskId'

        <Route path="/task/:taskId" element={<TaskList />} />
 */