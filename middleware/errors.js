function errorHandler(err, req, res, next) {
  if (typeof err === "string") {
    //custom application error
    return res.status(400).json({ message: err });
  }

  if (err.name === "ValidationError") {
    //mongose valiation error
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "UnauthorizedError") {
    //jwt authentication error
    return res.status(401).json({ message: "Token Not Valid" });
  }

  return res.status(500).json({ message: err.message });
}

module.exports = {
  errorHandler,
};
