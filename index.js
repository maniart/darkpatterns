import { Server as WSserver } from 'ws';
import { createServer } from 'http';
import express from 'express';

const app = express()
  .use(express.static(`${__dirname}/public`))
  .use('/bundle.js', express.static(`${__dirname}/public/build/bundle.js`));

const server = createServer(app)
  .listen(7878, () => {
    console.log(`
      App is running on 7878
    `);
  });

const wsServer = new WSserver({ server });

wsServer.on('connection', (ws) => {
  console.log('___ ws server connection established');
  ws.on('close', () => {
    console.log('___ closing ws server connection');
  });
});
