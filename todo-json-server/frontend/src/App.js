import React, { useContext } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Tasks from './Tasks';
import { ThemeContext } from './ThemeContext';
function Home(){
  return <h1>Home</h1>;
}
function About(){
  return <h1>About</h1>
}
function App(){
  const{isDark, setIsDark} = useContext(ThemeContext);
  return (
    <div>
      <nav style={{background: isDark ? '#333' : 'white', color: isDark ? 'white':'black'}}>
        <Link to="/" style={{color:'inherit', marginRight:'10px'}}>Home</Link>
        <Link to="/tasks" style={{ color: 'inherit', marginRight: '10px' }}>Tasks</Link>
        <Link to="/About" style={{ color: 'inherit', marginRight: '10px' }}>About</Link>
        <button onClick={()=>setIsDark(!isDark)}>{isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}</button>
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
