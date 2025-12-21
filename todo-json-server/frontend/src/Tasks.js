import React, {useState, useEffect} from 'react';
function Tasks(){
    // STATES
    const[tasks, setTasks] = useState([]);
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[category, setCategory] = useState('');
    const[dueDate, setDueDate] = useState('');
    const[sortOrder, setSortOrder] = useState('asc');

    const[editingId, setEditingId] = useState(null);
    const[editTitle, setEditTitle] = useState('');
    const[editDescription, setEditDescription] = useState('');
    const[editCategory, setEditCategory] = useState('');
    const[editDueDate, setEditDueDate] = useState('');

    // DATA FETCHING
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

    // CREATING (POST)
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

    //TOGGLE (PATCH)
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

    //EDITING LOGIC (PATCH)
    const startEdit = (task)=>{
        setEditingId(task.id);
        setEditTitle(task.title);
        setEditDescription(task.description);
        setEditCategory(task.category);
        setEditDueDate(task.dueDate);
    };
    const saveEdit = async()=>{
        if(!editTitle.trim()) return;
        try{
            const response = await fetch(`http://localhost:3001/todos/${editingId}`,{
                method:'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({title: editTitle, description:editDescription, category:editCategory, dueDate:editDueDate})
            });
            if(!response.ok) throw new Error('Edit Failed');
            await fetchTasks();
            setEditingId(null);
        }catch(error){
            console.error('Error Editing Task:', error);
        }
    };

    // SORTING
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
                        {editingId === task.id ? (
                            <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                <input type="text" value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>
                                <input type="text" value={editDescription} onChange={(e)=>setEditDescription(e.target.value)}/>
                                <input type="text" value={editCategory} onChange={(e)=>setEditCategory(e.target.value)}/>
                                <input type="text" value={editDueDate} onChange={(e)=>setEditDueDate(e.target.value)}/>
                                <div>
                                    <button onClick={saveEdit}>Save</button>
                                    <button onClick={()=>setEditingId(null)}>Cancel</button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.title}</h2>
                                <p>{task.description}</p>
                                <p>Category: {task.category}</p>
                                <p>Due Date: {task.dueDate}</p>
                                <input type="checkbox" checked={task.completed || false} onChange={()=>ToggleCompleted(task.id)}/>
                                <label>Completed</label>
                                <button onClick={()=> startEdit(task)} style={{marginLeft:'10px'}}>Edit</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tasks;