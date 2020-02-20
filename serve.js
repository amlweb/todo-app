const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema');
const rootValue = require('./rootValue');

app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true, // enable the graphiql interface
}));

app.listen(4000);
console.log('Listening.....');