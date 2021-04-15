const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Position {
    _id: ID!
    type: String!
    notes: String
    createdAt: String!
    coordinates: Array!
  }


  input PositionInput {
    type: String!
    notes: String
    coordinates: Array!
  }

  type Query {
    positions:[Position!]
  }

  type Mutation {
    createPosition(article:PositionInput): Position
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
