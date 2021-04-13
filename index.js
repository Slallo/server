const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");
const mongoose = require("mongoose");
const router = express.Router();

app.get("/", (req, res) => {
  res.send(`Hello World!`);
});

app.listen(process.env.PORT || 5000);

app.get("/ehi", function (req, res) {
  res.json({ title: "Titolo" });
});

router.get("/articles", function (req, res, next) {
  graphqlResolvers.articles
    .find({})
    .then(function (articles) {
      res.send(articles);
    })
    .catch(next);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@sandbox-shard-00-00.dnjvp.mongodb.net:27017,sandbox-shard-00-01.dnjvp.mongodb.net:27017,sandbox-shard-00-02.dnjvp.mongodb.net:27017/${process.env.MONGO_DB}?ssl=true&replicaSet=atlas-yivg7u-shard-0&authSource=admin&retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log("Server is running")))
  .catch((error) => {
    throw error;
  });

app.use(express.static("public"));
