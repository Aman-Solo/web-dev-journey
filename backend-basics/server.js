const express = require('express');
const app = express();
const PORT = 3002;
app.use(express.json());

let tasks = [];
app.get('/', (req, res)=>{
    res.send('Welcome to express!');
});
app.get('/tasks', (req, res)=>{
    res.json(tasks);
});
app.post('/tasks', (req, res)=>{
    const newTask = req.body.task;
    if(!newTask){
        return res.status(400).json({message: "Task is required"});
    }
    tasks.push(newTask);
    res.json({message: 'Task Added', tasks: tasks});        
});
app.delete('/tasks/:index', (req, res)=>{
    const index = parseInt(req.params.index);
    if(isNaN(index) || index<0 || index>=tasks.length){
        return res.status(404).json({message: 'Taks not found'});
    }
    const deletedTask = tasks.splice(index, 1);

    res.json({message: 'task deleted successfully', deleted: deletedTask, tasks:tasks});
});
app.listen(PORT, ()=>{
    console.log('server running on http://localhost:${PORT}');
});