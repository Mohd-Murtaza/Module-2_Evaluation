const express=require("express");
const PostsModel = require("../models/postsModel");
const { auth } = require("../middlewares/authMiddleware");
const postsRouter=express.Router();


postsRouter.get("/", async(req,res)=>{
    try {
        const query = req.query;
        const postData = await PostsModel.find(query);
        res
          .status(200)
          .send({ status: "success", msg: "get post data", data: { postData } });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
postsRouter.post("/add", auth, async(req,res)=>{
    try {
        const postData = req.body;
        const post = new PostsModel(req.body);
        await post.save();
        res
          .status(200)
          .send({ status: "success", msg: "create post", data: { post } });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
postsRouter.patch("/update", auth, async(req,res)=>{
    try {
        const { id } = req.params;
        const data = req.body;
        const updatePost = await PostsModel.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send({ status: "success", msg: "post update" });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
postsRouter.delete("/delete", auth, async(req,res)=>{
    try {
        const { id } = req.params;
        const updatePost = await PostsModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ status: "success", msg: "post delete" });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
module.exports={postsRouter}