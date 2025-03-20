import express from 'express';
import { authUser } from '../services/localLoginService.js';

const router = express.Router();

router.post('/', async(req,res)=>{
    try {
        const response = await authUser(req.body);
        if (response.success) {
            req.session.user = response.data;  // Store user in session
            return res.redirect('/home');      // Redirect to /home
        } else throw new Error('Error while authenticating');
    } catch(err) {
        console.log('post login api controller catch ', err);
        return res.status(400).send({ message: err.message || '' });
    }
})

export default router;