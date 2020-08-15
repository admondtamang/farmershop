import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import graphqlHttp from "express-graphql";
import graphQlSchema from "../graphql/schema";
import graphQlResolvers from "../graphql/resolvers";
import isAuth from "../middleware/is-auth";
import dotenv from "dotenv";
// import passport from "passport";

export default (app) => {
  app.use(cors());
  app.options("*", cors());
  dotenv.config();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morgan("dev"));
  app.use(isAuth);
  app.use(
    "/graphql",
    graphqlHttp({
      schema: graphQlSchema,
      rootValue: graphQlResolvers,
      graphiql: true,
    })
  );
};
