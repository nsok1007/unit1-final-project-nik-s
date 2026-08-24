import ReusableItem from "../components/ReusableItem";
import ReusableButton from '../components/ReusableButton'

export default function UserLibrary({favoriteTool, handleOnDelete}){
    return(
        <div>
            <ul>
                {favoriteTool.map((cskill) => (
                <li>
                    <ReusableItem key={cskill.id} cskill={cskill} />
                    <ReusableButton handleDelete={() => handleOnDelete()} text="Delete" />
                </li>
                ))}
            </ul>
          
            {/* 
            <ReusableButton onClick={() => handleFavoriteToolOnClick(cskill)} text={"Add +"} />
            <ReusableButton onClick={() => handleFavoriteToolOnClick(cskill)} text={"Add +"} /> 
            */}
        </div>
    ) //user favorited tools are stored in memory --> use persistent state/local storage to keep on UserInventory --> DELETE a favorite tool from memory w/out re-rendering UserInventory each time and having users re-add their skills upon every refresh
}

/*
STATUS: FORM CURRENTLY ACCEPTS AND STORES DATA IN STATE; COPING SKILLS ADDED ALSO STORED IN STATE

TODO: UserInventory allows users to delete DEFAULT STATIC coping skills (delete button)
TODO: UserInventory allows users to delete CUSTOM COPING SKILLS (delete button #2)
TODO: CustomToolForm allows users to edit their custom coping skill (edit button)
TODO: Simulate storing data in an API using localStorage hook to achieve above

TODO: BONUS -- GET FAVORITE SKILLS TO BE HIDDEN ON COPING SKILLS PAGE SO IT ONLY VISUALLY RENDERS ON USERINVENTORY FROM THE USER PERSPECTIVE
*/