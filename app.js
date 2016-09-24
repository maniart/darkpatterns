import { Server as WSserver } from 'ws';
import { createServer } from 'http';
import express from 'express';

const app = express()
  .use(express.static(`${__dirname}/public`));

const server = createServer(app)
  .listen(9090);

const wsServer = new WSserver({ server });

wsServer.on('connection', (ws) => {
  console.log('___ ws server connection established');
  ws.on('close', () => {
    console.log('___ closing ws server connection');
  });
})
//
// wss.on('connection', function(ws) {
//   var id = setInterval(function() {
//     ws.send(JSON.stringify(process.memoryUsage()), function() { /* ignore errors */ });
//   }, 100);
//   console.log('started client interval');
//   ws.on('close', function() {
//     console.log('stopping client interval');
//     clearInterval(id);
//   });
// });
