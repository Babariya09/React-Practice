import React, { useState } from "react";

function Login() {
    
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [userPassword, setUserPassword] = useState(false);


    function loginHandel(e) {

        if (user.length < 3 || password.length < 3) {
            alert("type correct value");
        } else {
            alert("all good :)")
        }
        e.preventDefault();
    }

    let userHandler = (val) => {
        let item = val.target.value;
        if(item.length < 3) {
            setUserErr(true)
        } else {
            setUserErr(false)
        }
        console.log(val.target.value);
        setUser(item)
    }

    let PasswordHandler = (val) => {
        let item = val.target.value;
        if(item.length < 3) {
            setUserPassword(true)
        } else {
            setUserPassword(false)
        }
        console.log(val.target.value);
        setPassword(item)
    }

    return(
        <>
            <h1>Login Form With Validation</h1>
            <form onSubmit={loginHandel}>
            <input type="text" placeholder="Enter User Id" onChange={userHandler}/> { userErr ? <span>User Not Valid</span>:""}
            <br/><br/>
            <input type="password" placeholder="Enter User Password" onChange={PasswordHandler} /> { userPassword ? <span>User Not Valid</span>:""}
            <br/><br/>
            <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;