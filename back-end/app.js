const express = require ('express');
const path = require('path');
const bodyParser =require('body-parser');
const cors =require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database, { useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
    console.log('connected to database' + config.database);

});
mongoose.connection.on('error',(err)=>{
    console.log('database error' + err);
});
const users = require ('./routes/users');
const app = express();
 app.use(cors());
 
 
 app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);
const port = 3000;
app.get('/', (req,res)=>{
    res.send('innvalid endpoint');
});
app.listen(port, () => {
    console.log('server strated on port ' + port);
});
