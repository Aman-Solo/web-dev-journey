import React, {useState, useEffect} from 'react';
function Tasks(){
    const[tasks, setTasks] = useState([]);
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[category, setCategory] = useState('');
    const[dueDate, setDueDate] = useState('');
    const[sortOrder, setSortOrder] = useState('asc');

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
                body: JSON.stringify({title, description, category, dueDate, completed: false})
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
    };
    const ToggleCompleted = async(id)=>{
        try{
            const task = tasks.find(t=>t.id === id);
            if(!task) return;
            const response = await fetch(`http://localhost:3001/todos/${id}`, {
                method:'PATCH',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({completed: !task.completed})
            });
            if(!response.ok)throw new Error('Toggle Failed');
            fetchTasks();
        }catch(error){
            console.error('Error toggling complete: ', error);
        }
    };
    const sortedTasks = [...tasks].sort((a, b)=>{
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    return(
        <div style={{padding: '20px'}}>
            <h1>Task List</h1>
            <form onSubmit={(e)=>{e.preventDefault(); addTask();}} style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px'}}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
                <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" />
                <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <div style={{marginBottom: '20px'}}>
                <button onClick={()=>setSortOrder(sortOrder==='asc' ? 'desc' : 'asc')}>
                    Sort by Date: {sortOrder === 'asc' ? '(oldest first)' : '(newest first)'}
                </button>
            </div>
            <ul>
                {sortedTasks.map(task => (
                    <li key={task.id} style={{border:'1px solid grey', margin:'10px', padding:'10px', backgroundColor: task.completed ? '#77dd77ff' : 'white'}}>
                        <h2 style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.title}</h2>
                        <p>{task.description}</p>
                        <p>category: {task.category}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <div style={{marginTop: '10px'}}>
                            <input type="checkbox" checked={task.completed || false} onChange={()=>ToggleCompleted(task.id)}/>
                            <label style={{ marginLeft: '8px' }}>Completed</label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tasks;