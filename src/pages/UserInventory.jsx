// import CopingSkills from "./CopingSkills";

import ReusableItem from "../components/ReusableItem";

export default function UserInventory({favoriteTool}){
    return(
        <div>
            {favoriteTool.map((cskill) => (
                <ReusableItem key={cskill.id} cskill={cskill} />
            ))}
        </div>
    )
}

/*
STATUS: FORM CURRENTLY ACCEPTS AND STORES DATA IN STATE; COPING SKILLS ADDED ALSO STORED IN STATE

TODO: CustomToolForm allows users to edit their custom coping skill (edit button)
TODO: UserInventory allows users to delete DEFAULT STATIC coping skills (delete button)
TODO: UserInventory allows users to delete CUSTOM COPING SKILLS (delete button #2)
TODO: Simulate storing data in an API using localStorage hook to achieve above
*/