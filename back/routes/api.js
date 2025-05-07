var express = require('express');
var router = express.Router();
var adopcionModel = require('./../models/adopcionModel');
var cloudinary = require('cloudinary').v2;

router.get('/adopcion', async function (req, res, next) {

    let adopcion = await adopcionModel.getAdopcion();

    adopcion = adopcion.map(adopcion => {
        if(adopcion.img) {
            const imagen = cloudinary.url(adopcion.img, {
                width: 460,
                height: 460,
                crop: 'fill'
            });
            return {
                ...adopcion,
                imagen
            }
        } else {
            return {
                ...adopcion,
                imagen: ''
            }
        }
    });
    
    res.json(adopcion);
});

module.exports = router;