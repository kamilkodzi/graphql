import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { graphql, buildSchema } from 'graphql';
const app = express();

const schema = buildSchema(`
  type Query {
    hello: String,
    other: String,
  }
`);

const rootValue = { hello: () => 'Hello world!' };

const source = '{ hello }';

graphql({ schema, source, rootValue }).then((responsesa: any) => {
	console.log(responsesa);
});

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: rootValue,
		graphiql: true,
	})
);
app.listen(3001);
console.log('Running a GraphQL API server at http://localhost:3001/graphql');
