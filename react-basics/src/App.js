import React, {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import {ThemeProvider} from './ThemeContext';
import {TasksProvider} from './TasksContext';
import Todo from './Todo';
import Greeting from './Greeting';
import Person from './Person';

function Home(){
  return(
    <div>
      <h1>ROUTER example</h1>
      <p>Click below to go to your todo list</p>
      <Link to="/todo">GO to To-do lists</Link>
    </div>
  );
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
            <Link to="/" style={{marginRight:'10px'}}>Home</Link>
            <Link to="/greeting">Greeting</Link>
            <Link to="/Todo" style={{marginLeft:'10px'}}>To-Do</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/greeting" element={<Greeting />}/>
            <Route path="/todo" element={<Todo />}/>
            <Route path="/todo/:id" element={<Todo />}/>
          </Routes>
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}
export default App;
