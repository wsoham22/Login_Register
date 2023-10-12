const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

mongoose
    .connect("mongodb+srv://soham:<PASSWORD>@cluster0.ae3qzt5.mongodb.net/Users", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database connected");
    })
    .catch((error) => {
        console.error("Database connection error:", error);
    });

const userModel = require('./models/users'); // Adjust the path to your file as needed
//login check
app.post('/login',(req,res)=>{
    const {email,password} = req.body;
    userModel.findOne({email:email}).then(console.log(working)).catch(err=>{console.log(err)})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.status(404).json("Incorrect Password!Please try again!");
            }
        }
        else{
            res.json("No record existed");
        }
    })
})
app.post('/register', (req, res) => {
    userModel.create(req.body)
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.json(err);
        });
});

app.listen(3002, () => {
    console.log("Server is running on port 3002!");
});
