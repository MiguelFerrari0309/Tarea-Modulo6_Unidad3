var express = require('express');
var router = express.Router();
var adopcionModel = require('../../models/adopcionModel');

/*Para la subida de imagenes*/
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {

  var adopcion = await adopcionModel.getAdopcion();

  adopcion = adopcion.map(adopcion => {
    if (adopcion.img) {
      const imagen = cloudinary.image(adopcion.img, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...adopcion,
        imagen
      }
    } else {
      return {
        ...adopcion,
        imagen:''
      }
    }
  });

  res.render('admin/adopcion', { //administrador.hbs
    layout: 'admin/layout', //layout.hbs
    persona: req.session.nombre,
    adopcion
  });
});

/*Mostrar formulario de agregar*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {

    var img = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.img;
      img = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.nombre != "" && req.body.img != "" && req.body.descripcion != "") {
      await adopcionModel.insertAdopcion({
        ...req.body,
        img
      });
      res.redirect('/admin/adopcion')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargo la novedad'
    })
  }
})

/*Eliminar una adopcion*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let adopcion = await adopcionModel.getAdopcionById(id);
  if (adopcion.img) {
    await (destroy(adopcion.img));
  }
  
  await adopcionModel.deleteAdopcionById(id);
  res.redirect('/admin/adopcion');
});

/*formulario de modificacion de adopcion*/

router.get('/modificar/:id', async (req, res, next) => {

  var id = req.params.id;
  console.log(req.params.id);
  var adopcion = await adopcionModel.getAdopcionById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    adopcion
  })
});

/*Actualizacion de modificacion de adopcion*/
router.post('/modificar', async (req, res, next) => {
  try{

    let img = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img = null;
      borrar_img_vieja = true;
    } else {
      console.log("Archivos recibidos:", req.files);

      if (req.files && Object.keys(req.files).length > 0) {
        let imagen = req.files.img;
        img = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
    
        await cloudinary.uploader.destroy(req.body.img_original, function(result) {
          console.log("Resultado de eliminación:", result);
        });
        console.log('Imagen eliminada de Cloudinary');
     
      }

    var obj = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      img
    }
    console.log(obj)

    await adopcionModel.modificarAdopcionById(obj,req.body.id);
    res.redirect('/admin/adopcion');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la Adopcion'
    })
  }
})

module.exports = router;