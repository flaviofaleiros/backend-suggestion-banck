const express = require('express');

const SuggestionController = require('./controllers/SuggestionController');
const Suggestion = require('./models/Suggestion');

const routes = express.Router();

routes.get("/suggestion", async (req, res) => {
    const suggestion = await Suggestion.find();
    return res.json(suggestion);
});

routes.post("/suggestion", SuggestionController.store );

routes.delete("/suggestion/:id", async (req, res) => {
    const suggestion = await suggestion.findById(req.params.id);
    await suggestion.remove();
    return res.send();
});

module.exports = routes; 
