const express = require('express');
const route = express.Router();
const postsController = require('../controller/postController');

route.get('/', postsController.getPost);
route.post('/create-post', postsController.createPost);





module.exports = route;