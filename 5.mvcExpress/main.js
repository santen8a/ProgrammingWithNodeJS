const port = 3000;
const express = require('express');
const homeController = require("./controllers/homeController")

const errorController = require("./controllers/errorController")
const layouts = require('express-ejs-layouts')


const app = express();

app.set("view engine","ejs")
app.use(layouts)
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Express!!!</h1>")
})

app.get("/name/:myName",homeController.respondWithName)

// app.get("/vegetable/:veggieName",(req,res)=>{
//     let vegiName = req.params.veggieName;
//     res.send(`you tried to come in looking for vegetable ${vegiName}`)
// })

app.get("/items/:vegetable",homeController.sendReqParam)

app.use(
    express.urlencoded({
        extended:false
    })
)
app.use(express.json())

app.post("/",(req,res)=>{
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successfull!!!")
});


app.use(errorController.logErrors)


app.listen(port);