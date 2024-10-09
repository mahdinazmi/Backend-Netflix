import express from "express";
import {
	getSimilarTvs,
	getTrendingTv,
	getTvDetails,
	getTvsByCategory,
	getTvTrailers,
	getPopularTv,
	getRecommendationTvs,
	getTvKeywords
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/trending", getTrendingTv);
router.get("/popular", getPopularTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:id/recommendations", getRecommendationTvs);
router.get("/:id/keywords", getTvKeywords);
router.get("/:category", getTvsByCategory);

export default router;
