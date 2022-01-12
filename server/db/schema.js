const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  blogPostTitle: {
    type: String,
    required: true,
  },
  blogPostContent: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
