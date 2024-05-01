import { Router } from "express";
import { alumnosController } from "../controller/alumnos.controller.js";

const router = Router();

router.post('/alumno', alumnosController.createAlumno);
router.get('/alumno/:rut', alumnosController.readAlumno);
router.put('/alumno', alumnosController.updateAlumno);
router.delete('/alumno/:rut', alumnosController.removeAlumno)



export default router;