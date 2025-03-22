import passport from 'passport';
import pkg from 'passport-google-oauth20';
import pkgGithub from 'passport-github2';
import pkgLocal from 'passport-local';
import config from '../../../config/index.js';
import { authUser } from './localLoginService.js';
import pool from '../../db/index.js';
const GoogleStrategy = pkg.Strategy;
const GitHubStrategy = pkgGithub.Strategy;
const LocalStrategy = pkgLocal.Strategy;

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

passport.use(
    new LocalStrategy(
        { usernameField: "email", passwordField: "password" }, 
        async (email, password, done) => {
            try {
                const response = await authUser({ email, password });
                console.log("Auth Response:", response);
                if (!response.success) {
                    return done(null, false, { message: response.message });
                }
                return done(null, response.data);
            } catch (error) {
                return done(error);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.email); // Store the entire user object in the session
});

passport.deserializeUser(async (email, done) => {
    console.log("Deserializing user with email:", email); // Debugging log
    try {
      const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
  
      if (!result.rowCount) return done(new Error("User not found"));
      
      const user = result.rows[0];
      console.log("User at deserialize" , user);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

export default passport;