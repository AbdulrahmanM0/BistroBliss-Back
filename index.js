const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Menu = require("./models/Menu")
mongoose
.connect('mongodb+srv://abdulrahman:abdulrahmanmohammed20@bistrobliss.xpyhz2h.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("connected suc"))
.catch(e=>console.log("error with data base" , e))

// 
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hellow")
})

// app.put("/menu/change",(req,res)=>{
//     res.send("menu")
// })

app.post("/menu" , async (req,res)=>{
    const menu = new Menu()
    const reqmenu = req.body
    res.json(reqmenu)

    console.log(reqmenu)

    // await menu.save()
    res.send()
})

app.get("/menu" , async (req,res)=>{
    const menu = await Menu.find();
    res.json(menu)
})

app.listen(3000 , ()=>{ console.log('im there')})