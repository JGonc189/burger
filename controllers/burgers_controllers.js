// Node Dependencies
const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');


// Create routes
// ----------------------------------------------------
// Index Redirect
router.get('/', (req, res) => {
  res.redirect('/index');
});


// Index Page (render all burgers to DOM)
router.get('/index', (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', hbsObject);
  });
});


// Create a New Burger
router.post('/burger/create', (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    res.redirect('/index');
  });
});


// Devour a Burger
router.post('/burger/eat/:id', (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.redirect('/index');
  });
});
// ----------------------------------------------------


// Export routes
module.exports = router;