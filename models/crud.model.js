import { text } from "express";
import { pool } from "../connection/connection.js";

const create = async (alumno) =>{
    const query = {
        text: 'INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ($1 , $2, $3, $4) RETURNING *;',
        values: [alumno.nombre, alumno.rut, alumno.curso, alumno.nivel]
    }
    const {rows} = await pool.query(query)
    return rows
}

const read = async (rut) =>{
    const query = {
        text: 'SELECT * FROM ALUMNOS WHERE rut = $1',
        values: [rut]
    }
    const {rows} = await pool.query(query)
    return rows
}

const update = async (alumno) => {
    const query = {
        text: 'UPDATE alumnos SET nombre = $1, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *;',
        values: [alumno.nombre, alumno.rut, alumno.curso, alumno.nivel]
    }
    const {rows} = await pool.query(query)
    return rows
}

const remove = async ( rut ) => {
    const query = {
        text: 'DELETE FROM alumnos WHERE rut = $1 RETURNING *;',
        values: [rut]
    }
    const {rows} = await pool.query(query);
    return rows
}
const all = async () => {
    const query = {
        text: 'SELECT * FROM alumnos',
        rowMode: 'array'
    }
    const { rows } = await pool.query(query)
    return rows
}


export const crud = {
    create,
    read,
    update,
    remove,
    all
}