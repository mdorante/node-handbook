const args = require("minimist")(process.argv.slice(2));

// with minimist, we can read --name=value arguments as well as positional arguments

// args: --env=prod hi buy
console.log(args); // { _: [ 'hi', 'buy' ], env: 'prod' }
console.log(args["_"]); // [ 'hi', 'buy' ]
console.log(args["env"]); // prod
