const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(cors());

const stringifiedSchema = fs.readFileSync(
  path.resolve(__dirname, "schema.graphql"),
  "utf-8"
);
const schema = buildSchema(stringifiedSchema);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => console.log("Server started: http://localhost:3000"));
