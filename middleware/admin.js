const isValidateUser = (req,resp,next)=>{
    console.log("user is authetiated ");
    const token = "qwe";
    const isValidateUser = token === "qwe";
    if(!isValidateUser){
        resp.send("<h2>the is user is not validate !</h2>");
    }else{
        next();
    }
}
module.exports = {
    isValidateUser
}