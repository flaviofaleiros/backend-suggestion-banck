const Suggestion = require('../models/Suggestion');

module.exports = {
    async store(req, res) {
        const { date } = req.body;
        const { hour } = req.body;
        const { title } = req.body;
        const { description } = req.body;
        const { email } = req.body;
        const { id_file } = req.body;
        const { file } = req.body;

        let suggestion = await Suggestion.findOne({ title: title, description: description });

        if (!suggestion) {
            const suggestion = await Suggestion.create({
                date,
                hour,
                title,
                description,
                email,
                id_file,
                file
            });
            return res.json(suggestion);
        } else {
            return res.json({Description: "Sugestão já Cadastrada!"});
        }


    }

};