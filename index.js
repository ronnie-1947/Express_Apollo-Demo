import express from 'express'
import { ApolloServer} from 'apollo-server-express'

import resolvers from './resolvers/resolver.js'
import schema from './schema/schema.js'


const apolloServer = new ApolloServer({typeDefs:schema, resolvers, playground:true, context: ({req, res})=>({req,res})})
 
const app = express();
apolloServer.applyMiddleware({ app , path:'/graphql'});

app.use('/', (req, res, next)=>{
    res.send('Hello')
})
 
app.listen({ port: 5000 }, () =>
  console.log('Now browse to http://localhost:5000' + apolloServer.graphqlPath) 
);