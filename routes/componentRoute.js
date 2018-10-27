var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/componentHelper");

router.route('/api')
    .get(helpers.getComponents)
    .post(helpers.createComponents)



router.route('/api/:id')
    .put(helpers.updateComponents)
    .delete(helpers.deleteComponents)
    .get(helpers.singleComponent);



module.exports = router;