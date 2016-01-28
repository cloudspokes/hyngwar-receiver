var fs = require("fs");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var subsFolder = __dirname + '/../public/subs';

    fs.exists(subsFolder, function(blnExists) {
        if (blnExists) {
            fs.readdir(subsFolder, function(err, list) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    var sublist = [];

                    for (var i = 0; i < list.length; ++i) {
                        sublist[i] = {
                            path: '/subs/' + list[i],
                            name: list[i]
                        };
                    }

                    res.render('index', {
                        title: 'The Submissions',
                        sublist: sublist
                    });
                }
            });
        } else {
            res.render('index', {
                title: 'dein Prototypen!',
                sublist: []
            });
        }
    });
});

router.post('/webhooks', function(req, res) {

    console.log(req.body);
    var shc = req.get('Smartsheet-Hook-Challenge');

    if (shc) {
        res.set('Smartsheet-Hook-Challenge', shc);
    }

    res.json(req.body);
});

module.exports = router;
