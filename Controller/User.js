const Users = require("../Moduls/UserDetails");
const UserHelper = require("../helpers/validate");
const encryptHelper = require("../helpers/encypt");
/* Describ : the methos is used to get the user details By the email id and password 
       @Param 
          email,password
*/
exports.userLogin = async (req,resp,next)=>{
    let resultArr=[];
    const {emailId,password} = req.body;
    const loginValidate = UserHelper.userLoginValidate(emailId,password);
    if(loginValidate &&  loginValidate == true){
        try {
            const userLogindetails =  await Users.getUserLogin(emailId);
            console.log(userLogindetails[0].password);
            const userValidate= await   encryptHelper.deCyptPassword(password,userLogindetails[0].password);
            if(userValidate && userValidate == true){
                if(userLogindetails && userLogindetails.length>0){
                    let obj = {"message":"we got the login details ","data":userLogindetails};
                          resultArr.push(obj);
                     resp.status(200).json(resultArr);
                }else{
                  let obj = {"message":"we are unable to fetch user details ","data":userLogindetails};
                    resultArr.push(obj);
                    resp.status(400).json(resultArr);
                }
      
            }else{
                let obj = {"message":"we are unable to fetch user details ","data":[],"error":error.message};
                resultArr.push(obj);
                resp.status(400).json(resultArr);
            }        

          } catch (error) {
            let obj = {"message":"we are unable to fetch user details ","data":[],"error":error.message};
            resultArr.push(obj);
            resp.status(400).json(resultArr);
        }
    }else{
        let obj = {"message":"Plase enter the emailid/Password  ","data":[]};
        resultArr.push(obj);
        resp.status(400).json(resultArr);
    }    
}


