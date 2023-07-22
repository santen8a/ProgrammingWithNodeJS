const http = require("http");
const fs = require('fs');
const routeMap={
    "/":"views/index.html",
    "/home":"views/home.html"
}

const getViewUrl = (url) => {
    return `views${url}.html`;
}


const app = http.createServer((req,res)=>{
    
    console.log(`Reading live data with request from:\nURL:${req.url}`);
    fs.readFile(getViewUrl(req.url),(error,data)=>{
        if(error){           
            res.write("<h1>Sorry, error in file read system</h1>")
        }else{
            res.writeHead(200,{
                "Content-Type":"text/html"
            })
            res.write(data)
        }
        res.end();
    })

});

app.listen(3000);
console.log("Server live at port 3000!");
