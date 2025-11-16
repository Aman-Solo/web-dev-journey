import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ThemeContext} from './ThemeContext';
import {completedContext} from './completedContext';

function Tasks(){
    const {id} = useParams();
    console.log('Task id', id);

    const{isDark}=useContext(ThemeContext);
    const{completedCount, setCompletedCount}=useContext(completedContext);

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editingIndex, setEditingIndex]=useState(null);
    const [editingText, setEditingText]=useState('');
   // Load saved tasks (migrate if needed)
useEffect(() => {
  const saved = localStorage.getItem('tasks');
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);

    // If it's already the new format (array of objects with text property), use it.
    if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0] !== null && 'text' in parsed[0]) {
      setTasks(parsed);
      return;
    }

    // If it's an array of strings (old format), convert each string -> object
    if (Array.isArray(parsed) && parsed.length >= 0 && (typeof parsed[0] === 'string' || parsed.length === 0)) {
      const migrated = parsed.map(str => ({ text: String(str), completed: false }));
      setTasks(migrated);
      // also save back immediately in new format so migration is persisted
      localStorage.setItem('tasks', JSON.stringify(migrated));
      return;
    }

    // fallback: empty array
    setTasks([]);
  } catch (err) {
    console.error('Failed to parse saved tasks, starting fresh', err);
    setTasks([]);
  }
}, []); // run once on mount

    useEffect(()=>{
      localStorage.setItem('tasks', JSON.stringify(tasks));
      const count = tasks.filter((task)=>task.completed).length;
      setCompletedCount(count);
    }, [tasks, setCompletedCount]);
    useEffect(() => {
  console.log('Loaded tasks (post-migration):', tasks);
}, [tasks]);


    const addTasks = ()=>{
        if(input.trim()==='')return;
        const newTask = {text:input, completed: false};
        setTasks(prev=>[...prev, newTask]);
        setInput('');
    };
    const deleteTask=(index)=>{
        setTasks(prev=>prev.filter((_, i)=> i!==index));
    };
    const startEdit =(index)=>{
        setEditingIndex(index);
        setEditingText(tasks[index].text);
    };
    const saveEdits=()=>{
        const updateTasks =[...tasks];
        updateTasks[editingIndex]={
          ...updateTasks[editingIndex], text: editingText
        };
        setTasks(updateTasks);
        setEditingIndex(null);
        setEditingText('');
    }
    const toggleComplete = (index)=>{
      setTasks(prev=>prev.map((task,i)=> i===index ? {...task, completed:!task.completed}: task));
    };
    return(
        <div style={{background:isDark? '#2f4f4f':'white', color:isDark? 'white':'#2f4f4f'}}>
            <h1>Tasks List</h1>
            {id && <p>Viewing Task ID: {id}</p>}
            <p>Completed: <strong>{completedCount}</strong>/{tasks.length}</p>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add Task"/>
            <button onClick={addTasks}>Add</button>
            <ul>
  {tasks.map((task, index) => (
    <li key={index} style={{marginTop:'10px'}}>
      {editingIndex === index ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={saveEdits}>Save</button>
          <button onClick={() => setEditingIndex(null)}>Cancel</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => startEdit(index)}>Edit</button>
          <button onClick={() => deleteTask(index)} style={{marginLeft:'10px'}}>Delete</button>
        </>
      )}
      <input type="checkbox" checked={!!task.completed} onChange={()=> toggleComplete(index)}/>
      <span style={{textDecoration: task.completed ? 'line-through':'none', marginLeft:'8px'}}>
        {task.text}
      </span>
    </li>
  ))}
</ul>

       </div>
    );
}
export default Tasks;