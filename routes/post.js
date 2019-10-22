const express=require('express')
const router=express.Router()

const PostModel=require('./model/postmodel');
//importing from foldel model

router.get('/',(req,res)=>{
    res.send("posts")
})
router.post('/',(req,res)=>{
    const post=new PostModel({
        title:req.params.title,
        content:req.params.content
    })
})
//exporting this file
module.exports=router