const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Task {
    _id: ID!
    title: String!
    description: String!
    date: String
    isDone: Boolean
  }

  input TaskInput {
    title: String!
    description: String!
  }

  type taskQuery {
    tasks: [Task!]!
  }

  type taskMutation {
    createTask(taskInput: TaskInput): Task
  }

  schema {
      query: taskQuery
      mutation: taskMutation
  }
`)