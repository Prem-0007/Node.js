import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
// Get current path

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
    /*
    console.log(`Received request for ${req.url}`);
    console.log(`Request method: ${req.method}`);
*/
  // check if GET request
  try{
    if(req.method === 'GET'){
        let filepath;
        if(req.url === '/'){
            filepath = path.join(__dirname, 'public', 'index.html');
    }
    else if(req.url === '/about'){
        filepath = path.join(__dirname, 'public', 'about.html');
  }
  else{
    throw new Error('Page not found');
  }
  const data =await fs.readFile(filepath);
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();
}

else{
    throw new Error('Invalid request method');
}
  }
  catch(error){
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }

 /*
    try{
        if(req.method === 'GET'){
          
    if(req.url === '/')
{

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    }
    else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello API' }));
}

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.end('<h1>404 Not Found</h1>');
    }
    }
    else {
        throw new Error('Error processing request');
    }
    }
    catch(error){
     res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
    }
 
*/
    
});
    /*
    res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end('<h1>Hello World from Kasthuri Bot </h1>')});
        */
    /* res.write("hello world from nodejs");
    */
 //  res.setHeader('Content-Type', 'text/html');

  // res.statusCode=404;
  /*
  res.writeHead(500, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({message: 'Server Error'}));
});
*/
/*
res.end('<h1>hello world from nodejs</h1>');
});

*/

server.listen(PORT, () => {console.log(`Server running on port ${PORT}`)}
);
