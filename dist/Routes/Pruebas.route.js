"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Pruebas_controler_1 = require("../Controllers/Pruebas.controler");
const router = express_1.default.Router();
router.get('/', Pruebas_controler_1.obtenerDepartamentos);
exports.default = router;
