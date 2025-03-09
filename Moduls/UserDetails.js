const mongoose = require("mongoose");
const User = require("../Schema/User");
class UserMode {
    constructor(){
       //console.log("Testing .......");
    }
    /* Describ : the methos is used to get the user details By the email id and password 
      @Param 
         email,password
    */
     static  async getUserLogin(emailId){
       
           const userLoginDetails=await  User.find({"emailId":emailId});
           return  userLoginDetails;
   }
}
module.exports = UserMode;