import React from "react";
import { useState } from "react";


function Forminfunc(){
    const[name,setname]=useState(" ")
    const[num,setnum]=useState(" ")
    const[mail,setmail]=useState(" ")
    const[role,setrole]=useState(" ")

    let namefun=(event)=>{
        setname(event.target.value)
    }
    let numfun=(event)=>{
        setnum(event.target.value)
    }
    let mailfun=(event)=>{
        setmail(event.target.value)
    }
    let rolefun=(event)=>{
        setrole(event.target.role)
    }
    let submitfun=(event)=>{
        event.preventDefault();
        alert(` name:${name} mailid: ${mail}
            Resubmit if any Mistake`
            
        )
    }
return(
    <form onSubmit={submitfun}>
            <h1>Fill this form to apply</h1>
            <div className="name">
            <label>Name:</label>
            <input type="text" value={name} onChange={namefun} />
            </div>
            <div className="name">
                <label >Mobile No:</label>
                <input type="number" value={num} onChange={numfun}></input>
            </div>
            <div className="name">   
                <label>emailid:</label>
                <input type="email" value={mail} onChange={mailfun} />
            </div>
            <div className="name">
                <label>Resume:</label>
                <input type="file"  />
            </div>
            <div className="role">
                <label >Role:</label>
                <select   value={role}  onChange={rolefun}>
                    <option >Frontend </option>
                    <option >Java Backend</option>
                    <option >Python Backend</option>
                    <option >Node.js Backend</option>
                    <option >Database Management</option>
                    <option >Associate</option>
                </select>
            </div>
            <input type="submit" className="sub" />
        </form>
)
}

export default Forminfunc