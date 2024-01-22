var express = require("express");
var path = require("path");
var logger = require("morgan");
require("dotenv").config();
const apiRouter = require('./routes/v1');
var apiResponse = require("./utils/apiResponse");
var cors = require("cors");
var multer = require('multer');
const { jwtStrategy } = require('./config/passport');
const passport = require('passport');

var bodyParser = require('body-parser');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,__dirname + '/public/uploads')
    },
    filename: function(req, file, cb) {
		cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });


// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	//don't show the log when it is test
	if(process.env.NODE_ENV !== "test") {
		console.log("Connected to %s", MONGODB_URL);
		console.log("App is running ... \n");
		console.log("Press CTRL + C to stop the process. \n");
	}
})
	.catch(err => {
		console.error("App starting error:", err.message);
		process.exit(1);
	});
// var db = mongoose.connection;
var app = express();
//don't show the log when it is test
if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/uploads/*")));
var up = upload.single('image');
app.use(up);
app.use(function (err, req, res, next) {
	console.error(err)
	// Return the error however you'd like
	res.status(401).send(err)
  });
//To allow cross-origin requests
passport.use('jwt', jwtStrategy);

//Route Prefixes
app.use("/api/v1", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});

app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

module.exports = app;
