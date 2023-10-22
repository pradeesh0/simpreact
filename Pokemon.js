import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
 const Pokemon =()=> {
    const[num,setnum]=useState();
    const[name,setname]=useState();
    const[moves,setmoves]=useState();

    useEffect(()=>{
        async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setname(res.data.name);
        setmoves(res.data.moves.length);
        console.log(res.data.moves);
        }
        if(num)
        {
        getData();
        } 
    });
    return(
        <>
        <h1>you choose <span>{num}</span> value</h1>
        <h1>my name is<span>{name}</span></h1>
        <h1>i have <span>{moves}</span></h1>
        <select name="" id=""value={num} onChange={(event)=>{setnum(event.target.value);}} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        </>
    );
    }
export default Pokemon;