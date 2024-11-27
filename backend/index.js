const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

let username = "Aasia"
let password = 123

// app.use(express.urlencoded({extended:false}))//middleware function for form tag use post method.
app.use(express.json())//middleware function for post method

//app.get("/login", (req, res) => {
app.post("/login", (req, res)=>{
 //   console.log(req.query.username) //This path is for get method
 //   console.log(req.query.password) 

  console.log(req.body.username) //This path is for post method.
  console.log(req.body.password) 

    //if (req.query.username === username && Number(req.query.password) === password)
    if(req.body.username === username && Number(req.body.password) === password)
    {
        res.status(200).send(true)
    } else {
        res.status(404).send(false)
    }
})

app.listen(5000, () => {
    console.log("Server Begins ...")
})
