const express = require("express");
const app = express();
const graphqlHttp = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 5000);

app.get("/ehi", function (req, res) {
  res.json({ title: "Titolo" });
});

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@sandbox.dnjvp.mongodb.net${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() => app.listen(3000, console.log("Server is running")))
  .catch((error) => {
    throw error;
  });
