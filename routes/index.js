var express = require('express'),
    router = express.Router();

//GET Home Page
router.get('/', ensureAuthenticated, (req, res) => {
    res.render('index');
});

function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }else {
        res.redirect('/users/login');
    }
}

module.exports = router;