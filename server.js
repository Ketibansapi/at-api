// import dependencies from npm
const Fastify = require('fastify');
const path = require('path');
const AutoLoad = require('fastify-autoload');
const uuidv4 = require('uuid/v4');


// create request ids
const createRequestId = () => uuidv4();
// create the server
const server = Fastify({
    ignoreTrailingSlash: true,
    logger: {
        genReqId: createRequestId,
        level: 'info'
    }
});


/* the following line is going to be removed in favor of
   simple multiple imports provided by 
   fastify-autoload 
*/
server.get('/', async function (request, reply) {
    return { hello: "World" }
  })

// start the server
server.listen(9000, (err) => {
    if (err) {
        server.log.error(err);
        console.log(err);
        process.exit(1);
    }
    server.log.info('Server Started');
});