import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { USERS } from '../mockup/user'

function Login () {
    const { value: username, onChange } = useFormInput('');
    const { value: password, onChange: onChangePassword } = useFormInput('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/dashboard";

    const HandleLogin = (e) => {
        
        const isExist = USERS.find(user => user.name === username && user.pass === password)
        if (isExist) {
            localStorage.setItem('tokenAuth', 'Acess')
            navigate(from, { replace: true })
        } else {
            setError("Something went wrong. Please try again later.");
        }
    }

    return (
        <div>
            <h2>Welcome to Shop!</h2>
            <form>
                Username <br />
                <input type="text" value={username} onChange={onChange} />
            </form>
            <form>
                Password <br />
                <input type="password" value={password} onChange={onChangePassword} />
            </form><br />
            {error && <><small style={{ color: 'red', fontSize: '16px' }}>{error}</small><br /></>}<br />
            <button value="login" onClick={HandleLogin}>Login</button>
            
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
   
    const handleChange = e => {
      setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange
    }
}

export default Login;