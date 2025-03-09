const expres = require("express");
const Routes = expres.Router();
const  { isValidateUser}  = require("../middleware/admin");

const User= require("../Moduls/User");
const {encyptPassword} = require("../helpers/encypt");
const {userLogin} = require("../Controller/User");
Routes.route("/login").post(userLogin);

Routes.post("/User/addUser", async(req,resp,next)=>{  
    let {firstName,lastName,gender,emailId,password,age,phoneNumber,about,skill} = req.body;
 
        try {
            /**
               *  converting to password to encrypt 
               */
            const newPass= await encyptPassword(req.body.password);
            const user = await new User({
                firstName,
                lastName,
                gender,
                emailId,
                password:newPass,
                age,
                phoneNumber,
                about,
                skill}).save();
            resp.send("the User Added the successfully !"); 
        } catch (error) {
           resp.status(500).send("the User Details are not added, please again"+error.message); 
        }
        
      
              
});

Routes.get("/User/getUserDetails",async(req,resp,next)=>{
    try {
         const userDetails = await User.find({});
        resp.send(userDetails);
     } catch (error) {
        resp.status(500).send("the data not avilable please check  "+error.message());
     }
})
Routes.get("/User/user/:id",async(req,resp,next)=>{
 try {
    const id =req.params.id
     const user =await User.findById(id);
     resp.status(200).send(user);
} catch (error) {
    resp.status(400).send("something went wrong"+error.message);
}
});
Routes.patch("/User/updateUser/:id",async(req,resp,next)=>{
    try {
        const id = req.params.id;
        const userData = await User.findById({"_id":id});
                        await User.findByIdAndUpdate({"_id":id},req.body);
        resp.send("The user is Updated ");
    } catch (error) {
        resp.status(400).send("something went wrong"+error.message);
    }
})

//Routes.use("/admin",isValidateUser);

Routes.get("/admin/getUserDetails",(req,resp,next)=>{
    throw new Error("dshhsdhhsshfhd shfhsdfhh")
         resp.send("get the user details to admin ")
})
Routes.get("/admin/getUserDetails/:id",(req,resp,next)=>{
    resp.send("get the user details to admin  user ")
})

Routes.get("/getUserDetails",(req,resp,next)=>{
    resp.send("Testing ");
});

Routes.use("/",(err,req,resp,next)=>{
   if(err){
    resp.status(500).send("Something went to wrong ");
   }
})

module.exports = Routes;