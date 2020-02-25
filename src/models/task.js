const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        require: false
    },
    done: {
        type: Boolean,
        required: true
    }
    
});

module.exports = mongoose.model('Task', taskSchema);