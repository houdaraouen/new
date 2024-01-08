import React from "react";
import { useState, useRef } from "react";
import './courses.css'

function Courses (){
  const list=[
    {
name:"Mathematique",
description:"mihoijo",
    },
    {
      name:"Informatique",
      description:"uhnxsoIJ",
    },
  ]

  
  return(
    <div className="main">
        <div className="add-form"> 
  <input type="text" name="name" placeholder="name" ></input>
<input type="text" name="description" placeholder="description" ></input>
<button type="submit" >Add Courses</button>
</div>
      <div>
      <form >
      <table>
            <tr>
              <td>Name</td>
              <td>description </td>
              <td><button className="edit"  >Edit</button> 
              <button className="delete" type="button" >Delete</button> 
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>description </td>
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



export default  Courses