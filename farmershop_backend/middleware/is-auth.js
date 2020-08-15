import jwt from "jsonwebtoken";

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    console.log("Try", token);
    console.log("Try", process.env.SECRET);
    decodedToken = jwt.verify(token, process.env.SECRET);
    console.log("Dedcode", decodedToken);
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    console.log("not decode");
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = decodedToken.userId;
  console.log("every thing is ok", req.isAuth + req.userId);
  next();
};
