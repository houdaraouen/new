import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import {FaFacebook, FaTwitter, FaInstagram, FaGoogle} from 'react-icons/fa'

import AdminLayout from './admin/adminLayout';
const Home = () => {
  return (
    
    <div>
      <div className='main'>
        <div className='navbar'>
          <div className='icon'>
            <h2 className='logo'>GoMyCode</h2>
          </div>
          <div className='menu'>
            <ul className='home-ul'>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/About">ABOUT</Link></li>
              <li><Link to="/Contact">CONTACT</Link></li>
              <li><Link to="/Service">SERVICE</Link></li>
            </ul>
          </div>
          <div className='search'>
<input type='search' className='srch' name='' placeholder='type to text'/>
<a href='#'><button className='btn'>Search</button></a>
          </div>
          <div className='content'>
           <h1>WE ARE BEST <span style={{ color: 'blue' }}>LEARN</span><br/>
   IN THE TEACHER</h1>
          <h5 className='par'>An educational application that provides interactive<br/>
exercises in all basic subjects for the primary stage,<br/>
completely identical to the official ministerial programmes.</h5>

<div className='form'>
  <h2>Login Here</h2>
  <input type='email' name='email' placeholder='Enter Your Email Here'></input>
  <br/>
  <input type='password' name='password' placeholder='Enter Your Password'></input>
  <button className='btnn'><a href='#'>Login</a></button>
  <p className='link'>Don't have you an account?<br/>

  <Link to="/signup">Sign up</Link> here</p>
  <p className='liw'>Log in with</p>
  <div class="social">
                 <Link to="https://www.facbook.com"><FaFacebook/></Link>
                 <Link to="https://www.google.com"><FaGoogle/></Link>
                 <Link to="https://www.instagram.com"><FaInstagram/></Link>
                 <Link to="https://www.twitter.com"><FaTwitter/></Link>
                 </div>
  
</div>
          </div>

        </div>
      </div>
   </div>
    
  );
};

export default Home;