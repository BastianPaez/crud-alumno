import express from 'express';
import 'dotenv/config';
import crudRoute from './routes/alumnos.route.js'

const app = express();


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', crudRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{ console.log(`http://localhost:${PORT}`)})
