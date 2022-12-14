const http=require('http')
let fs=require('fs')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    let stream=fs.createReadStream('index.html')
    stream.pipe(res)
    // res.write('<h1>Hello World</h1>')
    // res.write('<p>This is loki... </p>')
}).listen(5000)