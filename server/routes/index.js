const express = require("express");
const Router = express.Router();
const {
  getAllPosts,
  getOnePost,
  updateOnePost,
  deleteOnePost,
  createPost,
} = require("../controllers/index.js");

Router.route("/").get(getAllPosts);
Router.route("/").post(createPost);
Router.route("/post/:id").get(getOnePost);
Router.route("/post/:id").patch(updateOnePost);
Router.route("/post/:id").delete(deleteOnePost);

module.exports = Router;
