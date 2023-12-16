import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../UserContext'


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    function onChangeUsenameHandler (e)
    {
        setUsername(e.target.value);
    }

    function onChangePasswordHandler(e)
    {
        setPassword(e.target.value);
    }

    function handleSummit(e)
    {
        e.preventDefault();
        if((username != null) && (username != "") && (password != null) && (password != "")){
           setUser({username,password});
        }
    }

  return (
    <div>
        
        <input type="text" placeholder='username' value={username} onChange={onChangeUsenameHandler}/>
        <input type="password" placeholder='password' value={password} onChange={onChangePasswordHandler}/>
        <button type="submit" onClick={handleSummit} >Submit</button>
    </div>

  )
}

export default Login
