import {useState} from 'react';
import ReusableButton from '../../components/ReusableButton';

export default function CustomToolForm(){
    const [customTool, setCustomTool] = useState({
        title: "",
        description: "",
    });

    const handleCustomToolChange = (e) => {
        const{name, value} = e.target;
        setCustomTool((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
         e.preventDefault();
    }
    function createTool(){
        return <button type="submit"></button>
        //message to validate it was successfully submitted?
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Create Your Own Coping Tool</h2>
                <label>
                    Name your tool: 
                    <br></br>
                    <input
                        type="text"
                        name="title"
                        value={customTool.title}
                        onChange={handleCustomToolChange}
                        placeholder="Self Soothe w/ Five Senses"
                    />
                </label>
                <br></br>
                <label>
                    Describe how you would use this:
                    <br></br>
                    <input
                        type="text"
                        name="description"
                        value={customTool.description}
                        onChange={handleCustomToolChange}
                        placeholder="Vision: Look at the flowers outside. Hearing: Listen to calming music. Smell: Put lavander oil in the diffuser. Taste: Have a small piece of candy and savor the flavor and texture. Touch: Hold my favorite plushie in my hands and notice how it feels."
                    />      
                </label>
                <br></br>
                <ReusableButton onClick={createTool} text={"Create"} />
            </form>    
        </div> 
    );
};