const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = require('graphql');

const taskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    done: { type: GraphQLBoolean }
  }
});

module.exports = { taskType };