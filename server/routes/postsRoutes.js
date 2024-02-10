const express=require("express");
const PostsModel = require("../models/postsModel");
const { auth } = require("../middlewares/authMiddleware");
const postsRouter=express.Router();


postsRouter.get("/allProducts", async(req,res)=>{
    const query=req.query;
    const data=await PostsModel.find(query)
    console.log(query,"line no. 8")
    res.status(200).send({msg:"all prods", data})
})
postsRouter.post("/add", async(req,res)=>{
    const body=req.body;
    try {
        const data=new PostsModel(body);
        await data.save();
        res.send({msg:"data added",data})
    } catch (error) {
        console.log(error)
        res.send("error while adding",error)
    }
})

module.exports={postsRouter}