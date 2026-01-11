import React, {useState} from 'react'

export default function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const handleOnSubmit = (e) =>{
        e.preventDefault();

        const saveUser = JSON.parse(localStorage.getItem("user"));
        if(!saveUser){
            alert("user does not exist!");
            return;
        }
        if(email == saveUser.email && password == saveUser.password){
            onLogin();
        }else{
            alert("Invalid credentials");
        }
    };
  return (
    <div>
        <h2 >Login</h2>
      <form onSubmit={handleOnSubmit}>
        <input  placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
        <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />  <br /><br />
        <button>Login here!</button>
      </form>
    </div>
  )
}
