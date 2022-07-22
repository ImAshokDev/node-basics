const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

var books = [
  { name: "Book 1", genre: "genre 1", id: "1" },
  { name: "Book 2", genre: "genre 2", id: "2" },
  { name: "Book 3", genre: "genre 3", id: "3" },
];

var authors = [
  { name: "Author 1", age: "25", id: "1" },
  { name: "Author 2", age: "26", id: "2" },
  { name: "Author 3", age: "27", id: "3" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(books, { id: args.id });
      },
    },

    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(authors, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});