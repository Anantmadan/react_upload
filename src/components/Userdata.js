import React, { useState } from 'react'
import Navbar from "./Navbar";
import styles from './Userdata.module.css';

function Userdata () {
    const [name, setName] = useState("")
    const [marks1, setMarks1] = useState("")
    const [marks2, setMarks2] = useState("")
    const [halfearly, setHalfearly] = useState("")
    const [final, setFinal] = useState("")
function saveUser()
{
console.warn({name,marks1,marks2,halfearly,final});
console.log("log: "+{name,marks1,marks2,halfearly,final});
let data = {name,marks1,marks2,halfearly,final}

fetch("http://localhost:5000/mark",{
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
    return(
        <>
        <Navbar />
        <div>
         <h3 className={styles.title}> Please enter the marks of students of all exams in yearly </h3>
         <div className="text">

         <label for="cars">Please select the field : </label>
  <select name="cars">
    <option value="volvo">ME1</option>
    <option value="saab">ME2</option>
    <option value="opel">Halfearly</option>
    <option value="audi">Final</option>
  </select><br></br><br></br>

       <label>Student Name </label> <br></br>
       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br></br>
       <label className="aa">Total marks in ME1 </label> <br></br>
       <input type="text" value={marks1} onChange={(e)=>{setMarks1(e.target.value)}} name="marks1"/><br></br>
       <label className="aa">Total marks in ME2 </label> <br></br>
       <input type="string" value={marks2} onChange={(e)=>{setMarks2(e.target.value)}} name="marks2"/><br></br>
       <label className="aa">Total marks in halfearly </label> <br></br>
       <input type="string" value={halfearly} onChange={(e)=>{setHalfearly(e.target.value)}} name="halfearly"/><br></br>
       <label className="aa">Total marks in final </label> <br></br>
       <input type="string" value={final} onChange={(e)=>{setFinal(e.target.value)}} name="final"/><br></br><br></br>

  <br></br><br></br>
       <button type="button" className="btn btn-success" onClick={saveUser} > Save </button>
   </div>
        </div>
        </>
    )
}

export default Userdata;