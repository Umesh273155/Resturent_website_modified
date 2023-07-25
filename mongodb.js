const express=require("express");
const useModel=require(""); 
const app=express();
const port=5000;
const url="" ;
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifieldtopology:true
})
const connection=mongoose.connection
