var jackrabbit = require('../..');

var rabbit = jackrabbit(process.env.RABBIT_URL);
var exchange = rabbit.direct();
var hello = exchange.queue({ name: 'hello' });

exchange.publish('Hello World!', { key: 'hello' });
exchange.on('drain', process.exit);
