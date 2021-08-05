const express = require("express");
const mongoose = require("mongoose");
const CourseModel = mongoose.model("Course")


const router = express.Router();
router.get("/add",(req, res)=>{
    res.render("add-course");
})
router.post("/add",(req, res)=>{
    //Setting
    var course = new CourseModel();
   course.MovieName = req.body.MovieName;
   course.Name = req.body.Name;
   course.CinemaName = req.body.CinemaName;
   course.NoofTicket  = req.body.NoofTicket;
   course.TotalAmount = req.body.TotalAmount;
   course.CostPerTicket = req.body.CostPerTicket;
  course.save((err, doc)=>{
      if(!err)
      {
          res.redirect("/course/add")

      }
      else{
          res.send("ERROR");
      }

  })
   // res.render("add-course");
})

router.get("/list",(req, res)=>{
    

    


    // getting
    CourseModel.find((err, docs)=>{
        if(!err){
            console.log(docs);
            res.render("list",{data : docs})

        }
        else{

            res.send("Error")
        }

    });
  //  res.send("Course Controller")
});
module.exports =router;