import {useNavigate} from 'react-router';
import ReusableButton from '../../components/ReusableButton';

export default function UserCopingSkills() {
        const toCustomToolForm = useNavigate();

        const handlePageRedirect = () => {
            toCustomToolForm('/features/coping-tools/customtoolform');
        };

    return(
        <div>
            <ReusableButton onClick={handlePageRedirect} text={"New Tool +"}/>
        </div>
    );
};
