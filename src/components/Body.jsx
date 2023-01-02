import React, { useEffect, useState } from "react";
import { Outlet,Link } from "react-router-dom";


function Body() {
  const [content, setContent] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reactnd-books-api.udacity.com/books", {
      headers: { Authorization: "whatever-you-want" },
    })
      .then((res) => res.json())
      .then((res) => {
        setContent(res.books);
        setData(res.books);
      });
  },[]);
//   console.log(content);

  function onChangeHandler(el) {
    let letters = [];
    content.forEach((e) => {
      if (e.title.toLowerCase().search(el.target.value.toLowerCase()) >= 0) {
        letters.push(e);
      }
    });
    if (el.target.value !== "") setData(letters);
  }

//   const changePage = () =>{
//     window.location.href='./form.js'
//   }

  return (<>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',backgroundColor:"rebeccapurple"}}>
    <h1>kalvium books</h1>
    <div>
      <input style={{width:'40vw'}} placeholder="search" onChange={onChangeHandler} />
    </div>
    <Link to='/Data'><button> register</button></Link> 
  </div  >
    <div style={{backgroundColor:'lightpink',padding:'10px',display:'grid',gridTemplateColumns:'30vw 30vw 30vw'}}>
        {console.log(data)}
      {data.map((e) => {
        return (
          <div>
            <img style={{height:'30vh',width:'30vh'}} src={e.imageLinks.thumbnail} alt={e.title} />
            <h5>{e.title}</h5>
            <p>free</p>
          </div>
        );
      })}
    </div>
    <Outlet/>
    </>
  );
}

export default Body;
