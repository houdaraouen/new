import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Sidebar from '../../components/sidebar';
import { Link } from 'react-router-dom';

const AdminLayout = ({ children }) => {
    return (
      <>
      <div className='main'>
 <div className='navbar'>
          <div className='icon'>
            <h2 className='logo'>GoMyCode</h2>
          </div>
          <div className='menu'>
            <ul>
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
          </div>
       
        <div>

          <Sidebar />
          <div  className="child-contain"style={{ flex: 1 , position: 'center' }}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
  };
  
  export default AdminLayout;