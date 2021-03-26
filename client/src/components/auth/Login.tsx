import React, {ReactElement, FC} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import styles from './login.module.scss'


import {login} from '../../redux/actions/auth';
import {Store} from '../../redux/types/store';


const Login: FC<RouteComponentProps> = ({ history }): ReactElement  => {
    
    const dispatch = useDispatch();
    const loginState = useSelector((state: Store) => state);
      
    const actionLogin = () => {
      const user = {email: 'eduahern@gmail.com', password: '123456789'};
      dispatch(login(user));
    }
    console.log('LOGIN STATE', loginState)
    if (loginState?.auth?.isLoggedIn) {
        history.push('/home')
        window.location.reload();
    }
    
    return (
        <div>
            <h1 className={styles.h}>holsa</h1>
            <h1 className={styles.title}>hola</h1>
            <input type='text' placeholder='email' />
            <input type='text' placeholder='password' />
            <button onClick={() => actionLogin()}>login</button>
        </div>
    );  
}


export default Login;