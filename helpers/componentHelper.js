var db = require("../models");

exports.getComponents = function (req, res) {
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        db.Component.find({name:regex}).
        then(function (data) {
            res.json(data);
        }).catch(function (err) {
            console.log(err);
        });

    } else {


        db.Component.find().
        then(function (data) {
            res.json(data);
        }).catch(function (err) {
            console.log(err);
        });
    }

}
exports.createComponents = function (req, res) {
    db.Component.create(req.body).
    then(function (newData) {
        res.json(newData);
    }).catch(function (err) {
        console.log(err);
    });

}
exports.updateComponents = function (req, res) {
    db.Component.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        })
}
exports.deleteComponents = function (req, res) {
    db.Component.remove({
            _id: req.params.id
        })
        .then(function () {
            res.json({
                message: "deleted"
            });
        })
        .catch(function (err) {
            res.send(err);
        })
}
exports.singleComponent = function (req, res) {
    db.Component.findById({
            _id: req.params.id
        })
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        })
}
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.expports = exports;