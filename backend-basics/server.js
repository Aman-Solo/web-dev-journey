const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.use((req, res, next)=>{
    const authHeader = req.header('auth');

    if(authHeader !== 'secret'){
        return res.status(401).json({error: "Unauthorized - missing or invalid auth token"});
    }
    next();
});
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use((req, res, next)=>{
    if(req.method === 'POST' && req.url === '/tasks' && !req.body.task){
        return res.status(400).send('Task is required');
    }
    next();
});

let tasks = [];

app.get('/tasks', (req, res) =>{
    res.json(tasks);
});
app.post('/tasks', (req, res)=>{
    const newTask = req.body.task;
    tasks.push(newTask);
    res.json({message: 'Task Added', tasks});
});

app.put('/tasks/:index', (req, res)=>{
    const index = parseInt(req.params.index);
    const newTask = req.body.task;
    if(index <0 || index >=tasks.length){
        return res.status(400).send('Task not found');
    }
    tasks[index] = newTask;
    res.json({message: 'Task updated', tasks});
});
app.delete('/tasks/:index', (req, res)=>{
    const index = parseInt(req.params.index);

    if(index <0 || index>= tasks.length){
        return res.status(400).send('Task not found');
    }
    const deleted =tasks.splice(index, 1);
    res.json({
        message: 'Task Deleted',
        deleted,
        tasks
    });
});
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Server error');
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});