"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDepartamentos = void 0;
const Pruebas_model_1 = require("../Models/Pruebas.model");
const obtenerDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Departamentos = yield Pruebas_model_1.Factura.obtenerDepartamentos();
        res.status(201).json({
            Departamentos
        });
    }
    catch (error) {
        console.log('error con fetch de Departamentos', error);
        res.status(500).json({ message: 'algo paso mal :(', error });
    }
});
exports.obtenerDepartamentos = obtenerDepartamentos;
