require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// Middleware para configurar la política de seguridad del contenido (CSP)
// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "default-src 'self'; connect-src 'self' http://localhost:5000");
//     next();
// });

// Conectar a MongoDB
const uri = 'mongodb+srv://Admin:1472@maincluster.dbcjxbv.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster';
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
    try {
        await mongoose.connect(uri, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
}

run();

// Importar rutas
const usercontroller = require('./routes/user-routes-api');
const interviewn1controller = require('./routes/interview-n1-routes-api');
const interviewn2controller = require('./routes/interview-n2-routes-api');
const interviewn3controller = require('./routes/interview-n3-routes-api');
const interviewn4controller = require('./routes/interview-n4-routes-api');
const interviewTeachersController = require('./routes/interview-teachers-routes-api');

// Usar rutas
app.use('/user', usercontroller);
app.use('/interviewteacher', interviewTeachersController);
app.use('/interviewn1', interviewn1controller);
app.use('/interviewn2', interviewn2controller);
app.use('/interviewn3', interviewn3controller);
app.use('/interviewn4', interviewn4controller);

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
    console.log(`Server running at http://localhost:5000`);
});
