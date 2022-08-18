// const passport = require('passport');
// const Usuario = require('../')

// exports.postSignup = (req, res, next)=>{
//     const usiario = new Usuario({
//         email: req.body.email,
//         nombre: req.body.nombre,
//         password: req.body.password
//     });

//     Usuario.findOne({email: req.body.email}, (err, usuarioExistente)=>{
//         if (usuarioExistente) {
//             return res.status(400).send('Ya ese email está registrado');
//         }
//         nuevoUsuario.save((err)=>{
//             if (err) {
//                 next(err);
//             }
//             req.logIn(nuevoUsuario, (err)=>{
//                 if (err) {
//                     next(err);
//                 }
//                 res.send('Usuario creado exitosamente')
//             })
//         })
//     })
// }