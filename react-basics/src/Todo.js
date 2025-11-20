import React, {useEffect, useContext, useState} from 'react';
import {TaskContext} from './ThemeContext';
import {useParams, Link} from 'react-router-dom';

function Todo(){
    const {state: tasks, dispatch} = useContext(TaskContext);
    const [newTask, setNewTask] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then((res) => res.json())
        .then((data)=>{
            data.forEach(task =>{
                dispatch({
                    type: "ADD_TASK",
                    payload: task.title
                });
            });
        })
        .catch((error) => console.log('Error fetching tasks: ', error));
    }, [dispatch]);

    const addTask = () =>{
        if(newTask.trim()==='')return;

        dispatch({
            type: 'ADD_TASK',
            payload: newTask
        });
        setNewTask('');
    };

    const deleteTask = (index) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: index
        });
    };
    const toggleComplete = (index) => {
        dispatch({
            type: 'TOGGLE_COMPLETE',
            payload: index
        });
    };

    if(id){
        const index = parseInt(id, 10);
        const task = tasks[index];

        return(
        <div>
            <h2>Task #{id}</h2>
            {task ? (
                <>
                  <p><b>Title:</b> {task?.text}</p>
                  <p><b>Completed:</b> {task.done? 'yes' : 'No'}</p>      
                  <Link to='/todo'>back to all tasks</Link>     
                </>
            ):(
                <p>loading or invalid task</p>
            )}
        </div>
    );
    }

    return(
        <div>
            <h2>To-Do List</h2>
            <input 
              type = "text"
              placeholder = "Enter a new task"
              value={newTask}
              onChange = {(e) => setNewTask(e.target.value)}
              onKeyDown = {(e) =>e.key === 'Enter' && addTask()}
            />
            <button onClick = {addTask}>Add</button>

            <ul>
                {tasks.map((task, index)=>(
                    <li key={index} style={{textDecoration: task.done ? 'line-through' : 'none', marginTop: '10px'}}>
                        <input
                          type = "checkbox"
                          checked = {task.done}
                          onChange = {() => toggleComplete(index)}
                        />
                        
                        <Link to = {`/todo/${index}`}>
                          {task.text}
                        </Link>

                        <button onClick={() => deleteTask(index)} style={{marginLeft:'10px'}}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Todo;