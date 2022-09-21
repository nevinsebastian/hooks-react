import React,{useState, useEffect} from "react";

 const Test =() => {
    useEffect(()=>{
        console.log("runing");
        return() => {
          console.log("unmout");
        };
         },[]);
         return (
            <h1>test comp</h1>
         )
};

export default Test;