import {useState} from 'react';
import {useParams} from 'react-router';
import ReusableButton from '../../../components/ReusableButton';


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
        <div className="edit-custom-form">
            <form onSubmit={editTool}>
                <h2>Edit {editedSkill.name}</h2>
                <label className="edit-label">
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
                <label className="edit-label">
                    Description:
                    <br></br>
                    <textarea
                        name="description"
                        onChange={handleEditForm}
                        value={editedSkill.description}
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