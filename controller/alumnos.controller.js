import {crud} from '../models/crud.model.js';
import {handleError} from '../connection/codeErrors.js'

const createAlumno = async (req, res) => {
    try {
        const { nombre, rut ,curso, nivel} = req.body;
        const newAlumno = {nombre, rut, curso, nivel}
        const alumno = await crud.create(newAlumno);
        return res.json({alumno})
    } catch (error){
        const { code, msg } = handleError(error);
        res.status(code).json({ok: false, msg})
    }
};

const readAlumno = async (req, res) => {
    try {
        const rut = req.params.rut;
        if(!rut){
            return res.status(400).json({ok: false, msg: 'rut no válido'})
        }
        const alumno = await crud.read(rut);

        if (!alumno.length){
            return res.status(400).json({ok: false, msg: 'alumnno no existe'})
        }
        return res.json(alumno)
    } catch (error){
        const { code, msg } = handleError(error);
        res.status(code).json({ok: false, msg})
    }
};

const updateAlumno = async (req, res) => {
    try {
        const {nombre, rut, curso, nivel} = req.body;
        const alumnoUpdated = {nombre, rut, curso, nivel};
        const alumno = await crud.update(alumnoUpdated);
        return res.json({ alumno })
    } catch (error) {
        const { code, msg } = handleError(error);
        res.status(code).json({ok: false, msg})
    }
}

const removeAlumno = async (req, res) => {
    try {
        const rut = req.params.rut;
        if(!rut || rut.trim()){
            return res.status(400).json({ok: false, msg: 'rut no válido'})
        }
        const alumno = await crud.remove(rut);
        if (!alumno.length){
            return res.status(400).json({ok: false, msg: 'alumnno no existe'})
        }
        return res.json(alumno);
    } catch (error) {
        console.log(error.code)
        const { code, msg } = handleError(error);
        res.status(code).json({ok: false, msg})
    }
}

const allAlumnos = async(req, res) => {
    try {
        const alumnos = await crud.all();
        return res.json(alumnos)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok : false})
    }
}

export const alumnosController = {
    createAlumno,
    readAlumno,
    updateAlumno,
    removeAlumno,
    allAlumnos
}