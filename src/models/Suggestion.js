const mongoose = require('mongoose');

const SuggestionSchema = new mongoose.Schema({

    date: String,
    hour: String,
    title: String,
    description: String,
    email: String,
    id_file: String,
    file: String
});

module.exports = mongoose.model('suggestion', SuggestionSchema);