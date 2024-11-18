// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar.jsx';
import PlayingVideo from './components/PlayingVideo.jsx';
import Search from './components/Search.jsx';
import Home from './components/Home.jsx';
import { Routes, Route } from'react-router-dom';
function App(){
  
  return (
    <div><Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchQuery" element={<Search/>}/>
      <Route path="/video/:id" element={<PlayingVideo/>}/>
    </Routes>
    </div>

    )
}
export default App;