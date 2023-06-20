const Movie = require("../../db/model/Moveis");

exports.fetchMovie = async (moveiId) => {
  try {
    const foundMovie = await Movie.findById(moveiId);
    return foundMovie;
  } catch (error) {
    console.log(error);
  }
};

exports.movieCreate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.posterImage = `${req.file.path}`;
    }
    const newMovie = await Movie.create(req.body);
    console.log(newMovie);
    return res.status(201).json(newMovie);
  } catch (error) {
    return next(error);
  }
};

exports.movieGet = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.status(201).json(movies);
  } catch (error) {
    return next(error);
  }
};

exports.movieUpdate = async (req, res, next) => {
  try {
    await req.movie.updateOne(req.body);
    return res.status(201).end();
  } catch (error) {
    return next(error);
  }
};

exports.movieDelete = async (req, res, next) => {
  try {
    await req.movie.deleteOne();
    return res.status(201).end();
  } catch (error) {
    return next(error);
  }
};
