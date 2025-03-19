import express from 'express';
import { getAllStudents, addStudent, deleteStudent, updateStudent, studentByName } from '../services/studentServices.js';

const router = express.Router();

router.get('/', async(req,res) =>{
    try {
        const response = await getAllStudents();
        if(response.success){
            return res.status(200).send({data: response.data});
        } else throw new Error('Error in get API');
    } catch (err){
        console.log('Get api controller catch ',err);
        return res.status(400).send({message: err.message || ''});
    }
})

router.post('/addStudent', async(req, res)=>{
    try{
        const response = await addStudent(req.body);
        if(response.success){
            return res.status(201).send({data: response.data});
        } else throw new Error('Error in post api');
    } catch(err){
        console.log('post api controller catch ',err);
        return res.status(400).send({message: err.message});
    }
})


router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    try{
        const response = await deleteStudent(id);
        if(response.success){
            return res.status(201).send({data: response.data});
        } else throw new Error('Error in delete api');
    }catch(err){
        console.log('delete api controller catch ',err);
        return res.status(400).send({message: err.message});
    }
})

router.patch('/update/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const {newGrade} = req.body;
        if(!id || !newGrade) throw new Error('Missing payload');
        const response = await updateStudent(id,newGrade);
        if(response.success){
            return res.status(201).send({data: response.data});
        } else throw new Error('Error in delete api');
    } catch(err){
        console.log('update api controller catch ', err);
        return res.status(400).send({message:err.message});
    }
})

router.post('/name', async(req,res)=>{
    try{
        const {studentName} = req.body;
        const response = await studentByName(studentName);
        if(response.success){
            return res.status(201).send({data: response.data});
        } else throw new Error('Error in fetch name api');
    }catch(err){
        console.log('POST api (name) controller catch ', err);
        return res.status(400).send({message:err.message});
    }
})
export default router;