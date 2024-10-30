const express = require("express")
const cors = require("cors")
const path = require("path")
const foodRouter = require("./router/food_router.js")
require("dotenv").config()
app = express()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname  ,"views"))
app.use(express.urlencoded({extended:true}))
app.use(foodRouter)

app.use(express.static(path.join(__dirname , "public")))
app.listen(PORT , () => {
  console.log("Server is running on the http://localhost:" + PORT);
})