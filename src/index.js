const express = require ('express');
const app = express();

const morgan = require('morgan');


//CONFIGURACIONES
//procees.event.PORT => validacion si un puerto existe o no.
app.set('port', process.env.PORT || 3000);
app.set('json spaces',2);


//MIDDLEWARE
/*Todo esto se hace para poder entender los archivos que 
se van requiriendo en mi aplicacion */
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//RUTAS
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

// Empezando el servidor
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);

});