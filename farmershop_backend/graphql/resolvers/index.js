import Product from "../../models/product";
import authResolver from "./authResolver";

const fs = require("fs");

const storeFS = ({ stream, filename }) => {
  const uploadDir = "../backend/photos";
  const path = `${uploadDir}/${filename}`;
  return new Promise((resolve, reject) =>
    stream
      .on("error", (error) => {
        if (stream.truncated)
          // delete the truncated file
          fs.unlinkSync(path);
        reject(error);
      })
      .pipe(fs.createWriteStream(path))
      .on("error", (error) => reject(error))
      .on("finish", () => resolve({ path }))
  );
};

const root = {
  ...authResolver,
  createProduct: async (args, req) => {
    console.log(req);
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    try {
      const product = new Product({
        name: args.productInput.name,
        price: +args.productInput.price, // + for converting string into int
        quantity: +args.productInput.quantity,
        weight: args.productInput.weight,
        description: args.productInput.description,
        creator: req.userId,
        type: "product",
      });
      const result = await product.save();
      return result;
    } catch (err) {
      throw err;
    }
  },
  addPhoto: async (args) => {
    const { description, tags } = args;
    const { filename, mimetype, createReadStream } = await args.file;
    const stream = createReadStream();
    const pathObj = await storeFS({ stream, filename });
    const fileLocation = pathObj.path;
    const photo = await models.Photo.create({
      fileLocation,
      description,
      tags,
    });
    return photo;
  },
  singleUpload: (parent, args) => {
    return args.file.then((file) => {
      const { createReadStream, filename, mimetype } = file;

      const fileStream = createReadStream();

      fileStream.pipe(fs.createWriteStream(`./uploadedFiles/${filename}`));

      return file;
    });
  },
};
export default root;
