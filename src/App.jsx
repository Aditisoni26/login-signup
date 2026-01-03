import {useEffect, useState} from "react"
import Signup from "./Component/Signup"
import LoggedIn from "./Component/LoggedIn";
import Login from "./Component/Login";


function App() {
  const [userExit , setUserExist] = useState(false);
  const [loggedIn , setLoggedIn] = useState(false);

  useEffect(()=>{
    const user = localStorage.getItem("user");
    const isLoggedIn = localStorage.getItem("loggedIn");

    if(user)setUserExist(true);
    if(isLoggedIn === "true")setLoggedIn(true);
  },[]);

  if(loggedIn){
    return <LoggedIn onLogout={ ()=>{localStorage.removeItem("loggedIn"); setLoggedIn(false);}}/>
  }
  if(userExit){ return <Login  onLogin={()=>{ localStorage.setItem("loggedIn","true"); setLoggedIn(true)}}/>}

  return <Signup onSignup={()=> setUserExist(true)}/>
}

export default App
