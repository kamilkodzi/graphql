import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'HelloWorld',
		fields: {
			message: {
				type: GraphQLString,
				resolve: () => 'Hello World',
			},
		},
	}),
});

export {schema as helloSchema}