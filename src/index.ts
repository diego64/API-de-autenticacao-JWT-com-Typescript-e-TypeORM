import 'reflect-metadata';
import express from 'express';

import './database/connect'; //Importação da conexão do BD
import routes from './routes'; //Importação das rotas

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));