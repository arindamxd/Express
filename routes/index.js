var express = require('express');
var router = express.Router();
var data = require('../videodata.json');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express',
        videodata: data
    });
});

module.exports = router;