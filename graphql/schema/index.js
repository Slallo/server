const { buildSchema } = require("graphql");

module.exports = buildSchema(`

  type Position {
    _id: ID!
    type: String!
    notes: String
    createdAt: String!
    coordinates: [Float]!
    gravity: GravityEnum
  }


  input PositionInput {
    type: String!
    notes: String
    coordinates: [Float]!
    gravity: String!
  }

  type Query {
    positions:[Position!]
  }

  type Mutation {
    createPosition(position:PositionInput): Position
  }

  enum GravityEnum {
    Bassa
    Media
    Alta
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
