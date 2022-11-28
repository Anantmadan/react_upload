import React,{useState, useEffect} from "react";
import {useNavigate , useParams} from 'react-router-dom';

function Edit () 
{
    const [data,setData]= useState({});
    const Navigate = useNavigate ();
    const {id} = useParams();

    useEffect(()=>{
        const edituserid= async()=>{
            const reqdata = await fetch(`http://localhost:5000/${id}`);
            const res = await reqdata.json();
            setData(await res);
        }
        edituserid();
    },[]);

    return (   
        <div>
            <h1> Edit User </h1>
             <div>
                <input type="text" value={data.name}/> <br></br>
                <input type="text" value={data.email}/> <br></br>
                <input type="text" value={data.mobile}/> <br></br>
                <button> Update User </button>
            </div>       
        </div>
    )
}

export default Edit;