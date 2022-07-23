const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
} = graphql;

var books = [
  { name: "Book 1", genre: "genre 1", id: "1", authorId: "1" },
  { name: "Book 2", genre: "genre 2", id: "2", authorId: "2" },
  { name: "Book 3", genre: "genre 3", id: "3", authorId: "3" },
];

var authors = [
  { name: "Author 1", age: "25", id: "1" },
  { name: "Author 2", age: "26", id: "2" },
  { name: "Author 3", age: "27", id: "3" },
];

var studentList = [
  { id: "1", name: "suriya", class: "12th", rank: "1" },
  { id: "2", name: "vijay", class: "10th", rank: "3" },
  { id: "3", name: "ajith", class: "8th", rank: "2" },
];

const StudentListType = new GraphQLObjectType({
  name: "StudentList",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    class: {
      type: GraphQLString,
    },
    rank: {
      type: GraphQLString,
    },
    bookDetails: {
      type: BookType,
      resolve(parent, args) {
        return _.find(books, { id: parent.id });
      },
    },
  }),
});

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
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(authors, { id: parent.authorId });
      },
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
      type: GraphQLInt,
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    studentList: {
      type: StudentListType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db
        return _.find(studentList, { id: args.id });
      },
    },

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
