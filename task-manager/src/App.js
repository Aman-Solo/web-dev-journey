import React,{useContext} from 'react';
import{Routes, Route, Link} from 'react-router-dom';
import {ThemeContext} from './ThemeContext';
import {completedContext} from './CompletedContext';
import './App.css';
import Home from './Home';
import Tasks from './Tasks';
import About from './About';
import Settings from './settings';

function App(){
  const {completedCount}=useContext(completedContext);
  const {isDark, setIsDark}=useContext(ThemeContext);
  return(
    <div style={{background:isDark? '#2f4f4f':'white', color:isDark? 'white':'black', minHeight:'100vh'}}>
      {/*<header className="App-header">
        <h1>Task Manager</h1>
        <Home />
      </header>*/}
      <nav style={{padding:'10px'}}>
        <Link to="/" style={{ marginRight: '10px', color: isDark ? 'white' : 'black' }}>Home</Link>
        <Link to="/Tasks" style={{ marginRight: '10px', color: isDark ? 'white' : 'black' }}>Tasks</Link>
        <Link to="/About" style={{ marginRight: '10px', color: isDark ? 'white' : 'black' }}>About</Link>
        <Link to="/Settings" style={{ marginRight: '10px', color: isDark ? 'white' : 'black' }}>Settings</Link>
        <button onClick={()=>setIsDark(!isDark)} style={{background:isDark? '#555':'#ddd', color:isDark? 'white':'black', border:'none', padding:'5px 10px', borderRadius:'5px'}}>
          Toggle{isDark? 'Light':'Dark'}
        </button>
        <p style={{display:'inline', marginLeft:'20px'}}>
          Completed Tasks: {completedCount}
        </p>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="/tasks:id" element={<Tasks />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Settings" element={<Settings />}/>
      </Routes>
    </div>
  );
}
export default App; 