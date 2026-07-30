const express = require('express')
const app = express()
const PORT = 4000

app.get('/' , (req , res) =>{
      res.send("My Name is Mutee Ur Rehman I am from Islamabad Pakistan")
})


app.get('/login' , (req , res) => {
    res.send("Please Login")
})


app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
}) 