import ReusableItem from "../components/ReusableItem";
import ReusableButton from '../components/ReusableButton'

export default function UserLibrary({favoriteTool, handleOnDelete}){
    return(
        <ul>
            {favoriteTool.map((cskill) => (
                        <div key={cskill.name}>
                            <ReusableItem cskill={cskill} />
                            <ReusableButton onClick={() => handleOnDelete(cskill.name)} text={"Delete"} />
                        </div>
             ))}
        </ul>
    ) //user favorited tools are stored in memory --> use persistent state/local storage to keep on UserInventory --> DELETE a favorite tool from memory w/out re-rendering UserInventory each time and having users re-add their skills upon every refresh
}

/*
TODO: CustomToolForm allows users to edit their custom coping skill (edit button)
TODO: Simulate storing data in an API using localStorage hook to achieve above
TODO: UserLibrary allows users to view their DESCRIPTIONS FROM CUSTOMTOOLFORM

TODO: BONUS -- GET FAVORITE SKILLS TO BE HIDDEN ON COPING SKILLS PAGE SO IT ONLY VISUALLY RENDERS ON USERINVENTORY FROM THE USER PERSPECTIVE


Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received (UserLibrary ln1)
*/