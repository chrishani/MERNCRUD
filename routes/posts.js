const express = require('express');
const posts = require('../models/posts');
const Posts = require('../models/posts');

const router = express.Router();

// Save post
router.post('/post/save', (req, res) => {
    let newPost = new Posts(req.body);

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

    Posts.find().exec((err, posts) => {
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

//update posts
router.put('/post/update/:id', (req, res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, posts) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            return res.status(200).json({
                success: "Update successfuly",
                existingPosts: posts
            });
        }
    );
});

//Delete post
router.delete('/post/delete/:id', (req, res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err) {
            return res.status(400).json({
                message: "Delete unsuccessfully", err
            });
        }
        return res.status(200).json({
            message: "Delete successfully", deletedPost
        });
    });
});

// Get a specific post
router.get('/post/:id', (req, res) => {
    let postId = req.params.id;

    Posts.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({
                success: false, err
            });
        }
        return res.status(200).json({
            success: true, post
        });
    })
})

module.exports = router;