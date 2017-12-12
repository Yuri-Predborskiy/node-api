'use strict';

module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
        // You'll create your note here.
        console.log(`received the following data: ${JSON.stringify(req.body)}`);
        res.send('Hello')
    });
};