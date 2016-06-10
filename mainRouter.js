exports.initialize = function(app, router) {
    var express = require('express');
    var bodyParser = require('body-parser');
    var dishRouter = require('./dishRouter');
    var promoRouter = require('./promoRouter');
    var leaderRouter = require('./leaderRouter');
    
    var router1 = express.Router();
    router1.use(bodyParser.json());
    dishRouter.initialize(app, router1);
    
    var router2 = express.Router();
    router2.use(bodyParser.json());
    promoRouter.initialize(app, router2);
    
    var router3 = express.Router();
    router3.use(bodyParser.json());
    leaderRouter.initialize(app, router3);
}
