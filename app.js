const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Task = require('./models/task');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/tasks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const categories = ['completed', 'incompleted'];

app.get("/tasks", async (req, res) => {
    const { category } = req.query;
    if (category) {
        const tasks = await Task.find({ category })
        res.render("tasks/index", { tasks, category });
    } else {
        const tasks = await Task.find({})
        res.render("tasks/index", { tasks, category: "All" });
    }
})

app.get('/tasks/new', (req, res) => {
    res.render('tasks/new', { categories })
});

app.post('/tasks', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.redirect(`/tasks/${newTask._id}`)
})

app.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('tasks/show', { task })
})

app.get('/tasks/:id/edit', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('tasks/edit', { task, categories });
})

app.put('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/tasks/${task._id}`);
})

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    res.redirect('/tasks');
})

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});