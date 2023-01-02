import React, { useState } from 'react'
function Form() {
  
    const[name,setname]=useState({value:'',bool:false})
  

    const nameChange = (e)=>{
        let store = (e.target.value)
        console.log(store)
        if(store.length>3 && store.length<30)
        {
            setname(store)
        }
    }

    return (
    <div>
        <input placeholder='name' onChange={(e)=>nameChange(e)} propname={name} ></input>
        <input placeholder='email'></input>
        <input placeholder='password'></input>
        <input placeholder='confirm password'></input>
        <button>SUBMIT</button>
        <p>{name}</p>
    </div>
  ) 
}

export default Form