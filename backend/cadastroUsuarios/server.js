const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv =require ('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Agora vamos conectar ao MongoDB

mongoose.connect(process.env.MONGO_URI , { useNewUrlParser:true , useUnifiedTopology:true })
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB: ' , err));

// Integrando a rota do Users ao servidor

const usersRoutes = require('./routes/usersRoutes');

app.use('/api' , usersRoutes);

// Rotas de exemplo

app.get('/' , (req , res) => {
    res.send('API esta funcionando!')
});

app.listen(PORT , () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});