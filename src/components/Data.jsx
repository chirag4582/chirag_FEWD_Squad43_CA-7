import React, { useState } from "react";

function Data() {
const [bool,setbool] = useState(false)
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [pass,setpassword] = useState('')
  const [checkpass,setcheckpassword] = useState('')
  const nameChange = (e) => {
    let store = e.target.value;
    // console.log(store);
    if (store.length > 3 && store.length < 30) {
      setname(store);
      // console.log(name)
      setbool(true)
    }
  };

  const mailChange = (e) => {
    if(bool===false)
    {
        alert('enter name correctly')
        e.target.value=''
    }
    let store = e.target.value;
    for(let i=0;i<store.length;i++)
    {
        if(store[i]==='@'){
            setmail(store)
            setbool(true)
            break;
        }
    }
    // console.log(mail,bool)
  };

  const password = (e)=>{
    let store = e.target.value
    setpassword(store)
  }

  const passwordCheck = (e)=>{
    let store = e.target.value
    if(store===pass)
    {
        setcheckpassword(store)
        setbool(true)
    }
    else{
        setbool(false)
    }
  }

  const Submit =()=>{
    if(checkpass===pass)
    {console.log(name,mail,pass)}
    else{
        alert('enter same password')
    }
  }



  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'80vh'}}>
      <h1>Form</h1>
      <input style={{width:'40vw',margin:'5px',}} placeholder="name" onChange={(e) => nameChange(e)}></input>
      <input style={{width:'40vw',margin:'5px',}} placeholder="email" onChange={(e) => mailChange(e)}></input>
      <input style={{width:'40vw',margin:'5px',}} placeholder="password" onChange={(e)=>password(e)} ></input>
      <input style={{width:'40vw',margin:'5px',}} placeholder="confirm password" onChange={(e)=>passwordCheck(e)}></input>
      <button style={{}} onClick={()=>Submit()} >SUBMIT</button>
    </div>
  );
}
export default Data;
