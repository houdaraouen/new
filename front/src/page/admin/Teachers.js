import React from "react";
import { useState, useRef } from "react";
import './Teachers.css'

function Teachers (e){
  const list=[
    {
fullName:"mohamed raouane",
diplome:"réseau informatique",
email:"mohamedraouane@gmail.com"
    },
    {
      fullName:"aicha raouane",
      diplome:"sience de la vie et de la terre",
      email:"aysha.raouane@gmail.com"
    },
  ]
  return(
    <div className="main">
  <div className="add-form" > 
  <input type="text" name="fullName" placeholder="fullName" ></input>
  <input type="text" name="diplome" placeholder="diplome" ></input>
  <input type="text" name="email" placeholder="email" ></input>
<button type="submit"  >Add Teacher</button>
</div>
      <div>
      <form >
      <table>
            <tr>
              <td><button className="edit">Edit</button> 
              <button className="delete" type="button" >Delete</button> 
              </td>
              <td>fullName</td>
              <td>diplome</td>
              <td>email</td>
            </tr>
            <tr>
              <td><button className="edit">Edit</button> 
              <button className="delete" type="button" >Delete</button> 
              </td>
              <td>fullName</td>
              <td>diplome</td>
              <td>email</td>
            </tr>
      </table>
      </form>
      </div>
    </div>
  )
      }
// function AddList({setList}) {
// return(
//   <div className="add-form" > 
//   <input type="text" name="fullName" placeholder="fullName" ></input>
//   <input type="text" name="diplome" placeholder="diplome" ></input>
// <input type="text" name="email" placeholder="email" ></input>
// <button type="submit"  >Add Teacher</button>
// </div>
export default  Teachers