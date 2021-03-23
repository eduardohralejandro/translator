import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../redux/actions/auth'


const Login = (props: any) => {
    const dispatch = useDispatch();
    const loginState = useSelector((state: any) => state);
      
    const actionLogin = () => {
      const user = {email: '', password: ''};
      dispatch(login(user));
    }
    
    if (loginState?.message?.isLoggedIn) {
        props.history.push('/home')
        window.location.reload();
    }
    
    return (
        <div>
            <input type='text' placeholder='email' />
            <input type='text' placeholder='password' />
            <button onClick={() => actionLogin()}>login</button>
        </div>
    );  
}


export default Login;