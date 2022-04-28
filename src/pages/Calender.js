import React, { useState } from "react";

import Cardsone from "./Cardsone";
import Datatwo from "./Datatwo";


// const Blank = () => {
//     return <div>This is Blank page</div>;
// };

function Calender(props) {
  const [searchTerm,setSearchTerm] = useState("");
  
        
  // const filterGender = {categGender} => {
  //   const updatedGender = Data.filter((curElem)=>{
  //     return curElem.category === cateGender;
  //   });
  //   setGender(updatedGender);
  // }
  return (
    <>
       {/* <h1 className="heading_styles"> Dashboard </h1> */}
     <input  type="text" style={{marginLeft:"11px", width: "1020px", height:"50px", borderRadius:"36px", marginBottom:"20px", marginTop:"30px", borderColor:"blue", borderWidth:"2px",fontFamily:"Red Hat Text",fontSize:"16px"}} placeholder = "    Search for blogs..." onChange={(event) => {setSearchTerm(event.target.value);}} />
     
      {/* <button type="dropdown" onClick={(event)=>{setGender(event.target.value)}}>Sort
      </button><option>Male</option>
      <option>Female</option> */}
      {/* <select style={{ borderColor:"blue",width:"20px", borderWidth:"2px", height:"27px"}} onClick={(event) => {setGender(event.target.value);}}>
          <option >Sort</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Polygender">Polygender</option>
        </select> */}
      {Datatwo.filter((val)=>{
        if (searchTerm == ""){
          return val
        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      })
      
      .map((val, index) => {
        console.log(index);
        return (
          
              
            
          <Cardsone
            // id={val.id}
            imgscr={val.imgscr}
            title={val.title}
            description={val.description}
            link={val.link}
            // email={val.email}
            // gender={val.gender}
            // ip_address={val.ip_address}
          />
          
        );
      })}
    </>
  );
}
export default Calender;
