const { Router } = require('express');
const router = Router();


const movies = require('../sample.json');


router.get('/api/test',(req,res)=>{
    res.send('movies');

    /*const data = {
        "nombre" : "Steven",
        "Proyecto" :"node"

    };
    res.json(data);*/


});


module.exports = router;


