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

const getOnePost = async (req, res, err) => {
  const onePost = await BlogPost.findById(req.params.id);
  console.log(onePost);
  res.status(200).json({ onePost });
};

const updateOnePost = async (req, res, err) => {
  res.header("Access-Control-Allow-Origin", "*");
  const nowDateTime = Date.now().toString();
  const newPost = {
    blogPostTitle: req.body.title,
    blogPostContent: req.body.content,
    date: nowDateTime,
    userID: "1",
  };
  console.log(req.params);
  const filter = { _id: req.params.id };
  await BlogPost.findByIdAndUpdate(req.params.id, newPost);
  res.json({ msg: "updating one post" });
};

const deleteOnePost = async (req, res, err) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ msg: "deleting one post" });
  await BlogPost.findByIdAndDelete(req.params.id);

  console.log("deleted post");
};

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
