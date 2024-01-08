import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import Teachers from './page/admin/Teachers';
import Courses from './page/admin/courses';
import Students from './page/admin/Students';
import Service from './page/Service';
import About from './page/About';
import Contact from './page/Contact';



function App() {
  return (
    <>

     

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route exact path="/teachers" element={<Teachers/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/students" element={<Students/>} />
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Contact/>}/>
        <Route path='/service' element={<Home/>}/>
      </Routes>
      </>
  );
}

export default App;
