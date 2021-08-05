const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://rishab:root@cluster0.h1bz2.mongodb.net/root?retryWrites=true&w=majority",{ 
    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true
},(error)=>{
    if (!error)
    {
        console.log("Connectiion Successful");

    }
    else{
        console.log("Error");
    }
});

const Course = require("./course.model");
