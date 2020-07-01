const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('./../models/usuario');
const app = express();


app.post('/register', function (req, res) {
  let body = req.body;

  let { nombre, email, password, role } = body;
  let usuario = new Usuario({
    nombre,
    email,
    password: bcrypt.hashSync(password, 10),
    role
  });

  usuario.save((err, usuarioDB) => {
    if (err) {

      res.redirect('/?r=false');
      return;
      /*
      return res.status(400).json({
        ok: false,
        err,
      });
      */
    }



    res.redirect('/?r=true');
    return;
    /*
    res.json({
      ok: true,
      usuario: usuarioDB
    });
*/
  })
});



module.exports = app;

