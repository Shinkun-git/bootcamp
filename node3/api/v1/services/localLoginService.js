import pool from '../../db/index.js';
import bcrypt from 'bcrypt';

export const authUser = async(body)=>{
    try{
        //fetch user from db 
        const {email : inputEmail, password} = body;
        const result = await pool.query(`
            SELECT * FROM users WHERE LOWER(email)=$1`,[inputEmail.toLowerCase()]);
        if(!result.rowCount) throw new Error('User not Found.');

        const {name,age,email,password:storedPass} = result.rows[0];

        const authSuccess = await bcrypt.compare(password, storedPass);
        if(!authSuccess) throw new Error('Incorrect credentials');
        return {
            success:true,
            message:'Authenticated Successfully',
            data: {name, age, email}
        }
    }catch(err){
        console.log('error in auth user ',err);
        return {
            success: false,
            message: err.message || 'auth user exception',
        }
    }
}