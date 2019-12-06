const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const UserSchema = mongoose.Schema({
    nom:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    mot_de_passe:{
        type: String,
        required: false
    },
    prenom:{
        type:String,
        required: true
    },
    age:{
        type:String,
        required: true
    },
    center_interet:{
        type: String,
        required: false
    },
    ville:{
        type:String,
        required: true
    }
   // avatar_url: { type: String }
    
    
});
const User =module.exports= mongoose.model('User', UserSchema);

module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}
module.exports.getUserByUsername = function(username,callback){
    const query ={username : username}
    User.findOne(query,callback);
}
module.exports.addUser =  function(newUser,callback){
    console.log('new user')
   
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.mot_de_passe,salt,(err,hash)=>{
            if(err) throw err;
            newUser.mot_de_passe = hash;
            newUser.save(callback);
            
        });
    });
}