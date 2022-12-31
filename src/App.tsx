import React from 'react';
import Kakao from './components/Kakao';
import Home from './components/Home';
import Date from './components/Date';
import ProgressBar from './components/ProgressBar';
import File from './components/File';
import Invite from './components/Invite';
import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kakao" element={<Kakao />} />
        <Route path="/date" element={<Date />} />
        <Route path="/progressbar" element={<ProgressBar />} />
        <Route path="/file" element={<File />} />
        <Route path="/invite" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
