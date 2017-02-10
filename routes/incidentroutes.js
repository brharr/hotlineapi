var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Incident = require('../models/incidentmodel.js');

router.get('/', function(req, res, next) {
    console.log('Retrieving all Incidents within the Database.');
    Incident.find(function (err, incidents) {
        if (err) return next(err);
        res.json(incidents);
    });
});

router.get('/:id', function(req, res, next) {
    console.log('Retrieving Incident where ID is: '+ req.params.id);
    Incident.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        if(!post) {
            res.json({
                message: 'Incident with id' + req.params.id + 'can not be found!'
            });
        }
        res.json(post);
    });
});

router.post('/', function(req, res, next) {
    console.log('Creating new Incident within Database');
    Incident.create(req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.put('/:id', function(req, res, next) {
    console.log('Updating Incident where id is: ' + req.params.id);
    Incident.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json({
            message: "Successfully Updated Incident",
            pet: post
        });
    });
});

router.delete ('/:id', function(req, res, next) {
    console.log('Deleting Incident where id is: ' + req.params.id);
    Incident.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json({
            message: "Successfully deleted the Incident",
            incident: post
        });
    });
});

module.exports = router;