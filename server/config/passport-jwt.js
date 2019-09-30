const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('./keys')
const passport = require('passport')
const User = require('../api/user/user.model')

var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.jwtSecret;

module.exports  = configJWTStrategy = ()=>{
    passport.use(new JwtStrategy(opts, function(payload, done) {
        User.findOne({_id: payload.id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
                // or you could create a new account
            }
        });
    }));
}
