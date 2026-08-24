import {Link} from 'react-router';
// import CopingSkills from '../pages/CopingSkills';

export default function ReusableItem({cskill}){ 
    return (
        <li key={cskill.id}>
            <Link to={`/copingskills/${cskill.id}`}>
            {cskill.name}
            </Link>
        </li>
    )
};