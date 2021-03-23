import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/auth'


const Register = (props: any) => {

    const dispatch = useDispatch();
    const registerState = useSelector((state: any) => state);
      
    const actionRegister = () => {
      const user = {email: '', password: '', name: ''};
      dispatch(register(user));
    }
    
    if (registerState?.message?.isLoggedIn) {
        props.history.push('/home');
        window.location.reload();
    }

    return (
        <div>
            <input type='text' placeholder='name' />
            <input type='text' placeholder='email' />
            <input type='text' placeholder='password' />
            <button onClick={actionRegister}>Register</button>
        </div>
    );  
}


export default Register;