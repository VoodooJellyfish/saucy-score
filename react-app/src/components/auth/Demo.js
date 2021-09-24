import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
// import ButtonStyle from '../Button/ButtonStyle';

const DemoButton = () => {
    const dispatch = useDispatch();
    useSelector(state => state.session.user)

    let email = 'demo@aa.io'
    let password = 'password'
    let demoLogin = () => { return dispatch(login(email, password)) }

    return (
        <button onClick={demoLogin} id="demo-button">Demo</button >
    )
}

export default DemoButton;