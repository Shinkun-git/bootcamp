import express from 'express';

import {registerUser } from "../services/localRegisterService.js";

const router = express.Router();

router.post('/', async(req,res)=>{
    try{
        const response = await registerUser(req.body);
        if(response){
            const {name, age} = req;
            return res.status(201).render('home',{name,age});
        } else throw new Error('No response');
    } catch (err) {
        console.log('post register api controller catch ', err);
        return res.status(400).send({ message: err.message || '' });
    }
})

export default router;