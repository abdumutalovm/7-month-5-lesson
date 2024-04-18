import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home';


function App() {
  return (

    <div>
      <Routes>
        <Route path="/" element={<Register></Register>} />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
