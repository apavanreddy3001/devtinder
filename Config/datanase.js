const mongoose = require("mongoose");

 const connetionDB =  async ()=>{
       await mongoose.connect(
        "mongodb+srv://ponereddy:Pavan123@cluster0.pmlbf.mongodb.net/devTinder"
       );
 }
module.exports = connetionDB;

