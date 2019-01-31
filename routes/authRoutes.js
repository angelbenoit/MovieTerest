const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const Authentication = require('../controllers/authentication');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
const app = express();

module.exports = app => {
    app.get('/api/current_user', requireAuth, Authentication.getUser);
    app.post('/api/signin', requireSignin, Authentication.signin);
    app.post('/api/signup', Authentication.signup);

    app.post('/api/add_item', requireAuth, (req, res) => {
        console.log("ADDING: " + req.body.name);
        //push item passed in from postBucketList function into the bucketList
        User.findById(req.user._id, function(err, user){
            user.bucketList.push(req.body);
            user.save();
        })
    });

    app.post('/api/delete_item', requireAuth, (req, res) => {
        console.log("REMOVING: " + req.body.homepage);
        User.findById(req.user._id, function(err, user){
            //filter every item in the bucketList and if item is not equal
            //to the item passed in remove function from displayModal, don't include it in
            //the updated array bucketList
            user.bucketList = user.bucketList.filter(item => item.overview !== req.body.overview);
            user.save();
        })
    });
};