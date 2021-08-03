const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['completed', 'incompleted']
    }
})

const Task = mongoose.model('Task', productSchema);

module.exports = Task;