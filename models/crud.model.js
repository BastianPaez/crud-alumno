import { pool } from "../connection/connection.js";

const create = async (alumno) =>{
    const querySql = 'INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ($1 , $2, $3, $4) RETURNING *;'
    const {rows} = await pool.query(querySql, [alumno.nombre, alumno.rut, alumno.curso, alumno.nivel])
    return rows
}

const read = async (rut) =>{
    const querySql = 'SELECT * FROM ALUMNOS WHERE rut = $1'
    const {rows} = await pool.query(querySql, [rut])
    return rows
}

const update = async (alumno) => {
    const querySql = 'UPDATE alumnos SET nombre = $1, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *;'
    const {rows} = await pool.query(querySql, [alumno.nombre, alumno.rut, alumno.curso, alumno.nivel])
    return rows
}

const remove = async ( rut ) => {
    const querySql = 'DELETE FROM alumnos WHERE rut = $1 RETURNING *;';
    const {rows} = await pool.query(querySql, [rut]);
    return rows
}


export const crud = {
    create,
    read,
    update,
    remove
}