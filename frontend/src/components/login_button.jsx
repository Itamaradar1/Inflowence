import { baseurl } from '../store/baseurl';
import { fetchAndDispatchToken, forceFetchAndDispatchToken } from '../store/actions/registration_validation';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const LoginButton = () => {

    const email = 'elonmusk@email.com';
    const password = 'adminadmin';
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickHandler = () => {
        forceFetchAndDispatchToken(email, password, navigate);
    }

    return(
        <button onClick={clickHandler} className="btn btn-primary mt-4">force login</button>
    )
}

export default LoginButton;