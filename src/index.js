import express from 'express'
import {ApolloServer, gql} from 'apollo-server-express'


const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const app = express();
server.applyMiddleware({app});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});