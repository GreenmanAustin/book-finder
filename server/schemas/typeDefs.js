const { gql } = require('apollo-server-express');

const typeDefs = gql`
  

  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    title: String
    image: String
    link: String
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
    description: String
    title: String
    bookId: String
    image: String
    link: String
  }

  type Query {
    me: User
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(content: BookInput): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;