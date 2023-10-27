const express = require('express');
const { create, readAll, readUnique, update, remove } = require('../controller/queries');

const router = express.Router();

//need to create more update routes

router.post('/task/create', create);
router.get('/task', readAll)
router.get('/task/:id', readUnique)
router.put('/task/:id', update)
router.delete('/task/:id', remove)

module.exports = router;
