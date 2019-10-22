const express=require('express');
const postHandler=require('./routes/post');
const mongoose=require('mongoose');
const app=express();
//following parameter is copied from mongatlas
//go to cluster
//click on connect 
//connect on myapplication

mongoose.connect('mongodb+srv://nitesh:samitarai94@myclus-r6ysx.azure.mongodb.net/test?retryWrites=true&w=majority',
()=>console.log("connect"));

app.get('/',(req,res)=>{
    res.send("test");
})

//creating a middleware to route
app.use('/posts',postHandler);
app.listen(4000,()=> console.log("server running"));