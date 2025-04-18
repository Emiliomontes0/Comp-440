const express = require ('express');
const router = express.Router();
const {searchFeature} = require ('../controllers/searchController');

router.get('/', searchFeature);

module.exports = router;