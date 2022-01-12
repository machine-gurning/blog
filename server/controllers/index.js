// Get schema for DB
const BlogPost = require("../db/schema");

const getAllPosts = async (req, res, err) => {
  try {
    const allBlogPosts = await BlogPost.find({}).sort([["date", -1]]);
    res.status(200).json(allBlogPosts);
  } catch (error) {
    res.status(401).json({ err });
  }
};

const getOnePost = (req, res, err) => {};

const updateOnePost = (req, res, err) => {};

const deleteOnePost = (req, res, err) => {};

const createPost = (req, res, err) => {
  res.header("Access-Control-Allow-Origin", "*");

  const nowDateTime = Date.now().toString();
  const newPost = {
    blogPostTitle: req.body.title,
    blogPostContent: req.body.content,
    date: nowDateTime,
    userID: "1",
  };

  const blogPost = new BlogPost(newPost);
  // Save to database

  try {
    blogPost.save();
    res.status(200).json({ msg: "success" });
  } catch (error) {
    res.status(401).json({ err });
  }

  // Send accept
};

module.exports = {
  getAllPosts,
  getOnePost,
  updateOnePost,
  deleteOnePost,
  createPost,
};
