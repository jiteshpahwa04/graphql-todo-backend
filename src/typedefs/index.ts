import gql from "graphql-tag";

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
    tags: [String!]!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    createTodo(title: String!, tags: [String!]!): Todo!
  }
`;
