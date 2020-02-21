const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { TaskQuery } = require('./query/TaskQuery');
const { CreateTask, UpdateTask, DeleteTask } = require('./mutation/TaskMutation');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    tasks: TaskQuery
  })
});

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createTask: CreateTask,
    deleteTask: DeleteTask,
    updateTask: UpdateTask
  })
});

const schema = new GraphQLSchema({ 
  query: QueryType, 
  mutation: MutationType 
});

module.exports = schema;