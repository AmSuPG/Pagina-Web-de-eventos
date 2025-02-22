const express = require('express');
const path = require('path');
const {connectDB} = require('./config/db');//paquete propio
const bodyParser = require('body-parser'); //https
require('dotenv').config(); //variables de entorno
const cors = require('cors') //permisos dominio

const app = express();
connectDB()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));//inicializar el index

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 3000;

app.use((req, res)=>{
    res.status(404).send('Pagina no encontrada');
})

app.listen(PORT, async()=>{
    console.log(`servidor escuchando el puerto http://localhost:${PORT}`);
    const {sequelize} = require('./config/db')
    try{
        await sequelize.authenticate()
        console.log('Base de datos sincronizada');
    }catch(err){
        console.log(err)
    }
})