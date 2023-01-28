const express = require('express');
const router = express.Router();
const {
	getCharacterId,
	getDetailId,
	getFav,
	postFav,
	deleteFavId,
} = require('../controllers/controllers');

router.get('/character/:id', getCharacterId);
router.get('/detail/:detailId', getDetailId);
router.get('/fav', getFav);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFavId);

module.exports = router;
