const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register' , (req,res,next) => {
    let newUser = new User({
        nom:req.body.nom,
        email:req.body.email,
        mot_de_passe:req.body.mot_de_passe,
        prenom:req.body.prenom,
        age:req.body.age,
        center_interet:req.body.center_interet,
        ville:req.body.ville
        
      //  avatar_url:req.body.avatar_url


    });
    console.log(newUser);
    User.addUser(newUser,(user)=>{
       
            res.json({success: true, msg:'User registre'}); 
    });
    
});
router.get('/all', (req, res) => {
    User.find(function (err, users) {
        if (err) res.send(err);
        res.json(users);
    })
})
module.exports = router;