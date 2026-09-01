import {useState} from 'react';
import {useParams} from 'react-router';
import ReusableButton from '../../../layout-assets/ReusableButton';


export default function EditCustomToolForm({favoriteTool, setFavoriteTool, handleNavBack}){
    const{cskillId} = useParams(); 
    //.find() iterates through favoriteTool for the first match of a skill
    const toolToEdit = favoriteTool.find((cskill) => (
        cskill.id === cskillId
    ))

    const [editedSkill, setEditedSkill] = useState(toolToEdit) //set useState for editing skill
        
    // newList and favoriteTool point to same objects in list as references
    const newList = [...favoriteTool] 
    
    //.filter() iterates through newList - a shallow copy of favoriteTool based on skills that match ids
    const filteredList = newList.filter((cskill) => cskill.id != cskillId) 
     
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
        //if/else statement to verify that the editedSkill input lengths are not empty before saving/submitting
        if (editedSkill.name.length > 1 && editedSkill.description.length > 1) {
            setFavoriteTool(() => [
                ...filteredList, editedSkill
            ]);
        } else console.error(`Invalid coping skill. Please provide a name and description.`);
    }
   
    return(
        <div className="edit-custom-form">
            <form onSubmit={editTool}>
                <h2>Edit {editedSkill.name}</h2>
                <label>
                    Coping Skill Name: 
                    <br></br>
                    <input
                        type="text"
                        name="name"
                        value={editedSkill.name} 
                        onChange={handleEditForm}
                    />
                </label>
                <br></br>
                <label>
                    Description:
                    <br></br>
                    <textarea
                        name="description"
                        value={editedSkill.description}
                        onChange={handleEditForm}
                    />
                    <div className="button">
                        <ReusableButton onClick={editTool} text={"Save"} style={{marginTop: "10px", width: "100px", height: "25px", textAlign: "center", alignContent: "left", justifyContent: "left", borderRadius: "8px", border: "none"}} /> 
                    </div> 
                    <div className="button">
                        <ReusableButton onClick={handleNavBack} text={"Cancel"} style={{marginTop: "10px", width: "100px", height: "25px", textAlign: "center", alignContent: "left", justifyContent: "left", borderRadius: "8px", border: "none"}} /> 
                    </div>
                </label>
            </form>
        </div>
    )
}