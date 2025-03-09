const mongoose = require("mongoose");
//console.log(mongoose);
const userSchema =  new  mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
    },
    gender:{
        type:String,
    },
    emailId:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true,
        max:11,
        unique:true
    }, 
    photoUrl:{
        type:String,
        default:"https://www.vecteezy.com/vector-art/47299992-user-icon-symbol-design-illustration"
    }, 
   about:{type:String},
   skill:{type:String,
    default:"this is default about of the user "
   }
});
//console.log(userSchema);
const Users =  mongoose.model("User",userSchema);
module.exports = Users;