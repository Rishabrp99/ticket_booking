const Connectiion = require("./model");
const express = require("express");
const application =express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const { appendFile } = require("fs");
const CourseController = require("./controllers/courses");

application.use(express.static('public'));




application.use(express.urlencoded ({
    extended : true
}));
application.set('views', path.join(__dirname,"/views/"));

application.engine("hbs", expressHandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname + "/views/layouts"
}));
application.set("view engine", "hbs")

application.get("/",(req, res)=>{
   // res.send('<h1>ANEESH RULES</h1>')
   res.render("index",{})
})

application.use("/course", CourseController)

application.listen("3000",()=>{
    console.log("Server Started");

});