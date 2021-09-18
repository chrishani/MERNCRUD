const express = require('express');
const posts = require('../models/posts');
const Post = require('../models/posts');

const router = express.Router();

// Save post
router.post('/post/save', (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Post save successfully"
        });
    });
});

// Get post
router.get('/post', (req, res) => {

    Post.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});

module.exports = router;