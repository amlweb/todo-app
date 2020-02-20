const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema');
const rootValue = require('./rootValue');

const API_PORT = 4000;
const dbRoute = 'mongodb+srv://aml:amlweb@todo-cluster-dh9vh.gcp.mongodb.net/test?retryWrites=true&w=majority';


// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// use GraphQL
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true, // enable the graphiql interface
}));

// connect mongodb and then set up server to run on port API_PORT
mongoose.connect(dbRoute, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(API_PORT);
    console.log(`Listening..... on port ${API_PORT}`);
}).catch(err => {
    console.log(err);
})
