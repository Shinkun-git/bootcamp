import pool from "../../db/index.js";

export const getAllStudents = async()=>{
    try {
        const result = await pool.query('SELECT * from students',[]);
        console.log('query response ', result);
        return {
            success: true,
            data : result.rows,
        }
    } catch(err){
        return {
            success: false,
            error: err,
        }
    }
}

export const addStudent = async(body)=>{
    try {
        const {name, age , grade} = body;
        if(!name || !age || !grade)
                throw new Error('Missing payload values');
        const result = await pool.query(`INSERT INTO students 
            (name, age, grade) VALUES ($1 , $2, $3) RETURNING *`,
        [name, age, grade]);
        console.log('added student response ', result);
        if(result.rowCount){
            return {
                success : true,
                data : result.rows[0],
                message : 'Student added successfully',
            }
        } else throw new Error('Error while adding student');
    } catch (err){
        console.log('error in add student query catch ', err);
        return {
            success : false,
            message : err.message || 'Adding student exception',
        }
    }
}

export const deleteStudent = async(id) =>{
    try {
        if(!id) throw new Error('Missing ID of student');
        const result = await pool.query('DELETE FROM students WHERE id = $1 RETURNING *', [id]);
        console.log(`Student deleted with id : ${id}`);
        if(result.rowCount){
            return {
                success : true,
                data : result.rows[0],
                message : 'Student deleted successfully',
            }
        } else throw new Error('Error while deleting student');
    } catch(err){
        console.log('error in delete student query catch ', err);
        return {
            success : false,
            message : err.message || 'Deleting student exception',
        }
    }
}


export const updateStudent = async(id, newGrade) =>{
    try {
        if(!id) throw new Error('Missing ID of student');
        const result = await pool.query(`UPDATE students 
                                            SET grade = $1 
                                            WHERE id = $2 RETURNING *`,
                                        [newGrade, id]);
        console.log(`Student updated with id : ${id}`);
        if(result.rowCount){
            return {
                success : true,
                data : result.rows[0],
            }
        } else throw new Error('Error while updating student');
    } catch(err){
        console.log('error in update student query catch ', err);
        return {
            success : false,
            message : err.message || 'Updating student exception',
        }
    }
}

export const studentByName = async(studentName)=>{
    try {
        const result = await pool.query('SELECT * from students WHERE LOWER(name) = $1',[studentName.toLowerCase()]);
        console.log('query response ', result);
        return {
            success: true,
            data : result.rows,
        }
    } catch(err){
        return {
            success: false,
            error: err,
        }
    }
}