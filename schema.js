const { 
  buildSchema ,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  description: '...',

  fields: () => {
    title: {
      type: GraphQLString,
      resolve; () => {}
    }
    isDone: {
      type: GraphQLBoolean
    }
  }
});

module.exports = buildSchema(`
  type taskQuery {
    tasks: [String!]!
  }

  type taskMutation {
    createTask(title: String): String
  }

  schema {
      query: taskQuery
      mutation: taskMutation
  }
`)