const express = require('express')
const app = express()
const PORT = 5000

app.get('/' , (req , res) => {
    res.send("Hello My Name is Mutee")
})


app.listen(PORT , ()=>{
    console.log("Running on Port 5000")
})