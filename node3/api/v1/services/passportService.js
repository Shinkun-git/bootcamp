import passport from 'passport';
import pkg from 'passport-google-oauth20';
import pkgGithub from 'passport-github2';
import config from '../../../config/index.js';
const GoogleStrategy = pkg.Strategy;
const GitHubStrategy = pkgGithub.Strategy;

passport.use(new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL,
},
    function (request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.use(new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL,
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
    done(null, user.id); // Store the entire user object in the session
});

passport.deserializeUser((id, done) => {
    done(null,{name:"dummy", age:20}); // Retrieve user from session
});

export default passport;