import mongoose from "mongoose";

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DB_TEST || process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  mongoose.set("debug", true);
  mongoose.connection
    .once("open", () => console.log("Mongodb running"))
    .on("error", (err) => console.error(err));
};
