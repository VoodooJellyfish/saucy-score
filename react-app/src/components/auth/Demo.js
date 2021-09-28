import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import { useHistory } from 'react-router';
// import ButtonStyle from '../Button/ButtonStyle';

const DemoButton = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    useSelector(state => state.session.user)

    let email = 'demo@aa.io'
    let password = 'password'
    let demoLogin = () => { 
        dispatch(login(email, password)) 
        history.push('/users/1')

    }

    return (
        <button onClick={demoLogin} id="demo-button">Demo</button >
    )
}

export default DemoButton;