const express = require('express');
const route = express.Router();

const {
    indexItem,
    createItem
} = require('../controller/ItemController');

route.get('/', indexItem);
route.post('/', createItem);

module.exports = route