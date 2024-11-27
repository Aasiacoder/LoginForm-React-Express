import { useState } from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom"


function Login() {

  const navigate =useNavigate()

  const [user, setuser] = useState("")
  const [pass, setpass] = useState("")
  //console.log(user)
  //console.log(pass)
  
  function handleuser(e) {
    setuser(e.target.value)
  }

  function handlepass(e) {
    setpass(e.target.value)
  }

  function handlecheck() {
    
    //let loginDetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`)
    let loginDetails = axios.post("http://localhost:5000/login",{"username":user, "password":pass})

    loginDetails.then(function(data){
      //console.log(data);
      if(data.data === true)
      {
        navigate("/success")
      }
      else{
        navigate("/fail")
      }
    })
  }

  return (
    <>
    <div id="container" className="gap-2 mt-40">
      <input onChange={handleuser} name="username" type="text" placeholder="username" className="border border-black rounded-xl p-1"/>
      <input onChange={handlepass} name="password" type="number" placeholder="password" className="border border-black rounded-xl p-1"/>
      <button onClick={handlecheck} className="border border-black rounded-xl p-1 bg-black text-white">Login</button>
      </div>
      <div id="user-Container" className="tex gap-2 m-10">
        <p>User Name: Aasia</p>
        <p>Password: 123</p>
      </div>
      </>
  );
}

export default Login;
