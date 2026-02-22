const http = require(`http`);
const server = http.createServer((req,res) => {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(`<h1>Hello World</h1>`);
});

server.listen(8000, () => {
    console.log(`server is running on port 8000`);
})