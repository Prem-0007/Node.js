const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

http.get('http://localhost:8080', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Response from server:', data);
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});

const htmlServer = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Welcome to the HTML Server!</h1><p>This is a simple HTML response.</p>');
});
const HTML_PORT = 8081;
htmlServer.listen(HTML_PORT, () => {
    console.log(`HTML Server is running on http://localhost:${HTML_PORT}`);
});

http.get('http://localhost:8081', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Response from HTML server:', data);
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
