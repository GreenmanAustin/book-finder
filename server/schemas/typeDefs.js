const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

  type Book {
    _id: ID
    authors: [String]
    bookId: String
    description: String
    title: String
    image: String
  }


  type Author {
    _id: ID
    name: String
  }


  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    bookId: String
    description: String
    title: String
    image: String
  }

  type Query {
    me: User
    users: [User]
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: BookInput): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;