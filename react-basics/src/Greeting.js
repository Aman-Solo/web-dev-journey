import React, {useState} from 'react';
function Greeting(props){
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>hello,{props.name}!</h1>
            <p>count: {count}</p>
            <button onClick = {() => setCount(count+1)}>Increment</button>
        </div>
    );
}
export default Greeting;
