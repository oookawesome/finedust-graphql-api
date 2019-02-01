import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from "./schema";
import {RestAPI} from "./datasources/rest-openapi";
import {resolvers} from "./resolvers";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      restApi: new RestAPI()
    })
});

const app = express();
server.applyMiddleware({app});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});