import server from './src/app.js';
import cors from 'cors';


import express  from 'express';
import  Jwt   from 'jsonwebtoken';
import { connect, set } from 'mongoose';
import {PORT, DB_USER, DB_PASSWORD, DB_NAME, DB} from './config.js';

set('strictQuery', true);


async function connectDB() {
    // await mongoose.connect(`mongodb+srv://ramiyfacu:ryf2003@cluster0.z7ljsqh.mongodb.net/cluster0`)
    await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`)
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch(err => console.error('Error de conexión a la base de datos', err));

server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });
}

connectDB();
server.use(cors());