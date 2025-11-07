import React, {useEffect, useContext, useState} from 'react';
import {TasksContext} from './TasksContext';

function Todo(){
    const {tasks, setTasks} = useContext(TasksContext);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then((res) => res.json())
        .then((data)=>{
            const fetchedTasks = data.map((task) => task.title);
            setTasks(fetchedTasks);
        })
        .catch((error) => console.log('Error fetching tasks: ', error));
    }, [setTasks]);

    const addTask = () =>{
        if(newTask.trim() === '')return;
        const updated = [...tasks,newTask];
        setTasks(updated);
        setNewTask('');
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) =>i !== index);
        setTasks(updated);
    };

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
                    <li key={index}>
                        {task}
                        <button onClick = {() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Todo;