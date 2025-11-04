import React, {useState} from 'react';
import {ThemeProvider} from './ThemeContext';
import Greeting from './Greeting';
import Person from './Person';
function App(){
  const [isDark, setIsDark] = useState(false);
  return(
    <ThemeProvider>
      <div style = {{background: isDark? 'darkgrey' : 'white'}}>
      <Greeting name = "Aman"></Greeting>
      <Person name='AMAN' age={21}/>
      <Person name='Bura' age={23}/>
      <Person name='Sura' age={19}/>
      <button onClick = {() => setIsDark(!isDark)}>Toggle Dark</button>
    </div>
    </ThemeProvider>
  );
}
export default App;