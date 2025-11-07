import React, {useState} from 'react';
import {ThemeProvider} from './ThemeContext';
import {TasksProvider} from './TasksContext';
import Todo from './Todo';
import Greeting from './Greeting';
import Person from './Person';
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
        </div>
      </TasksProvider>
    </ThemeProvider>
  );
}
export default App;