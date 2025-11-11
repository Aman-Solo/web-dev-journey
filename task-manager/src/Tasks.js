import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function Tasks(){
    const {id} = useParams();
    console.log('Task id', id);

    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [editingIndex, setEditingIndex]=useState(null);
    const [editingText, setEditingText]=useState('');
    useEffect(()=>{
        const saved = localStorage.getItem('tasks');
        if(saved){
            setTasks(JSON.parse(saved));
        }
    }, []);
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTasks = ()=>{
        if(input.trim()==='')return;
        setTasks([...tasks, input]);
        setInput('');
    };
    const deleteTask=(index)=>{
        const newTasks = tasks.filter((_, i)=> i!== index);
        setTasks(newTasks);
    };
    const startEdit =(index)=>{
        setEditingIndex(index);
        setEditingText(tasks[index]);
    };
    const saveEdits=()=>{
        const updateTasks =[...tasks];
        updateTasks[editingIndex]=editingText;
        setTasks(updateTasks);
        setEditingIndex(null);
        setEditingText('');
    }
    return(
        <div>
            <h1>Tasks List</h1>
            {id && <p>Viewing Task ID: {id}</p>}
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add Task"/>
            <button onClick={addTasks}>Add</button>
            <ul>
  {tasks.map((task, index) => (
    <li key={index}>
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
          {task}
          <button onClick={() => startEdit(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </>
      )}
    </li>
  ))}
</ul>

        </div>
    );
}
export default Tasks;