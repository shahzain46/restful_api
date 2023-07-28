const express = require("express");
const mongoose = require("./config");
const faculty = require("./faculty");
const Faculty = require("./faculty");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());

// app.post('/signup', async (req,res,next)=>{

//     let data = new faculty(req.body)
//     let result = await data.save()
//     console.log(result)
//     res.send(result)
// });

app.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.pasword, 10, (err, hash) => {
    const faculty = new Faculty({
      username: req.body.username,
      pasword: hash,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
    });
    faculty
      .save()
      .then((Result) => {
        console.log(Result);
        res.status(200).json({
          new_user: Result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
        });
      });
  });
});

app.get("/", async (req, res, next) => {
  let result = await faculty.find();
  res.send(result);
});

app.get("/:id", async (req, res, next) => {
  console.log(req.params.id);
  let result = await faculty.findById(req.params.id);
  // console.log(result)
  res.send(result);
});

app.delete("/delete", async (req, res, next) => {
  // console.log(req.params)
  //     const facultyId = req.params.id
  //    const result = await faculty.deleteOne({_id:facultyId})
  // res.send(result)
  let facultyId = req.params.id;
  let result = await faculty.deleteOne({ _id: facultyId });
  res.send(result);
});

app.put("/:id", async (req, res, next) => {
  let result = await faculty.findByIdAndUpdate({ _id: req.params.id },
    {
      $set: {
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
      },
    }
  );

  res.send(result);
});

app.listen(3000, console.log("app is runing"));
