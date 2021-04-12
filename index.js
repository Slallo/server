const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000);

app.get("/ehi", function (req, res) {
  res.json({ title: "Titolo" });
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-uox7n.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log("Server is running")))
  .catch((error) => {
    throw error;
  });
