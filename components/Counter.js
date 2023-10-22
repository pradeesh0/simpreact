import React from "react";
import {useState} from "react";
import { useEffect } from "react";
import "../App.css";

function Counter()
{
     let count=0;
     useEffect(()=>{
        window.alert("I am clicked")
     })
     const [currentstate,updatedstate]=useState(count);
    const handleclick = () => {
        
        updatedstate(currentstate + 1)
    };
    return(
        <>
        <div className="main-counter">
        <div>
        <h3>counter</h3>
        <button onClick={handleclick}>{currentstate}</button>
        </div>
        </div>
        </>
    )
}
export default Counter;