const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Coordinates {
    lat: Float,
    lon: Float,
  },

  type Position {
    _id: ID!
    type: String!
    notes: String
    createdAt: String!
    coordinates: [Coordinates]!
  }


  input PositionInput {
    type: String!
    notes: String
    coordinates: [Coordinates]!
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
