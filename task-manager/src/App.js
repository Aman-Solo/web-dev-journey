import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Tasks from './Tasks';
import About from './About';
import Settings from './settings';

function App(){
  return(
    <div className="App">
      {/*<header className="App-header">
        <h1>Task Manager</h1>
        <Home />
      </header>*/}
      <nav>
        <Link to="/" style={{margin: '0 10px'}}>Home</Link>
        <Link to="/Tasks" style={{margin: '0 10px'}}>Tasks</Link>
        <Link to="/About" style={{margin: '0 10px'}}>About</Link>
        <Link to="/Settings" style={{margin: '0 10px'}}>Settings</Link>
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