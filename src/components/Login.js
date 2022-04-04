import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';


const Login = () => {

    // 3 creating state
    const [ userName, setUserName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 2 creating function for submit
    const submit = e => {
        e.preventDefault();
        console.log(userName);
        dispatch({ 
            type: 'GET_USERNAME', 
            payload: userName 
        });
        setUserName('');
        navigate('/pokedex')
    }

    // 1 Creating form 
    return (
        <div className='login-container'>
            <form action="" onSubmit={submit}>
                <p>Please Type your name: </p> 
                <input 

                    type="text" 
                    value={userName} 
                    onChange={ e => 
                    setUserName(e.target.value)}/>

                <button>Submit</button>

            </form>
            
        </div>
    );
};

export default Login;