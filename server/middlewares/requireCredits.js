module.exports = (req, res, next) => {
  if (req.user.credit < 1) {
    return res.status(401).send({ error: "you don't have enough credits" });
  }

  next();
};
