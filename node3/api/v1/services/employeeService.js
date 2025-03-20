import pool from '../../db/index.js';

export const getAllEmployees = async () => {
    try {
        const result = await pool.query('SELECT * from emp', []);
        console.log('query response', result);
        return {
            success: true,
            data: result.rows,
        }
    } catch (err) {
        return {
            success: false,
            error: err,
        }
    }
}

export const saveEmployee = async(body)=>{
    try {
        const {name, department_id, salary} = body;
        if((!name || !department_id || !salary)){
            throw new Error('Missing payload values');
        }
        const result = await pool.query('INSERT INTO emp (name, department_id, salary) VALUES ($1 ,$2, $3) RETURNING *',[name, department_id, salary]);
        console.log('save query response ', result );
        if(result.rowCount){
            return {
                success : true,
                message : 'Employee saved successfully',
                data : result.rows[0]
            }
        } else throw new Error("Error while saving employee");
    } catch(err){
        console.log('error in save query catch > ',err);
        return {
            success: false,
            message: err.message || 'Save employee exception',
        }
    }
}