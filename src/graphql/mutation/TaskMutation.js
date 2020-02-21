/* eslint-disable no-unused-vars */
const { taskType } = require('../taskTypes');
const TaskService = require('../../services/TaskService');
const { GraphQLString, GraphQLID, GraphQLBoolean } = require('graphql');

const CreateTask = {
  type: taskType,
  args: {
    title: { type: GraphQLString },
    content: { type: GraphQLString }
  },
  resolve: async (_, { title, content }) => {
    const taskService = new TaskService();
    const newTask = await taskService.createTask({ title, content });

    return newTask;
  }
};

const DeleteTask = {
  type: GraphQLID,
  args: {
    _id: { type: GraphQLID }
  },
  resolve: async (_, { _id }) => {
    const taskService = new TaskService();
    const res = await taskService.deleteTask(_id);

    if (res.ok) {
      return _id;
    }
  }
};

const UpdateTask = {
  type: taskType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    done: { type: GraphQLBoolean }
  },
  resolve: async (_, { _id, content }) => {
    const taskService = new ToteService();
    const updatedTask = await taskService.updateTask(_id, { title, content, done });

    return updatedTask;
  }
};

module.exports = { CreateTask, UpdateTask, DeleteTask };