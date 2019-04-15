var express = require('express');
var router = express.Router();
var clientModule= require('../modules/client.module')
 var Client=require('../models/client.')
 var cupon=require('../models/cupon')
 const uuidv1 = require('uuid/v1');
router.post('/add' ,async(req, res)=> {
    let clientname=req.body.name;
    let clientphone=req.body.phone;
    let clientcupon=req.body.cupon;

    clientcupon=parseInt(clientcupon);

    let custumertosave=new Client({name:clientname,phone:clientphone})
    let genreteclient=await custumertosave.save();

    //cupons to save
    var now = new Date();
    now.setDate(now.getDate()+7);
    
 for(let i = 0; i < clientcupon;i++){
   let cpn= new cupon({
  Clientid:  genreteclient._id,
  Cupontext: uuidv1(),
  EndDate: now, 
  isUsed:false
})
var c= await cpn.save();
 
 }
      
       res.json(c)
    
 }); 





 router.get('/cupon', async (req, res, next)=> {
    let id=req.query.id
   let cuponsarray= await cupon.findOneAndUpdate({isUsed:true, Cupontext:id});
    res.json(cuponsarray)[0];
 }); 





// //get all tablets
// router.get('/tablets/', async (req, res, next)=> {
//    res.json(await clientModule.get());
// }); 
// //get  tablet by id
// router.get('/tablets/:id', async (req, res, next)=> {
//     res.json(await clientModule.get(req.params.id)); 
// }); 
// //add new tablet
// router.post('/tablets/', async (req, res, next)=> {
//     res.json(await clientModule.save(req.body)  ); 
// }); 
// //delete a tablet
// router.delete('/tablets/:id', async (req, res, next) => {
//     res.json(await clientModule.delete(req.params.id)); 
// });
 
// //update
// router.put('/tablets/:id', async (req, res, next) => {
//     res.json(await clientModule.update(req.params.id , req.body)); 
// });


module.exports = router;