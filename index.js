var express = require("express"),
    app = express(),
    boyParser = require("body-parser"),
    componentRoute = require('./routes/componentRoute');



app.use(express.static('public'));
app.use(boyParser.json());
app.use(boyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(componentRoute);

app.get('/', function(req, res) {
    res.render("index");
});

app.set('port', (process.env.PORT || 3300));

app.listen(app.get('port'), function() {
    console.log('Server started on port ' + app.get('port'));
});