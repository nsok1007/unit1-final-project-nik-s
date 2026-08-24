import {useState} from 'react';
import {useNavigate, Link} from 'react-router';
import ReusableButton from '../components/ReusableButton';
import mockData from '../features/coping-tools/mockData.json'

export default function UserInventory(){ 
    const [favoriteTool, setFavoriteTool] = useState([]);
    
    const handleFavoriteToolOnClick = (cskill) => {
        setFavoriteTool([
            ...favoriteTool, cskill
        ]);
    }

    const toCustomToolForm = useNavigate();
    const handlePageRedirect = () => {
    toCustomToolForm('/features/coping-tools/customtoolform');
    };

    return(
   <div>
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

