import React, {useState} from 'react'

export default function Signup({onSignup}) {
    const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        const existingUser = localStorage.getItem("user");
        if(existingUser){
            alert("user exist already!, please login");
            return;
        }
        const user = {email, password};
        localStorage.setItem("user", JSON.stringify(user));
        alert("you have signup successfully!,  please login");
        onSignup();
    }
  return (
    <div>
        <h2>Signup</h2>
      <form onSubmit={handleOnSubmit}>
        <input  placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br /><br />
        <input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />  <br /><br />
        <button>Signup</button>
      </form>
    </div>
  )
}
