const mongoose = require("mongoose");

var CourseSchema = new mongoose.Schema({
    Name :{
        type : String

    },
    MovieName : {
        type : String
        

    },
    CinemaName : {
        type : String
        
    },
    NoofTicket : {
        type : String
       
    },
    TotalAmount : {
        type : String
        
    },
    CostPerTicket : {
        type : String

    },
});

mongoose.model("Course",CourseSchema)