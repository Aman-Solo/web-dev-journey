import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
function Home(){
  return <h1>Home</h1>;
}
function Tasks(){
  return <h1>Tasks</h1>
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
        <Route path="/taska" element={<Tasks />}/>
        <Route Path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}
export default App;
