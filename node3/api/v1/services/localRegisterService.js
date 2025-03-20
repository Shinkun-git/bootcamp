import pool from '../../db/index.js';
import bcrypt from 'bcrypt';
const saltRounds = 10;

async function hashPassword(inputPasswd) {
    try {
        if (!inputPasswd) throw new Error("Password is required");
        return await bcrypt.hash(inputPasswd, saltRounds);
    } catch (err) {
        console.error("Error hashing password:", err);
    }
}

export const registerUser = async(body) =>{
    try {
        const {name, age, email, password} = body;
        console.log(name, age, email, password);
        const hashedPass = await hashPassword(password);

        const result = await pool.query(
            `INSERT INTO users (name, age, email, password)
            VALUES ($1, $2, $3, $4) RETURNING *`, [name,age,email,hashedPass]);
            console.log('saved user successfully.', result);
            if(result.rowCount){
                return {
                    success: true,
                    message : 'User registered successfully',
                    data : result.rows[0]
                }
            } else throw new Error("Error while saving user");
    } catch(err){
        console.log('error in user insertion ',err);
        return {
            success: false,
            message: err.message || 'save user exception',
        }
    }
}
