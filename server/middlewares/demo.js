const check=(req,res,next)=>{
    const {num}=req.body
    if(num==4){
        next()
    }else{
        res.send("tata bye bye")
    }
}
module.exports= check