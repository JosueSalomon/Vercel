import { Factura } from '../Models/Pruebas.model'
import { Request, Response } from 'express'

export const obtenerDepartamentos = async (req: Request, res: Response) => {
    try {
        const Departamentos = await Factura.obtenerDepartamentos();

        res.status(201).json({
            Departamentos
        });
    }
    catch (error) {
        console.log('error con fetch de Departamentos', error);
        res.status(500).json({ message: 'algo paso mal :(', error });
    }
}