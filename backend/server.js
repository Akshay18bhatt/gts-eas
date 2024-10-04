/*                 Module Imports               */
const express= require("express");
const app = express();
const cors =  require("cors")
require("dotenv").config();

/*                  DB Connection            */
const db= require('./dbConnection');

/*                 Constants                   */
const port= process.env.PORT || 8000


/*                  File Imports                */
const agreementRouter = require("./Routers/agreementRouter");


// global middleware
app.use(cors({
    origin:["https://gts-eas.vercel.app"],
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*                  Router pipeline                 */
app.get("/",(req,res)=>res.send({
    Hello: "It is working...Relax!"
}))
app.use("/gts-agreement",agreementRouter)



app.listen(port, ()=>{
    console.log("server is up...bro");
    
})