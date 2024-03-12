

import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
    const [user, setUser] = useState("")
    const [userErr, setUserErr] = useState("")
    const [pass, setPass] = useState("")
    const [passErr, setPassErr] = useState("")

  return (
    <form action="#" onSubmit={() => {
        console.log('submit');
        if (user.length > 10 || user.length < 3) {
            setUserErr("please add more value for username")
            // return false
        } else {
            setUserErr("")
        }
        if (pass.length > 10 || pass.length < 3) {
            setPassErr("please add more value for password")
            // return false
        } else {
            setPassErr("")
        }
        if (!userErr && !passErr) {
            setData({username: user, password: pass })
            console.log({username: user, password: pass });
            
        } else {
            console.log('error');
            return false
        }
    }}>
        <label>
            username:
            <input value={user} onChange={(e) => {
                setUser(e.target.value)
            }} />
        </label>
        {userErr && (
            <div style={{color: 'red'}} >{userErr}</div>
        )}

        <label>
            password:
            <input value={pass} onChange={(e) => {
                setPass(e.target.value)
            }}  />
        </label>
        {passErr && (
            <div style={{color: 'red'}} >{passErr}</div>
        )}
        <br/>
        <button >submit</button>
    </form>
  );
};

export default Login;
