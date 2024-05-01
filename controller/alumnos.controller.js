import {crud} from '../models/crud.model.js'

const createAlumno = async (req, res) => {
    try {
        const { nombre, rut ,curso, nivel} = req.body;
        const newAlumno = {nombre, rut, curso, nivel}
        const alumno = await crud.create(newAlumno);
        return res.json({alumno})
    } catch (error){
        console.log(error);
        return res.status(500).json({ ok : false})
    }
};

const readAlumno = async (req, res) => {
    try {
        const rut = req.params.rut;
        const alumno = await crud.read(rut);
        return res.json(alumno)
    } catch (error){
        console.log(error);
        return res.status(500).json({ ok : false})
    }
};

const updateAlumno = async (req, res) => {
    try {
        const {nombre, rut, curso, nivel} = req.body;
        const alumnoUpdated = {nombre, rut, curso, nivel};
        const alumno = await crud.update(alumnoUpdated);
        return res.json({ alumno })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok : false})
    }
}

const removeAlumno = async (req, res) => {
    try {
        const rut = req.params.rut;
        const alumno = await crud.remove(rut);
        return res.json(alumno);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok : false})
    }
}

export const alumnosController = {
    createAlumno,
    readAlumno,
    updateAlumno,
    removeAlumno
}