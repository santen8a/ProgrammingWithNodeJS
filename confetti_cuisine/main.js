const port =3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const router = require('./router');
const contentType = require('./contentTypes');
const utils = require('./utils');

router.get("/",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.html);
    utils.getFile("views/index.html",res);
})

router.get("/courses.html",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.html);
    utils.getFile("views/courses.html",res);
})

router.get("/contact.html",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.html);
    utils.getFile("views/contact.html",res);
})

router.post("/",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.html);
    utils.getFile("views/thanks.html",res);
})

router.get("/graph.png",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.png);
    utils.getFile("public/images/graph.png",res);
})

router.get("/people.png",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.png);
    utils.getFile("public/images/people.png",res);
})

router.get("/product.png",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.png);
    utils.getFile("public/images/product.png",res);
})

router.get("/confetti_cuisine.png",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.png);
    utils.getFile("public/images/confetti_cuisine.png",res);
})

router.get("/bootstrap.js",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.js);
    utils.getFile("public/images/bootstrap.js",res);
})

router.get("/confetti_cuisine.js",(req,res)=>{
    res.writeHead(httpStatus.OK,contentType.js);
    utils.getFile("public/images/confetti_cuisine.js",res);
})


http.createServer(router.handle).listen(port);

console.log(`Server is listening on port ${port}`);