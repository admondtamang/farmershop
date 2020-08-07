import express from "express";
import middlewaresConfig from "./config/middlewares";

import dbConfig from "./config/db";
const app = express();
dbConfig();
middlewaresConfig(app);

const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${PORT}`);
  }
});
