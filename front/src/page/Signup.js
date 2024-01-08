import React, { useState } from 'react';
import "./Signup.css";
function Signup() {
  const [signupData, setSignupData] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleSignup = (event) => {
    event.preventDefault();
  
   
        setSignupData({
      userName: '',
      email: '',
      password: ''
    });
  };<br></br>

  return (
    <div className='mainn'>
     
      <h2>Signup</h2>
      {/* <form onSubmit={handleSignup} className='for'> */}
      <div className='formm'>
        <input
          type="text"
          placeholder="FirstName"
          value={signupData.userName}
          onChange={(event) =>
            setSignupData({ ...signupData, userName: event.target.value })
          }
        /><br/>
        <input
          type="text"
          placeholder="LastName"
          value={signupData.userName}
          onChange={(event) =>
            setSignupData({ ...signupData, userName: event.target.value })
          }/>
            <input
          type="text"
          placeholder="Date Of Birth"
          value={signupData.userName}
          onChange={(event) =>
            setSignupData({ ...signupData, userName: event.target.value })
          }/>
        <input
          type="email"
          placeholder="Email"
          value={signupData.email}
          onChange={(event) =>
            setSignupData({ ...signupData, email: event.target.value })
          }
        /> <br/>
        <input
          type="password"
          placeholder="Password"
          value={signupData.password}
          onChange={(event) =>
            setSignupData({ ...signupData, password: event.target.value })
          }
        /><br/>
        <button type="submit" className='btnn'>Sign Up</button>
        </div>
      {/* </form> */}
    </div>
    
  );
}

export default Signup;