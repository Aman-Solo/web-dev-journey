import React, {useState} from 'react';
const Person =(props) =>{
    const [currentAge, setCurrentAge] = useState(props.age);
    return(
        <div>
            <h2>personal information</h2>
            <p>Name: {props.name}</p>
            <p>Age: {currentAge}</p>
            <button onClick = {() => setCurrentAge(currentAge + 1)}>+1 years added</button>
        </div>
    );
};
export default Person;