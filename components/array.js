import React from "react";

const Urray =[
    {
        name:"johm",
        expert:"developer",
        experience:"2yrs",
    },
    {
        name:"jack",
        expert:"gamer",
        experience:"5yrs",
    },
    {
        name:"sara",
        expert:"creator",
        experience:"1yrs",
    },
];

function Array()
{
    return(
    <>
    <h1>
    {Urray.map((element)=>{
        return element.expert ;
    })}
    </h1>
    </>
    )
};
export default Array

