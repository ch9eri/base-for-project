import React from 'react';
import Kakao from './components/Kakao';
import Login from './components/Login';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/kakao' element={<Kakao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
