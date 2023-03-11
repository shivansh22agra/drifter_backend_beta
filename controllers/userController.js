const userModel=require("../models/userModel");
const login=(async(req,res)=>{
const {username,phoneNo,}=req.body;
try{
    const existingUser=await userModel.findone({phoneNo:phoneNo});
    if(existingUser){
        res.status(400).json({message:"user already exists"});
    }
}
catch(err){
    res.status(404).json({message:"user not found"});
}
});
module.exports={login};