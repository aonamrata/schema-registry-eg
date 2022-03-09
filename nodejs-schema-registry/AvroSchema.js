const { SchemaRegistry } = require('@kafkajs/confluent-schema-registry')
const { Agent } = require('https');


const run = async () => {
    let registry = null;
    // TRY 1
    registry = new SchemaRegistry({ host: 'https://dev-schema-registry.xxxxx.io' });
    /**\
     * ResponseError: Confluent_Schema_Registry - Error, status 403: <html>
        <head><title>403 Forbidden</title></head>
        <body>
        <center><h1>403 Forbidden</h1></center>
        </body>
        </html>

            at D:\graphqlws\kafka-schema-registry-eg\node_modules\@kafkajs\confluent-schema-registry\dist\api\middleware\errorMiddleware.js:17:37
            at processTicksAndRejections (internal/process/task_queues.js:95:5) {
        status: 403,
        unauthorized: false,
        url: 'get https://dev-schema-registry.xxxxx.io/subjects/event.nr.fileIngestion-value/versions/latest'
        }
     */

    // // TRY 2
    // registry = new SchemaRegistry({
    //     host: 'https://dev-schema-registry.xxxxx.io',
    //     // specifying below agent explicitly helped us
    //     agent: new Agent({
    //         rejectUnauthorized: false
    //     })
    // });
    /**
     * ResponseError: Confluent_Schema_Registry - Error, status 403: <html>
        <head><title>403 Forbidden</title></head>
        <body>
        <center><h1>403 Forbidden</h1></center>
        </body>
        </html>

            at D:\graphqlws\kafka-schema-registry-eg\node_modules\@kafkajs\confluent-schema-registry\dist\api\middleware\errorMiddleware.js:17:37
            at processTicksAndRejections (internal/process/task_queues.js:95:5) {
        status: 403,
        unauthorized: false,
        url: 'get https://dev-schema-registry.xxxxx.io/subjects/event.nr.fileIngestion-value/versions/latest'
        }
     */

    // TRY 3
    // registry = new SchemaRegistry({
    //     host: 'http://localhost:8081',
    // });
    /**
     * This works
        $ node AvroSchema.js
        result== 1
     */
    const result  = await registry.getLatestSchemaId('event.nr.fileIngestion-value');
    console.log('result==', result);



};


run()
    .then(() => {
        process.exit();
    })
    .catch((err) => {
        console.log(err);
        process.exit();
    });
