import React from "react";
import './sideBar.css'
import { Link } from "react-router-dom";
const sidebar = () =>{
  return(
    <div className="container">
    <div className="box">
      <h1>Teachers</h1>
      {/* <Link to="/Teachers"> */}
      <img className="YOU" src="https://img.freepik.com/premium-vector
     /cartoon-female-teacher-with-pointer-stick_29190-8259.jpg" alt="image">
         </img>
         {/* </Link>  */}
      </div>
      <div className="box"> 
      <h2>Students</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9G
      cSGV7Rv8mkn3wbL6_ZeNqTvKayF1WRuWHjoyw&usqp=CAU" alt="image"/>
      </div>
      <div className="box">
      <h3>Courses</h3>
      <img src="https://img.freepik.com/vecteurs-libre/pile-livres-des
      ign-plat-dessines-main_23-2149334862.jpg" alt="image"/>
         </div>
         </div>
  )
}
export default sidebar