const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const resolver = require("./resolver.js");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

const stringifiedSchema = fs.readFileSync(
  path.resolve(__dirname, "schema.graphql"),
  "utf-8"
);
const schema = buildSchema(stringifiedSchema);

app.use(
  "/graphql",
  graphqlHTTP({
    rootValue: resolver,
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => console.log("Server started: http://localhost:3000"));
