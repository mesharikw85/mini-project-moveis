const express = require("express");
connectDataBsae = require("./database");

const moviesRoutes = require("./api/movies/movei.routes");
const dotEnv = require("dotenv");
dotEnv.config();
const errorHandler = require("./middlewares/erroehandler");
const notFoundHandler = require("./middlewares/notFoundHandler");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();

connectDataBsae();

app.use("/media", express.static(path.join(__dirname, "media")));
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

app.use("/movies", moviesRoutes);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(process.env.PORT, () => {
  console.log("The application is running on localhost:8000");
});
