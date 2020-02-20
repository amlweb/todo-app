const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema');

app.use(bodyParser.json());
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true,
// }));

app.get('/', (request, response, next) => {
    response.send('I am alive');
})

app.listen(4000);
console.log('Listening.....');