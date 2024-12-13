import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useEffect } from "react";

import User from "./pages/User";
import Todo from "./pages/Todo";
import SignUp from './pages/Signup';
import LogIn from './pages/Login';

var userId = localStorage.getItem('id');

function App() {

  useEffect(()=>{
    if(!userId){
      window.location.href='/'
    }
  },[])

  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/todo' element={<Todo />} />
          <Route path='/user' element={<User />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
