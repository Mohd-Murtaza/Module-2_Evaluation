require("dotenv").config();
const cors = require("cors")
const express=require("express");
const cookieParser = require("cookie-parser");
const { connection } = require("./db");
const { userRouter } = require("./routes/userRoutes");
const { auth } = require("./middlewares/authMiddleware");
const { productRouter } = require("./routes/productRoutes");
const PORT=process.env.PORT
const app=express();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins= ["http://localhost:5173","",""]
app.use(cors({
    origin:(origin,callback)=>{
        console.log("Origin is", origin);
        if(allowedOrigins.indexOf(origin)!==-1||!origin){
            console.log("Origin allowed");
            callback(null,true)
        }
        else{
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials:true
}));
app.use("/user", userRouter);
app.use("/product", productRouter);



app.use((req,res)=>{
    res.status(404).send("this is invalid request!")
});
app.listen(PORT, async(req,res)=>{
    try {
        await connection
        console.log(`server is running onn this port=>${PORT}, db is also connected`);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})