const mongoose = require('mongoose')
require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]);

const connectionString = process.env.DBCONNECTION

mongoose.connect(connectionString).then(res=>{
    console.log("Database connection successfull");  
}).catch(error=>{
    console.log("Database connection Failed");
    console.log(error);
})