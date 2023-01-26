const express = require("express");
const { generateFitnessIdeas } = require("../controllers/openaiControllers");

const router = express.Router();

router.post("/fitnessgenerator", generateFitnessIdeas)

module.exports = router