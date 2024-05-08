const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('ebook/data/db.json');

// Middleware to parse JSON body
server.use(jsonServer.bodyParser);

// Apply authentication middleware
server.db = router.db;
server.use(auth);

// Use the JSON Server router
server.use(router);

// Start server
server.listen(8000, () => {
  console.log('JSON Server is running with authentication middleware on port 8000');
});