import React from 'react';
import Greeting from './Greeting';
import Person from './Person';
function App(){
  return(
    <div>
      <Greeting name = "Aman"></Greeting>
      <Person name='AMAN' age={21}/>
      <Person name='Bura' age={23}/>
      <Person name='Sura' age={19}/>
    </div>
  );
}
export default App;