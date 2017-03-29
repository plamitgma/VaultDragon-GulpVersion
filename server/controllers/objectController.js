var Object = require("../models/object");

module.exports = {

    update: function(req, res, next) {
        var data = req.body;
        var timestamp = new Date().getTime();
        var new_object = new Object({
            key: data.key,
            value: data.value,
            timestamp: Math.floor(timestamp / 1000)
        });
        new_object.save(function(error, response) {
            if (error) {
                console.log("error = ", error);
                res.status(503).end();
            } else if (response) {
                res.status(200);
                res.json(response);
            }
        });
    },

    get: function(req, res, next) {
        var key = req.params.key;
        var timestamp = req.query.timestamp;
        if (!timestamp) {
            timestamp = new Date().getTime();
            timestamp = Math.floor(timestamp / 1000);
        }
        Object.findOne({ $and: [{ key: { $eq: key } }, { timestamp: { $lte: timestamp } }] })
            .sort({ "timestamp": -1 })
            .exec(function(err, response) {
                if (err) {
                    next(err);
                    return;
                }
                console.log(response);
                res.json(response);
            })
    }
};