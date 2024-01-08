import React from "react";
import { useState, useRef } from "react";
import './student.css'

function Students (){
  const list=[
    {
FirstName:"mohamed raouane",
LastName:"réseau informatique",
phone:"mohamedraouane@gmail.com"
    },
    {
      FirstName:"aicha raouane",
      LastName:"sience de la vie et de la terre",
      phone:"aysha.raouane@gmail.com"
    },
  ]
  return(
    <div className="main">
<div className="add-form"> 
//   <input type="text" name="FirstName" placeholder="FirstName" ></input>
   <input type="text" name="LastName" placeholder="LastName"></input>
 <input type="text" name="phone" placeholder="phone" ></input> <button type="submit" >Add Student</button>
 </div>
       <div>
      <form>
      <table>
            <tr>
         <td>FirstName</td>
         <td>LastName</td>
         <td>phone </td>
            <td><button className="edit"  >Edit</button> 
             <button className="delete" >Delete</button> 
             </td>
          </tr>
          <tr>
         <td>FirstName</td>
         <td>LastName</td>
         <td>phone </td>
            <td><button className="edit"  >Edit</button> 
             <button className="delete" >Delete</button> 
             </td>
          </tr>
    </table>
    </form>
    </div>
  </div>

)
}
export default  Students