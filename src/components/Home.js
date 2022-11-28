import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";


function Home () {
    const [emotion, setEmotion] = useState("happy");

    // useEffect(()=>{
    //      console.log(`Its ${emotion} right now`);
    // },[emotion]);

    const navigate = useNavigate();

    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/Userdata');
      };

    return (
        <>
             {/* <Navbar /> */}
        <section>
            
            <h1 className={styles.title}> Welcome </h1>
            <h3 className={styles.t1}> Weightage of Marks in terms wise </h3>
            <table className="table">
  <thead>
    <tr>
      <th scope="col">Term Exam</th>
      <th scope="col">Weightage</th>
      <th scope="col">Subjects</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ME-1</th>
      <td>15%</td>
      <td>Physics, Chemistry, Maths, English, Physical</td>
      
  
    </tr>
    {/* <button type="button" className="btn btn-success" onClick={navigateToContacts} > <td scope="col">Click here to add marks of ME1</td> </button>  */}
    <tr>
      <th scope="row">ME-2</th>
      <td>15%</td>
      <td>Physics, Chemistry, Maths, English, Physical</td>
  
    </tr>
    {/* <button type="button" className="btn btn-success" onClick={navigateToContacts} > <td scope="col">Click here to add marks of ME2</td> </button> */}
    <tr>
      <th scope="row">Half-yearly</th>
      <td>35%</td>
      <td>Physics, Chemistry, Maths, English, Physical</td>
  
    </tr>
    {/* <button type="button" className="btn btn-success" onClick={navigateToContacts} > <td scope="col">Click here to add marks of halfearly</td> </button> */}
    <tr>
      <th scope="row">Annual</th>
      <td>50%</td>
      <td>Physics, Chemistry, Maths, English, Physical</td>
  
    </tr>
    {/* <button type="button" className="btn btn-success" onClick={navigateToContacts} > <td scope="col">Click here to add marks of final</td> </button> */}
  </tbody>
</table>
<button type="button" className="btn btn-success" onClick={navigateToContacts} > <td scope="col">Click here to add marks</td> </button>

<h2 className={styles.t2}> Graded </h2>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Grade</th>
      <th scope="col">Range</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">A+</th>
      <td>95-100%</td>
  
    </tr>
    <tr>
      <th scope="row">A</th>
      <td>90-95%</td>
  
    </tr>
    <tr>
      <th scope="row">B</th>
      <td colspan="2">80-90%</td>
    </tr>
    <tr>
      <th scope="row">C</th>
      <td colspan="2">70-80%</td>
    </tr>
  </tbody>
</table>

            {/* <input type ="color" />
            <h1> current emotion is {emotion} </h1>
            <button onClick={()=> setEmotion("sad")}> sad </button>
            <button onClick={()=> setEmotion("excited")}> excited </button> */}
        </section>
        </>
    )
}

export default Home;    