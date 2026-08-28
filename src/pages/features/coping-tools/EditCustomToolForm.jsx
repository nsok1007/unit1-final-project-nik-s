import {useState} from 'react';
import {useParams} from 'react-router';
import ReusableButton from '../../../components/ReusableButton'

export default function EditCustomToolForm({favoriteTool, setFavoriteTool, handleNavBack}){
     const{cskillId} = useParams(); 
     const toolToEdit = favoriteTool.find((cskill) => ( //.find() iterates through favoriteTool for the first match of a skill
        cskill.id === cskillId
     ))
     console.log(toolToEdit);


     const [editedSkill, setEditedSkill] = useState(toolToEdit) //set useState for editing skill

     const newList = [...favoriteTool] 
     const filteredList = newList.filter((cskill) => cskill.id != cskillId) //.filter() iterates through newList - a shallow copy of favoriteTool based on skills that match ids
     console.log(filteredList);
     

    const handleEditForm = (e) => { 
        const{name, value} = e.target;
        setEditedSkill((editedSkill) => (
            {
                ...editedSkill, 
                [name]: value
            }
        ));   
    }

    const editTool = (e) => {
        e.preventDefault();
        setFavoriteTool(() => [
            ...filteredList, editedSkill
        ]);
    }
   
    return(
        <div>
            <form onSubmit={editTool}>
                <label>
                    Coping Skill Name: 
                    <br></br>
                    <input
                        type="text"
                        name="name"
                        onChange={handleEditForm}
                        value={editedSkill.name} 
                    />
                </label>
                <br></br>
                <label>
                    Description:
                    <br></br>
                    <input
                        type="text"
                        name="description"
                        onChange={handleEditForm}
                        value={editedSkill.description}
                    />
                </label>
                <br></br>
            </form>
            <ReusableButton onClick={editTool} text={"Save Edit"} />
            <ReusableButton onClick={handleNavBack} text={"Cancel"} />
        </div>
    )
}