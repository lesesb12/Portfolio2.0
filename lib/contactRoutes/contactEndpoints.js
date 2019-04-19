"user strict";

let router = require('express').Router();


router.get('/comments', function (req, res) {

  res.json({
    sam: 1,
    lesem: 1
  })
})

router.post('/comments', function (req, res) {

})

module.exports.router = router;