const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(logger("dev"));
app.use(routes)
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//db defined here:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/houses")

// Define API routes here

// app.post("/signup", (req,res)=> {
//   const {email,password} = req.body;

//   const salt = bcrypt.genSalt.Sync(10);
//   const encryptedPassword = bcrypt.hashSync(password,salt);

//   User.init()
//   .then(()=>{
//     db.User.create({
//       email,
//       password: encryptedPassword
//     })
//     .then(()=>{
//       res.json({
//         message: "user is created"
//       })
//       .catch(()=>{
//         res.json({
//           message: "opps their is an error"
//         })
//       })
//     })
//     .catch(()=>{
//       res.json({
//         message: "internal error"
//       })
//     })
// })
app.post("/submit", function(req, res) {
  User.create(req.body)
  .then(function(dbUser) {
    res.json(dbUser);
  })
  .catch(function(err) {
    res.json(err);
  });
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
