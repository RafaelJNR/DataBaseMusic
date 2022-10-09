const express = require("express");
const cors = require("cors");

const app = express();

//parse reques of content-type -aplication/json
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

//parse request of content-type - aplication www-form-urlencoded
app.use(express.urlencoded({extended: true}));

const db = require("./models");
//normal use. Dont delete the database table
db.sequelize.sync();

//In development, you may need to drop the existing tables and re-sync database

/*
db.sequelize.sync({force: true}).then(() => {  
   console.log("Drop and resync db.");                                   
});
*/

//simple route
app.get("/", (req, res)=>{
    res.json({message: "welcome to Music application"});
});

require("./routes/group.routes")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
