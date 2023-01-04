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

app.listen(5100,() => console.log(5100,"번 서버 열림"))