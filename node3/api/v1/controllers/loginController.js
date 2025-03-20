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
export default router;