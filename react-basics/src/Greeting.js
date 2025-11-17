import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext} from './ThemeContext';
function Greeting(props){
    const {isDark, setIsDark} = useContext(ThemeContext);
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('count change:' +count);
        return()=>{
            console.log('cleanup for count:'+count);
        };
    }, [count]);
    return(
        <div style = {{background: isDark? 'darkgrey':'white'}}>
            <h1>hello,{props.name}!</h1>
            <p>count: {count}</p>
            <button onClick = {() => setCount(count+1)}>Increment</button>
            <button onClick = {() => setIsDark(!isDark)}>Toggle Dark</button>
        </div>
    );
}
export default Greeting;
