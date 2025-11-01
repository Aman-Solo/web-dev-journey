import React from 'react';
const Person =(props) =>{
    return(
        <div>
            <h2>personal information</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};
export default Person;