import ReusableItem from "../components/ReusableItem";
import ReusableButton from '../components/ReusableButton'

export default function UserLibrary({favoriteTool, handleOnDelete, handleNavEdit}){
    
    return(
        <div>
            <h1 className="header-title">User Library</h1>
            <h2 className="subtitle">Skills you add will appear here!</h2>
            <section>
                <ul>
                    {favoriteTool.map((cskill) => (
                        <div key={cskill.name}>
                            <ReusableItem cskill={cskill} />
                            <div className="button" style={{display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '5px', marginBottom: '10px', gap: '5px'}}>
                                 <ReusableButton onClick={() => handleNavEdit(cskill.id)} text={"Edit"}  style={{marginTop: "10px", width: "50px", height: "20px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}} />
                                <ReusableButton onClick={() => handleOnDelete(cskill.name)} text={"Delete"} style={{marginTop: "10px", width: "50px", height: "20px", textAlign: "center", alignContent: "center", justifyContent: "center", borderRadius: "8px", border: "none"}} />
                            </div>
                        </div>
                    ))}
                </ul>
            </section>
        </div>
        
    )
}

/*
NOTE: user favorited tools are stored in memory --> use persistent state/local storage to keep on UserInventory --> DELETE a favorite tool from memory w/out re-rendering UserInventory each time and having users re-add their skills upon every refresh
*/