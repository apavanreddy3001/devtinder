const joi = require("joi");

exports.userLoginValidate = (emailId,password)=>{
   if((emailId  && emailId !="") && (password && password !=="")){
    return true
   }else{
       return false;
   }
}