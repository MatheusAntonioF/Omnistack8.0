const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-nrvwl.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,    
});

// req.query = Acessar query params -> para filtros - get  
// req.params = Acessar route params -> para edição, delete - put/delete
// req.body = Acessar corpo da requisição -> criação - post


app.use(cors());
//Faz o express entender arquivos JSON
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
