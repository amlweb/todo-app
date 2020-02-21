const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const schema = require('./graphql/schema');
// const router = require('./router');

const app = express();

const chalk = require('chalk');
const error_msg = chalk.bold.red;
const info_msg = chalk.cyan;
const variable_msg = chalk.yellow;

const API_PORT = 4000;
const dbRoute = 'mongodb+srv://aml:amlweb@todo-cluster-dh9vh.gcp.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // enable the graphiql interface
    pretty: true
}));
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// connect mongodb and then set up server to run on port API_PORT
mongoose.connect(dbRoute, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(info_msg('conected to database.'));

    // append /api for our http requests
    // app.use('/api', router);

    app.listen(API_PORT, () => 
        console.log(info_msg('listening..... on port ') + variable_msg(API_PORT))
    );
}).catch(err => {
    console.log(error_msg(`MongoDB connection error: ${err}`));
})


