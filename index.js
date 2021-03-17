const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
 
const typeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
      file(name: Upload): String!
  }
`;
 
const resolvers = {
  Query: {
    hello: (parent, args, {req, res}) => {
        
        console.log(req.headers)
        res.cookie('cookieName',23, { maxAge: 900000, httpOnly: true })
        return 'Hello world!'
    },
  },
};
 
const server = new ApolloServer({ 
  typeDefs, 
  resolvers, 
  playground: true , 
  context: ({req, res})=>({req, res})
});
 
const app = express();
server.applyMiddleware({ app , path:''});

app.use('/', (req, res, next)=>{
    res.send('Hello')
})


 
app.listen({ port: 5000 }, () =>
  console.log('Now browse to http://localhost:5000' + server.graphqlPath)
);