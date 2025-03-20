import express from 'express';
import { getAllEmployees, saveEmployee } from '../services/employeeService.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await getAllEmployees();
        if (response.success) {
            return res.status(200).send({ data: response.data })
        } else throw new Error('Error in get api');
    } catch (err) {
        console.log('get api controller catch ', err);
        return res.status(400).send({ message: err.message || '' });
    }
})

router.post('/insert', async ( req, res )=>{
    try {
        const response = await saveEmployee(req.body);
        if(response.success){
            return res.status(201).send({data : response.data})
        } else throw new Error('Error in post api');
    }catch(err){
        console.log('post api controller catch ', err);
        return res.status(400).send({ message: err.message || '' });
    }
})
export default router;