const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()

app.use(express.json(), cookieParser())

app.get("/", (req,res) => {
  res.send("home page")
})

app.get("/login", (req,res) => {
  res.send("login page")
})

app.get("/profile", (req,res) => {
  res.send("profile page")
})

app.listen(3000,() => console.log(3000,"번 서버 열림"))