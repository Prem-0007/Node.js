/*# Run a JavaScript file
node app.js

# Run with additional arguments
node app.js arg1 arg2

# Run in watch mode (restarts on file changes)
node --watch app.js


Using the REPL
> const name = 'Node.js';
> console.log(`Hello, ${name}!`);
> .help // Show available commands
> .exit // Exit REPL


*/
// args.js
console.log('All arguments:', process.argv);
console.log('First argument:', process.argv[2]);
console.log('Second argument:', process.argv[3]);

// Example usage:
// node args.js hello world
// Output:
// All arguments: ['/path/to/node', '/path/to/args.js', 'hello', 'world']
// First argument: hello
// Second argument: world



// env.js
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('Custom variable:', process.env.MY_VARIABLE);
console.log('Database URL:', process.env.DATABASE_URL || 'Not set');

// Example usage with environment variables:
// NODE_ENV=production MY_VARIABLE=test node env.js
/*
Set Environment Variables
# Set environment variables when running
NODE_ENV=production MY_VARIABLE=test node env.js


Basic Debugging Commands
# Start with inspector (listens on default port 9229)
node --inspect app.js

# Break on first line of application
node --inspect-brk app.js

# Specify a custom port
node --inspect=9222 app.js

# Enable remote debugging (be careful with this in production)
node --inspect=0.0.0.0:9229 app.js

Node Version Manager (nvm)
# Install and use different Node.js versions
nvm install 18.16.0 # Install specific version
nvm use 18.16.0 # Switch to version
nvm ls # List installed versions
npm (Node Package Manager)
# Common npm commands
npm init # Initialize a new project
npm install # Install dependencies
npm update # Update packages
npm audit # Check for vulnerabilities

Basic Flags
# Show Node.js version
node --version # or -v

# Show V8 version
node --v8-options

# Show command-line help
node --help
Runtime Behavior
# Check syntax without executing
node --check app.js

# Show stack traces for warnings
node --trace-warnings app.js

# Set max memory (in MB)
node --max-old-space-size=4096 app.js

# Preload a module before execution
node --require dotenv/config app.js
Performance and Optimization
# Enable ES module loader
node --experimental-modules app.mjs

# Enable experimental features
node --experimental-repl-await

# Enable experimental worker threads
node --experimental-worker
*/
