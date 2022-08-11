/*import express from 'express';
import Contenedor from '../classes/Contenedor';


const router = express.Router();
const contenedor = new Contenedor();


router.get('/',(req,res)=>{
    contenedor.getAll().then(result=>{
        res.send(result);
    })
})
router.get('/:pid',(req,res)=>{
    let id = parseInt(req.params.pid);
    contenedor.getProdById(id).then(result=>{
        res.send(result);
    })
})

router.post('/',upload.single('thumbnail'),(req,res)=>{
    let file = req.file;
    let prod = req.body;
    prod.thumbnail = req.protocol+"://"+req.hostname+":8080"+'/images/'+file.filename;
    contenedor.registrarProd(prod).then(result=>{
        res.send(result);
        if(result.status==="success"){
            contenedor.getAll().then(result=>{
                console.log(result);
            io.emit('getProd',result);
            })
        }
    })
})


router.put('/:pid',(req,res)=>{
    let body = req.body;
    let id = parseInt(req.params.pid);
    contenedor.updateProd(id,body).then(result=>{
        res.send(result);
    })
})
//DELETES
router.delete('/:pid',(req,res)=>{
    let id= parseInt(req.params.pid);
    contenedor.deleteProd(id).then(result=>{
        res.send(result)
    })
})
export default router;*/