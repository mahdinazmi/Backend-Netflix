import express from "express";
import {
	getMovieDetails,
	getMoviesByCategory,
	getMovieTrailer,
	getSimilarMovies,
	getTrendingMovie,
	getNowPlayingMovies,
	getRecommendationMovies
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/nowplaying", getNowPlayingMovies);
router.get("/:id/trailer", getMovieTrailer);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:id/recommendations", getRecommendationMovies);
router.get("/:category", getMoviesByCategory);

export default router;
