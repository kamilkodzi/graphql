import {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLString,
} from 'graphql';
import { books } from './data';

export const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: () => ({
		books: {
			type: new GraphQLList(BookType),
			description: 'List of books types',
			resolve: () => books,
		},
	}),
});

const BookType = new GraphQLObjectType({
	name: 'Book',
	description: 'This represent book written by an author',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) },
		name: { type: GraphQLNonNull(GraphQLString) },
		authorId: { type: GraphQLNonNull(GraphQLInt) },
	}),
});

const schema = new GraphQLSchema({
	query: RootQueryType,
});

export { schema as rootSchema };
