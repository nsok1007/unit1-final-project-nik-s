import {Link} from 'react-router';
import mockData from './mockData';

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
            
        </div>
    )
}