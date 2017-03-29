var express = require('express');
var router = express.Router();
var objectController = require('./controllers/objectController');

module.exports = function() {
    router.route("/:key")
        .get(objectController.get);
    router.route("/")
        .post(objectController.update)
    return router;
};