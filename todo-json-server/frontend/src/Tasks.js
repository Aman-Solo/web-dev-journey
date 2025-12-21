import React, {useState, useEffect} from 'react';
function Tasks(){
    const[tasks, setTasks] = useState([]);
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[category, setCategory] = useState('');
    const[dueDate, setDueDate] = useState('');
    async function fetchTasks(){
        try{
            const response = await fetch('http://localhost:3001/todos');
            if(!response.ok){
                throw new Error('Fetch failed');
            }
            const data = await response.json();
            setTasks(data);
        }catch(error){
            console.error('Error fetching tasks:', error);
        }
    }
    useEffect(()=>{
        fetchTasks();
    }, []);

    const addTask = async()=>{
        if(!title.trim() || !dueDate){
            alert('Title and DueDate are required');
            return;
        }
        try{
            const response = await fetch('http://localhost:3001/todos', {
                method: 'POST',
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({title, description, category, dueDate})
            });
            if(!response.ok){
                throw new Error('Add failed: '+ response.status);
            }
            await fetchTasks();
            setTitle('');
            setDescription('');
            setCategory('');
            setDueDate('');
        }catch (error){
            console.error('Error adding task:', error);
        }
    }
    return(
        <div>
            <h1>Task List</h1>
            <form onSubmit={(e)=>{e.preventDefault(); addTask();}} style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px'}}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
                <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" />
                <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
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