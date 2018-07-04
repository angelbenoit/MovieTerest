const passport = require('passport');
const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('user');
const app = express();

module.exports = app => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    })
    );

    app.get('/auth/google/callback', passport.authenticate('google'),(req,res)=>{
        res.redirect('/profile');
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.post('/api/add_item', (req, res) => {
        //push item passed in from postBucketList function into the bucketList
        User.findById(req.user._id, function(err, user){
            user.bucketList.push(req.body);
            user.save();
        })
    });

    app.post('/api/delete_item', (req, res) => {
        //console.log(req.body);
        User.findById(req.user._id, function(err, user){
            //filter every item in the bucketList and if item is not equal
            //to the item passed in remove function from displayModal, don't include it in
            //the updated array bucketList
            user.bucketList = user.bucketList.filter(item => item.overview !== req.body.overview);
            user.save();
        })
    });
};