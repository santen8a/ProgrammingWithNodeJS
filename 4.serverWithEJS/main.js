const port = 3000;
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Express!!!</h1>")
})

app.get("/vegetable/:veggieName",(req,res)=>{
    let vegiName = req.params.veggieName;
    res.send(`you tried to come in looking for vegetable ${vegiName}`)
})

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
app.listen(port);