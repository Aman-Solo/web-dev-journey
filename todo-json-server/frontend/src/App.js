import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Tasks from './Tasks';
function Home(){
  return <h1>Home</h1>;
}
function About(){
  return <h1>About</h1>
}
function App(){
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route Path="/" element={<Home/>}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route Path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}
export default App;
