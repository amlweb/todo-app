const chalk = require('chalk');
const Task = require('../models/task');

class TaskService {
  tasks() {
    console.log('get all tasks')
    // return all the blogs unfiltered using Model
    return Task.find().then(tasks => {
      return tasks
    }).catch(err => {
      throw err
    })
  }

  updateTask(_id, opt) {
    console.log('update')
  }

  deleteTask(_id) {
    console.log('delate')
  }

  createTask(opt) {
    console.log('create');

    const task = new Task({
      title: opt.title,
      content: opt.content,
      done: false,
    });

    // save new blog using model which will save in MongoDB
    return task.save()
      .then(result => {
        console.log(chalk.gray(result))
        return result
      })
      .catch(err => {
        console.log(err)
        throw err
      })
  }
}

module.exports = TaskService;