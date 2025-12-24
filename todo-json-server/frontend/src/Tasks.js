import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from './ThemeContext';
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

    const[filterCategory, setFilterCategory] = useState('All');

    const{isDark} = useContext(ThemeContext);

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

    // DELETE
    const deleteTask = async(id)=>{
        if(!window.confirm('Delete task?'))return;
        try{
            const response = await fetch(`http://localhost:3001/todos/${id}`,{
                method: 'DELETE'
            });
            if(!response.ok)throw new Error('Delete Failed');
            fetchTasks();
        }catch(error){
            console.error('Error Deleteing Task');
        }
    };

    const filteredTasks = tasks.filter(task=>{
        if(filterCategory === 'All')return true;
        return task.category === filterCategory;
    });

    // SORTING
    const displayedTasks = [...filteredTasks].sort((a, b)=>{
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    const uniqueCategory = [...new Set(tasks.map(t=>t.category))].filter(Boolean);
    return(
        <div style={{background: isDark ? 'darkgrey':'white', color: isDark ? 'white':'black',padding: '20px', minHeight:'100vh', transition:'all 0.3s ease'}}>
            <h1>Task List</h1>
            <form onSubmit={(e)=>{e.preventDefault(); addTask();}} style={{marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px'}}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title" />
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Description" />
                <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Category" />
                <input type="date" value={dueDate} onChange={(e)=>setDueDate(e.target.value)} />
                <button type="submit">Add Task</button>
            </form>
            <div style={{marginBottom: '20px', display: 'flex', gap: '15px'}}>
                <button onClick={()=>setSortOrder(sortOrder==='asc' ? 'desc' : 'asc')}>
                    Sort by Date: {sortOrder === 'asc' ? '(oldest first)' : '(newest first)'}
                </button>
                <div>
                    <label>Filter: </label>
                    <select value={filterCategory} onChange={(e)=>setFilterCategory(e.target.value)}>
                        <option value="All">All Categories</option>
                        {uniqueCategory.map(cat=>(
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            </div>
            <ul style={{padding:0}}>
                {displayedTasks.map(task => (
                    <li key={task.id} style={{margin:'10px 0', padding:'10px',listStyle:'none', background: task.completed ? '#2e4d2e' : (isDark ? '#333' : '#f9f9f9'), border: isDark ? '1px solid #444':'1px solid grey #ddd',borderRadius: '5px'}}>
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
                                <h2 style={{textDecoration: task.completed ? 'line-through' : 'none', margin: 0}}>{task.title}</h2>
                                <p>{task.description}</p>
                                <p>Category: {task.category}</p>
                                <p>Due Date: {task.dueDate}</p>
                                <input type="checkbox" checked={task.completed || false} onChange={()=>ToggleCompleted(task.id)}/>
                                <label>Completed</label>
                                <div style={{marginTop: '10px'}}>
                                    <button onClick={()=> startEdit(task)} style={{marginLeft:'10px'}}>Edit</button>
                                    <button onClick={()=> deleteTask(task.id)} style={{marginLeft:'10px', color:'red'}}>Delete</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Tasks;