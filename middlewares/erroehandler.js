const erroehandler = (err, req, res, next) => {
  console.log("handler iswork");
  console.log(err);
  return res
    .status(err.status || 500)
    .json({ message: err.message || "somthing went wrong ! error handler" });
};
module.exports = erroehandler;
