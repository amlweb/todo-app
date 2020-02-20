const Task = require('./models/task');

module.exports = {
    tasks: () => {
        // return all the blogs unfiltered using Model
        return Task.find().then(tasks => {
            return tasks
        }).catch(err => {
            throw err
        })
    },
    createTask: (args) => {
        const task = new Task({
            title: args.taskInput.title,
            description: args.taskInput.description,
            date: new Date(),
            isDone: false,
        });

        // save new blog using model which will save in MongoDB
        return task.save().then(result => {
            console.log(result)
            return result
        }).catch(err => {
            console.log(err)
            throw err
        })
    }
}