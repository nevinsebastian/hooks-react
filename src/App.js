import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";

import Test from "./Test";
const App = () => {


  const[value,handleChange] = useForm({
    name:"",
    email:"",
  });
  const [showTest,setShowTest] = useState(true);

 
  
    useEffect(()=>{
        console.log("runing");
       
    const test = ()=> {
      console.log("completed")
    };
    test();
         },[value.name,value.email]);


  return (
    <div>
      {showTest? <Test/>: null}
      
    <button onClick={() => setShowTest(!showTest)}>Toggle</button>
     <form action="" autoCapitalize="off">
     <input type="text" name="name" value={value.name} onChange={handleChange}  />
    <input type="text" name="email" value={value.email} onChange={handleChange}/>
    </form>
    </div>
  );
}

export default App;
