import ReusableItem from "../components/ReusableItem";
import ReusableButton from '../components/ReusableButton'

export default function UserLibrary({favoriteTool, handleOnDelete, handleNavEdit}){
    
    return(
        <div>
            <section>
                <ul>
                    {favoriteTool.map((cskill) => (
                        <div key={cskill.name}>
                            <ReusableItem cskill={cskill} />
                            <ReusableButton onClick={() => handleOnDelete(cskill.name)} text={"Delete"} />
                            <ReusableButton onClick={() => handleNavEdit(cskill.id)} text={"Edit"} />
                        </div>
                    ))}
                </ul>
            </section>
                
            <section>
            
            </section>
        </div>
        
    )
}

/*

ERROR: Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received (UserLibrary ln1)

NOTE: user favorited tools are stored in memory --> use persistent state/local storage to keep on UserInventory --> DELETE a favorite tool from memory w/out re-rendering UserInventory each time and having users re-add their skills upon every refresh
*/