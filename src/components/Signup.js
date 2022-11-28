import React, { useState } from "react";
import './formm.css';
import Navbar from "./Navbar";


function Signup()

{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
function saveUser()
{
console.warn({name,email,mobile});
console.log("log: "+{name,email,mobile});
let data = {name,email,mobile}

fetch("http://localhost:5000/sign",{
    method:'POST',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
}).then((result)=>{
  console.warn("result",result);
  alert("Data Inserted")
})
}

// if (result.status === 400 || !result){
//     window.alert("Invalid");
// } else{
//     window.alert("Invalid");
// }

// function updateUser()
// {
//     console.warn(name,email,mobile)
// }

return(
    <>
      <Navbar />
        <h1 className="mm"> Signup Page </h1>      
    <div className="text">
       
        <label>Enter your name: </label> <br></br>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br></br>
        <label className="aa">Enter your email: </label> <br></br>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email"/><br></br>
        <label className="aa">Enter your mobile: </label> <br></br>
        <input type="string" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} name="mobile"/><br></br><br></br>
        <button type="button" className="btn btn-success" onClick={saveUser} > Save </button>
    </div>
    {/* <div>     
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br></br>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /> <br></br> 
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} /> <br></br>
                <button onClick={updateUser}> Update User </button>
        </div>   */}
    </>
);
}

export default Signup;