import React from 'react';
import{Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Tasks from './Tasks';
import About from './About';

function App(){
  return(
    <div className="App">
      {/*<header className="App-header">
        <h1>Task Manager</h1>
        <Home />
      </header>*/}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Tasks">Tasks</Link>
        <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </div>
  );
}
export default App;