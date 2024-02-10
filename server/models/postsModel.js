const mongoose = require("mongoose");
const postsSchema = mongoose.Schema(
  {
    title:String,
    body:String,
    device:String
  },{ versionKey: false }
);
const PostsModel = mongoose.model("product", postsSchema);
module.exports = PostsModel;
