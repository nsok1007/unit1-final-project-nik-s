import {useState} from 'react';
import ReusableButton from '../../../components/ReusableButton';
import mockData from './mockData.json'

export default function CustomToolForm({favoriteTool, setFavoriteTool, handleNavBack}){ //single state object
    const [customTool, setCustomTool] = useState({
        name: "",
        description: "",
        id: (mockData.length + favoriteTool.length + 10).toString(), //declared id property for form to use so user-created tools have a generated id to allow rendering using Route
    });

    const handleCustomToolChange = (e) => { //destructure name and value from the event
        const{name, value} = e.target;
        setCustomTool((prevData) => ({
            ...prevData,
            [name]: value, //Update only the field that matches the input's name
        }));
    };

    const createTool = (e) => { 
        e.preventDefault();
        setFavoriteTool((favoriteTool) => [ //creates a new coping skill and appends it to the array favoriteTool
        ...favoriteTool, customTool
        ]);
    }

    return(
        <div className="custom-tool-form">
            <form onSubmit={createTool}>
                <h2>Create Your Own Coping Tool</h2>
                <label>
                    Name your tool: 
                    <br></br>
                    <input
                        type="text" 
                        name="name"
                        value={customTool.name}
                        onChange={handleCustomToolChange} //onChange event updates the component's state based on user input
                        placeholder="Self Soothe w/ Five Senses"
                        required
                    />
                </label>
                <br></br>
                <label>
                    Describe how you would use this:
                    <br></br>
                    <textarea
                        name="description"
                        value={customTool.description}
                        onChange={handleCustomToolChange}
                        placeholder="Vision: Look at the flowers outside. Hearing: Listen to calming music. Smell: Put lavander oil in the diffuser. Taste: Have a small piece of candy and savor the flavor and texture. Touch: Hold my favorite plushie in my hands and notice how it feels."
                        required
                    />      
                </label>
                <br></br>
                 <div className="button">
                    <ReusableButton  onClick={handleCustomToolChange} text={"Create"} style={{marginTop: "10px", width: "100px", height: "25px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}}/>
                </div>
                <div className="button">
                    <ReusableButton onClick={handleNavBack} text={"Back"} style={{marginTop: "10px", width: "100px", height: "25px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}}/>
                </div>
            </form>    
        </div> 
    );
};