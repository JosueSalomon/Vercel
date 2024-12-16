import express from 'express';
import { obtenerDepartamentos } from '../Controllers/Pruebas.controler'
const router = express.Router();

router.get('/', obtenerDepartamentos);

export default router;