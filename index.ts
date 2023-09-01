import express from 'express';
import { rootSchema } from './root-query-schema';
import { graphqlHTTP } from 'express-graphql';

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();

app.all(
	'/graphql',
	graphqlHTTP({
		graphiql: true,
		schema: rootSchema,
	})
);

app.listen({ port: 4000 });
console.log('Listening to port 4000');
