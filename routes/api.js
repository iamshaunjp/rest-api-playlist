const express = require ('express');
const router = express.Router();

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'});
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
