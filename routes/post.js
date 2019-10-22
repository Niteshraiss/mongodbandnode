const express=require('express')
const router=express.Router()
const postmodel=require('../model/postmodel');
//importing from foldel model
router.use(express.json())
router.get('/',(req,res)=>{
    res.send("posts")
})

router.post('/',(req,res)=>{
    const post=new postmodel({
        title:req.params.title,
        content:req.params.content
    })
    post.save().then(data=>res.send(data))
})

//exporting this file
module.exports=router