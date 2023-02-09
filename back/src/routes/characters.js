const express = require('express');
const router = express.Router();
const { getFav, postFav, deleteFavId, getAll } = require('../controllers/controllers');
const getDetailId = require('../controllers/getDetailId');
const getCharacterId = require('../controllers/getCharacterId');

router.get('/allCharacters', getAll);

router.get('/character/:id', getCharacterId);
router.get('/detail/:detailId', getDetailId);
router.get('/fav', getFav);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFavId);

module.exports = router;
