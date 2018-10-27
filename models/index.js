var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/componentsApi', { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports.User= require("./usermodel");
module.exports.Component = require("./components");