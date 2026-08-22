import {Link} from 'react-router';
import UserCopingSkills from '../features/coping-tools/UserCopingSkills';
import mockData from '../features/coping-tools/mockData'

export default function CopingSkills(){ 
    return(
        <div>
            <ul>
                {mockData.map((cskill) => (
                    <li key={cskill.id}>
                        <Link to={`/copingskills/${cskill.id}`}>
                        {cskill.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <UserCopingSkills />
            
        </div>
    )
}