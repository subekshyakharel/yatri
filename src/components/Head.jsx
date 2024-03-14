import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

function Head() {
  return (
    <>
      <div className='sign'>
        <Link to="/ss">Login/SignUp</Link>
      </div>
      
      <Routes>
        <Route path="/ss" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default Head;

