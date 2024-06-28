import http from 'http'
const PORT = process.env.PORT;
const server = http.createServer(
       (req, res)=>{
    //     res.setHeader('Content-Type','text/HTML')
    //     res.end('<h1>Hello World</h1>')
    //      res.write()
    //      res.statusCode=200
    res.writeHead(200,{'Content-Type':'application/json'})
    res.end(JSON.stringify({message : 'Hello WOrld'}))
}

);

server.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
}
);


