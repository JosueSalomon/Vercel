"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const Pruebas_route_1 = __importDefault(require("./Routes/Pruebas.route"));
dotenv_1.default.config();
require('dotenv').config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Rutas
app.use('/prubas', Pruebas_route_1.default);
//Servidor Raiz.
app.get('/', (req, res) => {
    res.send('Root server is on siuuuuuuuuu todo funciona bien ');
});
//Mensaje de consola que dice que funciona.
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
