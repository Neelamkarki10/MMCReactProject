import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from 'react'
import React from 'react'
import ResponsiveDrawer from './Admin/AdminLayout';
import ResponsiveAppBar from './User/UserLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './User/UserLayout'
import Home from './User/Home/Home'
import Blog from './User/Blog/Blog'
import AboutUs from './User/About/AboutUs'
import SingleBlog from './User/Blog/SingleBlog'
import AdminHome from './Admin/AdminHome/AdminHome'
import AdminLayout from './Admin/AdminLayout'
import AddBlog from './Admin/Blog/AddBlog'
import EditBlog from './Admin/Blog/EditBlog'
import Login from './Auth/Login'

// import './App.css'
// import React from "react";

function App() {
  // const [a, setA] = useState("Hello!");
  // React.useEffect(()=>{
  //   console.log("I am first type useeffect.");
  // });
  // React.useEffect(()=>{
  //   console.log("I am second type useeffect.");
  // },[]);
  // React.useEffect(()=>{
  //   console.log("I am third type useeffect.");
  // },[a]);

  return (
    <>
      {/* <ResponsiveDrawer/> */}

      {/* <button onClick={()=>setA('How are you?')}>Click Me!</button>
      {a} */}
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          {/* User layout starts*/}
          <Route path="" element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
          </Route>
          {/* User layout ends */}
          {/* admin layout starts */}
          <Route path="/admin/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="add" element={<AddBlog />} />
            <Route path="edit/:id" element={<EditBlog />} />
          </Route>
          {/* admin layout ends */}
        </Routes>
      </Router>
    </>
  )
}

export default App
