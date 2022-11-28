import React ,{useState} from "react";
import Navbar from "./Navbar";
import './formm.css';
import axios from "axios";
import { Link } from "react-router-dom";    


function About () {

    const [data,setData] =useState([])
    // const [name,setName]=useState("");
    // const [email,setEmail]=useState("");
    // const [mobile,setMobile]=useState("");
    
  const fetchdata =()=>{
    axios.get("http://localhost:5000/allmark")
    .then((response)=>{
        // console.log(response);
        setData(response.data.data)
    })
  }

//   const updateUser =()=>{
//     axios.get("http://localhost:5000/")
//     .then((response)=>{
//         // console.log(response);
//         setData(response.data.data)
//         setName(response[0].name)
//     })
//   }


//   const deleteUser = (id) => {
//     fetch(`http://localhost:5000/${id}`,{
//      method:'DELETE'
//     }).then((result)=>{
//        result.json().then((resp)=>{
//          console.warn(resp)
//          alert("Data Deleted")
//        })
//     })
//  }
    return (
        <>
        <Navbar />
        <div className="container my-3">
        <button className="btn btn-primary" onClick={fetchdata}>Click me</button>
        </div>

        <div className="container">
            <div className="row">
                {
                    data.map((value)=>{
                        return(
                            <div className="-3">
                              <div className="card" style={{width: "18rem"}}>
                                <tr className="list-group list-group-flush">
                  <b> <td className="list-group-item">{value.name}</td> </b>
                <td className="list-group-item">{value.marks1}</td>
                <td className="list-group-item">{value.marks2}</td>
                <td className="list-group-item">{value.halfearly}</td>
                <td className="list-group-item">{value.final}</td>
                <h3> Total marks </h3>
                <td className="list-group-item">{value.marks1 + value.marks2 + value.halfearly + value.final}</td>
                <h3> Total percentage </h3>
                {/* <td className="list-group-item">{((value.marks1 + value.marks2 + value.halfearly + value.final) /400)*100}%</td> */}
                <td className="list-group-item">{(((value.marks1 + value.marks2)/200*100)*15/100)+(((value.halfearly)/250*100)*35/100)+(((value.final)/500*100)*50/100)}%</td><br></br><br></br><br></br><br></br>
                <td> 
                    {/* <button className="btn btn-success" onClick={() => alert(value.id)}>Edit</button>  */}
                    {/* <Link to={`/edit/${value.id}`}  className="btn btn-danger">Edit</Link>
                &nbsp;
                 <button className="btn btn-danger" onClick={() => deleteUser(value.id)}>DELETE</button>  */}
                 </td>
                </tr>
        </div>
                        </div>
                        );
                    })
                }

            </div> 
        </div>
        </>
    )
}

export default About;












// import React ,{useState} from "react";
// import Navbar from "./Navbar";
// import './formm.css';
// import axios from "axios";
// import { Link } from "react-router-dom";


// function About () {

//     const [data,setData] =useState([])
//     // const [name,setName]=useState("");
//     // const [email,setEmail]=useState("");
//     // const [mobile,setMobile]=useState("");
    
//   const fetchdata =()=>{
//     axios.get("http://localhost:5000/allusers")
//     .then((response)=>{
//         // console.log(response);
//         setData(response.data.data)
//     })
//   }

// //   const updateUser =()=>{
// //     axios.get("http://localhost:5000/")
// //     .then((response)=>{
// //         // console.log(response);
// //         setData(response.data.data)
// //         setName(response[0].name)
// //     })
// //   }


//   const deleteUser = (id) => {
//     fetch(`http://localhost:5000/${id}`,{
//      method:'DELETE'
//     }).then((result)=>{
//        result.json().then((resp)=>{
//          console.warn(resp)
//          alert("Data Deleted")
//        })
//     })
//  }
//     return (
//         <>
//         <Navbar />
//         <div className="container my-3">
//         <button className="btn btn-primary" onClick={fetchdata}>Click me</button>
//         </div>

//         <div className="container">
//             <div className="row">
//                 {
//                     data.map((value)=>{
//                         return(
//                             <div className="-3">
//                               <div className="card" style={{width: "18rem"}}>
//                                 <tr className="list-group list-group-flush">
//                     <td className="list-group-item">{value.name}</td>
//                 <td className="list-group-item">{value.email}</td>
//                 <td className="list-group-item">{value.mobile}</td><br></br><br></br><br></br><br></br>
//                 <td> 
//                     {/* <button className="btn btn-success" onClick={() => alert(value.id)}>Edit</button>  */}
//                     <Link to={`/edit/${value.id}`}  className="btn btn-danger">Edit</Link>
//                 &nbsp;
//                  <button className="btn btn-danger" onClick={() => deleteUser(value.id)}>DELETE</button> 
//                  </td>
//                 </tr>
//         </div>
//                         </div>
//                         );
//                     })
//                 }

//             </div> 
//         </div>
//         </>
//     )
// }

// export default About;