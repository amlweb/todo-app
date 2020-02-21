
const { taskType } = require('../taskTypes');
const { GraphQLList } = require('graphql');
const TaskService = require('../../services/TaskService');

const TaskQuery = {
  type: GraphQLList(taskType),
  args: {},
  resolve: async () => {
    const taskService = new TaskService();
    const tasks = await taskService.getAllTasks();

    return tasks;
  }
};

module.exports = { TaskQuery };