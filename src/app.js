import express from 'express';
import routes from './routes/index.js';
import { connect } from 'mongoose';
import {PORT, DB_USER, DB_PASSWORD, DB_NAME, DB} from '../config.js';
import { verifyToken } from './controllers/verifyToken.js';

const app = express();
app.use(express.json());
app.use("/verify",verifyToken)

async function connectDB() {
  // await mongoose.connect(`mongodb+srv://ramiyfacu:ryf2003@cluster0.z7ljsqh.mongodb.net/cluster0`)
  await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`)
.then(() => console.log('Conexión a la base de datos exitosa'))
.catch(err => console.error('Error de conexión a la base de datos', err));

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
}


app.use('/', routes);
connectDB();

export default app;