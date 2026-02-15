import { createServer } from 'http';

const PORT = 8080;

const users = [
  { id: 1, name: 'Prem' },
  { id: 2, name: 'Kas' },
  { id: 3, name: 'bot' },
];


// Logger Middleware


const logger = (req, res, next) =>
{
console.log(`${req.method} ${req.url}`);
next();
}
// JSON Middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
   res.write(JSON.stringify(users));
    res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
   const id = req.url.split('/')[3];
      console.log(id);
        const user = users.find(u => u.id === parseInt(id));
          if (user) {
   
      res.write(JSON.stringify(user));
 
    }
    else{
        res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }) );
    }
         res.end();
}

// Route handler for POST  /api/users


const createUserHandler = (req, res) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};
// Not Found Handler
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
        res.write(JSON.stringify({ message: 'User not found' }) );
}
const server = createServer((req, res) => 
  logger(req, res, () => {
  jsonMiddleware(req, res, () => {
    if (req.url==='/api/users' && req.method === 'GET') {
      getUsersHandler(req, res);
    }
    else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
      getUserByIdHandler(req, res);
    }
    else if (req.url==='/api/users' && req.method === 'POST') {
      createUserHandler(req, res);
    }
    
    else {
      notFoundHandler(req, res);
    }

  });
   
})

);


server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
