import gql from "graphql-tag";

export const typeDefs = gql`
  type Todo {
    id: ID!
    task: String!
    completed: Boolean!
    tags: [String!]!
  }

  type Query {
    getTodos: [Todo!]!
  }
`;
