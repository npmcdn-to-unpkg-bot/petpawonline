var passport = require('passport');
// var db = require('./db');

module.exports = function () {
	// var User = db.user;

	passport.serializeUser(function (user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function (id, done) {
		// User.findOne({_id: id}, '-password -salt', function (err, user) {
		// 	done(err, user);
		// });
	});
}