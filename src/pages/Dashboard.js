import React, { useState } from "react";
import Cards from "./Cards";
import Data from "./Data";


// const Blank = () => {
//     return <div>This is Blank page</div>;
// };

function Dashboard(props) {
  const [searchTerm,setSearchTerm] = useState("");
  const [gender,setGender] = useState("")
        
  
  return (
    <>
      {/* <h1 className="heading_styles"> Dashboard </h1> */}
     <input  type="text" style={{marginLeft:"11px", width: "1020px", height:"50px", borderRadius:"36px", marginBottom:"25px", marginTop:"30px", borderColor:"blue", borderWidth:"2px",fontFamily:"Red Hat Text",fontSize:"16px"}} placeholder = "    Search for employees..." onChange={(event) => {setSearchTerm(event.target.value);}} />
      
      {/* <button type="dropdown" onClick={(event)=>{setGender(event.target.value)}}>Sort
      </button><option>Male</option>
      <option>Female</option> */}
      <select style={{ borderColor:"blue",width:"20px", borderWidth:"2px", height:"27px"}} onClick={(event) => {setGender(event.target.value);}}>
          <option >Sort</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Polygender">Polygender</option>
        </select>
      {Data.filter((val)=>{
        if (searchTerm == ""){
          return val
        }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
        }
      }).filter((val)=>{
        if (gender == "Male"){
          
          return val
        }else if(val.gender.toLowerCase().includes(gender.toLowerCase())){
          return val
        }
      }).map((val, index) => {
        console.log(index);
        return (
          
              
            
          <Cards
            id={val.id}
            imgscr={val.imgscr}
            first_name={val.first_name}
            last_name={val.last_name}
            email={val.email}
            gender={val.gender}
            ip_address={val.ip_address}
          />
          
        );
      })}
    </>
  );
}
export default Dashboard;
