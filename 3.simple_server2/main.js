const port = 3000;
const http = require('http')
// const httpStatus = require("http-status-codes")

const app = http.createServer((request,response)=>{
   console.log(request.method);
   console.log(request.url);
   console.log(request.headers);

});

app.listen(port);
console.log(`The server is listening and live at port:${port}`);