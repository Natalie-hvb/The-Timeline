const post = require('../model/postModel')

const getPost = (req, res) =>{
    post.find().sort({ createdAt: -1})
    .then(result => {res.render('index', {posts : result})})
    .catch(err => console.log(err))
}

const createPost = (req, res) => {
    let newPost = new post(req.body)
    newPost.save()
     .then(() => {res.redirect('/')})
     .catch(err => console.log(err));
};

module.exports = {
    getPost,
    createPost
}