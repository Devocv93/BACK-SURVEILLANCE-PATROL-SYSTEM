require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const app = express();

const port = process.env.PORT;
const {sequelizeRondin} = require('./src/database/connection');
require('./src/database/association');

app.use(cors());
app.use(express.json());
app.use*express.urlencoded({extended: false});

app.use(require('./src/routes/lugarverificacion.routes'));
app.use(require('./src/routes/rondines.routes'));
app.use(require('./src/routes/rutasrondines.routes'));
app.use(require('./src/routes/usuario.routes'));
app.use(require('./src/routes/base.routes'));
app.use(require('./src/routes/incidencia.routes'));
app.use(require('./src/routes/rondineshechos.routes'));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);

    //force: true delete all tables
    sequelizeRondin.sync({force: false}).then(()=> {
        console.log("BD conectada!");
    }).catch(err => {
        console.log("algo salio mal, ",err)
    })
});