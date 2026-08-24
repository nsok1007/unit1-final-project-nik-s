import {useNavigate, Link} from 'react-router';
import ReusableButton from '../components/ReusableButton';
import ReusableItem from '../components/ReusableItem';
import mockData from '../features/coping-tools/mockData.json'

export default function CopingSkills({favoriteTool, handleFavoriteToolOnClick}){ 
    const toCustomToolForm = useNavigate();
    const handlePageRedirect = () => {
    toCustomToolForm('/features/coping-tools/customtoolform');
    };

    return(
   <div>
        <h1>Coping Skill</h1>
        <ul>
            {mockData.map((cskill) => (
                    <li key={cskill.id}>
                        <Link to={`/copingskills/${cskill.id}`}>
                        {cskill.name}
                        </Link>
                        <ReusableButton onClick={() => handleFavoriteToolOnClick(cskill)} text={"Add +"} />
                    </li>
                ))}
                <ReusableButton onClick={handlePageRedirect} text={"New Tool +"} />
       </ul>
       <ul>
                {favoriteTool.map((cskill) => (
                <ReusableItem key={cskill.id} cskill={cskill} />
                ))}
       </ul>
   </div>
   )   
}