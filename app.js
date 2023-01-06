const express = require("express")
const cors = require("cors")

const app = express()

let corsOptions = {
  origin: 'http://localhost:5000',
  credentials: true
}

app.use(cors(corsOptions))

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/html/home.html")
})

app.get("/profile", (req,res) => {
  res.sendFile(__dirname + "/html/profile.html")
})

app.get("/login", (req,res) => {
  res.sendFile(__dirname + "/html/login.html")
})

app.get("/signup", (req,res) => {
  res.sendFile(__dirname + "/html/signup.html")
})

app.get("/write", (req,res) => {
  res.sendFile(__dirname + "/html/write.html")
})

app.get("/articles/:id", (req,res) => {
  res.sendFile(__dirname + "/html/modify.html")
})

app.listen(5100,() => console.log(5100,"번 서버 열림"))