const express = require('express');
const {AirplaneController} = require('../../controllers')
const {AirplaneMiddleware} = require('../../middleware');
const router = express.Router();

router.post('/',AirplaneMiddleware.validateCreateRequest,AirplaneController.createAirplane);
router.get('/',AirplaneController.getAllAirplanes);

module.exports = router;