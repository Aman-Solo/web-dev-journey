import React, {useState, useEffect} from 'react';
function Tasks(){
    const[tasks, setTasks] = useState([]);
    useEffect(() => {
        async function fetchTasks(){
            try{
                const response = await fetch('http://localhost:3001/todos');
                if(!response.ok){
                    throw new Error('Fetch failed');
                }
                const data = await response.json();
                setTasks(data);
            }catch (error){
                console.error('Error fetching tasks:', error);
            }
        }
        fetchTasks();
    }, []);
    return(
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{border:'1px solid grey', margin:'10px', padding:'10px'}}>
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <p>category: {task.category}</p>
                        <p>Due Date: {task.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tasks;