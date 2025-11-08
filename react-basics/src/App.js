import React, {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {ThemeProvider} from './ThemeContext';
import {TasksProvider} from './TasksContext';
import Todo from './Todo';
import Greeting from './Greeting';
import Person from './Person';

function Home(){
  return<h1>Home Page</h1>;
}
function App(){
  const [isDark, setIsDark] = useState(false);
  return(
    <ThemeProvider>
      <TasksProvider>
        <div style = {{background: isDark? 'darkgrey' : 'white', margin: '40px', fontFamily:'sans-serif'}}>
          <Greeting name = "Aman"></Greeting>
          <Person name='AMAN' age={21}/>
          <Person name='Bura' age={23}/>
          <Person name='Sura' age={19}/>
          <button onClick = {() => setIsDark(!isDark)}>Toggle Dark</button>
          <Todo/>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/greeting">Greeting</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/greeting" element={<Greeting />}/>
          </Routes>
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}
export default App;
