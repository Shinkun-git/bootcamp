import express from 'express';
import passport from '../services/passportService.js';

const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope:
        ['email', 'profile'],
        prompt: 'select_account',
}));

router.get('/google/callback', passport.authenticate('google', {
    session: false,
}), async (req, res) => {
    try {
        console.log('success', req.user);
        res.redirect(`http://localhost:5001?token=jafldk`);
    } catch (err) {
        console.log('catch block of google callback', err);
    }
});

router.get('/github', passport.authenticate('github',{
    scope:['user:email'],
}));

router.get('/github/callback',passport.authenticate('github', {failureRedirect:'/login'}),
    function(req,res){
        res.redirect('/home');
    }
)

router.post("/localLogin", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) return res.status(500).json({ success: false, message: err.message });
      if (!user) return res.status(401).json({ success: false, message: info.message });
      console.log("User authenticated:", user);
      req.login(user, (err) => {
        if (err) {
            console.error("Login error:", err);
            return res.status(500).json({ success: false, message: "Login failed" });
          }
        return res.redirect('/home');
      });
    })(req, res, next);
  });


export default router;