const express=require("express");
const PostsModel = require("../models/postsModel");
const postsRouter=express.Router();


postsRouter.get("/", async(req,res)=>{
    try {
        let data=[];
        const {device} = req.query;
        if(device){
             data= await PostsModel.find({userId:req.body.userId,device})
        }else{
             data=await PostsModel.find({userId:req.body.userId})
        }
        res
          .status(200)
          .send({ status: "success", msg: "get post data", data: { data } });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
postsRouter.post("/add", async(req,res)=>{
    try {
        const {userId, title, body, device} = req.body;
        const post = new PostsModel({userId, title, body, device});
        await post.save();
        res
          .status(200)
          .send({ status: "success", msg: "create post", data:post });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
postsRouter.patch("/update/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const data = req.body;
        const updatePost = await PostsModel.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send({ status: "success", msg: "post update" });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
postsRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const updatePost = await PostsModel.findByIdAndDelete({ _id: id });
        res.status(200).send({ status: "success", msg: "post delete" });
      } catch (error) {
        res.status(400).send({ status: "fail", msg: error.message });
      }
})
module.exports={postsRouter}