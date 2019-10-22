const mongoose=require('mongoose');
const Postschema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:String
})
//exporting the model 
module.exports=mongoose.model('post',Postschema);
