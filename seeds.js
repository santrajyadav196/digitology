const mongoose = require('mongoose');
const Task = require('./models/task');

mongoose.connect('mongodb://localhost:27017/tasks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const task = new Task({
//     name: "santu",
//     description: "you can apply any time technique with Task Player. Just create tasks that fit your technique.",
//     category: "completed"
// })
// task.save()
//     .then(res => { console.log(res) })
//     .catch(err => { console.log(err) })


// const seedsTasks = [
//     {
//         name: 'sant',
//         description: "you can apply any time technique with Task Player. Just create tasks that fit your technique.",
//         category: 'completed'
//     },
//     {
//         name: 'santraj',
//         description: "you can apply any time technique with Task Player. Just create tasks that fit your technique.",
//         category: 'completed'
//     },
//     {
//         name: 'raj',
//         description: "you can apply any time technique with Task Player. Just create tasks that fit your technique.",
//         category: 'incompleted'
//     },
//     {
//         name: 'santraaz',
//         description: "you can apply any time technique with Task Player. Just create tasks that fit your technique.",
//         category: 'incompleted'
//     },
//     {
//         name: 'raaz',
//         description: "you can apply any time technique with Task Player. Just create tasks that fit your technique.",
//         category: 'incompleted'
//     }
// ]

// Task.insertMany(seedsTasks)
//     .then(res => { console.log(res) })
//     .catch(err => { console.log(err) })

