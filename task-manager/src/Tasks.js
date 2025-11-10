import React from 'react';
import {useParams} from 'react-router-dom';

function Tasks(){
    const {id} = useParams();
    console.log('Task id', id);
    return(
        <div>
            <h1>Tasks List</h1>
            {id && <p>Viewing Task ID: {id}</p>}
            <ul>
                <li>Task 1</li>
            </ul>
        </div>
    );
}
export default Tasks;