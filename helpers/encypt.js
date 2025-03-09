const bcrypt = require("bcrypt");

exports.encyptPassword = async (password)=>{
    return bcrypt.hash(password,8);
}
exports.deCyptPassword = async(password,hashId)=>{
   return bcrypt.compare(password,hashId);

}

