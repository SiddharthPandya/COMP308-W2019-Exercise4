let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the database schema
let things = require('../models/favouriteThings');

router.get('/', (req,res,next) =>{
    things.find((err,thingsList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(thingsList);

            
            res.render('favouriteThings/index', {
                title: 'Favourite Things List',
                thingsList: thingsList
            });
            
        }
    });
});

module.exports = router;