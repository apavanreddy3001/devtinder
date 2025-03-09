const express = require("express");
const app = express();
const route =require("./routes/routes");

app.use(express.json());

const connetionDB = require("./Config/datanase");
app.use(route);

connetionDB().then(()=>{
    console.log("The Database connetion is succussfully created ");   
    app.listen(5000,()=>{
        console.log("the server running the port 5000");
    })
 }).catch((err)=>{
    console.log("while connectiong to the database we got the error");
 });



