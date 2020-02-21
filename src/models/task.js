const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
    
});

module.exports = mongoose.model('Task', taskSchema);