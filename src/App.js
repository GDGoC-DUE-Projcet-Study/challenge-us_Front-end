import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';

import User from "./pages/User";
import Todo from "./pages/Todo";
import SignUp from './pages/Signup';
import LogIn from './pages/Login';


function App() {
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
